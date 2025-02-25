const { ChatGroq } = require("@langchain/groq");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");
require("dotenv").config();
console.log("API Key:", process.env.GROQ_API_KEY);

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "mixtral-8x7b-32768",
  temperature: 0,
});

const run = async () => {
  const messages = [
    // new SystemMessage("Translate the following from English into Italian"),
    new SystemMessage("Can you teach me Italian language as a beginner"),
    new HumanMessage("hi!"),
  ];

  const response = await model.invoke(messages);
  console.log(response.content);
};

run();
