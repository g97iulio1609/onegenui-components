"use client";

import { useState, useCallback } from "react";
import type { Answer } from "@onegenui/vectorless";

export interface UseQuestionAnswerOptions {
  onAnswer?: (answer: Answer) => void;
  onError?: (error: Error) => void;
}

export interface UseQuestionAnswerReturn {
  question: string;
  setQuestion: (question: string) => void;
  answer: Answer | null;
  isLoading: boolean;
  error: Error | null;
  askQuestion: (
    knowledgeBaseId: string,
    question: string,
  ) => Promise<Answer | null>;
  clearAnswer: () => void;
  history: Array<{ question: string; answer: Answer }>;
  clearHistory: () => void;
}

export function useQuestionAnswer(
  options: UseQuestionAnswerOptions = {},
): UseQuestionAnswerReturn {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [history, setHistory] = useState<
    Array<{ question: string; answer: Answer }>
  >([]);

  const askQuestion = useCallback(
    async (knowledgeBaseId: string, q: string): Promise<Answer | null> => {
      setIsLoading(true);
      setError(null);

      try {
        // For now, use a mock implementation that will be replaced
        // when the full MCP integration is available
        const result: Answer = {
          id: crypto.randomUUID(),
          question: q,
          answer: "This requires the full MCP integration to be active.",
          confidence: 0.5,
          sources: [],
          generatedAt: new Date().toISOString(),
        };

        setAnswer(result);
        setHistory((prev) => [...prev, { question: q, answer: result }]);
        options.onAnswer?.(result);
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setError(error);
        options.onError?.(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [options],
  );

  const clearAnswer = useCallback(() => {
    setAnswer(null);
    setError(null);
    setQuestion("");
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    question,
    setQuestion,
    answer,
    isLoading,
    error,
    askQuestion,
    clearAnswer,
    history,
    clearHistory,
  };
}
