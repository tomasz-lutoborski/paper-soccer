<script lang="ts">
	import { settings } from '$lib/stores';
	let valid = false;
</script>

<div class="settings">
	<div class="settings__item">
		<label for="difficulty">Difficulty</label>
		<select name="difficulty" bind:value={$settings.difficulty}>
			<option value="easy">Easy</option>
			<option value="medium">Medium</option>
			<option value="hard">Hard</option>
		</select>
	</div>
	<div class="settings__item">
		<label for="height">Field size</label>
		<input
			name="height"
			id="height"
			type="number"
			bind:value={$settings.size.height}
			min="5"
			max="20"
			step="2"
		/>
	</div>
	<div class="settings__item">
		<label for="height">Field size</label>
		<input
			name="height"
			id="height"
			type="number"
			bind:value={$settings.size.width}
			min="6"
			max="20"
			step="2"
		/>
	</div>

	<button disabled={valid}>Start game</button>
</div>
