"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = __importDefault(require("./routes/book"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
const port = process.env.PORT || 3000;
app.listen(port);
const helloWorld = "hello world";
app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(helloWorld);
});
const users = [
    { id: 1, name: "User1", email: "user1@test.local" },
    { id: 2, name: "User2", email: "user2@test.local" },
    { id: 3, name: "User3", email: "user3@test.local" },
];
app.get("/users", (req, res) => {
    // res.send(JSON.stringify(users));
    res.json(users);
});
app.use("/book", book_1.default);
//# sourceMappingURL=index.js.map