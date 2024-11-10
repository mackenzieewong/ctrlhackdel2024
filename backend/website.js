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

    // Prepare the prompt by joining relevant content (adjust as needed)
    const prompt = content.join('\n');

    // Make a request to OpenAI
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Reply only with "true" or "false"; do not write anything else: Is this a productive website? Productive means that it has words you would see in a productive website (like one people would use to learn something educational). Also, give me a list of words associated with unproductive websites (like games, and uneducational content used for fun and entertainment). Here's the list: ${prompt}`,
        },
      ],
      model: 'gpt-4o-mini',
    });

    // Extract the response and parse it to get a boolean
    const response = chatCompletion.choices[0].message.content.trim().toLowerCase();

    // Check if the response is 'true' or 'false' and send as a boolean
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