import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "trnh7iro",
  dataset: "production",
  useCdn: "true",
});
