import { APPROVAL_COMMENT, GIPHY } from '../../config';
import { getReviewCommentFormField } from './giphyApproveMessageService';

export function fetchGifIdFromGiphy() {
    const url = getGiphyUrl();
    url.search = getGiphySearchParamsToUrl();

    return fetch(url)
        .then(response => response.json())
        .then(payload => payload.data[getRandomNumber()].id)
        .then(id => getReviewCommentFormField().val(getApprovalMessage(id)))
        .catch(error => new Error(error));
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

function getRandomNumber() {
    return Math.round(Math.random() * 10) - 1;
}

function getApprovalMessage(id) {
    return `${APPROVAL_COMMENT}/${id}/giphy.gif)`;
}
