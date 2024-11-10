// Function to create and add the static 'dino' image overlay at the bottom-right
import checkSite from "./checkSite";

const normalDino = "https://i.imgur.com/40oGV3K.png"; 
const angryDino = "https://i.imgur.com/uXZtDEm.png";
const angrierDino = "https://i.imgur.com/Yv0oae2.png";

let dialogue: string = "";

checkSite().then((result) => {
  dialogue = result;  
  console.log(dialogue); 
  addDinoOverlay();
}).catch((error) => {
  console.error("Error fetching dialogue:", error);
});


const speechBubble = "https://i.imgur.com/G0hFWOJ.png"; 

const dinoImage = normalDino; // hardcode default to not angry dino 




export const addDinoOverlay = () => {
    const container = document.createElement("div");
    container.classList.add("container");

    const dinoContainer = document.createElement("div");
    dinoContainer.classList.add("dino-container");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    // Text box element
    const dinoText = document.createElement("div");
    dinoText.innerText = dialogue;
    dinoText.classList.add("dino-text");

    // Append the text to the text container
    textContainer.appendChild(dinoText);
    // Append the text container to the main container 
    container.appendChild(textContainer);

    // Dino image element 
    const dinoImageOverlay = document.createElement("img");
    dinoImageOverlay.classList.add("dino");
    dinoImageOverlay.src = dinoImage; // Pass the image path as a parameter

    // Append dino image to container
    dinoContainer.appendChild(dinoImageOverlay);
    // Append dino container to main container 
    container.appendChild(dinoContainer);

    // Add container to the body of the page
    document.body.appendChild(container);

    console.log("Dino with text added to page");
  };

 