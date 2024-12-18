export const parseChat = (chatContent) => {
    const lines = chatContent.split("\n");
    const links = [];
    const quotes = [];
    const timestamps = [];
    const notes = [];
  
    const linkRegex = /(https?:\/\/[^\s]+)/g; // Regex for links
    const timestampRegex = /\d{1,2}\/\d{1,2}\/\d{2,4}, \d{1,2}:\d{2}/; // Regex for timestamps
  
    lines.forEach((line) => {
      // Trim leading/trailing whitespace
      line = line.trim();
  
      if (line === "") {
        // Skip empty lines
        return;
      }
  
      if (linkRegex.test(line)) {
        links.push(line.match(linkRegex));
      } else if (line.includes('"') || line.includes("“") || line.includes("”")) {
        quotes.push(line);
      } else if (timestampRegex.test(line)) {
        timestamps.push(line.match(timestampRegex)[0]);
      } else {
        notes.push(line); // Add only meaningful text to notes
      }
    });
  
    return {
      links,
      quotes,
      timestamps,
      notes,
    };
  };
  