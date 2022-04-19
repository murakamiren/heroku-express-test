"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
const books = [
    { id: 1, title: "test book", author: "ryo", isPublished: true },
    { id: 2, title: "typescript is fun", author: "uuid", isPublished: true },
    { id: 3, title: "フォトショップめんどいいいいい", author: "asdf", isPublished: false },
];
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield books;
    res.json(data);
}));
route.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idParams = yield parseInt(req.params.id);
    const data = yield books.filter((book) => book.id === idParams);
    res.json(data);
}));
exports.default = route;
//# sourceMappingURL=book.js.map