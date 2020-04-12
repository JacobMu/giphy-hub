import $ from 'cash-dom';
import { DOM_ELEMENTS } from '../../config';

const SHOW_ELEMENT = 'block';
const HIDE_ELEMENT = 'none';

export function getReviewCommentFormField() {
    const element = $(DOM_ELEMENTS.PR_REVIEW_COMMENT_FIELD.BODY);
    return element.length > 0 ? element : undefined;
}

export function getApproveCheckbox() {
    return DOM_ELEMENTS.FORM_CHECKBOX.APPROVE;
}

export function registerChangeHandler(selector, handler) {
    document
        .querySelectorAll(selector)
        .forEach(element => element.addEventListener('change', handler));
}

export function registerClickHandler(selector, handler) {
    document.querySelector(selector).addEventListener('click', handler);
}

export function toggleVisibility(selector, isVisible) {
    const element = document.querySelector(selector).style;
    isVisible ? (element.display = SHOW_ELEMENT) : (element.display = HIDE_ELEMENT);
}

export function setAttribute(selector, attribute, value) {
    document.querySelector(selector).setAttribute(attribute, value);
}

export function insertHtmlAfter(htmlString, afterSelector) {
    const newElement = document.createElement('template');
    const targetElement = document.querySelector(afterSelector);
    newElement.innerHTML = htmlString.trim();
    targetElement.insertAdjacentElement('afterend', newElement.content.firstElementChild);
}

export function doesElementExist(selector) {
    return !!document.querySelector(selector);
}
