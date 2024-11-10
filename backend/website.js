import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.post('/process-content', async (req, res) => {
  try {
    const { content } = req.body;


    const prompt = content.join('\n');


    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          "role": "system", 
          "content": `Pretend you're a human looking at my computer screen in this situation. Only act one way. Act "cool" and "encouraging" if I'm doing something fun and cool or Act "annoying" if I'm doing something useful, educational, and productive.`
        },
        {
          role: 'user',
          content: `Imagine the website has these words : ${prompt}. Hey come look at what I'm doing.`,
        },
      ],
      model: 'gpt-4o-mini',
    });


    const responseMessage = chatCompletion.choices[0].message.content.trim();

    return res.json({
      response: responseMessage,
    });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).json({ error: 'Failed to process content' });
  }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});