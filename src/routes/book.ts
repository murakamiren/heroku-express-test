import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();

const route = Router();

route.get("/", async (req: Request, res: Response) => {
	const data = await prisma.book.findMany();
	res.json(data);
});

route.get("/:id", async (req: Request, res: Response) => {
	const data = await prisma.book.findUnique({
		where: { id: parseInt(req.params.id) },
	});
	res.json(data);
});

route.get("/authorid/:id", async (req: Request, res: Response) => {
	const data = await prisma.book.findMany({
		where: { authorId: parseInt(req.params.id) },
	});
});

export default route;
