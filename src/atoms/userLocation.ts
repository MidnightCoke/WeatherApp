import { atom } from "jotai";
import { CustomLocation } from "../types/location";

export const userLocationAtom = atom<CustomLocation | null>(null);