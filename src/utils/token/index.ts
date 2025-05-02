const tokenName = 'Token';

export const getAccessToken = () => {
   return sessionStorage.getItem(tokenName);
};

export const setAccessToken = (token: string) => {
   return sessionStorage.setItem(tokenName, token);
};
