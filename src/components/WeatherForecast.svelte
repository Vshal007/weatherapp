<script lang="ts">
	export let forecastData: any[];
</script>

<div class="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 my-5">
	{#each forecastData as day}
		<div
			class="p-4 flex items-center gap-12 border border-gray-300 rounded-md duration-500 hover:shadow-md hover:shadow-fuchsia-400 text-cyan-400 hover:cursor-pointer"
		>
			<div class="px-5 w-[60%]">
				<h3 class="font-semibold text-pink-500">{day.date}</h3>
				<p>Temperature: {day.temp}°F</p>
				<p>Description: {day.description}</p>
				<p>Wind Speed: {day.windSpeed} mph</p>
				<p>Humidity: {day.humidity}%</p>
				<p>UV Index: {day.uvIndex}</p>
			</div>
			<div class="px-5 w-[40%]">
				<img
					src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/6231688b36311be3ed337868e322258c1cb5f2f3/SVG/2nd%20Set%20-%20Color/{day.icon}.svg"
					alt="icon"
					class="h-28"
				/>
			</div>
		</div>
	{/each}
</div>
