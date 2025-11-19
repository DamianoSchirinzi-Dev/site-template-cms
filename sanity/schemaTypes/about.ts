export default {
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "text", type: "text" },
    {
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
          ],
        },
      ],
    },
  ],
};