import $ from 'cash-dom';
import { getReviewCommentFormField } from './startGiphyHubService';
import { DOM_ELEMENTS, API_KEY } from '../config';

function getApproveCheckbox() {
    return DOM_ELEMENTS.FORM_CHECKBOX.APPROVE;
}

export function appendGiphyToApproveCheckbox() {
    return $(getApproveCheckbox).ready(appendChangeEventHandler);
}

function appendChangeEventHandler() {
    return $(getApproveCheckbox()).on('change', function() {
        if (!this.checked) {
            return null;
        }
        renderReviewMessage();
    });
}

function renderReviewMessage() {
    if (!getReviewCommentFormField()) {
        return null;
    }
    // return getReviewCommentFormField().text(`[LGTM!](${getGiphyUrl()})`);
    fetchGiphyData().then(url => getReviewCommentFormField().text(`[LGTM!](${url})`));
}

function fetchGiphyData() {
    const url = getURL();
    url.search = new URLSearchParams(getSearchParams()).toString();

    return fetch(url)
        .then(response => response.json())
        .then(payload => payload.data[0].url)
        .catch(error => new Error(error));
}

function getSearchParams() {
    return {
        api_key: API_KEY,
        q: 'great-job',
        limit: 1,
        offset: 5,
        lang: 'en',
    };
}

function getURL() {
    return new URL('https://api.giphy.com/v1/gifs/search');
}
