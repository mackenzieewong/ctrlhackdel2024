import $ from "jquery";

const CURRENT_URL = $(location).attr("href");

$( function() {
  if (CURRENT_URL == "https://www.twitch.tv/") {
    const extractRelevantContent = (): string[] => {
      // Initialize an array to hold the relevant content
      const relevantContents: string[] = [];
    
      // Select a broader set of important tags (focused on meaningful content)
      const selector = 'h1, h2, h3, h4, h5, h6, p, a, title, article, section, header, footer';
    
      document.querySelectorAll(selector).forEach((element: Element) => {
        let content = element.textContent?.trim() || element.innerHTML.trim();
    
        // Skip empty content or irrelevant tags (e.g., script, style, etc.)
        if (!content || element.nodeName === "SCRIPT" || element.nodeName === "STYLE") return;
    
        // We could add extra checks for empty links or content-heavy tags
        // For instance, exclude links with only an href or very short content
        if (element.nodeName === "A" && (content.length < 5 || element.getAttribute('href')?.startsWith('#'))) {
          return;  // Skip links that have minimal text or are anchor links (e.g., #)
        }
    
        // Optional: Limit content length to avoid excessively long paragraphs or titles
        if (content.length > 100) {
          content = content.substring(0, 100) + '...';  // Trim long content to 100 characters
        }
    
        // Add relevant content to the array
        relevantContents.push(content);
      });
    
      return relevantContents;
    }
    
    // Call the function and log the relevant content
    const relevantTagContents = extractRelevantContent();

    fetch('http://localhost:3000/process-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: relevantTagContents }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from OpenAI:', data.response);
      })
      .catch(error => {
        console.error('Error sending data to the server:', error);
      });

  }
})