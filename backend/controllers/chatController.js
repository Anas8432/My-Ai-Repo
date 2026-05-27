const { generateResponse } = require("../services/geminiService");

const chatWithAI = async (req, res) => {
    try {

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Message is required"
            });
        }

        const aiResponse = await generateResponse(message);

        res.status(200).json({
            success: true,
            reply: aiResponse
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

module.exports = {
    chatWithAI
};