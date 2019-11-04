import { IPRWeigts } from "./program/types";

export const SET_LANGUAGE = "INCREMENT_ENTHUSIASM";
export type SET_LANGUAGE = typeof SET_LANGUAGE;

export const SET_COUNTRY = "SET_COUNTRY";
export type SET_COUNTRY = typeof SET_COUNTRY;

export const AUTHENTICATE = "AUTHENTICATE";
export type AUTHENTICATE = typeof AUTHENTICATE;

export const defaultWeights: IPRWeigts = { snatch: 62, clean: 90 };
