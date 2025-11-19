import HomeClient from "./home-client";
import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Page() {
  // Fetch singletons
  const hero = await sanityClient.fetch(`*[_type == "hero"][0]`);
  const about = await sanityClient.fetch(`*[_type == "about"][0]`);
  const gallery = await sanityClient.fetch(`*[_type == "gallery"][0]`);
  const location = await sanityClient.fetch(`*[_type == "location"][0]`);
  const contact = await sanityClient.fetch(`*[_type == "contact"][0]`);
  const header = await sanityClient.fetch(`*[_type == "header"][0]`);
  const footer = await sanityClient.fetch(`*[_type == "footer"][0]`);

  // Fetch repeatable documents
  const testimonials = await sanityClient.fetch(`*[_type == "testimonial"]`);

  return (
    <HomeClient
      data={{
        header,
        footer,

        hero: {
          ...hero,
          backgroundImage: hero?.backgroundImage
            ? urlFor(hero.backgroundImage).url()
            : null,
        },

        about,

        gallery: {
          ...gallery,
          images: gallery?.images?.map((img: any) => urlFor(img).url()),
        },
        testimonials,
        location,
        contact,
      }}
    />
  );
}
