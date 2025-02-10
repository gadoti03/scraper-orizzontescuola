import time
import json
import re
import requests
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup


# La tua API Key di ScraperAPI
api_key = '7c6778d034e0c8d4e75558693e631511'

# URL del sito che desideri fare scraping
target_url = 'https://www.orizzontescuola.it/'

# Costruisci l'URL per ScraperAPI
scraper_api_url = f'http://api.scraperapi.com?api_key={api_key}&url={target_url}'

# Imposta le opzioni di Chrome per l'esecuzione in modalità headless (senza interfaccia grafica)
chrome_options = Options()
chrome_options.add_argument("--no-sandbox")  # Ottimizzazione per ambienti con restrizioni di sicurezza
chrome_options.add_argument("--disable-dev-shm-usage")  # Risolve un problema con la memoria nei container
chrome_options.add_argument("--headless")  # Esegui senza finestra grafica
chrome_options.add_argument("--disable-gpu")  # Disabilita la GPU, non necessaria in modalità headless
chrome_options.add_argument("--start-maximized")  # Avvia il browser a schermo intero
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")  # Imposta un user-agent personalizzato per simulare un browser

# Avvia il WebDriver di Chrome con le opzioni configurate
print("Avvio del browser...")
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

# Usa ScraperAPI per caricare la pagina
print(f"Caricamento della pagina tramite ScraperAPI: {scraper_api_url}")
driver.get(scraper_api_url)

# Aspetta che la pagina sia completamente caricata
time.sleep(5)

# Ottieni il codice HTML della pagina
html_content = driver.page_source
print("Pagina caricata tramite ScraperAPI. Estrazione del contenuto HTML...")

# Usa BeautifulSoup per formattare il codice HTML
soup = BeautifulSoup(html_content, 'html.parser')
formatted_html = soup.prettify()  # Rende l'HTML più leggibile

# Salva il contenuto HTML formattato in un file di testo
with open("pagina_formattata.html", "w", encoding="utf-8") as file:
    file.write(formatted_html)  # Scrive l'HTML formattato

# Chiudi il browser (non serve più)
driver.quit()

# Usa BeautifulSoup per analizzare il contenuto HTML
soup = BeautifulSoup(html_content, "html.parser")

# Struttura aggiornata per articles_data, ora ogni gruppo è un oggetto con titolo e lista di articoli
articles_data = {
    "group_1": {"title": "Evidenza", "articles": []},
    "group_2": {"title": "Ultime Notizie Monocolonna", "articles": []},
    "group_3": {"title": "Ultime Notizie Colonna Sinistra", "articles": []},
    "group_4": {"title": "In Breve", "articles": []},
    "group_5": {"title": "Colonna Destra - Dillo a Lalla", "articles": []},
    "group_6": {"title": "Diventare Insegnanti", "articles": []},
    "group_7": {"title": "Notizie ATA", "articles": []},
    "group_8": {"title": "Didattica", "articles": []},
    "group_9": {"title": "Lettere in Redazione", "articles": []}
}

# Funzione per estrarre i dati degli articoli
def extract_article_data(article):
    # Cerca la categoria dell'articolo
    category_tag = article.find("span", class_="category")
    
    # Cerca il titolo e il link dell'articolo
    title_tag = article.find("h2", class_="entry-title")
    
    # Cerca la data e l'orario dell'articolo
    date_tag = article.find("time", class_="entry-date")
    
    # Cerca l'immagine dell'articolo (tag <img>)
    image_tag = article.find("img")
    
    # Verifica che tutti i dettagli siano presenti
    if category_tag and title_tag and date_tag:
        category = category_tag.get_text(strip=True)

        # Se la categoria è "Corsi", non aggiungere l'articolo al JSON
        if category.lower() == "corsi" or category.lower() == "sponsorizzato":  # Controllo case-insensitive
            return None

        # Verifica se c'è un link all'interno del titolo
        anchor_tag = title_tag.find("a")
        if anchor_tag:
            title = anchor_tag.get_text(strip=True)
            link = anchor_tag["href"]
        else:
            title = "N/A (Link non trovato)"
            link = "N/A"
        
        # Estrai la data e l'orario
        datetime_str = date_tag.get_text(strip=True)
        date, time = datetime_str.split(" - ", 1)  # Separiamo la data dall'orario
        
        # Estrai il link dell'immagine, se disponibile
        image_link = image_tag["data-src"] if image_tag else "N/A"
        
        return {
            "category": category,
            "title": title,
            "link": link,
            "date": date,
            "time": time,
            "image_link": image_link  # Aggiungi il link dell'immagine
        }
    return None

# Estrazione del primo gruppo-EVIDENZA
newsblock_1 = soup.find("section", class_="top-contents desktop")
if newsblock_1:
    articoli_1 = newsblock_1.find_all("article")
    for articolo in articoli_1:
        articles_data["group_1"]["articles"].append(extract_article_data(articolo))

# Estrazione del secondo gruppo-ULTIME NOTIZIE MONOCOLONNA
site_main_2 = soup.find("section", class_="site-main desktop")
if site_main_2:
    newsblocks_2 = site_main_2.find_all("div", class_=re.compile(r"^newsblock one-col.*"), recursive=False)    
    for newsblock_2 in newsblocks_2:
        articoli_2 = newsblock_2.find_all("article")
        for articolo in articoli_2:
            articles_data["group_2"]["articles"].append(extract_article_data(articolo))

# Estrazione del terzo gruppo-ULTIME NOTIZIE COLONNA SINISTRA
site_main_3 = soup.find("main", class_="site-main")
if site_main_3:
    two_col_blocks_3 = site_main_3.find("div", class_="two-col-blocks")
    if two_col_blocks_3:
        b_left_3 = two_col_blocks_3.find("div", class_="b-left")

        if b_left_3:
            articoli_3 = b_left_3.find_all("article")
            for articolo in articoli_3:
                articles_data["group_3"]["articles"].append(extract_article_data(articolo))

# Estrazione del quarto gruppo-COLONNA DESTRA-IN BREVE
site_main_4 = soup.find("main", class_="site-main")
if site_main_4:
    two_col_blocks_4 = site_main_4.find("div", class_="two-col-blocks")
    if two_col_blocks_4:
        b_right_4 = two_col_blocks_4.find("div", class_="b-right")
        if b_right_4:
            newsblocks_4 = b_right_4.find("div", class_="newsblock one-col inbreve")
            if newsblocks_4:
                articoli_4 = newsblocks_4.find_all("article")
                for articolo in articoli_4:
                    articles_data["group_4"]["articles"].append(extract_article_data(articolo))

# Estrazione del quarto gruppo-COLONNA DESTRA-DILLOALALLA
site_main_5 = soup.find("main", class_="site-main")
if site_main_5:
    two_col_blocks_5 = site_main_5.find("div", class_="two-col-blocks")
    if two_col_blocks_5:
        b_right_5 = two_col_blocks_5.find("div", class_="b-right")
        if b_right_5:
            newsblock_5 = b_right_5.find("div", class_="newsblock one-col chiediloalalla")
            if newsblock_5:
                articoli_5 = newsblock_5.find_all("article")
                for articolo in articoli_5:
                    articles_data["group_5"]["articles"].append(extract_article_data(articolo))

# Estrazione del sesto gruppo - DIVENTARE INSEGNANTI
site_main_6 = soup.find("section", class_="noside desktop")
if site_main_6:
    newsblock_6 = site_main_6.find("div", class_="newsblock three-col diventareinsegnanti")
    if newsblock_6:
        articoli_6 = newsblock_6.find_all("article")
        for articolo in articoli_6:
            articles_data["group_6"]["articles"].append(extract_article_data(articolo))

# Estrazione del settimo gruppo - NOTIZIE ATA
site_main_7 = soup.find("section", class_="noside desktop")
if site_main_7:
    newsblock_7 = site_main_7.find("div", class_="newsblock three-col notizieata")
    if newsblock_7:
        articoli_7 = newsblock_7.find_all("article")
        for articolo in articoli_7:
            articles_data["group_7"]["articles"].append(extract_article_data(articolo))

# Estrazione dell'ottavo gruppo - DIDATTICA
site_main_8 = soup.find("section", class_="noside desktop")
if site_main_8:
    newsblock_8 = site_main_8.find("div", class_="newsblock three-col didattica")
    if newsblock_8:
        articoli_8 = newsblock_8.find_all("article")
        for articolo in articoli_8:
            articles_data["group_8"]["articles"].append(extract_article_data(articolo))

# Estrazione del nono gruppo - LETTERE IN REDAZIONE
site_main_9 = soup.find("section", class_="noside desktop")
if site_main_9:
    newsblock_9 = site_main_9.find("div", class_="newsblock three-col lettereinredazione")
    if newsblock_9:
        articoli_9 = newsblock_9.find_all("article")
        for articolo in articoli_9:
            articles_data["group_9"]["articles"].append(extract_article_data(articolo))

# Salva i dati degli articoli nel file JSON
with open("data.json", "w", encoding="utf-8") as json_file:
    json.dump(articles_data, json_file, indent=4, ensure_ascii=False)

# Messaggio finale per indicare che i dati sono stati salvati correttamente
print("I dati sono stati estratti e salvati nel file 'data.json'.")
