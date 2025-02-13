let noClicks = 0;
const maxNoClicks = 4;
const maxYesSize = 300;

const gifElement = document.getElementById("panda-gif");
const camiPic = document.getElementById("cami");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const message = document.getElementById("message");

//array of gifs - in order
//happy, sad1, sad2, crying
const gifs = ["images/pandaHappy.gif", "images/pandaSad-1.gif", "images/pandaSad-2.gif", "images/pandaCry.gif"];
const pics = ["images/yoM.png", "images/camiAngry.png", "images/camiSilly.png", "images/ponyUwu.png"];
//array of messages
const buttonMessages = ["Estas segura???unu", "pofavo unu" , "PORFAVOR ANDALE", "YAAA PORFAVOR JDAWJDAWJKDAWJDAWD <3"];

//no button clicked
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        //change image
        gifElement.src = gifs[noClicks];
        camiPic.src = pics[noClicks];

        //change no button text
        noButton.textContent = buttonMessages[noClicks];
        // reduce no button size
        noButton.style.transform = `scale(${1 - noClicks * 0.3})`;
        // add exaggerated transition effect
        noButton.style.transition = "transform 0.5s ease-in-out";
        yesButton.style.transition = "transform 0.5s ease-in-out";
        // increase yes button size 
        yesButton.style.transform = `scale(${1 + noClicks * 4})`;
        noClicks++;
    }
})


yesButton.addEventListener("click", () => {
   // if (noClicks < maxNoClicks) {
        //change image
        gifElement.src = "images/pandaJuntos.gif";
        camiPic.src = "images/us.png";

        //change the message text
        message.textContent = "Yo lo sabia JIJIIIJI"
                noButton.style.transform = `scale(${0})`;
                yesButton.style.transform = `scale(${0})`;           
   // }
})