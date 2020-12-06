import pandas as pd
import numpy as np
import yfinance as yf
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
import base64

# Load Model
from keras.models import load_model
model = load_model('models/StonkPredict.h5')

def predict(company):
  print('predict called')
  high = yf.Ticker(company[1:]).history(period="60d").High
  close = yf.Ticker(company[1:]).history(period="60d").Close
  #### Plot graphs
  plt.figure(figsize=(16,8))
  plt.title('High Price History', fontsize=22)
  plt.plot(high, linewidth=2, color='#F2994A')
  plt.xlabel('Date', fontsize=22)
  plt.ylabel('High Price USD ($)', fontsize=22)
  plt.savefig('high.png', transparent=True)
  plt.figure(figsize=(16,8))
  plt.title('Closing Price History', fontsize=22)
  plt.plot(close, linewidth=2, color='#F2994A')
  plt.xlabel('Date', fontsize=22)
  plt.ylabel('Closing Price USD ($)', fontsize=22)
  plt.savefig('close.png', transparent=True)
  with open("high.png", "rb") as image_file:
    high_enc = base64.b64encode(image_file.read())
  with open("close.png", "rb") as image_file:
    close_enc = base64.b64encode(image_file.read())
  #### Predict Price
  ydf = high.dropna()
  dataset = ydf.values
  dataset = dataset.reshape(-1, 1)
  scaler = MinMaxScaler(feature_range=(0,1))
  scaled_data = scaler.fit_transform(dataset)
  x_pred = np.reshape(scaled_data, (1, scaled_data.shape[0], 1 ))
  pred = model.predict(x_pred)
  pred = scaler.inverse_transform(pred)


  return pred[0][0], high_enc, close_enc