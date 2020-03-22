import $ from 'cash-dom';
import {
    getReviewCommentFormField,
    registerChangeHandler,
    toggleVisibility,
    setAttribute,
    insertHtmlAfter,
} from './giphyApproveMessageService';
import { fetchGifIdFromGiphy } from './giphyApproveMessageApi';
import { DOM_ELEMENTS, getApprovalComment, getGifUrl } from '../../config';

export function appendGiphyToTextArea() {
    if (!getReviewCommentFormField()) {
        return;
    }
    handleInsertingApproveMessage();
}

function injectGifComment(gifId) {
    getReviewCommentFormField().val(getApprovalComment(gifId));
}

function injectGifPreview(gifId) {
    setAttribute(DOM_ELEMENTS.GIPHY_PREVIEW.IMG, 'src', getGifUrl(gifId));
    showPreview();
}

function hidePreview() {
    toggleVisibility(DOM_ELEMENTS.GIPHY_PREVIEW.CONTAINER, false);
}

function clearGiphyChanges() {
    $(getReviewCommentFormField()).val('');
    hidePreview();
}

function showPreview() {
    toggleVisibility(DOM_ELEMENTS.GIPHY_PREVIEW.CONTAINER, true);
}

function injectPreviewArea() {
    const { CONTAINER } = DOM_ELEMENTS.GIPHY_PREVIEW;
    const containerId = CONTAINER.replace('#', '');
    insertHtmlAfter(
        `<div id="${containerId}"><img /></div>`,
        DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.WRITE_CONTENT,
    );
}

function insertRandomGif() {
    fetchGifIdFromGiphy().then(gifId => {
        injectGifComment(gifId);
        injectGifPreview(gifId);
    });
}

function handleInsertingApproveMessage() {
    injectPreviewArea();
    registerChangeHandler(DOM_ELEMENTS.FORM_CHECKBOX.ALL, clearGiphyChanges);
    registerChangeHandler(DOM_ELEMENTS.FORM_CHECKBOX.APPROVE, insertRandomGif);
}
