const HEADERS = {
  'Cache-Control': 'no-cache'
  //'Content-Type': 'application/json; charset=utf-8',
  //'Accept': 'application/json'
};

/**
 * @return {string|boolean}
 */
export const checkExpires = () =>
  !readCookie('tokensExpires') ? false : parseInt(readCookie('tokensExpires')) - 3600000 >= 0;

/**
 * @param {string|string[]} name of the cookie
 * @param c
 * @param C
 * @param i
 * @return {string} cookie value
 */
export const readCookie = (name, c = null, C = null, i = null) => {
  let cookies;
  if (cookies) {
    return cookies[name];
  }
  
  c = document.cookie.split('; ');
  cookies = {};
  
  for (i = c.length - 1; i >= 0; i--) {
    C = c[i].split('=');
    cookies[C[0]] = C[1];
  }
  
  return cookies[name];
}

export const manageHeaders = (myHeaders) => {
  return new Headers(Object.assign({}, HEADERS, myHeaders));
}