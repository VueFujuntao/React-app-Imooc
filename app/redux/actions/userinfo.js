import * as actionTypes from '../constants/userinfo.js';

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}