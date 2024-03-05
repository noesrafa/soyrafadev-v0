import tailwind from "@astrojs/tailwind";
import { defineConfig, passthroughImageService } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  image: {
    service: passthroughImageService(),
  },
});
