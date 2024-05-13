const {
  addBookHandler,
  getAllBookHandler,
  getBookbyIdHandler,
  editBookbyIdHandler,
  deleteBookHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookbyIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookbyIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookHandler,
  },
];

module.exports = routes;
