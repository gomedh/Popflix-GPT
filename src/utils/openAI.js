import OpenAI from 'openai';

// Authorisation for api
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true // to allow the usage of api call from the client
});

export default openai;