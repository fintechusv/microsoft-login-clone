from flask import Flask, request, render_template, jsonify, url_for
import requests
from bs4 import BeautifulSoup

app = Flask(__name__, static_folder='assets')

# Route for the main page
@app.route('/hello')
def hello():
    return 'Hello, world'

# Route for testing
@app.route('/test')
def test():
    return 'Test'

# Route for displaying the home page
@app.route('/home')
def home():
    return render_template('index.html')

# Route for displaying results
@app.route('/result')
def result():
    scores = {'phy': 50, 'che': 60, 'maths': 70}
    return render_template('result.html', result=scores)

if __name__ == '__main__':
    app.run(debug=True)
