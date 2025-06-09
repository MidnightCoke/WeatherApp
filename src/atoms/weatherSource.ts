import { atom } from "jotai";
import { WeatherSource } from "../types/weather-source";

export const weatherSourceAtom = atom<WeatherSource>(null);
