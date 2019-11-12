from flask import Flask, render_template
import urllib2, json
app = Flask(__name__)

@app.route("/")
def root():
    u = urllib2.urlopen(
    "https://api.nasa.gov/planetary/apod?api_key=jbSyCSZme7kPo6nqEwmbELOLAVP64FqdcEQQ4Cww"
    )
    response = u.read()
    data = json.loads( response )
    return render_template("index.html", pic = data['url'])

if __name__ == "__main__":
    app.debug = True
    app.run()
