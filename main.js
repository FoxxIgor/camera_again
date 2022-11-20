
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox = document.getElementById("textarea");
function start(){
    textbox.innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    textbox.innerHTML = content;
    console.log(textbox);
    if(content = "take my selfie"){
        console.log("tirando selfie");
        speak();
    };
}
function speak(){
    var synth = window.speechSynthesis;
    speakData = "tirando selfie denovo";
    var utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function (){
        takeself();
        save();
    },2763);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90
})
function takeself(){
    Webcam.snap(function(data_uri){
        document.getElementById("foto1").innerHTML="<img class='photo' id='photo'src='"+data_uri+"'>"
        document.getElementById("foto2").innerHTML="<img class='photo' src='"+data_uri+"'>"
        document.getElementById("foto3").innerHTML="<img class='photo' src='"+data_uri+"'>"
    })
}
function save(){
    link = document.getElementById("link");
    img = document.getElementById("photo").scr;
    link.href=img;
    link.click();
}