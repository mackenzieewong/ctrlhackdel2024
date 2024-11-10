import { selectedGifUrls } from './gifsList';

const gifUrls = selectedGifUrls; // Use selectedGifUrls as gifUrls
console.log(selectedGifUrls); // Log selected URLs

// Create a container for the GIFs 
const gifContainer = document.createElement("div");
gifContainer.classList.add("gif-overlay-container");
document.body.appendChild(gifContainer);

// Function to create and add GIF elements with random size
export const addGifsToOverlay = (gifUrls: string[]) => {
  gifUrls.forEach((url, index) => {
    const gif = document.createElement("img");
    gif.src = url;
    gif.classList.add("overlay-gif");

    console.log(`GIF element created for URL ${url}`);

    // Randomize size (within a specific range)
    const randomWidth = Math.floor(Math.random() * (300 + 1)) + 100; 
    const randomHeight = Math.floor(Math.random() * (300 - 100 + 1)) + 100; 
    gif.style.width = `${randomWidth}px`;
    gif.style.height = "auto";

    // Generate a position within the left portion of the screen, avoiding the right 300px
    const top = Math.random() * (window.innerHeight - randomHeight);
    const left = Math.random() * (window.innerWidth - 300 - randomWidth); // Exclude the right 300px

    // Set the position of the GIF
    gif.style.position = "absolute";
    gif.style.top = `${top}px`;
    gif.style.left = `${left}px`;

    console.log(`Position for GIF set to top: ${top}px, left: ${left}px`);

    // Add a random delay for each GIF to start its animation at different times
    gif.style.animationDelay = `${Math.random() * 5}s`;

    // Add the gif to the container
    gifContainer.appendChild(gif);
    console.log(`GIF added to the container with index ${index}`);
  });
};
