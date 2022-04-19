import express from "express";
import book from "./routes/book";

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

const port = process.env.PORT || 3000;

app.listen(port);

const helloWorld = "hello world";

app.get("/", (req: express.Request, res: express.Response) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end(helloWorld);
});

type User = {
	id: number;
	name: string;
	email: string;
};

const users: User[] = [
	{ id: 1, name: "User1", email: "user1@test.local" },
	{ id: 2, name: "User2", email: "user2@test.local" },
	{ id: 3, name: "User3", email: "user3@test.local" },
];

app.get("/users", (req: express.Request, res: express.Response) => {
	// res.send(JSON.stringify(users));
	res.json(users);
});

app.use("/book", book);
