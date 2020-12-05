# SharkHacks
---
### Pseudocode for Training Loop for final Model

1. corporations = json.load(nasdaq.json)["corporations"]
2. for name in corporations  
    1. df = yf.Ticker(corporations[name]).history(start = "2020-09-09", end = "2020-12-03").High  
    2. tweetlist = tweets = api.get_tweets(query = "$"+name, count = 500)
    3. ff = model1.predict(df)
    3. x_train.append(ff,tweetlist)
    4. y_train.append(yf.Ticker(name).history(start = "2020-12-03", end = "2020-12-04").High
    
