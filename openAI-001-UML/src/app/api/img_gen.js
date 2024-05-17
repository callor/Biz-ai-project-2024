"use server";
import OpenAI from "openai";
const openai = new OpenAI();

const image_generation = async (prompt) => {
  const result = openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    n: 1,
    response_format: "b64_json",
  });
  return result.data[0].b64_json;
};
