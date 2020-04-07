export const DEFAULT_OPTIONS = {
    approveMessage: 'lgtm!',
    giphyKeyword: 'great-job',
};

export function saveOptions(options = DEFAULT_OPTIONS) {
    return new Promise(resolve => {
        chrome.storage.sync.set(
            {
                ...DEFAULT_OPTIONS,
                ...options,
            },
            resolve,
        );
    });
}

export function getOptions() {
    return new Promise(resolve => {
        chrome.storage.sync.get(DEFAULT_OPTIONS, resolve);
    });
}
