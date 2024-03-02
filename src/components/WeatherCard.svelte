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
	class="p-4 duration-500 border border-gray-300 rounded-md w-[50%]  hover:shadow-md hover:shadow-purple-500 text-amber-400 hover:cursor-pointer"
>
	<h2 class="text-xl font-semibold text-green-400">{weatherData.locationName}</h2>
	<p>Temperature: {weatherData.temp}°F</p>
	<p>Description: {weatherData.description}</p>
	<p>Wind Speed: {weatherData.windSpeed} mph</p>
	<p>Humidity: {weatherData.humidity}%</p>
	<p>UV Index: {weatherData.uvIndex}</p>
</div>
