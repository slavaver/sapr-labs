import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Веб-разработка',
			social: {
				github: 'https://github.com/slavaver/sapr-labs',
			},
			sidebar: [
				{
					label: 'Полезное',
					autogenerate: { directory: 'useful' },
				},
				{
					label: '2025',
					autogenerate: { directory: '2025' },
				},
				{
					label: '2024',
					autogenerate: { directory: '2024' },
					collapsed: true
				},
				{
					label: '2023',
					autogenerate: { directory: '2023' },
					collapsed: true
				},
				{
					label: '2022',
					autogenerate: { directory: '2022' },
					collapsed: true
				}
			],
		}),
	],
});
