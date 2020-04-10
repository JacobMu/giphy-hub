import $ from 'cash-dom';
import { DOM_ELEMENTS } from '../../config';

export function getReviewCommentFormField() {
    const element = $(DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.BODY);
    return element.length > 0 ? element : undefined;
}

export function getApproveCheckbox() {
    return DOM_ELEMENTS.FORM_CHECKBOX.APPROVE;
}

export function registerChangeHandler(selector, handler) {
    $(selector).on('change', handler);
}

export function registerClickHandler(selector, handler) {
    $(selector).on('click', handler);
}

export function toggleVisibility(selector, isVisible) {
    $(selector).toggle(isVisible);
}

export function setAttribute(selector, attribute, value) {
    $(selector).attr(attribute, value);
}

export function insertHtmlAfter(htmlString, afterSelector) {
    $(htmlString).insertAfter($(afterSelector));
}

export function doesElementExist(selector) {
    return $(selector).length > 0;
}
