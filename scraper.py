import time
import json
import undetected_chromedriver.v2 as uc  # Usa undetected_chromedriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

# Imposta le opzioni di Chrome per l'esecuzione in modalità headless (senza interfaccia grafica)
chrome_options = Options()
chrome_options.add_argument("--no-sandbox")  # Ottimizzazione per ambienti con restrizioni di sicurezza
chrome_options.add_argument("--disable-dev-shm-usage")  # Risolve un problema con la memoria nei container
chrome_options.add_argument("--headless")  # Esegui senza finestra grafica
chrome_options.add_argument("--disable-gpu")  # Disabilita la GPU, non necessaria in modalità headless
chrome_options.add_argument("--start-maximized")  # Avvia il browser a schermo intero
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")  # Imposta un user-agent personalizzato per simulare un browser

# Avvia il WebDriver di Chrome con le opzioni configurate utilizzando undetected-chromedriver
print("Avvio del browser...")
driver = uc.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

# URL della pagina che vogliamo analizzare
url = "https://www.orizzontescuola.it/"

# Carica la pagina
print(f"Caricamento della pagina: {url}")
driver.get(url)

# Aspetta che la pagina sia completamente caricata
time.sleep(5)

# Ottieni il codice HTML della pagina
html_content = driver.page_source
print("Pagina caricata. Estrazione del contenuto HTML...")

# Chiudi il browser (non serve più)
driver.quit()

# Usa BeautifulSoup per analizzare il contenuto HTML
soup = BeautifulSoup(html_content, "html.parser")

# Trova tutti gli articoli nella pagina
articles = soup.find_all("article")

# Lista per raccogliere i dati degli articoli
articles_data = []

# Crea o apre il file "pagina.txt" per salvare i dettagli degli articoli
with open("pagina.txt", "w", encoding="utf-8") as file:
    for article in articles:
        # Cerca la categoria dell'articolo
        category_tag = article.find("span", class_="category")
        
        # Cerca il titolo e il link dell'articolo
        title_tag = article.find("h2", class_="entry-title")
        
        # Cerca la data e l'orario dell'articolo
        date_tag = article.find("time", class_="entry-date")
        
        # Verifica che tutti i dettagli siano presenti
        if category_tag and title_tag and date_tag:
            category = category_tag.get_text(strip=True)
            
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
            
            # Scrivi i dati nel file di testo
            file.write(f"Categoria: {category}\n")
            file.write(f"Titolo: {title}\n")
            file.write(f"Link: {link}\n")
            file.write(f"Data: {date}\n")
            file.write(f"Orario: {time}\n")
            file.write("-" * 80 + "\n")
            
            # Aggiungi i dati all'elenco per il salvataggio in formato JSON
            articles_data.append({
                "category": category,
                "title": title,
                "link": link,
                "date": date,
                "time": time
            })

# Salva i dati degli articoli nel file JSON
with open("data.json", "w", encoding="utf-8") as json_file:
    json.dump(articles_data, json_file, indent=4, ensure_ascii=False)

# Messaggio finale per indicare che i dati sono stati salvati correttamente
print("I dati sono stati estratti e salvati nei file 'pagina.txt' e 'data.json'.")
