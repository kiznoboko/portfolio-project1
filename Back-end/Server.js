// const express = require("express");
// const cors = require("cors");
// const path = require("path");

// const PORT = 5000;

// const app = express();
// app.use(cors());

// // Middleware to parse JSON bodies (for POST requests)
// app.use(express.json());

// // Serve static files from the current directory (if you want to serve more than index.html)
// app.use(express.static(__dirname));

// // Serve index.html at the root route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// // Handle POST request at root (you can customize this)
// app.post("/", (req, res) => {
//   // Access POST data with req.body
//   console.log("Received POST data:", req.body);

//   // Send some response back
//   res.json({ message: "POST request received!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });


// const express = require("express");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// const PORT = 5000;

// app.use(cors());

// // Serve static files (CSS, images, HTML) from parent directory
// app.use(express.static(path.join(__dirname, "..")));
// const FILE_PATH = path.join(__dirname, "projectideaContact.json")

// if(!fs.existSyn(FILE_PATH)) {
//     fs.createReadStream(FILE_PATH, JSON.stringify([]), "utf-8")
// }



// const ReadFileProjectIDea = () => {
//     fs.readFile(FILE_PATH)
// }


// const writeFIleProjectIDea = (projectIDea) => {
//     fs.writeFile(FILE_PATH, projectIDea, "utf-8")
// }




// // Serve index.html at root
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "index.html"));
// });


// app.post("/sendProjectIdea", (res, req) => {
//     const {email, projectidea} = req.body;

//     const 
// })

// // Example POST route
// app.post("/", express.json(), (req, res) => {
//   console.log("Received POST data:", req.body);
//   res.json({ message: "POST received" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Needed to parse JSON bodies

// Serve static files from parent directory
app.use(express.static(path.join(__dirname, "..")));

const FILE_PATH = path.join(__dirname, "projectideaContact.json");

// Check if file exists; if not, create an empty JSON array file
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify([]), "utf-8");
}

// Helper to read the file and parse JSON
const readFileProjectIdea = () => {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
};

// Helper to write the JSON array to the file
const writeFileProjectIdea = (projectIdeas) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(projectIdeas, null, 2), "utf-8");
};

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Handle POST to /sendProjectIdea
app.post("/sendProjectIdea", (req, res) => {
  const { email, projectidea } = req.body;

  if (!email || !projectidea) {
    return res.status(400).json({ error: "Email and project idea are required." });
  }

  try {
    const projectIdeas = readFileProjectIdea();

    // Add new project idea
    projectIdeas.push({ email, projectidea, date: new Date().toISOString() });

    writeFileProjectIdea(projectIdeas);

    res.json({ message: "Project idea saved successfully." });
  } catch (error) {
    console.error("Error writing project idea:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// const COntactFilePath = path.joins(__dirname, "./contact-us.json")

// if(!fs.existsSync(COntactFilePath)) {
//     fs.writeFileSync(COntactFilePath, JSON.stringify([]), "utf-8")
// }


// const ReadCOntactFIlePath = () => {
//    const data =  fs.readFileSync(COntactFilePath, "utf-8");
//    JSON.parse(data)
// }

// const WriteContactFilePath = () => {
//     const 
// }

// app.post("/contact-us", (req, res) => {
//     const {email, contact_subject} = req.body

// })




const ContactFilePath = path.join(__dirname, "contact-us.json");

// Create the file if it doesn't exist with an empty array
if (!fs.existsSync(ContactFilePath)) {
  fs.writeFileSync(ContactFilePath, JSON.stringify([]), "utf-8");
}

// Function to read the contact file and parse JSON
const readContactFile = () => {
  const data = fs.readFileSync(ContactFilePath, "utf-8");
  return JSON.parse(data);
};

// Function to write updated contact array to the file
const writeContactFile = (contacts) => {
  fs.writeFileSync(ContactFilePath, JSON.stringify(contacts, null, 2), "utf-8");
};

// Express POST route handler for "/contact-us"
app.post("/contact-us", (req, res) => {
  const { email, contact_subject } = req.body;

  if (!email || !contact_subject) {
    return res.status(400).json({ error: "Email and subject are required." });
  }

  try {
    const contacts = readContactFile();

    // Append new contact info with timestamp
    contacts.push({ email, contact_subject, date: new Date().toISOString() });

    writeContactFile(contacts);

    res.json({ message: "Contact info saved successfully." });
  } catch (err) {
    console.error("Error saving contact info:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Example POST route for root path (optional)
app.post("/", (req, res) => {
  console.log("Received POST data:", req.body);
  res.json({ message: "POST received" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// const express = require("express");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// const PORT = 5000;

// // Enable CORS if needed
// app.use(cors());

// // Serve static files from the root project folder (one level up)
// app.use(express.static(path.join(__dirname, "..")));

// // Also serve the 'public' folder at root (so favicon is accessible)
// app.use(express.static(path.join(__dirname, "..", "public")));

// // Serve index.html at root
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "index.html"));
// });

// // Optional: explicitly serve favicon (if you want)
// // You can use the 'serve-favicon' middleware for this
// const favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, "..", "public", "portfolio.ico")));

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });



// const express = require("express");
// const path = require("path");
// const favicon = require("serve-favicon");

// const app = express();
// const PORT = 5000;

// // Serve favicon explicitly
// app.use(favicon(path.join(__dirname, "..", "public", "portfolio.ico")));

// // Serve static files from the root folder (parent directory)
// app.use(express.static(path.join(__dirname, "..")));

// // Serve index.html at root route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
