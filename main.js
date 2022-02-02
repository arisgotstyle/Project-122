x = '';
y = '';
draw_circle = '';
draw_rect = '';
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {

    document.getElementById('status').innerHTML = 'System is listening please speak';
    recognition.start()

}

recognition.onresult = function (event) {

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById('status').innerHTML = 'The Speech has been Recognized as: ' + content;

    if (content == 'Circle') {

        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById('status').innerHTML = 'Started drawing circle';
        draw_circle = 'set';
    }

    if (content == 'rectangle') {

        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 600);
        document.getElementById('status').innerHTML = 'Started drawing rectangle';
        draw_rect = 'set';
    }
}