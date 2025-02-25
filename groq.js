const axios = require("axios");
require("dotenv").config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const fetchGroqResponse = async () => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "mixtral-8x7b-32768",
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: "Can you teach me Italian as a beginner?" },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Groq Response:", response.data.choices[0].message.content);
  } catch (error) {
    console.error(
      "Error fetching Groq API:",
      error.response ? error.response.data : error.message
    );
  }
};

fetchGroqResponse();

