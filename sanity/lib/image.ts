import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

export const urlFor = (source: any) =>
  imageUrlBuilder(sanityClient).image(source);
