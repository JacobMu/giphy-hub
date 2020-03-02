import { hasCommentElement } from './startGiphyHubService';
import { appendGiphyToTextArea } from './giphy-approve-message/giphyApproveMessage';

export function startGiphyHubExtensions() {
    if (!hasCommentElement()) {
        return;
    }
    appendGiphyToTextArea();
}
