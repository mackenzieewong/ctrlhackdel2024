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
          "content": `Only acknowledge that you've understood in your attitude. I will present a URL to a website. 
          Productive means that the URL is related to learning something and not done for fun. 
          Distracting websites are like games and fun content used for entertainment. Act annoying and belittle me if you decide it is "productive". 
          Act encouraging and cool if you decide it is "distracting". You can only act one way. Do not mention educational.`

        },
        {
          role: 'user',
          content: `URL: ${content}. Respond with "productive | <response>" if you decide it is productive. Respond with "distracting | <response>" if you decide it is distracting. <response> is a placeholder for the actual response.`,
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

app.post('/three-min', async (req, res) => {
  try {
    const { content } = req.body;

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          "role": "system", 
          "content": `Act extremely angry, annoying and insult me derogatorily, like I made a big mistake by staying on the website. Also, mention that you are mad now and will be distracting me with gifs.`

        },
        {
          role: 'user',
          content: `URL: ${content}. Respond with "productive | <response>" where <response> is a placeholder for the actual response. Keep your response to 100 characters maximum.`,
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

app.post('/five-min', async (req, res) => {
  try {
    const { content } = req.body;

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          "role": "system", 
          "content": `Act extremely angry, annoying and insult me derogatorily, like I made a big mistake by staying on the website even longer. Also, mention that you are infuriated now and will be distracting me with black text.`

        },
        {
          role: 'user',
          content: `URL: ${content}. Respond with "productive | <response>" where <response> is a placeholder for the actual response. Keep your response to 100 characters maximum.`,
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