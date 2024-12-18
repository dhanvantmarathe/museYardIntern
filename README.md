# WhatsApp Chat File Analysis App

- This application allows users to upload a WhatsApp chat file, parse the content, and display insights based on the chat data. The data is persisted in **localStorage**, ensuring that the chat content is available even after the page is reloaded.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Setup Instructions](#setup-instructions)
4. [Approach](#approach)
5. [Folder Structure](#folder-structure)
6. [Deployement on Vercel](#deployement-on-vercel)


---

## Features
- Upload a `.txt` file containing WhatsApp chat data.
- Parse and display insights from the chat data (e.g., messages, timestamps).
- Persist file data in **localStorage** for easy retrieval upon page reload.
- Simple and user-friendly interface with basic validation for file type.

---

## Tech Stack
- **React**: A JavaScript library for building the user interface.
- **localStorage**: A web storage API for persisting data across page reloads.
- **FileReader**: A built-in JavaScript API for reading file data on the client side.

---

## Setup Instructions

Follow these steps to set up the application locally:

### Prerequisites:
- Node.js and npm should be installed on your machine. You can download and install them from [here](https://nodejs.org/).

### 1. Clone the repository:
```bash
git clone https://github.com/dhanvantmarathe/museYardIntern
cd museYardIntern
```
### 2. Install dependencies:

``` bash
npm install
```
### 3. Run the development server:

```bash
npm start
```
The application will be running on http://localhost:3000. Open this URL in your browser to interact with the app.

## Approach

### 1. File Upload Handling:
- The app uses a file input to allow the user to upload a .txt file containing WhatsApp chat data.
- The selected file is read using the FileReader API, which reads the file as text.

### 2. Data Persistence:
- When a file is successfully uploaded and its contents are parsed, the data is stored in localStorage. This ensures that the chat data persists even after a page reload.
- On page load or reload, the app checks if there is any saved chat data in localStorage. If found, it parses and displays the data.

### 3. Data Parsing:

- The chat file is parsed to extract useful information such as messages, timestamps, and senders. This parsed data is then passed to the Analysis component for rendering.

### 4. User Interface

- The user interface consists of a file upload input and a component to display parsed chat data.
- Basic validation ensures that only .txt files are accepted.

### 5. LocalStorage Management:

- The app checks localStorage for saved chat data upon loading.
- If the user uploads a new file, the old data is overwritten in localStorage.
- An optional clear button allows the user to remove the data from localStorage.

## Folder structure

```bash 
src/
  ├── components/
  │    ├── FileUpload.js        
  │    ├── Analysis.js 
       ├── PatternChat.js 
           
  ├── utils/
  │    └── parser.js            
  ├── App.js                   
  └── index.js                
public/
  ├── index.html               
  └── styles.css     
  ```

  ## Deployement on Vercel
  ```bash
  npm run build
  Deployed Application URL  

  ```






