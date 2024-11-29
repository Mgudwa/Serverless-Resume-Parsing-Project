document.getElementById("upload-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const fileInput = document.getElementById("resume");
    const file = fileInput.files[0];
  
    if (!file) {
      alert("Please select a resume file to upload.");
      return;
    }
  
    const formData = new FormData();
    formData.append("resume", file);
  
    try {
      const response = await fetch("https://your-api-gateway-url", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        alert("Resume uploaded successfully!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
      } else {
        throw new Error("Failed to upload resume.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the resume.");
    }
  });
  