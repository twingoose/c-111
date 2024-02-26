
Webcam.set({
    width:350
    ,height:300
    ,image_format : "png",
    png_quality:90
});


camera = document.getElementById("camera");

Webcam.attach( 'camera' );


function take_snapshot()
{ 
     Webcam.snap(function(data_uri) {
document.getElementById("results").innerHTML  ='<img id="captured_image" src="'+data_uri+ '"/> ';
}); 
}


console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/.json',modelLoaded);


function modelLoaded()
{
console.log('model Loaded!');    

}


function speak()
{
var synth = window.speechSynthesis;
speak_data_1 = "The first prediction is" + prediction_1;
speak_data_2 = "And  the second prediction is" + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(utterThis);
}


function check()
{
img=document.getElementById('captured image');
classifier.classify(img, gotResult);
}




function gotResult(error, results)
{
if(error){
    console.error(error);
} else {
console.log(results);
document.getElementById('results_gesture_name').innerHTML = results[0].label;    
document.getElementById('results_gesture_name2').innerHTML = results[1].label;   
prediction_1 = results[0].label;
prediction_1 = results[1].label;
speak();
if(results[0].label == "Good Job")
{
document.getElementById("update emoji").innerHTML = "&#128077"
}


if(results[0].label == "Perfect")
{
document.getElementById("update emoji").innerHTML = "&#128076"
}


if(results[0].label == "Victory")
{
document.getElementById("update emoji").innerHTML = "&#9996"
}


if(results[1].label == "Good Job")
{
document.getElementById("update emoji2").innerHTML = "&#128077"
}

if(results[1].label == "Perfect")
{
document.getElementById("update emoji2").innerHTML = "&#128076"
}
    

if(results[1].label == "Victory")
{
document.getElementById("update emoji2").innerHTML = "&#9996"
}


}
}
