import pymysql
from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql
import json

app = Flask(__name__)
cors = CORS(app)

conn = pymysql.connect(host="localhost", user="root", password="", db="airbnb")
print("connected succ...")


@app.route("/")
def index():
    print("Welcome to airbnb")
    return "Welcome to airbnb"


@app.route("/login-user", methods=["POST"])
def add_user():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        phoneNo = raw_json["phoneNo"]
        email = raw_json["email"]
        cur.execute(
            f"select id from users where (email = '{email}' OR phoneNo='{phoneNo}')"
        )
        records = cur.fetchall()
        if records:
            cred = True
            id = records[0]["id"]
            return jsonify({"cred": cred, "id": id})
        cur.execute(f"insert into users(phoneNo,email) values ('{phoneNo}','{email}')")
        conn.commit()
        cur.execute(
            f"select id from users where (email = '{email}' OR phoneNo='{phoneNo}')"
        )
        records = cur.fetchall()
        id = records[0]["id"]
        cred = True
        return jsonify({"cred": cred, "id": id})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/delete-user", methods=["DELETE"])
def delete_user():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        id = raw_json["id"]
        cur.execute(f"delete from users where id = '{id}'")
        conn.commit()
        cred = True
        return jsonify({"cred": cred})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/get-places", methods=["GET"])
def get_places():
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute("select * from places")
        result = cur.fetchall()
        return jsonify(result)
    except:
        return jsonify({"msg": "Internal server error"})


@app.route("/get-place", methods=["POST"])
def get_place():
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        address = raw_json["address"]
        cur.execute(f"select * from places where address like '%{address}%'")
        result = cur.fetchall()
        return jsonify(result)
    except:
        return jsonify({"msg": "Internal server error"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int("2000"), debug=True)
