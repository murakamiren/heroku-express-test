import { Request, Response, Router } from "express";

const route = Router();

type bookType = {
	id: number;
	title: string;
	author: string;
	isPublished: boolean;
};

const books: bookType[] = [
	{ id: 1, title: "test book", author: "ryo", isPublished: true },
	{ id: 2, title: "typescript is fun", author: "uuid", isPublished: true },
	{ id: 3, title: "フォトショップめんどいいいいい", author: "asdf", isPublished: false },
];

route.get("/", async (req: Request, res: Response) => {
	const data = await books;
	res.json(data);
});

route.get("/:id", async (req: Request, res: Response) => {
	const idParams = await parseInt(req.params.id);
	const data = await books.filter((book) => book.id === idParams);
	res.json(data);
});

export default route;
