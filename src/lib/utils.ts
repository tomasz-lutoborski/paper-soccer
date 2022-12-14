import type { User } from './types';

export function addUserToLocalStorage(user: User) {
	localStorage.setItem(user.name, JSON.stringify(user));
}

export function getUserFromLocalStorage(username: string) {
	const user = localStorage.getItem(username);
	if (!user) {
		return null;
	} else {
		return JSON.parse(localStorage.getItem(username)!);
	}
}

export function updateUserInLocalStorage(user: User) {
	localStorage.setItem(user.name, JSON.stringify(user));
}
