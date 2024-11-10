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
          "content": `Pretend you're a human looking at my computer screen in this situation. Only act one way. Act "cool" and "encouraging" if I'm doing something fun and cool or Act "annoying" if I'm doing something useful, educational, and not fun.`
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

app.post('/judge-productive', async (req, res) => {
  try {
    const { content } = req.body;

    const prompt = content.join('\n');

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Reply only with "true" or "false"; do not write anything else: Productive means that it has words related to learning something educational and not done for fun. Unproductive websites are like games and fun content used for entertainment). Do these words: ${prompt} indicate a productive website?`,
        },
      ],
      model: 'gpt-4o-mini',
    });

    const response = chatCompletion.choices[0].message.content.trim().toLowerCase();

    if (response === 'true') {
      return res.json({ response: true });
    } else if (response === 'false') {
      return res.json({ response: false });
    } else {
      throw new Error('Unexpected response from OpenAI');
    }
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).json({ error: 'Failed to process content' });
  }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});