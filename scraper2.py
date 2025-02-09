import time
import json
import requests
from bs4 import BeautifulSoup
import os

# La tua API Key di ScraperAPI
api_key = '7c6778d034e0c8d4e75558693e631511'

# URL del sito che desideri fare scraping
target_url = 'https://www.orizzontescuola.it/'

# Costruisci l'URL per ScraperAPI
scraper_api_url = f'http://api.scraperapi.com?api_key={api_key}&url={target_url}'

# Fai la richiesta per ottenere il contenuto della pagina
response = requests.get(scraper_api_url)
html_content = response.text
print("Pagina caricata tramite ScraperAPI. Estrazione del contenuto HTML...")

# Usa BeautifulSoup per analizzare il contenuto HTML
soup = BeautifulSoup(html_content, "html.parser")

# Trova tutti gli articoli nella pagina
articles = soup.find_all("article")

# Lista per raccogliere i dati degli articoli
articles_data = []

# Crea la cartella per salvare le immagini, se non esiste
if not os.path.exists("immagini"):
    os.makedirs("immagini")

# Contatore per i nomi delle immagini
img_counter = 1

# Estrai i dati degli articoli e salva le immagini
for article in articles:
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
        
        # Se c'è un link dell'immagine, scaricala
        if image_link != "N/A":
            try:
                # Scarica l'immagine
                img_response = requests.get(image_link)
                img_name = f"immagini/img{img_counter}.jpg"  # Nome del file immagine
                with open(img_name, "wb") as img_file:
                    img_file.write(img_response.content)
                img_counter += 1
                image_link = img_name  # Assegna il nome dell'immagine nel JSON
            except Exception as e:
                print(f"Errore nel download dell'immagine: {e}")
                image_link = "Errore nel download"
        
        # Aggiungi i dati all'elenco per il salvataggio in formato JSON
        articles_data.append({
            "category": category,
            "title": title,
            "link": link,
            "date": date,
            "time": time,
            "image_link": image_link  # Aggiungi il nome dell'immagine
        })

# Salva i dati degli articoli nel file JSON
with open("data.json", "w", encoding="utf-8") as json_file:
    json.dump(articles_data, json_file, indent=4, ensure_ascii=False)

# Messaggio finale per indicare che i dati sono stati salvati correttamente
print("I dati sono stati estratti e salvati nel file 'data.json'.")
