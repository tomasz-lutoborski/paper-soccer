<script>
	import User from './User.svelte';
</script>

<header>
	<h2>paper soccer</h2>
	<User />
</header>

<style>
	header {
		background: var(--orange-background);
		padding: 1rem 5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	h2 {
		color: var(--russian-violet);
	}
</style>
