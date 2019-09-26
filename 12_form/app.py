# Brandon Chen
# SoftDev1 pd9
# K12 -- ECHO ECho echo
# 2019-09-26

#Team Name: BlueBarry
#Roster: Brandon Chen, Jason Zheng

from flask import Flask, render_template, request
app = Flask(__name__)


@app.route("/")
def form():
	return render_template("Form.html", TeamName = "BlueBarry",
	 						Roster = "Jason Zheng and Brandon Chen")

@app.route("/auth")
def authenticate():
	print(app)
	print('HEEEEEEEEERRRRRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
	print(request)
	print ('HEEEEEEEEERRRRRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
	print(request.args)
	return render_template("Response.html", user = request.args['username'],
							method = request.method,
	 						TeamName = "BlueBarry",
							Roster = "Jason Zheng and Brandon Chen")

if __name__ == "__main__":
	app.debug = True
	app.run()
