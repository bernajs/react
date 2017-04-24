import axios from 'axios'

const API_KEY = '5635176f5421921a9b056bb958db4543';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function selectBook(book) {
    return {type: 'BOOK_SELECTED', payload: book}
}

export function selectCard(card) {
    return {type: 'CARD_SELECTED', payload: card}
}

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {type: FETCH_WEATHER, payload: request}
}