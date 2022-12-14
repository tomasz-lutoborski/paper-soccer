<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d')!;
		ctx.fillStyle = 'red';
		ctx.fillRect(0, 0, 32, 32);
	});
</script>

<canvas bind:this={canvas} width="32" height="32" />
