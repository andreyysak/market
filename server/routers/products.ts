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

    return { category, items: data }
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

function searchProducts(query: string) {
  const lowerQuery = query.toLowerCase();
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

  const results = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    const data = JSON.parse(raw);

    for (const item of data) {
      const title = item.title || item['Full Name'] || '';
      const description = item.description || item['Description'] || '';
      const characteristics = item.characteristics || {};

      const matchInTitle = title.toLowerCase().includes(lowerQuery);
      const matchInDescription = description.toLowerCase().includes(lowerQuery);
      const matchInCharacteristics = Object.values(characteristics)
        .some(val => typeof val === 'string' && val.toLowerCase().includes(lowerQuery));

      if (matchInTitle || matchInDescription || matchInCharacteristics) {
        results.push(item);
      }
    }
  }

  return results;
}

export const productRouter = router({
  list: publicProcedure.query(() => getAllProducts()),
  byCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(({ input }) => getProductsByCategory(input.category)),
  search: publicProcedure
    .input(z.object({ query: z.string().min(2) }))
    .query(({ input }) => searchProducts(input.query)),
})