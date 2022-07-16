import { Instance, SnapshotOut, SnapshotIn, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { WordModel } from "../word/word"

/**
 * Model description here for TypeScript hints.
 */
export const WordStoreModel = types
  .model("WordStore")
  .props({
    words: types.optional(types.array(WordModel), []),
  })
  .extend(withEnvironment)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface WordStore extends Instance<typeof WordStoreModel> {}
export interface WordStoreSnapshotOut extends SnapshotOut<typeof WordStoreModel> {}
export interface WordStoreSnapshotIn extends SnapshotIn<typeof WordStoreModel> {}
export const createWordStoreDefaultModel = () => types.optional(WordStoreModel, {})
