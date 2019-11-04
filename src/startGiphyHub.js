import { getCommentElement } from './startGiphyHubService';

export function startGiphyHub() {
    const commentElement = getCommentElement();

    if (!commentElement) {
        throw new Error('Could not find comment area to add button');
    }

    return injectGiphyButton();
}

function injectGiphyButton() {
    return true;
}
