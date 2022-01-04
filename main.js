function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BfqbP70JI/model.json",modelready);
}
function modelready()
{
    classifier.classify(gotResults)
}
function gotResults(error, results)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(results)
        randomnumber_r = Math.floor(Math.random() *255) +1;
        randomnumber_g = Math.floor(Math.random() *255) +1;        
        randomnumber_b = Math.floor(Math.random() *255) +1;

        document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";

        img1 = document.getElementById("bark.gif");
        img2 = document.getElementById("meow.gif");
        img3 = document.getElementById("tifer.gif");
        img4 = document.getElementById("howling-wolf-41.gif");

        if(results[0].label == "Barking (Dog)")
        {
           document.getElementById("animal_image").src = "bark.gif";
        }
        else if(results[0].label == "Meowing (Cat)")
        {
            document.getElementById("animal_image").src = "meow.gif";
        }
        else if(results[0].label == "Roaring (Lion)")
        {
            document.getElementById("animal_image").src = "lion-roar.gif";
        }
        else
        {
            document.getElementById("animal_image").src = "howling-wolf-41.gif";
        }
    }
}