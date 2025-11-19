import { type SchemaTypeDefinition } from "sanity";
import hero from "./hero";
import about from "./about";
import gallery from "./gallery";
import testimonial from "./testimonials";
import location from "./location";
import contact from "./contact";
import footer from "./footer";
import header from "./header";

export const schemaTypes = [
  hero,
  about,
  gallery,
  testimonial,
  location,
  contact,
  footer,
  header,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
