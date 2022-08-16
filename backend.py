from flask import Flask,render_template, url_for, request, redirect
from flask_cors import CORS
import string

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
   return render_template("login.html")

@app.route("/index")
def home2():
   return render_template("index.html")
      


@app.route("/form", methods=["POST"])
def post():
  if request.method == "POST":
      print("Iam here")
      data = request.form['data']
      data1 = request.form['data1']
      data = data.translate(str.maketrans('', '', string.punctuation))
      print("Data: ",data)
      print("Data1: ",data1)
      points, percentage, miss1 = fun1(data, data1)
      return render_template("calc.html", data={
         "points":points,"percentage":percentage,"missing":miss1})
   #    return render_template("cal.html", data1={"percentage":percentage,})
   # return
   #  render_template("index.html")



def fun1(data, text):
    point = 0 
    list1 = []
    data = data.lower().split(" ")

    data1 = text.lower().split(" ")

    for i in data1:
         if i in data:
            point += 1

    print("Points: ", point)
    percentage = (point / len(data)) * 100
    print("Percentage: ", percentage)
   
    for miss in data1:
        if miss not in data:
            print('missing words:', miss)
            list1.append(miss)
    return point, percentage, list1
        



if __name__=='__main__': 
   app.run(debug=True)

