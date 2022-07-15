import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ComebackModel = types
  .model("Comeback")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Comeback extends Instance<typeof ComebackModel> {}
export interface ComebackSnapshotOut extends SnapshotOut<typeof ComebackModel> {}
export interface ComebackSnapshotIn extends SnapshotIn<typeof ComebackModel> {}
export const createComebackDefaultModel = () => types.optional(ComebackModel, {})
