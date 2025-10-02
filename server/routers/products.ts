import { publicProcedure, router } from "../trpc";
import path from "path";
import fs from 'fs'

const dataDir = path.join(process.cwd(), 'data')

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

export const productRouter = router({
  list: publicProcedure.query(() => getAllProducts())
})