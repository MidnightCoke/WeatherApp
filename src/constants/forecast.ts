export interface Forecast {
  list: ForecastItem[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  country: string;
  coord: {
    lat: number;
    lon: number;
  };
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
  };
  visibility?: number;
}
