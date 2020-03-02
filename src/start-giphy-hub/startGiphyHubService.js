import $ from 'cash-dom';

import { DOM_ELEMENTS } from '../config';

import './startGiphyHub.scss';

export function hasCommentElement() {
    return $(DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.TOGGLE);
}
