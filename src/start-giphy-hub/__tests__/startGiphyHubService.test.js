import {
    getReviewCommentFormField,
    hasCommentElement,
    renderGiphyButton,
} from '../startGiphyHubService';

describe('startGiphyHubService', () => {
    describe('#hasCommentElement', () => {
        it('finds a element with class name js-reviews-toggle', () => {
            const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(true);

            const hasFoundElement = hasCommentElement();

            expect(querySelectorSpy).toHaveBeenCalledWith('.js-reviews-toggle');
            expect(hasFoundElement).toBe(true);
        });

        it('does not find a element with class name js-reviews-toggle', () => {
            const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(false);

            const hasFoundElement = hasCommentElement();

            expect(querySelectorSpy).toHaveBeenCalledWith('.js-reviews-toggle');
            expect(hasFoundElement).toBe(false);
        });
    });

    describe('#getReviewCommentFormField()', () => {
        document.body.innerHTML = '<div id="pull_request_review_body" />';
        it('returns PR Review Comment Form DOM element if exists', () => {
            const reviewElement = getReviewCommentFormField();

            expect(reviewElement['0'].outerHTML).toEqual(
                '<div id="pull_request_review_body"></div>',
            );

            document.body.innerHTML = '';
        });
    });

    describe('renderGiphyButton', () => {
        it('returns looks good to me html button template', () => {
            const button = renderGiphyButton();

            expect(button).toMatchSnapshot();
        });
    });
});
