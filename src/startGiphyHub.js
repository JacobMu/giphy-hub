export function startGiphyHub() {
    const commentElement = getCommentElement();
    if (!commentElement) {
        return;
    }
    console.log('fuck me');
}

function getCommentElement() {
    return document.querySelector('#new_comment_field');
}
