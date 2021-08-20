Webcam.set({
height:300,
width:350,
image_format:"png",
png_quality:100
});
Webcam.attach("#camera");
function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML="<img src='"+data_uri+"' id='blank_image'>";

    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ugfBPszy-/",modelloaded);
function modelloaded()
    {
console.log("model is loaded")
    }

function identify()
{
    img=document.getElementById("blank_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,result)
{
if (error)
{
    console.error(error);
}else {
    console.log(result);
    document.getElementById("object_line").innerHTML=result[0].label;
    document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);

}

}











