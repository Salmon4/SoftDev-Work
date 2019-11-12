from flask import Flask, render_template
from urllib.request import urlopen
import json
app = Flask(__name__)

@app.route("/")
def root():
    u = urlopen(
    "https://api.nasa.gov/planetary/apod?api_key=jbSyCSZme7kPo6nqEwmbELOLAVP64FqdcEQQ4Cww"
    )
    response = u.read()
    data = json.loads( response )
    return render_template("index.html",t = data['title'], day = data['date'], c = data['url'], pic = data['url'], explain = data['explanation'])

if __name__ == "__main__":
    app.debug = True
    app.run()
