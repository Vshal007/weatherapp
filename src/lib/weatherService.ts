const weatherService = {
  getCurrentWeather: async (city: string) => {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=6U4WGAH7RT9B5FW3YM8VFD52K&contentType=json`);
    const data = await response.json();

    const currentConditions = data.currentConditions;

    return {
      locationName: data.resolvedAddress,
      temp: currentConditions.temp,
      description: currentConditions.conditions,
      windSpeed: currentConditions.windspeed,
      humidity: currentConditions.humidity,
      uvIndex: currentConditions.uvindex,
      icon: currentConditions.icon,
    };
  },

  getForecast: async (city: string) => {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=6U4WGAH7RT9B5FW3YM8VFD52K&contentType=json`);
    const data = await response.json();

    const forecast = data.days.map((day: any) => ({
      date: day.datetime,
      temp: day.temp,
      description: day.description,
      windSpeed: day.windspeed,
      humidity: day.humidity,
      uvIndex: day.uvindex,
      icon: day.icon,
    }));

    return forecast;
  },
};

export { weatherService };
