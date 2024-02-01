from flask import Flask, render_template, request, jsonify, make_response
from flask_cors import CORS, cross_origin
from PIL import Image
from datetime import datetime
from io import BytesIO
import base64
import os
from pymongo import MongoClient
from concurrent.futures import ThreadPoolExecutor
executor = ThreadPoolExecutor(max_workers=2)

mongo_uri = "mongodb://localhost:27017/"
client = MongoClient(mongo_uri)
db = client.mydatabase


from huggingface_hub import InferenceClient
client = InferenceClient(token= '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', model="dataautogpt3/OpenDalleV1.1")
app = Flask(__name__)
CORS(app)

img = ""
def process_image(prompt):
    image = client.text_to_image(prompt)
    buffered = BytesIO()
    image.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    global img
    img = img_str

@app.route("/generated_image", methods=["POST"])
def generated_image():
    if(img != ""):
        return img
    else:
        return "not"

@app.route("/findPrompts", methods=["POST"])
def find():
    # collection = db.mycollection
    # data_from_db = list(collection.find())
    # for i in data_from_db:
    #     i['_id'] = str(i['_id'])
    # return data_from_db
    return []

@app.route("/checkToken", methods=["POST"])
def accessToken():
    data = request.get_json()
    token = data.get('token')
    if token == 'chetansk':
        return "Valid"

    return "InValid"

@app.route("/shareImage", methods=["POST"])
def shareImage():
    return "Image received"


@app.route("/home", methods=["POST"])
def home():
    response = {'message': 'Image processing started'}
    status_code = 200
    
    data = request.get_json()
    prompt = data.get('prompt')
    print(prompt)
    executor.submit(process_image, prompt)
    # current_datetime = datetime.now().strftime("%Y%m%d%H%M%S")
    # image = client.text_to_image(prompt)
    # buffered = BytesIO()
    # image.save(buffered, format="JPEG")
    # img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    return jsonify(response), status_code

@app.route("/")
def index():
    return "Index page !!!!!";
    

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0')
