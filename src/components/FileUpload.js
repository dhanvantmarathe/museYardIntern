import React, { useState, useEffect } from "react";

const FileUpload = ({ onFileRead }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if there's any saved data in localStorage when the component mounts
    const savedFileData = localStorage.getItem("fileData");
    if (savedFileData) {
      onFileRead(savedFileData);
    }
  }, [onFileRead]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;
        onFileRead(fileContent);
        
        // Store the file data in localStorage
        localStorage.setItem("fileData", fileContent);
        setError("");
      };
      reader.readAsText(file);
    } else {
      setError("Please upload a valid .txt file");
    }
  };

  return (
    <div>
      <h2>Upload WhatsApp Chat File</h2>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
