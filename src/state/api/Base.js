import {Platform} from 'react-native';
import axios from 'util/axios';
import Config from 'react-native-config';

const env = {
  base: Config.API_URL,
};

const requestConfig = {
  baseURL: env.base,
};

export function makeHeaders(auth, options) {
  const headers = {
    'X-APP-Api-key': env.apiKey,
    'X-APP-Device': Platform.OS,
    'Content-Type': 'application/json',
  };

  return headers;
}

export function makeRequest(method, path, params, headers) {
  const extra =
    method.toLocaleLowerCase() === 'get'
      ? {params: {...params, locale: 'en'}}
      : {data: params, params: {locale: 'en'}};

  return {
    ...requestConfig,
    headers,
    method,
    url: path,
    ...extra,
  };
}

export function GET(path, params, auth) {
  const headers = makeHeaders(auth);
  return makeRequest('get', path, params, headers);
}

export function DELETE(path, params, auth) {
  const headers = makeHeaders(auth);
  return makeRequest('DELETE', path, params, headers);
}

export function PUT(path, params, auth) {
  const headers = makeHeaders(auth);
  const isFormData = params instanceof FormData;
  headers['Content-Type'] = isFormData
    ? 'multipart/form-data'
    : 'application/json';
  return makeRequest('put', path, params, headers);
}

export function POST(path, params, auth, options = {}) {
  const headers = makeHeaders(auth, options);
  const isFormData = params instanceof FormData;
  headers['Content-Type'] = isFormData
    ? 'multipart/form-data'
    : 'application/json';
  return makeRequest('post', path, params, headers);
}

export function fetchJson(req) {
  return axios(req)
    .then(response => {
      debugLog(response);
      return Promise.resolve(response);
    })
    .catch(error => {
      const response = error.response;
      const status = response ? response.status : 500;
      debugLog(response);
      switch (status) {
        case 500:
        case 502:
        case 503:
        case 504:
          break;
        case 401:
          break;
        default:
          break;
      }

      throw new APIError(response, (response && response.data) || null);
    });
}

export class APIError extends Error {
  code = null;
  message = '';
  response;
  detail;

  constructor(resp, json) {
    super();
    this.name = 'APIError';
    this.stack = new Error().stack;
    if (json) {
      this.message = json.message;
    } else {
      this.message = resp ? resp.statusText : '';
    }
    this.response = resp;
    this.detail = json;
  }
}

function debugLog(param) {
  if (__DEV__) {
    console.log(param);
  }
}
