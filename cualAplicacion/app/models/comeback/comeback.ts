import { Instance, SnapshotOut, SnapshotIn, types } from "mobx-state-tree"
import { UserModel } from "../user/user"
import { WordModel } from "../word/word"

/**
 * Model description here for TypeScript hints.
 */
export const ComebackModel = types
  .model("Comeback")
  .props({
    id: types.identifier,
    user: types.reference(types.late(() => UserModel)),
    word: types.reference(types.late(() => WordModel)),
    comeback: types.string,
    vote_count: types.number,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Comeback extends Instance<typeof ComebackModel> {}
export interface ComebackSnapshotOut extends SnapshotOut<typeof ComebackModel> {}
export interface ComebackSnapshotIn extends SnapshotIn<typeof ComebackModel> {}
export const createComebackDefaultModel = () => types.optional(ComebackModel, {})
