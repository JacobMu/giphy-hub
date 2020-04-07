import { getOptions, saveOptions } from './options';

function refreshUI() {
    getOptions().then(options => {
        document.getElementById('approveMessageInput').value = options.approveMessage;
        document.getElementById('giphyApproveKeyword').value = options.giphyKeyword;
    });
}

function saveUIOptions() {
    const options = {
        approveMessage: document.getElementById('approveMessageInput').value,
        giphyKeyword: document.getElementById('giphyApproveKeyword').value,
    };

    saveOptions(options).then(() => {
        document.getElementById('status').textContent = 'Success!!!';
    });
}

document.addEventListener('DOMContentLoaded', refreshUI);
document.getElementById('save').addEventListener('click', saveUIOptions);
