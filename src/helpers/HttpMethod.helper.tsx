import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { storageService } from '../utils';
interface PendingRequestRecord {
  id: string;
  cancel: () => void;
}

const renderByStatusCode = (statusCode: number) => {
  switch (statusCode) {
    case 401:
      storageService.clearLocalStorage();
      removeAllPendingRequestsRecordHttp();
      break;

    case 403:
      // Navigate to 403 page
      break;

    case 500:
      // Navigate to 403 page
      break;

    default:
      break;
  }
};

const allPendingRequestsRecord: PendingRequestRecord[] = [];

const getUniqueId = (config: AxiosRequestConfig) => `url=${config.url}&method=${config.method}`;

axios.interceptors.request.use(
  (configurations) => {
    const configurationsLocal = configurations;
    configurationsLocal.cancelToken = new axios.CancelToken((cancel) => {
      // Add record, record the unique value of the request and cancel method
      allPendingRequestsRecord.push({ id: getUniqueId(configurations), cancel });
    });

    return configurationsLocal;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const removeAllPendingRequestsRecordHttp = () => {
  allPendingRequestsRecord.forEach((item) => {
    item.cancel(); // cancel request
  });
  allPendingRequestsRecord.splice(0); // remove all records
};

// interceptors for handle any response
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (!error.response) return Promise.reject(error);
    const {
      response: { status },
    } = error;
    // If Session is out of date clear the local storage then redirect to main page.
    if (error?.response?.data?.token_error) {
      storageService.clearLocalStorage();

      return true;
    }

    renderByStatusCode(status);
    return Promise.reject(error);
  }
);

export const HttpServices = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  axios: axios,
};
