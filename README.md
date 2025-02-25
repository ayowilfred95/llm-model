# Groq API Call and LLM Integration

This project demonstrates how to interact with the **Groq API** using **LangChain.js** for LLM-based conversational AI. The code initializes a Groq LLM model and processes user messages for AI-driven responses.

## 📌 Features
- Calls **Groq API** for LLM-based text generation
- Uses **LangChain.js** for message structuring
- Implements environment variable management

## 🛠️ Installation & Setup
### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### **2. Install Dependencies**
Make sure you have **Node.js** installed, then run:
```sh
npm install
```

### **3. Set Up Environment Variables**
Create a `.env` file in the project root and add:
```sh
GROQ_API_KEY=your_api_key_here
```
Replace `your_api_key_here` with your actual Groq API key.

## 🚀 Usage
Run the script using:
```sh
node groq.js
```

## 📄 Example Code
### **groq.js**
```javascript
const { ChatGroq } = require("@langchain/groq");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");
require("dotenv").config();

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "mixtral-8x7b-32768",
  temperature: 0,
});

const run = async () => {
  const messages = [
    new SystemMessage("Can you teach me Italian as a beginner"),
    new HumanMessage("Hi!"),
  ];

  const response = await model.invoke(messages);
  console.log(response.content);
};

run();
```
