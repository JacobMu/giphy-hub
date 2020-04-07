import { GIPHY } from '../../config';

export function fetchGifIdFromGiphy() {
    const url = getGiphyUrl();
    url.search = getGiphySearchParamsToUrl();

    return fetch(url)
        .then(response => response.json())
        .then(payload => payload.data[getRandomNumber(payload.data.length)].id);
}

function getGiphyUrl() {
    return new URL(GIPHY.url);
}

function getGiphySearchParamsToUrl() {
    return new URLSearchParams(getSearchParams()).toString();
}

function getSearchParams() {
    return {
        api_key: GIPHY.apiKey,
        q: GIPHY.queryParams.searchQuery,
        lang: GIPHY.queryParams.language,
    };
}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) - 1;
}
