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

# Imposta le opzioni di Chrome
chrome_options = Options()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--start-maximized")
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")

# Avvia il WebDriver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
print("Avvio del browser...")
driver.get(scraper_api_url)
time.sleep(5)
html_content = driver.page_source
driver.quit()

# Analizza il contenuto HTML
soup = BeautifulSoup(html_content, "html.parser")

# Dizionario per contenere i gruppi di articoli
articles_groups = {
    "inevidenza": soup.find_all("div", class_="newsblock two-col inevidenza"),
    "one_col": soup.select(".site-main .newsblock.one-col"),
    "b_left": soup.select(".site-main .two-col-blocks .b-left"),
    "rssblock": soup.select(".site-main .two-col-blocks .b-right .rssblock.small-thumb"),
    "inbreve": soup.select(".site-main .two-col-blocks .b-right .newsblock.one-col.inbreve"),
    "chiediloalalla": soup.select(".site-main .two-col-blocks .b-right .newsblock.one-col.chiediloalalla"),
    "diventareinsegnanti": soup.select(".noside.desktop .newsblock.three-col.diventareinsegnanti"),
    "notizieata": soup.select(".noside.desktop .newsblock.three-col.notizieata"),
    "didattica": soup.select(".noside.desktop .newsblock.three-col.didattica"),
    "lettereinredazione": soup.select(".noside.desktop .newsblock.three-col.lettereinredazione"),
}

# Funzione per estrarre i dettagli degli articoli
def extract_articles(articles):
    extracted_data = []
    for article in articles:
        title_tag = article.find("h2", class_="entry-title")
        date_tag = article.find("time", class_="entry-date")
        image_tag = article.find("img")
        category_tag = article.find("span", class_="category")
        
        if title_tag and date_tag and category_tag:
            category = category_tag.get_text(strip=True)
            if category == "Corsi":
                continue
            anchor_tag = title_tag.find("a")
            title = anchor_tag.get_text(strip=True) if anchor_tag else "N/A"
            link = anchor_tag["href"] if anchor_tag else "N/A"
            datetime_str = date_tag.get_text(strip=True)
            date, time = datetime_str.split(" - ", 1)
            image_link = image_tag["data-src"] if image_tag else "N/A"
            extracted_data.append({
                "category": category,
                "title": title,
                "link": link,
                "date": date,
                "time": time,
                "image_link": image_link
            })
    return extracted_data

# Estrarre gli articoli per ogni gruppo
grouped_articles = {group: extract_articles(articles) for group, articles in articles_groups.items()}

# Salva i dati nel file JSON
with open("data.json", "w", encoding="utf-8") as json_file:
    json.dump(grouped_articles, json_file, indent=4, ensure_ascii=False)

print("I dati sono stati estratti e salvati in 'data.json'.")
