import { DOM_ELEMENTS } from '../config';

import './startGiphyHub.scss';
import $ from 'cash-dom';

export function hasCommentElement() {
    return document.querySelector(DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.TOGGLE);
}

export function getReviewCommentFormField() {
    return $(DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.BODY);
}

export function renderGiphyButton() {
    return `
        <div id="button-wrapper" class="giphy-button-wrapper">
            <div id="looks-good-to-me">LGTM</div>
        </div>
    `;
}
