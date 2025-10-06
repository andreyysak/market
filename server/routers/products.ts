import { publicProcedure, router } from "../trpc";
import path from "path";
import fs from 'fs'
import { z } from "zod";

const dataDir = path.join(process.cwd(), 'data/json')

function getAllProducts() {
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

  const products = files.map(file => {
    const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8')
    const data = JSON.parse(raw)
    const category = file.replace('.json', '')

    return { category, items: data}
  })

  return products
}

function getProductsByCategory(category: string) {
  const filePath = path.join(dataDir, `${category}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Category "${category}" not found`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);
  return data;
}

export const productRouter = router({
  list: publicProcedure.query(() => getAllProducts()),
  byCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(({ input }) => getProductsByCategory(input.category)),
})