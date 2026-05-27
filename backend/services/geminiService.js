const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

const generateResponse = async (message) => {

    try {

        const result = await model.generateContent(message);

        const response = result.response.text();

        return response;

    } catch (error) {

        console.log(error);

        throw new Error("Gemini API Error");
    }
};

module.exports = {
    generateResponse
};