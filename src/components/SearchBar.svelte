<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let cityName = '';

	const search = () => {
		// Trigger an event to notify the parent component (index.svelte)

		console.log(cityName); // Check if cityName is set correctly
		dispatch('search', cityName);
	};
</script>

<div>
	<input
		type="text"
		placeholder="Enter city name"
		bind:value={cityName}
		class="px-4 py-2 rounded-md mr-2 bg-slate-600"
	/>
	<button on:click={search} class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800"
		>Search</button
	>
</div>
