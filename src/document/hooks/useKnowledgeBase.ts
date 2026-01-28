"use client";

import { useState, useCallback, useMemo } from "react";
import type {
  DocumentKnowledgeBase,
  KnowledgeNode,
  Entity,
  Relation,
  Quote,
} from "@onegenui/vectorless";

export interface UseKnowledgeBaseOptions {
  initialKnowledgeBase?: DocumentKnowledgeBase | null;
}

export interface UseKnowledgeBaseReturn {
  knowledgeBase: DocumentKnowledgeBase | null;
  setKnowledgeBase: (kb: DocumentKnowledgeBase | null) => void;
  entities: Entity[];
  relations: Relation[];
  quotes: Quote[];
  getEntityById: (id: string) => Entity | undefined;
  getRelationsByNode: (nodeId: string) => Relation[];
  getQuotesByNode: (nodeId: string) => Quote[];
  searchEntities: (query: string) => Entity[];
  filterEntitiesByType: (type: string) => Entity[];
}

export function useKnowledgeBase(
  options: UseKnowledgeBaseOptions = {},
): UseKnowledgeBaseReturn {
  const [knowledgeBase, setKnowledgeBase] =
    useState<DocumentKnowledgeBase | null>(
      options.initialKnowledgeBase ?? null,
    );

  const entities = useMemo(
    () => knowledgeBase?.entities ?? [],
    [knowledgeBase],
  );
  const relations = useMemo(
    () => knowledgeBase?.relations ?? [],
    [knowledgeBase],
  );
  const quotes = useMemo(() => knowledgeBase?.quotes ?? [], [knowledgeBase]);

  const getEntityById = useCallback(
    (id: string) => entities.find((e) => e.id === id),
    [entities],
  );

  const getRelationsByNode = useCallback(
    (nodeId: string) =>
      relations.filter(
        (r) => r.sourceNodeId === nodeId || r.targetNodeId === nodeId,
      ),
    [relations],
  );

  const getQuotesByNode = useCallback(
    (nodeId: string) => quotes.filter((q) => q.nodeId === nodeId),
    [quotes],
  );

  const searchEntities = useCallback(
    (query: string) => {
      const q = query.toLowerCase();
      return entities.filter(
        (e) =>
          e.value.toLowerCase().includes(q) ||
          e.normalized?.toLowerCase().includes(q),
      );
    },
    [entities],
  );

  const filterEntitiesByType = useCallback(
    (type: string) => entities.filter((e) => e.type === type),
    [entities],
  );

  return {
    knowledgeBase,
    setKnowledgeBase,
    entities,
    relations,
    quotes,
    getEntityById,
    getRelationsByNode,
    getQuotesByNode,
    searchEntities,
    filterEntitiesByType,
  };
}
