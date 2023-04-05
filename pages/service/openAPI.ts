import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.NEXT_PUBLIC_ORGANIZATION,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
