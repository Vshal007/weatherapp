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

<div class="items-center m-auto">
	<input
		type="text"
		placeholder="Enter city name"
		bind:value={cityName}
		class="px-4 py-2 border border-gray-300 rounded-md mr-2"
	/>
	<button on:click={search} class="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
</div>
