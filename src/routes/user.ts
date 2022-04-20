import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const prisma = new PrismaClient();

const route = Router();

route.get("/", async (req: Request, res: Response) => {
	const data = await prisma.user.findMany();
	res.json(data);
});

route.get("/withbook", async (req: Request, res: Response) => {
	const data = await prisma.user.findMany({
		include: { Book: true },
	});
	res.json(data);
});

route.get("/:id", async (req: Request, res: Response) => {
	const data = await prisma.user.findUnique({
		where: { id: parseInt(req.params.id) },
	});
	res.json(data);
});

export default route;
