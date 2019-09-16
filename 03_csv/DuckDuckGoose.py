import csv
import random
def randomOccupation():
    with open('occupations.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter=',')
        linenum = 0
        allOccupation = {}
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
                                  
print(randomOccupation())
