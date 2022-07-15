import { WordModel } from "./word"

test("can be created", () => {
  const instance = WordModel.create({})

  expect(instance).toBeTruthy()
})
