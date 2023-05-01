import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "y7wh3bik",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
