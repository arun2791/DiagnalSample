// // General api to access data
// import ApiConstants from './ApiConstants';
// export default function api(path, params, method, token) {
//     let options;
//     options = {
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             ...(token && { token: token })
//         },
//         method: method,
//         ...(params && { body: JSON.stringify(params) })
//     };

//     return fetch(ApiConstants.BASE_URL + path, options)
//         .then(resp => resp.json())
//         .then(json => json)
//         .catch(error => error);
// }

export const getContentsLists = (pageNum) => {
    switch(pageNum){
        case 1: 
            return require('../fixtures/contentListingPage1.json');
        case 2:
            return require('../fixtures/contentListingPage2.json');
        case 3:
            return require('../fixtures/contentListingPage3.json');
    }
}
