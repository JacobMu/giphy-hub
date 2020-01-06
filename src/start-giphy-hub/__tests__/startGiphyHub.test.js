import { startGiphyHub } from '../startGiphyHub';
import * as startGiphyHubService from '../startGiphyHubService';
import * as injectGiphyButton from '../injectGiphyHubButton';

describe('startGiphyHub', () => {
    describe('#startGiphyHub()', () => {
        it('injects button into code if textarea element was found', () => {
            const getCommentElementSpy = jest
                .spyOn(startGiphyHubService, 'hasCommentElement')
                .mockReturnValue(true);
            const injectGiphyButtonSpy = jest.spyOn(injectGiphyButton, 'injectButton');

            startGiphyHub();

            expect(getCommentElementSpy).toHaveBeenCalledWith();
            expect(injectGiphyButtonSpy).toHaveBeenCalledWith();
        });

        it('throws error if textarea element was not found', () => {
            const getCommentElementSpy = jest
                .spyOn(startGiphyHubService, 'hasCommentElement')
                .mockReturnValue(false);

            expect(startGiphyHub).toThrow('Could not find comment area to add button');
            expect(getCommentElementSpy).toHaveBeenCalledWith();
        });
    });
});
