import { GIPHY } from '../../config';
import { getOptions } from '../../options/options';

const REQUEST_CACHE = {};

function getRandomEntryIdFromCache(cacheKey) {
    const data = REQUEST_CACHE[cacheKey];
    if (!data) {
        return null;
    }
    return data[getRandomNumber(data.length - 1)].id;
}

export async function fetchGifIdFromGiphy() {
    const url = getGiphyUrl();
    url.search = await getGiphySearchParamsToUrl();
    const cacheKey = url.search;

    if (REQUEST_CACHE[cacheKey]) {
        return getRandomEntryIdFromCache(cacheKey);
    }

    const response = await fetch(url);
    const payload = await response.json();
    REQUEST_CACHE[cacheKey] = payload.data;
    return getRandomEntryIdFromCache(cacheKey);
}

function getGiphyUrl() {
    return new URL(GIPHY.url);
}

async function getGiphySearchParamsToUrl() {
    const searchParams = await getSearchParams();
    return new URLSearchParams(searchParams).toString();
}

async function getSearchParams() {
    const { giphyKeyword } = await getOptions();
    return {
        api_key: GIPHY.apiKey,
        q: giphyKeyword,
        lang: GIPHY.queryParams.language,
    };
}

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}
