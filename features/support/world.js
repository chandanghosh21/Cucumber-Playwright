const { setWorldConstructor } = require('@cucumber/cucumber');
//const { setDefaultTimeout } = require('@cucumber/cucumber');


class CustomWorld {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }
}

setWorldConstructor(CustomWorld);
//setDefaultTimeout(60 * 1000);