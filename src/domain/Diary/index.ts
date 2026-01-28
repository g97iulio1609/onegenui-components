export { Diary } from "./component";
export {
  DiaryPropsSchema,
  DiaryDefinition,
  diaryEntrySchema,
  type DiaryProps,
  type DiaryEntry,
} from "./schema";

// Hexagonal architecture exports
export type { DiaryPort, DiaryStatePort, DiaryGoal } from "./ports";
export {
  createDiaryAdapter,
  createDiaryStateAdapter,
  getDiaryAdapter,
  getDiaryStateAdapter,
} from "./adapters";
export {
  useDiaryLogic,
  type UseDiaryLogicOptions,
  type UseDiaryLogicReturn,
} from "./hooks";
