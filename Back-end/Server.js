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


const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());

// Serve static files (CSS, images, HTML) from parent directory
app.use(express.static(path.join(__dirname, "..")));

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Example POST route
app.post("/", express.json(), (req, res) => {
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
