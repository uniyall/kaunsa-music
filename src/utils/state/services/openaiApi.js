import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import OpenAI from "openai";
import {
  OPENAI_AUTOCOMPLETION_INSTRUCTIONS,
  OPENAI_SUGGESTIONS_INSTRUCTIONS,
} from "../../constants";

const openai = new OpenAI({
  organization: import.meta.env.VITE_OPENAI_ORG_ID,
  project: import.meta.env.VITE_OPENAI_PROJECT_ID,
  dangerouslyAllowBrowser: true,
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export const openaiApi = createApi({
  reducerPath: "openaiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    fetchSearchAutoCompletions: builder.query({
      async queryFn(args, queryApi, _extraOptions, fetchWithBQ) {
        const res = await openai.chat.completions.create({
          messages: [
            { role: "system", content: OPENAI_AUTOCOMPLETION_INSTRUCTIONS },
            {
              role: "user",
              content: args,
            },
          ],
          model: "gpt-4o-mini",
          response_format: {
            type: "json_object",
          },
        });

        console.log(res);
        return { data: JSON.parse(res.choices[0].message.content) };
      },
    }),
    fetchSongsRecommendation: builder.query({
      async queryFn(args, queryApi, _extraOptions, fetchWithBQ) {
        const res = await openai.chat.completions.create({
          messages: [
            { role: "system", content: OPENAI_SUGGESTIONS_INSTRUCTIONS },
            {
              role: "user",
              content: args,
            },
          ],
          model: "gpt-4o-mini",
          response_format: {
            type: "json_object",
          },
        });

        console.log(res);
        return { data: JSON.parse(res.choices[0].message.content) };
      },
    }),
  }),
});
