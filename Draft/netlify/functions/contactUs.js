// netlify/functions/contactUs.js
const fs = require("fs");
const path = require("path");

const FILE_PATH = path.resolve(__dirname, "contact-us.json");

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

  const { email, contact_subject } = body;

  if (!email || !contact_subject) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email and subject are required." }),
    };
  }

  let contacts = [];
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, "utf-8");
      contacts = JSON.parse(data);
    }
  } catch (err) {
    // ignore and continue with empty array
  }

  contacts.push({ email, contact_subject, date: new Date().toISOString() });

  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(contacts, null, 2), "utf-8");
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to save data" }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Contact info saved successfully." }),
  };
};
