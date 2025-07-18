import OpenAI from "openai";

// Standard OpenAI
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Azure OpenAI
export const azureOpenAI = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY!,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT!,
  defaultQuery: { "api-version": "2024-02-01" },
  defaultHeaders: {
    "api-key": process.env.AZURE_OPENAI_API_KEY!,
  },
});

// OpenAI Admin
export const openaiAdmin = new OpenAI({
  apiKey: process.env.OPENAI_ADMIN_KEY!,
});

// Search API
export const openaiSearch = new OpenAI({
  apiKey: process.env.OPENAI_SEARCH_API_KEY!,
});
