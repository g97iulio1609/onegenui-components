/**
 * Skills Module
 *
 * Provides utilities for loading skills and generating JSONL path patterns.
 * Uses safe definitions (no React) to ensure compatibility with build tools.
 */
declare const skillsRegistry: Record<string, string>;
/**
 * Register a skill manually
 */
declare function registerSkill(componentName: string, content: string): void;
/**
 * Get all registered skills
 */
declare function getAllSkills(): Record<string, string>;
/**
 * Generate JSONL path patterns for component item updates.
 * This replaces the hardcoded TREE_CONTEXT_APPENDIX in route.ts.
 */
declare function generateJSONLPaths(): string;

export { generateJSONLPaths, getAllSkills, registerSkill, skillsRegistry };
