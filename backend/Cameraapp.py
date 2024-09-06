from flask import Flask, jsonify, request
import cv2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow communication between React frontend and Flask backend

@app.route('/', methods=['POST'])  # Make sure this matches the route you're hitting in React
def open_camera():
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        return jsonify({"error": "Could not access the camera"}), 500

    while True:
        ret, frame = cap.read()
        if ret:
            cv2.imshow('Camera Feed', frame)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        else:
            return jsonify({"error": "Failed to capture image"}), 500

    cap.release()
    cv2.destroyAllWindows()
    return jsonify({"message": "Camera feed stopped and window closed"})

if __name__ == '__main__':
    app.run(debug=True)
