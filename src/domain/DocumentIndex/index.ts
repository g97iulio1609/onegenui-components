export { DocumentIndex } from "./component";
export {
  DocumentIndexPropsSchema,
  DocumentIndexNodeSchema,
  type DocumentIndexProps,
  type DocumentIndexNode,
} from "./schema";

import { DocumentIndex } from "./component";
import { DocumentIndexPropsSchema } from "./schema";

export const DocumentIndexDefinition = {
  type: "DocumentIndex",
  component: DocumentIndex,
  schema: DocumentIndexPropsSchema,
};
