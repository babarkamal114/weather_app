import axios from 'axios';
import {merge} from 'lodash';

const getHeaders = (headers) => {
    const defaultHeaders = {
        Accept: '*/*',
        'Content-Type': 'application/json',
    };

    return merge({}, defaultHeaders, headers);
};

const request = {
    get: (url, headers = {}) => {
        return axios({
            method: 'GET',
            url,
            headers: getHeaders(headers),
            mode: 'no-cors',
        });
    },
};

export default request;
