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

<div class="w-full h-full items-center justify-center">
	<svelte:component this={SearchBar} on:search={handleSearch} />

	{#if locationWeather}
		<WeatherCard weatherData={locationWeather} />
	{/if}

	{#if forecast.length > 0}
		<WeatherForecast forecastData={forecast} />
	{/if}
</div>
