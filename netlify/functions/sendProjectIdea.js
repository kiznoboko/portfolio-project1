// netlify/functions/sendProjectIdea.js
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.resolve(__dirname, "projectideaContact.json");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { email, projectidea } = body;

  if (!email || !projectidea) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email and project idea are required." }),
    };
  }

  let projectIdeas = [];
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, "utf-8");
      projectIdeas = JSON.parse(data);
    }
  } catch (err) {
    // ignore and continue with empty array
  }

  projectIdeas.push({ email, projectidea, date: new Date().toISOString() });

  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(projectIdeas, null, 2), "utf-8");
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to save data" }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Project idea saved successfully." }),
  };
};
