import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const WordModel = types
  .model("Word")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Word extends Instance<typeof WordModel> {}
export interface WordSnapshotOut extends SnapshotOut<typeof WordModel> {}
export interface WordSnapshotIn extends SnapshotIn<typeof WordModel> {}
export const createWordDefaultModel = () => types.optional(WordModel, {})
