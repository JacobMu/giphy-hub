import $ from 'cash-dom';
import { DOM_ELEMENTS } from '../../config';

export function getReviewCommentFormField() {
    return $(DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.BODY);
}

export function getApproveCheckbox() {
    return DOM_ELEMENTS.FORM_CHECKBOX.APPROVE;
}
