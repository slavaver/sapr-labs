import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
    site: "https://slavaver.github.io",
    base: "/sapr-labs",
    integrations: [
        starlight({
            title: "Веб-разработка",
            social: [
                {
                    icon: "github",
                    label: "github",
                    href: "https://github.com/slavaver/sapr-labs",
                },
            ],
            sidebar: [
                {
                    label: "Полезное",
                    items: [{ autogenerate: { directory: "useful" } }],
                },
                {
                    label: "2026",
                    collapsed: true,
                    items: [{ autogenerate: { directory: "2026" } }],
                },
                {
                    label: "2025",
                    collapsed: true,
                    items: [{ autogenerate: { directory: "2025" } }],
                },
                {
                    label: "2024",
                    collapsed: true,
                    items: [{ autogenerate: { directory: "2024" } }],
                },
                {
                    label: "2023",
                    collapsed: true,
                    items: [{ autogenerate: { directory: "2023" } }],
                },
                {
                    label: "2022",
                    collapsed: true,
                    items: [{ autogenerate: { directory: "2022" } }],
                },
            ],
        }),
    ],
});
