from email.mime import image
import json
from pydoc import classname
import cloudscraper
import bs4
from bs4 import BeautifulSoup
import requests
import numpy as np
import pymongo
from bson import json_util
import json
import re
import socket

client = pymongo.MongoClient("mongodb+srv://JayminMewada:Jaymin11@cluster0.pmfjkt0.mongodb.net/?retryWrites=true&w=majority")
db = client.test
mydb = client["email"]
mycol = mydb["WS"]
print(db)

#text1 = "iphone-14-gadgetsnow"
#text2 = "russia ukraine war"
#text3 = "asia cup 2022"
#url1 = 'https://google.com/search?q=' + text1
#url2 = 'https://google.com/search?q=' + text2
#url3 = 'https://google.com/search?q=' + text3

socket.getaddrinfo('localhost', 8000)

scraper = cloudscraper.create_scraper()

url="https://google.com/search?q=iphone-14-gadgetsnow"

headers = {
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'}

r = requests.get(url=url,headers=headers)

scraper = cloudscraper.create_scraper(delay=10, browser='chrome') 

info = scraper.get(url).text
soup = bs4.BeautifulSoup(info, "html.parser")
print(url)
#request_result2=requests.get( url2 )
#request_result3=requests.get( url3 )
#url = "https://www.business-standard.com/article/technology/iphone-14-series-indian-buyers-in-a-fix-with-launch-of-esim-only-handset-122091800392_1.html"
#req= scraper.get(url)
#print(req)
#soup = BeautifulSoup(req.content, "html.parser")
#soup2 = bs4.BeautifulSoup(request_result2.content,
#						"html.parser")
#soup3 = bs4.BeautifulSoup(request_result3.content,
#						"html.parser")

print(soup)
#print(soup2)
#print(soup3)
Func = open("soup.html","w",encoding="utf-8")
Func.write(str(soup));
#print(str(soup1))


Heading_IPHONE=soup.find('div',class_='yuRUbf')
print(Heading_IPHONE)
#Func.write(str(Heading_IPHONE))


q = ''
for info in Heading_IPHONE:
    i= info.get('href')
    Func.write(str(i))
    p=re.search("(?P<url>https?://[^\s]+)", i).group("url")
    q=p.split('&')[0]
    print(">>>>>>")
    
request_result2=requests.get( q )
soup = bs4.BeautifulSoup(request_result2.text,"html.parser")
#print(soup)
#Func.write(str(soup))
Content_paragram=soup.find('div',class_='lIZA8')
#print(Content_paragram)
Func.write(str(Content_paragram))


x = mycol.insert_one({'hello':str(Content_paragram)})                       
print(x)

#Heading_WAR=soup2.find_all('h3') 
#Heading_CUP=soup3.find_all('h3')  


#h1 = soup.findAll('span')
#for i in h1:
 #   print(i.get('p',class_='p-content'))
#print(h1)
#print(soup.find('h1').text)
#for para in soup.find_all("p"):
#    print(para.get_text())
#imag = soup.findAll('img')

#for int in soup.findAll('img'):
    #p= int.get('src')
   # Q={'hello':json.dumps(p, default=json_util.default)}
   # print(Q)
  #  print(int.get('src'))
   # print(int.get('alt'))
  

    