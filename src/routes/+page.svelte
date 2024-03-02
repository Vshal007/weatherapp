<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { weatherService } from '../lib/weatherService';
	import SearchBar from '../components/SearchBar.svelte';
	import WeatherCard from '../components/WeatherCard.svelte';
	import WeatherForecast from '../components/WeatherForecast.svelte';

	let locationWeather: any = null;
	let forecast: any[] = [];
	const dispatch = createEventDispatcher();

	const searchLocation = async (city: string) => {
		locationWeather = await weatherService.getCurrentWeather(city);
		forecast = await weatherService.getForecast(city);
	};

	const handleSearch = (event: CustomEvent<string>) => {
		searchLocation(event.detail);
	};

	$: {
		if (locationWeather) {
			console.log(locationWeather);
		}
		if (forecast) {
			console.log(forecast);
		}
	}
</script>

<div class="w-full h-full text-white">
	<div class="flex w-full justify-center">
		<p class="p-5 text-rose-400 text-lg">
			Enter the name of the city to know about its weather. For example: Delhi.
		</p>
	</div>
	<div class="flex w-full justify-center">
		<svelte:component this={SearchBar} on:search={handleSearch} />
	</div>
	{#if locationWeather}
		<div class="flex w-full justify-center">
			<h1 class="text-3xl p-5">Current Weather</h1>
		</div>
		<div class="flex w-full justify-center">
			<WeatherCard weatherData={locationWeather} />
		</div>
		<div class="flex w-full justify-center">
			<h1 class="text-3xl p-5">Forecast</h1>
		</div>
	{/if}

	{#if forecast.length > 0}
		<WeatherForecast forecastData={forecast} />
	{/if}
</div>
