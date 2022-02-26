
from flask import Blueprint, jsonify,render_template,redirect,request, url_for
import json
import sys
sys.path.append("./")
#define global variable to save instructions 
instructions = []
instruction = []
car_location = []
index = Blueprint(__name__, "index")
@index.route("/")
def home():
    return render_template("index.html")

@index.route("/location")
def locate():
    import GetGeoLocationFromAPI
    currentlocation = GetGeoLocationFromAPI.getGeo()
    return jsonify(currentlocation)
@index.route("/submit",methods = ["POST"])
def submit():
    global instructions
    if request.method == "POST":
        import RoadRoute
        markers = json.loads(request.get_data(as_text=True))["value"]
        instructions = RoadRoute.get_instructions(markers)
    return "OK"
@index.route("/manual_control",methods = ["POST"])
def manual_control():
    global instruction
    if request.method == "POST":
        instruction = json.loads(request.get_data(as_text=True))["value"]
    return "Received manual instruction"

@index.route("/car")
def car():
    global instructions
    if len(instructions) == 0:
        return "OK"
    return jsonify(instructions)
@index.route("/test")
def test():
    return "Phu Loc"
@index.route("/get_instruction")
def get_instruction():
    global instruction
    result = instruction
    return str(result)
@index.route("/manually_control")
def manually_control():
    return render_template("manual.html")
@index.route("/car_location",methods = ["POST"])
def car_location():
    global car_location
    if request.method == "POST":
        car_location = json.loads(request.get_data(as_text=True))["value"]
    return "Received GPS's Car"
@index.route("/get_location")
def get_location():
    global car_location
    if type(car_location) != dict:
        return ""
    return jsonify(car_location)
