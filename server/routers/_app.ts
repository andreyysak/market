import { router } from "../trpc";
import { productRouter } from "./products";

export const appRouter = router({
  product: productRouter
})

export type AppRouter = typeof appRouter