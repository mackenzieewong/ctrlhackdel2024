const checkSite = async (url: string) : Promise<string> => {

  try {
    const responseDialogue = await fetch("http://localhost:3000/process-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: url }),
    });

    const dataDialogue = await responseDialogue.json();
    console.log(dataDialogue.response);
    return dataDialogue.response;

  } catch (error) {
    console.error("Error sending data to the server:", error);
  }

  return "";
};

// setInterval(checkSite, 15000);

export default checkSite;
