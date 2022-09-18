import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const theme = writable<string | null>();
export function switchTheme() {
	theme.update((t) => {
		if (t === 'dark') {
			return 'light';
		} else {
			return 'dark';
		}
	});
}

if (browser) {
	const t = localStorage.getItem('theme') ?? defaultTheme();
	theme.set(t);
	theme.subscribe((t) => {
		document.body.classList.toggle('dark', t === 'dark');
		localStorage.setItem('theme', t);
	});
}

function defaultTheme() {
	const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (dark) {
		return 'dark';
	} else {
		return 'light';
	}
}
