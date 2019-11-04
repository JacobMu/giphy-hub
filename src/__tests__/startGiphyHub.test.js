import { startGiphyHub } from '../startGiphyHub';
import * as startGiphyHubService from '../startGiphyHubService';

describe('#startGiphyHub()', () => {
    it('injects button into code if textarea element was found', () => {
        const getCommentElementSpy = jest
            .spyOn(startGiphyHubService, 'getCommentElement')
            .mockReturnValue(true);

        const result = startGiphyHub();

        expect(getCommentElementSpy).toHaveBeenCalledWith();
        expect(result).toBe(true);
    });

    it('throws error if textarea element was not found', () => {
        const getCommentElementSpy = jest
            .spyOn(startGiphyHubService, 'getCommentElement')
            .mockReturnValue(false);

        expect(startGiphyHub).toThrow('Could not find comment area to add button');
        expect(getCommentElementSpy).toHaveBeenCalledWith();
    });
});
