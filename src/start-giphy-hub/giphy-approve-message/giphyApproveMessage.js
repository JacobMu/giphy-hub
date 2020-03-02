import $ from 'cash-dom';
import { getReviewCommentFormField, getApproveCheckbox } from './giphyApproveMessageService';
import { fetchGifIdFromGiphy } from './giphyApproveMessageApi';

export function appendGiphyToTextArea() {
    if (!getReviewCommentFormField()) {
        return;
    }
    $(handleInsertingApproveMessage());
}

function handleInsertingApproveMessage() {
    return $(getApproveCheckbox()).on('change', handleChangeCheckbox);
}

function handleChangeCheckbox() {
    return fetchGifIdFromGiphy();
}
