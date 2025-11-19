import { createClient } from "@sanity/client";
import { clientConfig } from "../config/client-config";

export const sanityClient = createClient(clientConfig);