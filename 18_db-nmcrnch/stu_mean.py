#Brandon Chen
#SoftDev Period 9
#K 18 Average
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="stu.db"
COURSE_FILE = "courses.csv";
STUDENT_FILE = "students.csv";

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops


c.execute("DROP TABLE IF EXISTS courses")
c.execute("DROP TABLE IF EXISTS students")
c.execute("DROP TABLE IF EXISTS stu_avg")

with open(STUDENT_FILE, newline='') as csvfile:
     reader = csv.DictReader(csvfile)
     test = "CREATE TABLE students (name TEXT,age INTEGER, id INTEGER);"
     c.execute(test)
     for row in reader:
         c.execute("INSERT INTO students VALUES (?, ?, ?)", (row["name"], row["age"], row["id"]))

with open(COURSE_FILE, newline='') as csvfile:
      reader = csv.DictReader(csvfile)
      test = "CREATE TABLE courses (code TEXT,mark INTEGER, id INTEGER);"
      c.execute(test)
      for row in reader:
          c.execute("INSERT INTO courses VALUES (?, ?, ?)", (row["code"], row["mark"], row["id"]))

def getStudentID(name):
    cur = c.execute("SELECT id FROM students WHERE name = ?", [str(name)])
    return cur.fetchone()[0]

#print(getStudentID("armin"))

def getStudentGrade(name):
    cur = c.execute("SELECT mark FROM courses WHERE id = ?", [getStudentID(name)])
    allGrades = cur.fetchall()
    return allGrades

#print(getStudentGrade("armin"))

def getAverage(name):
    allGrades = getStudentGrade(name)
    average = 0
    length = 0

    for row1 in allGrades:
        row = row1[0]
        average += row
        length += 1;
    return average / length;

#print(getAverage("armin"))



def displayStudent(name):
    return "name: " + name + " id: " + str(getStudentID(name)) + " average: " + str(getAverage(name))

#print(displayStudent("armin"))


#Creating table
c.execute("CREATE TABLE stu_avg (id INTEGER, avg INTEGER);")
cur = c.execute("SELECT name FROM students")
allNames = cur.fetchall()
for name1 in allNames:
    name = name1[0]
    command = "INSERT INTO stu_avg VALUES (" + str(getStudentID(name)) + ", " + str(getAverage(name)) + ")"
    c.execute(command)

db.commit() #save changes
db.close()  #close database
