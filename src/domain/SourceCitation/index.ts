export { SourceCitation } from "./component";
export {
  SourceCitationPropsSchema,
  CitationSchema,
  type SourceCitationProps,
  type Citation,
} from "./schema";

import { SourceCitation } from "./component";
import { SourceCitationPropsSchema } from "./schema";

export const SourceCitationDefinition = {
  type: "SourceCitation",
  component: SourceCitation,
  schema: SourceCitationPropsSchema,
};
