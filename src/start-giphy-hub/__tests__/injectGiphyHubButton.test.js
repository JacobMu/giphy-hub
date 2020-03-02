import { appendGiphyToTextArea } from '../giphy-approve-message/giphyApproveMessage';

describe('injectGiphyHubButton', () => {
    describe('#appendGiphyToTextArea()', () => {
        it('injects button to DOM', () => {
            const button = appendGiphyToTextArea();

            console.log(button);
        });
    });
});
