import $ from "jquery";

const CURRENT_URL = $(location).attr("href");

$(function () {
  const extractRelevantContent = (): string[] => {
    const relevantContents: string[] = [];

    const selector =
      "h1, h2, h3, h4, h5, h6, p, a, title, article, section, header, footer";

    document.querySelectorAll(selector).forEach((element: Element) => {
      let content = element.textContent?.trim() || element.innerHTML.trim();

      if (
        !content ||
        element.nodeName === "SCRIPT" ||
        element.nodeName === "STYLE"
      )
        return;

      if (
        element.nodeName === "A" &&
        (content.length < 5 || element.getAttribute("href")?.startsWith("#"))
      ) {
        return;
      }

      if (content.length > 100) {
        content = content.substring(0, 100) + "...";
      }

      relevantContents.push(content);
    });


    const flattenedContents = relevantContents.join(" ").split(" ");
    const selectedContents = flattenedContents.slice(0, 500);

    return selectedContents;
    // return relevantContents;
  };

  const relevantTagContents = extractRelevantContent();

  fetch("http://localhost:3000/judge-productive", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: relevantTagContents }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from OpenAI:", data.response);
    })
    .catch((error) => {
      console.error("Error sending data to the server:", error);
    });
});
