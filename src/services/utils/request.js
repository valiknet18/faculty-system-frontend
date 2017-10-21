const localStorage = window.localStorage;
const fetch = window.fetch;

class Request {
    token;

    defaultHeaders = {
        'Content-Type': 'application/json'
    };

    getAuthHeaders() {
        if (localStorage.getItem('token')) {
            return Object.assign({}, this.defaultHeaders, {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            });
        }

        return this.defaultHeaders;
    }

    getOptions(method, options) {
        let defaultOptions = {
            method: method,
            auth: true,
            headers: this.getAuthHeaders()
        };
        options = Object.assign({}, defaultOptions, options);
        let { auth } = options;

        if (!auth) {
            delete options.headers['Authorization'];
        }

        return options;
    }

    async get(endpoint, options = {}) {
        options = this.getOptions('GET', options);

        return await fetch(endpoint, options);
    }

    async post(endpoint, options = {}) {
        options = this.getOptions('POST', options);

        return await fetch(endpoint, options);
    }

    async put(endpoint, options = {}) {
        options = this.getOptions('PUT', options);

        return await fetch(endpoint, options);
    }

    async delete(endpoint, options = {}) {
        options = this.getOptions('DELETE', options);

        return await fetch(endpoint, options);
    }
}

const request = new Request();

export default request;
