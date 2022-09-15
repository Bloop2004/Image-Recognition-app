//https://teachablemachine.withgoogle.com/models/DTYk1ITAv/
Webcam.set({
    width: 300,
    height:300,
    image_format:'png',
    png_quality: 90
});
camera = document.getElementById("camera")
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
    })
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DTYk1ITAv/model.json', modelLoaded)
function modelLoaded(){
    console.log("model is loaded")
}
function check(){
    image = document.getElementById("captured_image");
    classifier.classify(image, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_confidence").innerHTML = results[0].confidence.toFixed(3);
    }
}