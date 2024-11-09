import $ from 'jquery';

// List of GIFT URLs to overlay 
const gifUrls: string[] = [
  "https://media.giphy.com/media/l0MYLNU2kMoZ4s3g4/giphy.gif", 
  "https://media.giphy.com/media/xT0GqF1jA5WfBcqEvG/giphy.gif"
];

// Create a container for the GIFs 
const gifContainer = document.createElement("div");
gifContainer.classList.add("gif-overlay-container");
document.body.appendChild(gifContainer);

// Function to create and add GIF elements with random size
const addGifsToOverlay = (gifUrls: string[]) => {
    gifUrls.forEach((url, index) => {
      const gif = document.createElement("img");
      gif.src = url;
      gif.classList.add("overlay-gif");
  
      // Randomize position
      const top = Math.random() * window.innerHeight;
      const left = Math.random() * window.innerWidth;
      gif.style.top = `${top}px`;
      gif.style.left = `${left}px`;
  
      // Randomize size (within a specific range)
      const randomWidth = Math.floor(Math.random() * (250 - 100 + 1)) + 100; // Random width between 100px and 250px
      const randomHeight = Math.floor(Math.random() * (250 - 100 + 1)) + 100; // Random height between 100px and 250px
      gif.style.width = `${randomWidth}px`;
      gif.style.height = `${randomHeight}px`;
  
      // Add a random delay for each GIF to start its animation at different times
      gif.style.animationDelay = `${Math.random() * 5}s`;
  
      // Add the gif to the container
      gifContainer.appendChild(gif);
    });
  };
  
  // Call function to add GIFs to overlay
  addGifsToOverlay(gifUrls);
  