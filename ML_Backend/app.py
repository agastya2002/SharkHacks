import uvicorn
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware

# import pymongo
import requests
from twitterClient import TwitterClient
from StockPredction import *

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return {"Home page"}

########################### Twitter Sentiment Analysis & Stock Price Prediction ###############################
@app.get("/sent/{company}")
def sent(company : str):
    check = 0
    high_enc = ''
    close_enc = ''
    company = '$' + company
    api = TwitterClient() 
    tweets = api.get_tweets(query = company, count = 200)
    ptweets = [tweet for tweet in tweets if tweet['sentiment'] == 'positive'] 
    pos = (100*len(ptweets)/len(tweets))
    ntweets = [tweet for tweet in tweets if tweet['sentiment'] == 'negative'] 
    neg = (100*len(ntweets)/len(tweets))
    try:
      price, high_enc, close_enc = predict(company)
      check = 0
      dct = {"positive":str(pos), "negative":str(neg), "price":str(price), "check": check, "high":high_enc, "close":close_enc}
    except:
      price = 'Your selected company did not cooperate with my fishies. So, I couldn\'t predict the stock price.'
      check = 1
      
    dct = {"positive":str(pos), "negative":str(neg), "price":str(price), "check": check, "high":high_enc, "close":close_enc}
    jsonData = jsonable_encoder(dct)
    return JSONResponse(jsonData)
    
if __name__ == "__main__":
  uvicorn.run("app:app", host="0.0.0.0", port=8080) 
