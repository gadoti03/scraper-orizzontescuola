import time
import json
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

# Chiudi il browser (non serve più)
driver.quit()

# Usa BeautifulSoup per analizzare il contenuto HTML
soup = BeautifulSoup(html_content, "html.parser")

# Dati separati in base ai gruppi specificati
grouped_articles = {
    "group_1": [],
    "group_2": [],
    "group_3": [],
    "group_4": [],
    "group_5": [],
    "group_6": [],
    "group_7": [],
    "group_8": [],
    "group_9": [],
    "group_10": []
}

# Funzione per estrarre e raccogliere gli articoli
def extract_articles(group_name, articles_list):
    for article in articles_list:
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
            if category == "Corsi":
                continue  # Salta il ciclo corrente (l'articolo non verrà aggiunto)
            
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
            
            # Aggiungi i dati all'elenco per il gruppo
            articles_list.append({
                "category": category,
                "title": title,
                "link": link,
                "date": date,
                "time": time,
                "image_link": image_link  # Aggiungi il link dell'immagine
            })

# Estrai articoli dal primo gruppo: "newsblock two-col inevidenza"
group_1 = soup.find_all("div", class_="newsblock two-col inevidenza")
extract_articles("group_1", grouped_articles["group_1"])

# Estrai articoli dal secondo gruppo: "site-main" -> "newsblock one-col"
group_2 = soup.find_all("div", class_="site-main")
group_2 = [g for g in group_2 if g.find("div", class_="newsblock one-col")]
extract_articles("group_2", grouped_articles["group_2"])

# Estrai articoli dal terzo gruppo: "site-main" -> "two-col-blocks" -> "b-left"
group_3 = soup.find_all("div", class_="site-main")
group_3 = [g for g in group_3 if g.find("div", class_="two-col-blocks")]
group_3 = [g for g in group_3 if g.find("div", class_="b-left")]
extract_articles("group_3", grouped_articles["group_3"])

# Estrai articoli dal quarto gruppo: "site-main" -> "two-col-blocks" -> "b-right" -> "rssblock small-thumb"
group_4 = soup.find_all("div", class_="site-main")
group_4 = [g for g in group_4 if g.find("div", class_="two-col-blocks")]
group_4 = [g for g in group_4 if g.find("div", class_="b-right")]
group_4 = [g for g in group_4 if g.find("div", class_="rssblock small-thumb")]
extract_articles("group_4", grouped_articles["group_4"])

# Estrai articoli dal quinto gruppo: "site-main" -> "two-col-blocks" -> "b-right" -> "newsblock one-col inbreve"
group_5 = soup.find_all("div", class_="site-main")
group_5 = [g for g in group_5 if g.find("div", class_="two-col-blocks")]
group_5 = [g for g in group_5 if g.find("div", class_="b-right")]
group_5 = [g for g in group_5 if g.find("div", class_="newsblock one-col inbreve")]
extract_articles("group_5", grouped_articles["group_5"])

# Estrai articoli dal sesto gruppo: "site-main" -> "two-col-blocks" -> "b-right" -> "newsblock one-col chiediloalalla"
group_6 = soup.find_all("div", class_="site-main")
group_6 = [g for g in group_6 if g.find("div", class_="two-col-blocks")]
group_6 = [g for g in group_6 if g.find("div", class_="b-right")]
group_6 = [g for g in group_6 if g.find("div", class_="newsblock one-col chiediloalalla")]
extract_articles("group_6", grouped_articles["group_6"])

# Estrai articoli dal settimo gruppo: "noside desktop" -> "newsblock three-col diventareinsegnanti"
group_7 = soup.find_all("div", class_="noside desktop")
group_7 = [g for g in group_7 if g.find("div", class_="newsblock three-col diventareinsegnanti")]
extract_articles("group_7", grouped_articles["group_7"])

# Estrai articoli dall'ottavo gruppo: "noside desktop" -> "newsblock three-col notizieata"
group_8 = soup.find_all("div", class_="noside desktop")
group_8 = [g for g in group_8 if g.find("div", class_="newsblock three-col notizieata")]
extract_articles("group_8", grouped_articles["group_8"])

# Estrai articoli dal nono gruppo: "noside desktop" -> "newsblock three-col didattica"
group_9 = soup.find_all("div", class_="noside desktop")
group_9 = [g for g in group_9 if g.find("div", class_="newsblock three-col didattica")]
extract_articles("group_9", grouped_articles["group_9"])

# Estrai articoli dal decimo gruppo: "noside desktop" -> "newsblock three-col lettereinredazione"
group_10 = soup.find_all("div", class_="noside desktop")
group_10 = [g for g in group_10 if g.find("div", class_="newsblock three-col lettereinredazione")]
extract_articles("group_10", grouped_articles["group_10"])

# Salva i dati degli articoli nel file JSON
with open("data.json", "w", encoding="utf-8") as json_file:
    json.dump(grouped_articles, json_file, indent=4, ensure_ascii=False)

# Messaggio finale per indicare che i dati sono stati salvati correttamente
print("I dati sono stati estratti e salvati nel file 'data.json'.")
