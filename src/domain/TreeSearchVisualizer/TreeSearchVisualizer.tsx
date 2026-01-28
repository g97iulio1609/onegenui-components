/**
 * TreeSearchVisualizer Component
 *
 * Visualizes the tree search process with real-time progress.
 */
import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TreeSearchVisualizerProps {
  events: Array<{
    type: string;
    timestamp: string;
    data?: Record<string, unknown>;
  }>;
  result?: {
    path: string[];
    confidence: number;
    extractedContent?: string;
    algorithm: string;
    nodesVisited: number;
  } | null;
  isSearching: boolean;
  className?: string;
}

export const TreeSearchVisualizer = memo(function TreeSearchVisualizer({
  events,
  result,
  isSearching,
  className = "",
}: TreeSearchVisualizerProps) {
  const lastEvent = events[events.length - 1];
  const algorithm = result?.algorithm ?? (lastEvent?.data?.algorithm as string);

  return (
    <div className={`tree-search-visualizer ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Tree Search</h3>
        {algorithm && (
          <span
            className={`px-2 py-1 rounded text-sm ${
              algorithm === "greedy"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {algorithm.toUpperCase()}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-gray-600">
                {lastEvent?.type === "node_visited"
                  ? `Visiting: ${lastEvent.data?.title || lastEvent.data?.nodeId}`
                  : lastEvent?.type === "simulation"
                    ? `Simulating: score ${(lastEvent.data?.score as number)?.toFixed(2)}`
                    : `Phase: ${lastEvent?.type || "starting"}`}
              </span>
            </div>
            {result && (
              <div className="mt-2 text-sm text-gray-500">
                Nodes visited: {result.nodesVisited}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {result && result.path.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Search Path
          </h4>
          <div className="flex flex-wrap gap-1 items-center">
            {result.path.map((nodeId, i) => (
              <div key={nodeId} className="flex items-center">
                <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                  {nodeId}
                </span>
                {i < result.path.length - 1 && (
                  <span className="mx-1 text-gray-400">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {result && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">Confidence</span>
            <span className="text-sm">
              {(result.confidence * 100).toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className={`h-2 rounded-full ${
                result.confidence > 0.8
                  ? "bg-green-500"
                  : result.confidence > 0.5
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${result.confidence * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}

      {result?.extractedContent && (
        <div className="p-3 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Extracted Content
          </h4>
          <p className="text-sm text-gray-600">{result.extractedContent}</p>
        </div>
      )}

      {events.length > 0 && (
        <details className="mt-4">
          <summary className="text-sm text-gray-500 cursor-pointer">
            View {events.length} events
          </summary>
          <div className="mt-2 max-h-48 overflow-y-auto text-xs font-mono">
            {events.slice(-20).map((event, i) => (
              <div key={i} className="py-1 border-b border-gray-100">
                <span className="text-gray-400">{event.type}</span>
                {event.data?.nodeId && (
                  <span className="ml-2 text-gray-600">
                    {event.data.nodeId as string}
                  </span>
                )}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
});

export default TreeSearchVisualizer;
