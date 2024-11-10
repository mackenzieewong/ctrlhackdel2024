import { selectedGifUrls } from './gifsList';

const gifUrls = selectedGifUrls; // Use selectedGifUrls as gifUrls

console.log(selectedGifUrls);  // Log first 6 URLs 


// // Create a container for the GIFs 
const gifContainer = document.createElement("div");
gifContainer.classList.add("gif-overlay-container");
document.body.appendChild(gifContainer);

// Function to create and add GIF elements with random size
const addGifsToOverlay = (gifUrls: string[]) => {
    gifUrls.forEach((url, index) => {
      const gif = document.createElement("img");
      gif.src = url;
      gif.classList.add("overlay-gif");
  
    console.log(`GIF element created for URL ${url}`);

  // Randomize position
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    gif.style.top = `${top}px`;
    gif.style.left = `${left}px`;

    console.log(`Position for GIF set to top: ${top}px, left: ${left}px`);
  
  // Randomize size (within a specific range)
    const randomWidth = Math.floor(Math.random() * (300 - 100 + 1)) + 100; // Random width between 100px and 300px
    const randomHeight = Math.floor(Math.random() * (300 - 100 + 1)) + 100; // Random height between 100px and 300px
    gif.style.width = `${randomWidth}px`;
    gif.style.height = `${randomHeight}px`;

    console.log(`Size for GIF set to width: ${randomWidth}px, height: ${randomHeight}px`);
  
  // Add a random delay for each GIF to start its animation at different times
  gif.style.animationDelay = `${Math.random() * 5}s`;
  
  // Add the gif to the container
  gifContainer.appendChild(gif);
  console.log(`GIF added to the container with index ${index}`);
    });
  };
  
// Call function to add GIFs to overlay
  console.log("Starting GIF overlay process");
  addGifsToOverlay(gifUrls);
  console.log("addGifsToOverlay function executed");



