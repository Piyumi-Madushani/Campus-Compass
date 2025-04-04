from pymongo import MongoClient
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from dotenv import load_dotenv  # Import the dotenv library
import os  # Import the os module

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# MongoDB Connection
mongo_uri = os.getenv("MONGO_URI")  # Fetch the MongoDB URI from the .env file
client = MongoClient(mongo_uri)
db = client["campus_compass_db"]  # Database name
collection = db["contact_messages"]  # Collection name

@app.route("/Contact", methods=["POST"])
def save_contact_message():
    """
    API endpoint to save contact form messages.
    """
    try:
        data = request.json
        name = data.get("name")
        email = data.get("email")
        message = data.get("message")

        if not name or not email or not message:
            return jsonify({"error": "All fields are required!"}), 400

        # Insert data into MongoDB
        contact_message = {
            "name": name,
            "email": email,
            "message": message,
            "created_at": datetime.now()
        }
        collection.insert_one(contact_message)

        return jsonify({"message": "Message saved successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
