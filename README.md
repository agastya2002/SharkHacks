# SharkHacks
---
### Pseudocode for Training Loop for final Model


1. for name in stocknamelist  
    1. df = yf.Ticker(name).history(start = "2020-09-09", end = "2020-12-03").High  
    2. tweetlist = tweets = api.get_tweets(query = "$"+name, count = 500)
    3. x_train.append(df,tweetlist)
    4. y_train.append(yf.Ticker(name).history(start = "2020-12-03", end = "2020-12-04").High
    
