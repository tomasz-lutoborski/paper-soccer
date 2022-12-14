<script lang="ts">
	import { user } from '$lib/stores';
	import { getUserFromLocalStorage, addUserToLocalStorage } from '$lib/utils';
	let username = 'Guest';

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		let name = ((event.target as HTMLFormElement)[0] as HTMLInputElement).value;
		if (getUserFromLocalStorage(name)) {
			user.set(getUserFromLocalStorage(name));
		} else {
			let newUser = {
				name: name,
				score: 0
			};
			addUserToLocalStorage(newUser);
			user.set(newUser);
		}
	}
</script>

<div class="container">
	<form on:submit={handleSubmit}>
		<input type="text" name="username" bind:value={username} />
		<button type="submit">change user</button>
	</form>
	<div class="current-user">
		<p>Current user: <span>{$user.name}</span></p>
		<p>Score: <span>{$user.score}</span></p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 5rem;
	}

	.current-user {
		display: flex;
		flex-direction: column;
	}

	.current-user p {
		margin: 0;
		font-size: 1.2rem;
	}

	.current-user span {
		font-weight: bold;
		font-size: 1.4rem;
	}

	button {
		background: var(--orange-peel);
		color: var(--white);
		border: 4px solid var(--yellow-orange-color-wheel);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
		height: 4rem;
		transition: all 0.2s ease-in-out;
	}

	input {
		border: 4px solid var(--yellow-orange-color-wheel);
		height: 4rem;
		color: var(--russian-violet);
		padding: 0 1rem;
		border-radius: 0.5rem;
		background-color: var(--orange-background);
		transition: all 0.2s ease-in-out;
	}

	input:focus {
		outline: none;
		background-color: var(--orange-peel);
	}

	form {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	button:hover {
		background: var(--yellow-orange-color-wheel);
		color: var(--russian-violet);
	}
</style>
