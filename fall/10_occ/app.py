# Brandon Chen
# SoftDev1 pd9
# K10: Jinja Tuning
# 2019-09-24

# Pair Programming
# Team Name: Red Notebook
# Roster: Brandon Chen, Jude Rizzo


from flask import Flask, render_template
#importing the libraries
import random, csv
app = Flask(__name__)

allOccupation = {}

def randomOccupation():
    with open('occupations.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        linenum = 0
        #seperated by commas, so we tell them by their "delimeter"
        for rows in reader:
            if linenum != 0:
                #associating the percentages in the csv
                allOccupation[rows[0]] = float(rows[1])

            linenum += 1
        counter = 0

        randomnum = random.uniform(0,allOccupation.get("Total"))

        for key, value in allOccupation.items():
            counter += value
            #up the counter
            if randomnum <= counter:
                return key




@app.route("/occupyflaskst")
def getAJob():
    return render_template(
    #set itup with the template
        'template.html',
        randOccup = randomOccupation(),
        bunch = allOccupation

    )


if __name__ == "__main__":
  app.debug = True
  #run the main code
  app.run()
