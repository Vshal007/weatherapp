<!-- <script lang="ts">
	export let weatherData: any;
</script>

<div class="p-4 border border-gray-300 rounded-md">
	<h2 class="text-xl font-semibold">{weatherData.locationName}</h2>
	<p>Temperature: {weatherData.temp}°F</p>
	<p>Description: {weatherData.description}</p>
	<p>Wind Speed: {weatherData.windSpeed} mph</p>
	<p>Humidity: {weatherData.humidity}%</p>
	<p>UV Index: {weatherData.uvIndex}</p>
</div> -->

<script lang="ts">
	export let weatherData: any;
</script>

<div
	class=" flex sm:flex-row flex-col items-center justify-center gap-12 p-4 duration-500 border border-gray-300 rounded-md lg:w-[50%] md:w-[60%] w-[95%] hover:shadow-md hover:shadow-purple-500 text-amber-400 hover:cursor-pointer"
>
	<div class="p-5 sm:w-[40%] w-full">
		<img
			src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/6231688b36311be3ed337868e322258c1cb5f2f3/SVG/2nd%20Set%20-%20Color/{weatherData.icon}.svg"
			alt="icon"
			class="h-28"
		/>
	</div>
	<div class="px-5 sm:w-[60%] w-full">
		<h2 class="text-xl font-bold text-pink-600">{weatherData.locationName}</h2>
		<p>Temperature: {weatherData.temp}°F</p>
		<p>Description: {weatherData.description}</p>
		<p>Wind Speed: {weatherData.windSpeed} mph</p>
		<p>Humidity: {weatherData.humidity}%</p>
		<p>UV Index: {weatherData.uvIndex}</p>
	</div>
</div>
