import { getOptions } from './options/options';

export const DOM_ELEMENTS = {
    FORM_CHECKBOX: {
        ALL: '[type=radio]',
        APPROVE: '[value="approve"]',
    },
    PR_REVIEW_COMMENT_FIELD: {
        BUTTONS: '.form-actions',
        BODY: '#pull_request_review_body',
        CONTAINER: '.js-reviews-container',
        TOGGLE: '.js-reviews-toggle',
        WRITE_CONTENT: '.write-content',
    },
    GIPHY_PREVIEW: {
        CONTAINER: '#giphy-hub-preview',
        IMG: '#giphy-hub-preview > img',
        REFRESH: '#giphy-hub-preview > button[type=button]',
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
export function getGifUrl(gifId) {
    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
}
export async function getApprovalComment(gifId) {
    const { approveMessage } = await getOptions();
    return `${approveMessage}!${BREAKING_SPACE}![${approveMessage}!](${getGifUrl(gifId)})`;
}
