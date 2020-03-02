export const DOM_ELEMENTS = {
    FORM_CHECKBOX: {
        APPROVE: '[value="approve"]',
    },
    PR_REVIEW_COMMENT_FIELD: {
        BUTTONS: '.form-actions',
        BODY: '#pull_request_review_body',
        CONTAINER: '.js-reviews-container',
        TOGGLE: '.js-reviews-toggle',
    },
};

export const GIPHY = {
    url: 'https://api.giphy.com/v1/gifs/search',
    apiKey: 'yIxrvjbbKaU0cGOuXuRi6dHKu0M6XqHO',
    queryParams: {
        searchQuery: 'great-job',
        language: 'en',
    },
};

const BREAKING_SPACE = '\n';
export const APPROVAL_COMMENT = `lgtm!${BREAKING_SPACE}![LGTM!](https://media.giphy.com/media`;
