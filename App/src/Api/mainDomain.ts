/**
 * @file main domain
 * @date 2021-1-16
 * @author Jack
 * @lastModify  2021-1-16
 */
let mainDomain = '';
if (process.env.NODE_ENV == 'production') {
    mainDomain = 'https://dashboard.dev.datareachable.net/';
} else {
    mainDomain = 'https://dashboard.dev.datareachable.net/';
}

export default mainDomain;
