import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.NEXT_PUBLIC_ORGANIZATION,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

const openai = new OpenAIApi(configuration);
const response = openai.listEngines();
export const sendMessage = (message: string) => {
  openai
    .createCompletion({
      model: "text-davinci-002",
      prompt: message,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((result) => {
      console.log(result.data.choices[0].text);
    });
};

const DEFAULT_PARAMS = {
  model: "text-davinci-002",
  prompt: "",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

export async function query(message: string) {
  const params_ = { ...DEFAULT_PARAMS, prompt: message };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(process.env.NEXT_PUBLIC_API_KEY),
    },
    body: JSON.stringify(params_),
  };
  const response = await fetch(
    "https://api.openai.com/v1/completions",
    requestOptions
  );
  const data = await response.json();

  return data.choices[0].text;
}
