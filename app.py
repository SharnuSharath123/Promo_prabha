from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name')
    message = f"Hello, {name}! Nice to meet you!"
    return jsonify({"message": message})

if __name__ == '__main__':
    app.run(debug=True)
