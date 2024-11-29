document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      // Send contact form details to the backend (AWS Lambda or SES)
      const response = await fetch("https://your-api-gateway-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending your message.");
    }
  });
  