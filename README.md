# OrizzonteScuola News Scraper

This project is designed to automatically capture news articles from the website [OrizzonteScuola.it](https://www.orizzontescuola.it/), save them in JSON format, and optionally download images from the articles.

## Project Structure

- `scraper.py`: Main script that scrapes news headlines, links, and content, then saves them to `data.json`.
- `pagina.txt`: Temporary text file used to collect raw news content.
- `scraper2.py`: Secondary script that reads news data and attempts to download related images into the `immagini/` directory.
- `immagini/`: Folder where images from the articles are stored.
- `.github/workflows/`: Contains a GitHub Actions workflow that runs the scraping process every 6 hours.

## Automation

The project uses **GitHub Actions** to automatically run the scraping process every 6 hours. The workflow is scheduled to keep the data updated with no manual intervention required.

## Output

- `data.json`: Contains the structured list of scraped news articles in JSON format.
- `immagini/`: Directory containing any images downloaded from the articles.

## Requirements

Make sure you have the following installed:

- Python 3.x
- Required Python libraries (e.g., `requests`, `beautifulsoup4`, `json`, etc.)

You can install dependencies using:

```bash
pip install -r requirements.txt
