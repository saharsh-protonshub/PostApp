export class Api {
    constructor() {

    }

    /**
     * function to fetch the request
     */
    getApi(url) {
        return fetch(url, {
            method: 'GET',
        }).then(res => {
            return res.json().then(response => {
                return response;
            })
        }).catch(err => {
            return err;
        })
    }
}
