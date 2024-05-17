"use server";
import OpenAI from "openai";
const openai = new OpenAI();

export const text_generation = async (prompt) => {
  const result = await openai.chat.completions.create({
    messages: [{ role: "assistant", content: prompt }],
    model: "gpt-4o",
  });
  console.log(result.choices[0]);
  return result.choices[0].message.content;
};
