# Brandon Chen
# SoftDev1 pd9
# K12 -- ECHO ECho echo
# 2019-09-26

#Team Name: BlueBarry
#Roster: Brandon Chen, Jason Zheng

from flask import Flask, render_template, request
app = Flask(__name__)


@app.route("/") #This is the form page/route
def form():
	return render_template("Form.html", TeamName = "BlueBarry",
	 						Roster = "Jason Zheng and Brandon Chen") #passes variables to template

@app.route("/auth")
def authenticate(): #This is the response page/route when you click submit
	print(app)
	print(request)
	print(request.args)
	return render_template("Response.html", user = request.args['username'],
							method = request.method,
	 						TeamName = "BlueBarry",
							Roster = "Jason Zheng and Brandon Chen")

if __name__ == "__main__":
	app.debug = True
	app.run()
