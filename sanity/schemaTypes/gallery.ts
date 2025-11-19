export default {
  name: "gallery",
  title: "Gallery Section",
  type: "document",
  fields: [
    {
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};