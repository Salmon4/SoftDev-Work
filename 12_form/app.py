from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def hello_world():
	print(app)
	return "HELLO WORLD"

@app.route("/foo.html")
def formss():
	return render_template("Form.html", foo = "BlueBarry")

@app.route("/auth")
def authenticate():
	print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
	print(app)
	print("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
	print(request)
	print("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
	print(request.args)
	user = request.args['username']
	return render_template("Response.html",
				name = user)

if __name__ == "__main__":
	app.debug = True
	app.run() 
