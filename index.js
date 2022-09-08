// Імпортуємо http і myModule (код реалізований в наступному пункті).
const http = require('http');
const myModule = require('./module');

// ініціалізуємо сервер
const server = http.createServer(function(req, res) {
    // створюємо новий об'єкт нашого модуля
    const _myModule = new myModule.MyModule("Bohdan");

    // записуємо вітання і закінчуємо відповідь (response)
    res.write(_myModule.getGreeting());
    res.end();
});

// встановлюємо значення поррта сервера 5000
server.listen(5000);