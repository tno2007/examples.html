import type { Config } from "tailwindcss";
import FormKitVariants from "@formkit/themes/tailwindcss";

export default {
  content: ["./tailwind-theme.js"],
  theme: {
    extend: {},
  },
  plugins: [FormKitVariants],
} satisfies Config;
