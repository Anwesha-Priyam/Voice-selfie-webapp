var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textArea").innerHTML="";
    recognition.start();
}
recognition.onresult=
function run(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    speak();
    document.getElementById("textArea").innerHTML=Content;
    if(Content=="take my selfie")
    {
        console.log("Taking your selfie in 5 sec")
        speak();
    }
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 seconds. Please wait";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(
        function()
        {
            take_snapshot();
            saveImg();
        },5000);
}
Webcam.set(
    {
        width:360,
        height:250,
        image_format:"png",
        png_quality:90
    }
);
camera=document.getElementById("camera");
function take_snapshot()
{
    Webcam.snap(
        function(data_uri)
        {
            document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>"
        }
    )
}
function saveImg()
{
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}