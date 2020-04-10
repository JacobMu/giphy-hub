import { DOM_ELEMENTS } from '../../config';

const {
    GIPHY_PREVIEW: { CONTAINER, REFRESH, CLEAR },
} = DOM_ELEMENTS;

function getPlainId(selector) {
    return selector.replace('#', '');
}
export const template = `
    <div id="${getPlainId(CONTAINER)}">
        <img />
        <button 
            id="${getPlainId(REFRESH)}"
            type="button"
            class="btn btn-sm btn-secondary"
        >
            Refresh
        </button>
        <button 
            id="${getPlainId(CLEAR)}"
            type="button"
            class="btn btn-sm btn-secondary"
        >
            Clear
        </button>
    </div>
`;
