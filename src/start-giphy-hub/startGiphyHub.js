import { hasCommentElement } from './startGiphyHubService';
import { appendGiphyToApproveCheckbox } from './injectGiphyHubButton';

export function startGiphyHub() {
    if (!hasCommentElement()) {
        throw new Error('Could not find comment area to add button');
    }

    appendGiphyToApproveCheckbox();
}
