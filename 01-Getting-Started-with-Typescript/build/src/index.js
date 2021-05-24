"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(response => {
    const todo = response.data;
    const { id, title, completed } = todo;
    logTodo(id, title, completed);
});
const logTodo = (id, title, completed) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
//# sourceMappingURL=index.js.map