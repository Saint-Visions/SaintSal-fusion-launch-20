import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY!,
  dangerouslyAllowBrowser: true, // Only for client-side usage
});

// Azure OpenAI configuration
export const azureOpenAI = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY!,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT!,
  defaultQuery: { "api-version": "2024-02-01" },
  defaultHeaders: {
    "api-key": process.env.AZURE_OPENAI_API_KEY!,
  },
});

export default openai;
