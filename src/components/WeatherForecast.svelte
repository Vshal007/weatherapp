<script lang="ts">
	export let forecastData: any[];
</script>

<div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 my-5">
	{#each forecastData as day}
		<div
			class="p-4 border border-gray-300 rounded-md duration-500 hover:shadow-md hover:shadow-white"
		>
			<h3 class="font-semibold">{day.date}</h3>
			<p>Temperature: {day.temp}°F</p>
			<p>Description: {day.description}</p>
			<p>Wind Speed: {day.windSpeed} mph</p>
			<p>Humidity: {day.humidity}%</p>
			<p>UV Index: {day.uvIndex}</p>
		</div>
	{/each}
</div>
