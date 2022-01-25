import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		target: '#root',
		adapter: adapter({ fallback: "index.html" }),
		vite: {
			ssr: {
				external: ['firebase']
			}
		}
	}
};

export default config;
