import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        aktiv: ['Aktiv Grotesk', 'sans-serif'],
        domaine: ['Domaine Display', 'serif'],
        haikus: ['Haikus Script', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
