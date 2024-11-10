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





    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          "role": "system", 
          "content": `Read these instructions and understand them. Only acknowledge that you've understood in your attitude. I will present a URL to a website. You must act with whether or not you think that URL is "productive" or "distracting". Productive means that the URL is related to learning something educational and not done for fun. Distracting websites are like games and fun content used for entertainment. Act annoying and belittle me if you decide it is "productive". Otherwise, act encouraging and cool if you decide it is "distracting". You cannot act both annoying and cool.`
        },
        {
          role: 'user',
          content: `URL: ${content}`,
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

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Reply only with "productive" or "distracting"; do not write anything else: Productive means that the URL is related to learning something educational and not done for fun. Distracting websites are like games and fun content used for entertainment. Does ${content} indicate a productive or distracting website?`,
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