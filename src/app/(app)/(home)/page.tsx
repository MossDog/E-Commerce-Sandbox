import configPromise from "@payload-config";
import { getPayload } from "payload";

/**
 * Asynchronously fetches category data and renders it as formatted JSON within a React component.
 *
 * Retrieves all entries from the "categories" collection using the Payload CMS API and displays the result in a `<div>`.
 *
 * @returns A React element containing the formatted JSON data for all categories.
 */
export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
  });

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
