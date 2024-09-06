import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { apiVersion, dataset, projectId } from "../env";
import { groq } from "next-sanity"; // Importa groq para consultas

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const builder = createImageUrlBuilder(client);
export { groq }; // Exporta groq para ser usado en las consultas

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
