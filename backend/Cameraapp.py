from flask import Flask, Response, jsonify
import cv2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow communication between React frontend and Flask backend

def generate_frames():
    cap = cv2.VideoCapture(0)  # Open the default camera (0)

    if not cap.isOpened():
        yield (b'--frame\r\n'
               b'Content-Type: text/plain\r\n\r\n'
               b'Could not access the camera\r\n')
        return

    while True:
        # Capture frame-by-frame
        success, frame = cap.read()
        if not success:
            break
        else:
            # Encode the frame in JPEG format
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            
            # Use multipart/x-mixed-replace to stream the frames
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()

@app.route('/video_feed', methods=['GET'])
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
