from flask import Flask, request, render_template, jsonify, url_for
import requests
from bs4 import BeautifulSoup

app = Flask(__name__, static_folder='assets')

# ROUTES

# Route for displaying the login page
@app.route('/')
def home():
    return render_template('index.html')

# Route for displaying the dashboard
@app.route('/dashboard')
def test():
    return render_template('dashboard.html')

# Route for displaying results
@app.route('/result')
def result():
    scores = {'phy': 50, 'che': 60, 'maths': 70}
    return render_template('result.html', result=scores)


# Serverside operations (Proper encapsulation of the frontend formdata handlings)





if __name__ == '__main__':
    app.run(debug=True)
