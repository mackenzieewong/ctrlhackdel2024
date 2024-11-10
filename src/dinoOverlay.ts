// Function to create and add the static 'dino' image overlay at the bottom-right

const normalDino = "https://i.imgur.com/40oGV3K.png"; 
const angryDino = "https://i.imgur.com/uXZtDEm.png";
const angrierDino = "https://i.imgur.com/Yv0oae2.png";

const dinoImage = normalDino; // hardcode default to not angry dino 

export const addDinoOverlay = () => {
    // Create the dino image element
    const dinoWrapper = document.createElement("div");


    const dinoImageOverlay = document.createElement("img");
    dinoImageOverlay.classList.add("dino");
    dinoImageOverlay.src = dinoImage; // Pass the image path as a parameter

    // Append image to wrapper
    dinoWrapper.appendChild(dinoImageOverlay);

    // Add wrapper to the body of the page
    document.body.appendChild(dinoImageOverlay);

    console.log("Dino added to page");
  };
