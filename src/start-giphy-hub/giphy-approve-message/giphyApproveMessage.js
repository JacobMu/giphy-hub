import $ from 'cash-dom';
import {
    getReviewCommentFormField,
    registerChangeHandler,
    registerClickHandler,
} from './giphyApproveMessageService';
import { fetchGifIdFromGiphy } from './giphyApproveMessageApi';
import { DOM_ELEMENTS, getApprovalComment, getApproveMessage } from '../../config';
import {
    hidePreview,
    injectGifPreview,
    injectPreviewArea,
    registerPreviewHandlers,
} from '../preview/previewService';

export function appendGiphyToTextArea() {
    if (!getReviewCommentFormField()) {
        return;
    }
    handleInsertingApproveMessage();
}

async function injectGifComment(gifId) {
    const comment = await getApprovalComment(gifId);
    getReviewCommentFormField().val(comment);
}

export async function injectApproveMessageWithoutGif() {
    const message = await getApproveMessage();
    getReviewCommentFormField().val(message);
}

function clearGiphyChanges() {
    $(getReviewCommentFormField()).val('');
    hidePreview();
}

export function insertRandomGif() {
    fetchGifIdFromGiphy().then(gifId => {
        injectGifPreview(gifId);
        injectGifComment(gifId);
    });
}

function handleInsertingApproveMessage() {
    injectPreviewArea();
    registerChangeHandler(DOM_ELEMENTS.FORM_CHECKBOX.ALL, clearGiphyChanges);
    registerChangeHandler(DOM_ELEMENTS.FORM_CHECKBOX.APPROVE, insertRandomGif);
}
