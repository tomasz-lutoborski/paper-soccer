import { writable } from 'svelte/store';

export const user = writable({
	name: 'Guest',
	score: 0
});

export const settings = writable({
	difficulty: 'easy',
	size: { width: 10, height: 10 }
});

export const game = writable({
	running: false,
	turn: 'user'
});
