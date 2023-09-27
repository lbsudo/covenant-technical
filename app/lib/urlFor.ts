import config from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(config);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
