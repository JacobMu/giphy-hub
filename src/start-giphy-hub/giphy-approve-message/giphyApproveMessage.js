import $ from 'cash-dom';
import {
    getReviewCommentFormField,
    registerChangeHandler,
    toggleVisibility,
    setAttribute,
    insertHtmlAfter,
    registerClickHandler, doesElementExist,
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
    if (!doesElementExist(CONTAINER)) {
        const containerId = CONTAINER.replace('#', '');
        insertHtmlAfter(
            `<div id="${containerId}"><img /><button type="button" class="btn btn-sm btn-secondary">Refresh</button></div>`,
            DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.WRITE_CONTENT,
        );
    }
    hidePreview();
}

function insertRandomGif() {
    fetchGifIdFromGiphy().then(gifId => {
        injectGifPreview(gifId);
        injectGifComment(gifId);
    });
}

function handleInsertingApproveMessage() {
    injectPreviewArea();
    registerChangeHandler(DOM_ELEMENTS.FORM_CHECKBOX.ALL, clearGiphyChanges);
    registerChangeHandler(DOM_ELEMENTS.FORM_CHECKBOX.APPROVE, insertRandomGif);
    registerClickHandler(DOM_ELEMENTS.GIPHY_PREVIEW.REFRESH, insertRandomGif);
}
