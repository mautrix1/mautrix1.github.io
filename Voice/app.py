from flask import Flask, request, jsonify, send_file, render_template
from google.cloud import texttospeech
import os

app = Flask(__name__)

# Ensure the GOOGLE_APPLICATION_CREDENTIALS environment variable is set
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = '/home/mau/Documents/Json.json'

# Initialize the Google Text-to-Speech client
client = texttospeech.TextToSpeechClient()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/synthesize', methods=['POST'])
def synthesize_speech():
    data = request.get_json()

    if 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400

    text_input = texttospeech.SynthesisInput(text=data['text'])
    voice = texttospeech.VoiceSelectionParams(language_code="en-US", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL)
    audio_config = texttospeech.AudioConfig(audio_encoding=texttospeech.AudioEncoding.MP3)

    response = client.synthesize_speech(input=text_input, voice=voice, audio_config=audio_config)

    output_filename = 'output.mp3'
    with open(output_filename, 'wb') as out:
        out.write(response.audio_content)

    return send_file(output_filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
