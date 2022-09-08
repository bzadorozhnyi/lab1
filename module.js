// наш модуль
class MyModule {
    // ім'я користувача
    _name = "";

    constructor(name) {
        this._name = name;
    }

    // функція-вітання
    getGreeting() {
        return `Hello, ${this._name}`;
    }
}

// експортуємо модуль
module.exports.MyModule = MyModule;