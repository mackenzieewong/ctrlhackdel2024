const checkSite = async () : Promise<string> => {
  const url = window.location.href;

  try {
    const response = await fetch("http://localhost:3000/judge-productive", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: url }),
    });

    const data = await response.json();
    console.log(data.response);

    const responseDialogue = await fetch("http://localhost:3000/process-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: url }),
    });

    const dataDialogue = await responseDialogue.json();
    console.log(dataDialogue.response);

    if (data.response == true) {
        return dataDialogue.response;
    } else {
        return "You're doing good";
    }
  } catch (error) {
    console.error("Error sending data to the server:", error);
  }
  return "";
};

window.onload = function() {
    checkSite();
};

// setInterval(checkSite, 15000);

export default checkSite;
