from flask import Flask
app = Flask(__name__)


@app.route("/first")
def hello_world():
    print(__name__)
    return "First route here."

@app.route("/second")
def bye_world():
    print(__name__)
    return "Second route here."

@app.route("/third")
def hello_again_world():
    print (__name__)
    return "Third route here."

if __name__ == "__main__":
    app.debug = True
    app.run()
