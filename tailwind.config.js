import franken from 'franken-ui/shadcn-ui/preset-quick';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [franken()],
	content: ['./**/*.html', './**/*.templ', './**/*.go', './static/*.js'],
	safelist: [
		{
			pattern: /^uk-/
		},
		'ProseMirror',
		'ProseMirror-focused',
		'tiptap'
	],
	theme: {
		extend: {}
	},
	plugins: []
};
