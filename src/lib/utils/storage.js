class SessionStorage {

    constructor() {
        if(typeof Storage.instance === 'object') {
            return Storage.instance;
        }

        Storage.instance = this;
        return this;
    }

    getItem (key) {
        return JSON.parse(window.sessionStorage.getItem(key));
    }

    storeItem (key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    clearItem (key) {
        window.sessionStorage.removeItem(key);
    }
}

export default SessionStorage;