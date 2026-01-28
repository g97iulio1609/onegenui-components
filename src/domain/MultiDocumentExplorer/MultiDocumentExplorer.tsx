/**
 * MultiDocumentExplorer Component
 *
 * Displays search results across multiple documents with cross-document relations.
 */
import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface DocumentResult {
  documentId: string;
  documentTitle: string;
  confidence: number;
  extractedContent?: string;
}

export interface CrossDocRelation {
  sourceDocId: string;
  targetDocId: string;
  type: "supports" | "contradicts" | "elaborates" | "references";
  description: string;
}

export interface MultiDocumentExplorerProps {
  results: DocumentResult[];
  relations?: CrossDocRelation[];
  mergedContent?: string;
  isSearching?: boolean;
  progress?: {
    documentsSearched: number;
    totalDocuments: number;
  };
  onDocumentClick?: (documentId: string) => void;
  className?: string;
}

const relationColors = {
  supports: "bg-green-100 text-green-800 border-green-300",
  contradicts: "bg-red-100 text-red-800 border-red-300",
  elaborates: "bg-blue-100 text-blue-800 border-blue-300",
  references: "bg-gray-100 text-gray-800 border-gray-300",
};

export const MultiDocumentExplorer = memo(function MultiDocumentExplorer({
  results,
  relations = [],
  mergedContent,
  isSearching = false,
  progress,
  onDocumentClick,
  className = "",
}: MultiDocumentExplorerProps) {
  return (
    <div className={`multi-document-explorer ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Multi-Document Results</h3>
        {progress && (
          <span className="text-sm text-gray-500">
            {progress.documentsSearched}/{progress.totalDocuments} documents
          </span>
        )}
      </div>

      {/* Progress bar */}
      {isSearching && progress && (
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <motion.div
              className="bg-blue-500 h-1.5 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${(progress.documentsSearched / progress.totalDocuments) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Merged content */}
      {mergedContent && (
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Synthesized Answer
          </h4>
          <p className="text-sm text-gray-600 whitespace-pre-wrap">
            {mergedContent}
          </p>
        </div>
      )}

      {/* Document results */}
      <div className="space-y-3 mb-6">
        <AnimatePresence>
          {results.map((doc, i) => (
            <motion.div
              key={doc.documentId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onDocumentClick?.(doc.documentId)}
              className={`p-4 border rounded-lg ${
                onDocumentClick ? "cursor-pointer hover:border-blue-300" : ""
              } transition-colors`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">{doc.documentTitle}</h4>
                <span
                  className={`px-2 py-0.5 rounded text-xs ${
                    doc.confidence > 0.8
                      ? "bg-green-100 text-green-800"
                      : doc.confidence > 0.5
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {(doc.confidence * 100).toFixed(0)}%
                </span>
              </div>
              {doc.extractedContent && (
                <p className="text-sm text-gray-600 line-clamp-3">
                  {doc.extractedContent}
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Cross-document relations */}
      {relations.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Cross-Document Relations
          </h4>
          <div className="space-y-2">
            {relations.map((relation, i) => {
              const sourceDoc = results.find(
                (r) => r.documentId === relation.sourceDocId,
              );
              const targetDoc = results.find(
                (r) => r.documentId === relation.targetDocId,
              );

              return (
                <div
                  key={i}
                  className={`p-3 rounded-lg border ${relationColors[relation.type]}`}
                >
                  <div className="flex items-center gap-2 text-xs mb-1">
                    <span className="font-medium">
                      {sourceDoc?.documentTitle || relation.sourceDocId}
                    </span>
                    <span className="uppercase font-bold">{relation.type}</span>
                    <span className="font-medium">
                      {targetDoc?.documentTitle || relation.targetDocId}
                    </span>
                  </div>
                  <p className="text-xs opacity-80">{relation.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty state */}
      {!isSearching && results.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-sm">
            No results yet. Start a search to explore documents.
          </p>
        </div>
      )}
    </div>
  );
});

export default MultiDocumentExplorer;
