import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DATABASE_URL); // Add this line to check the DATABASE_URL

const prisma = new PrismaClient();

export default prisma;
