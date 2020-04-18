from flask import Flask, render_template
import json
app = Flask(__name__)

with open('temperature.json') as f:
    AllData = json.load(f)
    description = AllData.get("description")
    data = AllData.get("data")
    tempature = {}
    anomaly = {}
    for key in data:
        tempature[key] = data[key].get("value")
    for key in data:
        anomaly[key] = data[key].get("anomaly")


@app.route('/')
def home():
    return(render_template('climate.html'))

print(tempature)
print(anomaly)


if __name__ == "__main__":
    app.debug = True
    app.run()
