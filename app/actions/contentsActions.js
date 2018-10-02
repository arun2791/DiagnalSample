/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestContents(pageNum) {
    return {
        type: types.CONTENTS_REQUEST,
        pageNum
    };
}

export function contentsRequestFailed() {
    return {
        type: types.CONTENTS_FAILED
    };
}

export function contentsRequestResponse(response) {
    return {
        type: types.CONTENTS_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}

export function search(keyword) {
    return {
        type: types.SEARCH_REQUEST,
        keyword
    }
}
