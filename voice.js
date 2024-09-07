const voiceBtn = document.getElementById('voice');
const textinput = document.getElementById("box");


voiceBtn.addEventListener('click', () => {
    text = textinput.value;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();

    // Log the available voices for debugging
    voices.forEach((voice, index) => {
        console.log(
        `${index}: ${voice.name} (${voice.lang}) - ${
            voice.default ? "default" : ""
        }`
        );
    });
    utterance.voice = voices[8]; 
    speechSynthesis.speak(utterance);
});

