export const PRECIPITATION_TYPES = {
  Clear: ["Sunny", "Clear"],
  Cloudy: ["Partly cloudy", "Cloudy", "Overcast"],
  Fog: ["Mist", "Fog", "Freezing fog"],
  Rain: [
    "Patchy rain possible",
    "Patchy light rain",
    "Light rain",
    "Moderate rain at times",
    "Moderate rain",
    "Heavy rain at times",
    "Heavy rain",
    "Light rain shower",
    "Moderate or heavy rain shower",
    "Torrential rain shower"
  ],
  Snow: [
    "Patchy snow possible",
    "Patchy light snow",
    "Light snow",
    "Patchy moderate snow",
    "Moderate snow",
    "Patchy heavy snow",
    "Heavy snow",
    "Blowing snow",
    "Blizzard",
    "Light snow showers",
    "Moderate or heavy snow showers"
  ],
  Sleet: [
    "Patchy sleet possible",
    "Light sleet",
    "Moderate or heavy sleet",
    "Light sleet showers",
    "Moderate or heavy sleet showers"
  ],
  Freezing: [
    "Patchy freezing drizzle possible",
    "Freezing drizzle",
    "Heavy freezing drizzle",
    "Light freezing rain",
    "Moderate or heavy freezing rain"
  ],
  Ice: [
    "Ice pellets",
    "Light showers of ice pellets",
    "Moderate or heavy showers of ice pellets"
  ],
  Thunder: [
    "Thundery outbreaks possible",
    "Patchy light rain with thunder",
    "Moderate or heavy rain with thunder",
    "Patchy light snow with thunder",
    "Moderate or heavy snow with thunder"
  ]
};


export const getPrecipitationType = (condition: string): string | undefined => {
  for (const [type, names] of Object.entries(PRECIPITATION_TYPES)) {
      if (names.includes(condition)) {
          return type;
      }
  }
  return undefined;
};