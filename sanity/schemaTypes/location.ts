export default {
  name: "location",
  title: "Location Section",
  type: "document",
  fields: [
    { name: "address", type: "text" },
    { name: "phone", type: "string" },
    { name: "email", type: "string" },
    { name: "hours", type: "array", of: [{ type: "string" }] },
  ],
};