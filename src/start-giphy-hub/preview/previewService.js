import {
    doesElementExist,
    insertHtmlAfter,
    registerClickHandler,
    setAttribute,
    toggleVisibility,
} from '../giphy-approve-message/giphyApproveMessageService';
import { DOM_ELEMENTS, getGifUrl } from '../../config';
import { template } from './previewTemplate';
import {
    injectApproveMessageWithoutGif,
    insertRandomGif,
} from '../giphy-approve-message/giphyApproveMessage';

export function hidePreview() {
    toggleVisibility(DOM_ELEMENTS.GIPHY_PREVIEW.CONTAINER, false);
}

export function showPreview() {
    toggleVisibility(DOM_ELEMENTS.GIPHY_PREVIEW.CONTAINER, true);
}

export function injectPreviewArea() {
    const { CONTAINER } = DOM_ELEMENTS.GIPHY_PREVIEW;
    if (!doesElementExist(CONTAINER)) {
        insertHtmlAfter(template, DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.WRITE_CONTENT);
    }
    hidePreview();
    registerPreviewHandlers();
}

export function injectGifPreview(gifId) {
    setAttribute(DOM_ELEMENTS.GIPHY_PREVIEW.IMG, 'src', getGifUrl(gifId));
    showPreview();
}

function insertMessageWithoutGif() {
    injectApproveMessageWithoutGif();
    setAttribute(DOM_ELEMENTS.GIPHY_PREVIEW.IMG, 'src', '');
}

export function registerPreviewHandlers() {
    registerClickHandler(DOM_ELEMENTS.GIPHY_PREVIEW.REFRESH, insertRandomGif);
    registerClickHandler(DOM_ELEMENTS.GIPHY_PREVIEW.CLEAR, insertMessageWithoutGif);
}
