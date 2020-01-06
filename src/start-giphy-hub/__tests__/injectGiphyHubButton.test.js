import { appendGiphyToApproveCheckbox } from '../injectGiphyHubButton';

describe('injectGiphyHubButton', () => {
    describe('#appendGiphyToApproveCheckbox()', () => {
        it('injects button to DOM', () => {
            const button = appendGiphyToApproveCheckbox();

            console.log(button);
        });
    });
});
