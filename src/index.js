import $ from 'cash-dom';

import { startGiphyHubExtensions } from './start-giphy-hub/startGiphyHub.js';
import {
    getApproveCheckbox,
    getReviewCommentFormField,
} from './start-giphy-hub/giphy-approve-message/giphyApproveMessageService';

chrome.runtime.onMessage.addListener(function(request) {
    if (request.isTabLoaded) {
        clearInputField();
        startGiphyHubExtensions();
    }
});

document.addEventListener('click', clearInputField);

function clearInputField() {
    const approveCheckbox = getApproveCheckbox();
    if (approveCheckbox.length && approveCheckbox[0].checked) {
        $(getReviewCommentFormField()).val('');
    }
}
