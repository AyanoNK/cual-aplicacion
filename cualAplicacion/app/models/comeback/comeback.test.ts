import { ComebackModel } from "./comeback"

test("can be created", () => {
  const instance = ComebackModel.create({})

  expect(instance).toBeTruthy()
})
