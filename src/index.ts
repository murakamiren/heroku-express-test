import express from "express";
import book from "./routes/book";
import user from "./routes/user";

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

app.use("/user", user);

app.use("/book", book);
