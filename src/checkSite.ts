const checkSite = async () => {
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
  } catch (error) {
    console.error("Error sending data to the server:", error);
  }

  try {
    const response = await fetch("http://localhost:3000/process-content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: url }),
    });

    const data = await response.json();
    console.log(data.response);
  } catch (error) {
    console.error("Error sending data to the server:", error);
  }
};

window.addEventListener("load", checkSite);

export default checkSite;
