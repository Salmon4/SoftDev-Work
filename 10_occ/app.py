from flask import Flask, render_template
import random, csv
app = Flask(__name__)

allOccupation = {}

def randomOccupation():
    with open('occupations.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        linenum = 0
        for rows in reader:
            if linenum != 0:
                allOccupation[rows[0]] = float(rows[1])
            linenum += 1
        counter = 0
        randomnum = random.uniform(0,allOccupation.get("Total"))
        for key, value in allOccupation.items():
            counter += value
            if randomnum <= counter:
                return key




@app.route("/occupyflaskst")
def getAJob():
    return render_template(
        'template.html',
        randOccup = randomOccupation(),
        bunch = allOccupation
    )


if __name__ == "__main__":
  app.debug = True
  app.run()
