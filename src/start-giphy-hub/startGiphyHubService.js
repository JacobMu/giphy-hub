import { DOM_ELEMENTS } from '../config';

import './startGiphyHub.scss';

export function hasCommentElement() {
    return document.querySelector(DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.TOGGLE);
}
