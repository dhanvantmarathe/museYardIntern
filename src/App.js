// add local storage

import React, { useState, useEffect } from "react";
import FileUpload from "./components/FileUpload";
import Analysis from "./components/Analysis";
import { parseChat } from "./utils/parser";
import PatternChart from "./components/PatternChart";
import "./App.css";

const App = () => {
  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    // Check if there's any saved chat data in localStorage when the app is loaded
    const savedFileData = localStorage.getItem("fileData");
    if (savedFileData) {
      const parsedData = parseChat(savedFileData);
      setChatData(parsedData);
    }
  }, []);

  const handleFileRead = (fileContent) => {
    const parsedData = parseChat(fileContent);
    setChatData(parsedData);
  };

  return (
    <div>
      <h1>MuseYard Pattern Explorer</h1>
      <FileUpload onFileRead={handleFileRead} />
      {chatData && <Analysis data={chatData} />}
      {chatData && <PatternChart data={chatData} />}
    </div>
  );
};

export default App;
