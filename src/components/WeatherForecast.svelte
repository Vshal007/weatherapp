<script lang="ts">
	export let forecastData: any;
</script>

<div class="grid grid-cols-5 gap-4">
	{#each forecastData as day}
		<div class="p-4 border border-gray-300 rounded-md">
			<h3 class="font-semibold">{day.date}</h3>
			<p>Temperature: {day.temp}°F</p>
			<p>Description: {day.description}</p>
			<p>Wind Speed: {day.windSpeed} mph</p>
			<p>Humidity: {day.humidity}%</p>
		</div>
	{/each}
</div>
