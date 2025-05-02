import { getAccessToken } from '@/utils/token';
export const baseURL = import.meta.env.VITE_API_ENDPOINT + '/Api/v1/';

export type ApiResponse<T = any> = {
   data: T;
};

const Axios = axios.create({
   baseURL,
   withCredentials: false,
   headers: {
      post: {
         'Content-Type': 'application/json;charset=UTF-8',
      },
      get: {
         'Content-Type': 'application/json;charset=UTF-8',
      },
      common: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Access-Control-Allow-Origin': '*',
         Accept: 'application/json, text/plain, */*',
         'Access-Control-Allow-Headers':
            'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin',
      },
   },
});

Axios.interceptors.request.use(
   async (config) => {
      const accessToken = await getAccessToken();

      if (accessToken) {
         if (config.headers) config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
   },
   (error) => ({ status: error.response.status, message: error.response }),
);

Axios.interceptors.response.use(
   async (response) => response,
   async (error) => {
      const errorMessage = {
         th: {
            title: 'เกิดข้อผิดพลาด',
            message: 'กรุณาทำรายการใหม่อีกครั้ง',
         },
         en: {
            title: 'Error occurred',
            message: 'Please try again later.',
         },
      };
      if (error.response.data?.error) {
         errorMessage.th.title = error.response.data.error.locale['th-th'].title;
         errorMessage.th.message = error.response.data.error.locale['th-th'].message;
         errorMessage.en.title = error.response.data.error.locale['en-us'].title;
         errorMessage.en.message = error.response.data.error.locale['en-us'].message;
      }
      return Promise.reject(errorMessage);
   },
);

export default Axios;
