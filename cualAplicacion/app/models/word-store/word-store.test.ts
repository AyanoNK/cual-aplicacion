import { WordStoreModel } from "./word-store"

test("can be created", () => {
  const instance = WordStoreModel.create({})

  expect(instance).toBeTruthy()
})
