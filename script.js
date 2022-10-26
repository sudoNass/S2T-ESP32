function startButton(event) {
  if (recognizing) {
    recognition.stop();
    event.target.innerHTML = "Start!";
    return;
  }

  event.target.innerHTML = "Stop!";

  transcript = '';
  recognition.lang = select_language.value;
  recognition.start();
  ignore_onend = false;

  showInfo(info_allow);

  start_timestamp = event.timeStamp;
}

function showInfo(s) {
  info.innerHTML = s;
}

function updateCountry(e) {
  e.target.value;
}

const info_speak_now = "Speak now.";

const info_no_speech = "No speech was detected. You may need to adjust your <a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\"> microphone settings</a>.";

const info_start = "Click on the microphone icon and begin speaking.";

const info_no_microphone = "No microphone was found. Ensure that a microphone is installed and that <a href=\"//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892\"> microphone settings</a> are configured correctly.";

const info_allow = "Click the \"Allow\" button above to enable your microphone.";

const info_denied = "Permission to use microphone was denied.";

const info_blocked = "Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream";

const info_upgrade = "Web Speech API is not supported by this browser. Upgrade to <a href=\"//www.google.com/chrome\">Chrome</a> version 25 or later.";

let recognition = new webkitSpeechRecognition();

const langs = {
  Arabic: "ar-Sa",
  English: "en-GB"
};

for (let [key, lang] of Object.entries(langs)) {
  select_language.appendChild(new Option(key, lang));
}

select_language.selectedIndex = 1;

showInfo(info_start);

let transcript = '';
let recognizing = false;
let ignore_onend;
let start_timestamp;


if ('webkitSpeechRecognition' in window) {
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = () => {
    recognizing = true;
    showInfo(info_speak_now);
  };

  recognition.onerror = (event) => {
    if (event.error == 'no-speech') {
      showInfo(info_no_speech);
      ignore_onend = true;
    } else if (event.error == 'audio-capture') {
      showInfo(info_no_microphone);
      ignore_onend = true;
    } else if (event.error == 'not-allowed') {
      ignore_onend = true;
    } else if (event.timeStamp - start_timestamp < 100) {
      showInfo(info_blocked);
    } else {
      showInfo(info_denied);
    }
  };

  recognition.onend = () => {
    recognizing = false;

    if (ignore_onend) {
      return;
    }

    if (!transcript) {
      showInfo(info_start);
      return;
    }

    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      let range = document.createRange();
      window.getSelection().addRange(range);
    }

  };

  recognition.onresult = (event) => {
    for (eventResult of event.results) {
      transcript += `${eventResult[0].transcript} `;
    }

    convert_text.innerHTML = transcript;
  }
}