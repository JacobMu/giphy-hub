import { getCommentElement } from '../startGiphyHubService';

describe('#getCommentElement', () => {
    it('finds a element with class name new_comment_field', () => {
        const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(true);

        const hasFoundElement = getCommentElement();

        expect(querySelectorSpy).toHaveBeenCalledWith('#new_comment_field');
        expect(hasFoundElement).toBe(true);
    });

    it('does not find a element with class name new_comment_field', () => {
        const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(false);

        const hasFoundElement = getCommentElement();

        expect(querySelectorSpy).toHaveBeenCalledWith('#new_comment_field');
        expect(hasFoundElement).toBe(false);
    });
});
