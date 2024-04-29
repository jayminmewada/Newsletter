Daily News Newsletter Application

This is a Python application that scrapes data for the top 10 news of the day and creates a newsletter. The scraped data is stored in MongoDB, and the newsletter is sent out daily via email using JavaScript.

Features

	•	Scrapes data for the top 10 news of the day
	•	Stores scraped data in MongoDB
	•	Sends out a daily newsletter via email

Installation and Setup

	1.	Clone this repository to your local machine.
	2.	Install the required Python packages:

pip install -r requirements.txt

	3.	Make sure you have MongoDB installed and running on your machine. Update the MongoDB connection details in the Python script.
	4.	Set up a MongoDB database and collection to store the scraped news data.
	5.	Set up an email account for sending newsletters. Update the email configuration details in the JavaScript file.

Usage

	1.	Run the Python script to scrape data for the top 10 news of the day and store it in MongoDB.

python scrape_news.py

	2.	Run the JavaScript script to send out the daily newsletter.

node send_newsletter.js

	3.	The newsletter will be sent out daily to the configured email addresses.

Technologies Used

	•	Python: for web scraping and data manipulation
	•	MongoDB: for storing scraped news data
	•	JavaScript: for sending out the daily newsletter via email

Configuration

	•	MongoDB: Update the connection details in the Python script (scrape_news.py) to connect to your MongoDB database.
	•	Email: Update the email configuration details in the JavaScript file (send_newsletter.js) with your email server information and credentials.

License

MIT License

Author

Jaymin Mewada
