import * as zod_v4_core from 'zod/v4/core';
import { D as DocumentIndexNode } from './definitions-OV_MwvaU.mjs';
export { m as BookingFormsDefinition, n as BookingFormsProps, B as BookingFormsPropsSchema, a as CalendarAgendaDefinition, b as CalendarAgendaProps, C as CalendarAgendaSchema, y as CalendarDefinition, z as CalendarProps, x as CalendarPropsSchema, E as DiaryDefinition, G as DiaryProps, A as DiaryPropsSchema, J as DocumentIndexProps, I as DocumentIndexPropsSchema, V as EmailDefinition, X as EmailProps, U as EmailPropsSchema, g as FlightDefinition, h as FlightProps, F as FlightPropsSchema, i as HotelDefinition, j as HotelProps, H as HotelPropsSchema, o as KanbanDefinition, p as KanbanProps, K as KanbanPropsSchema, P as MessageDefinition, Q as MessageProps, O as MessagePropsSchema, e as NutritionDefinition, f as NutritionProps, N as NutritionPropsSchema, t as RoutineSchedulerDefinition, u as RoutineSchedulerProps, R as RoutineSchedulerPropsSchema, M as SourceCitationProps, L as SourceCitationPropsSchema, v as SupplementTrackerDefinition, w as SupplementTrackerProps, S as SupplementTrackerPropsSchema, r as TodoListDefinition, s as TodoListProps, q as TodoListPropsSchema, k as TripDefinition, l as TripProps, T as TripPropsSchema, c as WorkoutDefinition, d as WorkoutProps, W as WorkoutPropsSchema } from './definitions-OV_MwvaU.mjs';
import * as zod from 'zod';
import * as react from 'react';
import { ComponentType } from 'react';
import * as _onegenui_react from '@onegenui/react';
import { ComponentRenderProps } from '@onegenui/react';
import * as _onegenui_schemas from '@onegenui/schemas';
export * from '@onegenui/ui';
import { KnowledgeNode, Entity, Relation, Quote, Citation, DocumentKnowledgeBase, Answer } from '@onegenui/vectorless';
import '@onegenui/ui/definitions';
import '@onegenui/core';

declare const DocumentIndex: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const DocumentIndexDefinition: {
    type: string;
    component: react.NamedExoticComponent<_onegenui_react.ComponentRenderProps<Record<string, unknown>>>;
    schema: zod.ZodObject<{
        title: zod.ZodString;
        description: zod.ZodOptional<zod.ZodString>;
        pageCount: zod.ZodNumber;
        nodes: zod.ZodArray<zod.ZodType<DocumentIndexNode, unknown, zod_v4_core.$ZodTypeInternals<DocumentIndexNode, unknown>>>;
        accentColor: zod.ZodOptional<zod.ZodString>;
        collapsed: zod.ZodDefault<zod.ZodOptional<zod.ZodBoolean>>;
    }, zod_v4_core.$strip>;
};

declare const CalendarAgenda: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Workout: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Nutrition: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Flight: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Hotel: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Trip: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const BookingForms: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

type Profile = {
    name: string;
    handle: string;
    bio?: string;
    avatar?: string;
    coverImage?: string;
    location?: string;
    website?: string;
    joinedDate?: string;
    stats?: {
        followers: number;
        following: number;
        posts: number;
    };
    isFollowing?: boolean;
};
type ProfileCardProps = {
    profile?: Profile;
};
declare const ProfileCard: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

type FeedItem = {
    id: string;
    user: {
        name: string;
        avatar?: string;
        handle?: string;
    };
    content: string;
    image?: string;
    likes?: number;
    comments?: number;
    timestamp: string;
};
type ActivityFeedProps = {
    items?: FeedItem[];
};
declare const ActivityFeed: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

type PricingPlan = {
    id?: string | null;
    name: string;
    price: string;
    cadence?: string | null;
    description?: string | null;
    features?: string[] | null;
    highlight?: boolean | null;
    badge?: string | null;
};
type PricingProps = {
    title?: string | null;
    plans?: PricingPlan[] | null;
};
declare const Pricing: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

type Article = {
    id?: string;
    title: string;
    excerpt?: string;
    coverImage?: string;
    author?: {
        name: string;
        avatar?: string;
    };
    date?: string;
    readTime?: string;
    category?: string;
    url?: string;
};
type ArticleCardProps = {
    article?: Article;
};
declare const ArticleCard: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Kanban: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const TodoList: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const RoutineScheduler: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const SupplementTracker: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Calendar: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Diary: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

/**
 * Research Report Types
 */
type Source = {
    id: string;
    title: string;
    url: string;
    domain?: string;
    favicon?: string;
    date?: string;
};
type ReportSection = {
    title: string;
    content: string;
    image?: {
        url: string;
        alt?: string;
        caption?: string;
    };
    video?: {
        url: string;
        thumbnail?: string;
        title?: string;
    };
};
type ResearchReportProps = {
    title: string;
    summary: string;
    sections: ReportSection[];
    sources: Source[];
    relatedQueries?: string[];
    searchQuery?: string;
    totalResults?: number;
};

declare const ResearchReport: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

/**
 * Compact SourceCitation component - similar style to web sources
 * Shows citations as small, discrete items that expand on demand
 */
declare const SourceCitation: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const SourceCitationDefinition: {
    type: string;
    component: react.NamedExoticComponent<_onegenui_react.ComponentRenderProps<Record<string, unknown>>>;
    schema: zod.ZodObject<{
        title: zod.ZodString;
        description: zod.ZodOptional<zod.ZodString>;
        citations: zod.ZodArray<zod.ZodObject<{
            id: zod.ZodString;
            nodeId: zod.ZodString;
            text: zod.ZodString;
            pageNumber: zod.ZodNumber;
            sectionTitle: zod.ZodString;
            confidence: zod.ZodOptional<zod.ZodEnum<{
                medium: "medium";
                low: "low";
                high: "high";
            }>>;
        }, zod_v4_core.$strip>>;
        showPageNumbers: zod.ZodDefault<zod.ZodOptional<zod.ZodBoolean>>;
        collapsed: zod.ZodDefault<zod.ZodOptional<zod.ZodBoolean>>;
        accentColor: zod.ZodOptional<zod.ZodString>;
    }, zod_v4_core.$strip>;
};

declare const Message: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

declare const Email: react.NamedExoticComponent<ComponentRenderProps<Record<string, unknown>>>;

interface DocumentExplorerProps {
    tree: KnowledgeNode;
    onNodeSelect?: (node: KnowledgeNode) => void;
    selectedNodeId?: string;
    expandedByDefault?: boolean;
}
declare const DocumentExplorer: react.NamedExoticComponent<DocumentExplorerProps>;

interface KnowledgeGraphProps {
    entities: Entity[];
    relations: Relation[];
    width?: number;
    height?: number;
    onEntityClick?: (entity: Entity) => void;
}
declare const KnowledgeGraph: react.NamedExoticComponent<KnowledgeGraphProps>;

interface DocumentTimelineProps {
    entities: Entity[];
    onEntityClick?: (entity: Entity) => void;
}
declare const DocumentTimeline: react.NamedExoticComponent<DocumentTimelineProps>;

interface DeepAnalysisPanelProps {
    node: KnowledgeNode;
    quotes?: Quote[];
    onQuoteClick?: (quote: Quote) => void;
}
declare const DeepAnalysisPanel: react.NamedExoticComponent<DeepAnalysisPanelProps>;

interface CitationViewerProps {
    citations: Citation[];
    onCitationClick?: (citation: Citation) => void;
}
declare const CitationViewer: react.NamedExoticComponent<CitationViewerProps>;

interface EntityExplorerProps {
    entities: Entity[];
    onEntityClick?: (entity: Entity) => void;
    filterTypes?: string[];
}
declare const EntityExplorer: react.NamedExoticComponent<EntityExplorerProps>;

interface UseKnowledgeBaseOptions {
    initialKnowledgeBase?: DocumentKnowledgeBase | null;
}
interface UseKnowledgeBaseReturn {
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
declare function useKnowledgeBase(options?: UseKnowledgeBaseOptions): UseKnowledgeBaseReturn;

interface UseDocumentExplorerOptions {
    initialTree?: KnowledgeNode | null;
    onNodeSelect?: (node: KnowledgeNode) => void;
}
interface UseDocumentExplorerReturn {
    tree: KnowledgeNode | null;
    setTree: (tree: KnowledgeNode | null) => void;
    selectedNode: KnowledgeNode | null;
    expandedNodes: Set<string>;
    selectNode: (node: KnowledgeNode) => void;
    toggleNode: (nodeId: string) => void;
    expandAll: () => void;
    collapseAll: () => void;
    searchNodes: (query: string) => KnowledgeNode[];
    getNodePath: (nodeId: string) => KnowledgeNode[];
}
declare function useDocumentExplorer(options?: UseDocumentExplorerOptions): UseDocumentExplorerReturn;

interface UseQuestionAnswerOptions {
    onAnswer?: (answer: Answer) => void;
    onError?: (error: Error) => void;
}
interface UseQuestionAnswerReturn {
    question: string;
    setQuestion: (question: string) => void;
    answer: Answer | null;
    isLoading: boolean;
    error: Error | null;
    askQuestion: (knowledgeBaseId: string, question: string) => Promise<Answer | null>;
    clearAnswer: () => void;
    history: Array<{
        question: string;
        answer: Answer;
    }>;
    clearHistory: () => void;
}
declare function useQuestionAnswer(options?: UseQuestionAnswerOptions): UseQuestionAnswerReturn;

/** Registry type for component lookup by name */
type ComponentRegistry = Record<string, ComponentType<any>>;
/**
 * Component registry - auto-generated from all domains.
 * Use with Renderer to render UI trees.
 */
declare const componentRegistry: ComponentRegistry;
/**
 * Component definitions - auto-generated from all domains.
 * Use with createCatalog() to build a catalog.
 */
declare const componentDefinitions: {
    Card: {
        name: "Card";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodString>;
            description: zod.ZodNullable<zod.ZodString>;
            padding: zod.ZodNullable<zod.ZodEnum<{
                none: "none";
                sm: "sm";
                md: "md";
                lg: "lg";
            }>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Grid: {
        name: "Grid";
        props: zod.ZodObject<{
            columns: zod.ZodNullable<zod.ZodNumber>;
            gap: zod.ZodNullable<zod.ZodEnum<{
                sm: "sm";
                md: "md";
                lg: "lg";
            }>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Stack: {
        name: "Stack";
        props: zod.ZodObject<{
            direction: zod.ZodNullable<zod.ZodEnum<{
                horizontal: "horizontal";
                vertical: "vertical";
            }>>;
            gap: zod.ZodNullable<zod.ZodEnum<{
                sm: "sm";
                md: "md";
                lg: "lg";
            }>>;
            align: zod.ZodNullable<zod.ZodEnum<{
                start: "start";
                center: "center";
                end: "end";
                stretch: "stretch";
            }>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Divider: {
        name: "Divider";
        props: zod.ZodObject<{
            orientation: zod.ZodNullable<zod.ZodEnum<{
                horizontal: "horizontal";
                vertical: "vertical";
            }>>;
            label: zod.ZodNullable<zod.ZodString>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Heading: {
        name: "Heading";
        props: zod.ZodObject<{
            text: zod.ZodNullable<zod.ZodString>;
            level: zod.ZodNullable<zod.ZodUnion<readonly [zod.ZodEnum<{
                h1: "h1";
                h2: "h2";
                h3: "h3";
                h4: "h4";
            }>, zod.ZodNumber, zod.ZodString]>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Text: {
        name: "Text";
        props: zod.ZodObject<{
            content: zod.ZodNullable<zod.ZodString>;
            variant: zod.ZodNullable<zod.ZodEnum<{
                label: "label";
                body: "body";
                caption: "caption";
            }>>;
            color: zod.ZodNullable<zod.ZodEnum<{
                error: "error";
                success: "success";
                default: "default";
                muted: "muted";
                warning: "warning";
                danger: "danger";
            }>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    CodeBlock: {
        name: "CodeBlock";
        props: zod.ZodObject<{}, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Document: {
        name: "Document";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            documents: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                title: zod.ZodString;
                summary: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                author: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                createdAt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                sections: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    content: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    highlights: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString>>>;
                }, zod_v4_core.$strip>>>>;
                tags: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString>>>;
            }, zod_v4_core.$strip>>>>;
            accentColor: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Badge: {
        name: "Badge";
        props: zod.ZodObject<{
            text: zod.ZodNullable<zod.ZodString>;
            variant: zod.ZodNullable<zod.ZodEnum<{
                success: "success";
                default: "default";
                warning: "warning";
                danger: "danger";
                info: "info";
            }>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Alert: {
        name: "Alert";
        props: zod.ZodObject<{
            type: zod.ZodNullable<zod.ZodEnum<{
                error: "error";
                success: "success";
                warning: "warning";
                info: "info";
            }>>;
            title: zod.ZodNullable<zod.ZodString>;
            message: zod.ZodNullable<zod.ZodString>;
            dismissible: zod.ZodNullable<zod.ZodBoolean>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Empty: {
        name: "Empty";
        props: zod.ZodObject<{
            title: zod.ZodString;
            description: zod.ZodNullable<zod.ZodString>;
            action: zod.ZodNullable<zod.ZodString>;
            actionLabel: zod.ZodNullable<zod.ZodString>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    BrowserAction: {
        name: "BrowserAction";
        props: zod.ZodObject<{
            id: zod.ZodString;
            action: zod.ZodEnum<{
                navigating: "navigating";
                searching: "searching";
                extracting: "extracting";
                clicking: "clicking";
                typing: "typing";
                waiting: "waiting";
                capturing: "capturing";
            }>;
            target: zod.ZodNullable<zod.ZodString>;
            url: zod.ZodNullable<zod.ZodString>;
            status: zod.ZodEnum<{
                error: "error";
                pending: "pending";
                loading: "loading";
                complete: "complete";
            }>;
            message: zod.ZodNullable<zod.ZodString>;
            error: zod.ZodNullable<zod.ZodString>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Button: {
        name: "Button";
        props: zod.ZodObject<{
            label: zod.ZodNullable<zod.ZodString>;
            variant: zod.ZodNullable<zod.ZodEnum<{
                danger: "danger";
                primary: "primary";
                secondary: "secondary";
                ghost: "ghost";
            }>>;
            size: zod.ZodNullable<zod.ZodEnum<{
                sm: "sm";
                md: "md";
                lg: "lg";
            }>>;
            action: zod.ZodNullable<zod.ZodString>;
            actionParams: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodUnknown>>;
            disabled: zod.ZodNullable<zod.ZodBoolean>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    TextField: {
        name: "TextField";
        props: zod.ZodObject<{
            label: zod.ZodNullable<zod.ZodString>;
            bindPath: zod.ZodNullable<zod.ZodString>;
            valuePath: zod.ZodNullable<zod.ZodString>;
            value: zod.ZodNullable<zod.ZodString>;
            placeholder: zod.ZodNullable<zod.ZodString>;
            type: zod.ZodNullable<zod.ZodString>;
            checks: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                fn: zod.ZodString;
                message: zod.ZodString;
            }, zod_v4_core.$strip>>>;
            validateOn: zod.ZodNullable<zod.ZodEnum<{
                change: "change";
                blur: "blur";
                submit: "submit";
            }>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Select: {
        name: "Select";
        props: zod.ZodObject<{
            label: zod.ZodNullable<zod.ZodString>;
            bindPath: zod.ZodNullable<zod.ZodString>;
            valuePath: zod.ZodNullable<zod.ZodString>;
            value: zod.ZodNullable<zod.ZodString>;
            options: zod.ZodArray<zod.ZodObject<{
                value: zod.ZodString;
                label: zod.ZodString;
            }, zod_v4_core.$strip>>;
            placeholder: zod.ZodNullable<zod.ZodString>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    DatePicker: {
        name: "DatePicker";
        props: zod.ZodObject<{
            label: zod.ZodNullable<zod.ZodString>;
            bindPath: zod.ZodNullable<zod.ZodString>;
            valuePath: zod.ZodNullable<zod.ZodString>;
            value: zod.ZodNullable<zod.ZodString>;
            placeholder: zod.ZodNullable<zod.ZodString>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Metric: {
        name: "Metric";
        props: zod.ZodObject<{
            label: zod.ZodString;
            value: zod.ZodNullable<zod.ZodUnion<readonly [zod.ZodString, zod.ZodNumber]>>;
            valuePath: zod.ZodNullable<zod.ZodString>;
            format: zod.ZodNullable<zod.ZodEnum<{
                number: "number";
                currency: "currency";
                percent: "percent";
            }>>;
            trend: zod.ZodNullable<zod.ZodEnum<{
                up: "up";
                down: "down";
                neutral: "neutral";
            }>>;
            trendValue: zod.ZodNullable<zod.ZodString>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Table: {
        name: "Table";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodString>;
            rows: zod.ZodNullable<zod.ZodArray<zod.ZodType<Record<string, unknown>, unknown, zod_v4_core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
            dataPath: zod.ZodNullable<zod.ZodString>;
            columns: zod.ZodArray<zod.ZodPipe<zod.ZodObject<{
                key: zod.ZodOptional<zod.ZodString>;
                label: zod.ZodOptional<zod.ZodString>;
                accessor: zod.ZodOptional<zod.ZodString>;
                header: zod.ZodOptional<zod.ZodString>;
                format: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                    text: "text";
                    date: "date";
                    currency: "currency";
                    badge: "badge";
                }>>>;
            }, zod_v4_core.$strip>, zod.ZodTransform<{
                key: string;
                label: string;
                format: "text" | "date" | "currency" | "badge" | null;
            }, {
                key?: string | undefined;
                label?: string | undefined;
                accessor?: string | undefined;
                header?: string | undefined;
                format?: "text" | "date" | "currency" | "badge" | null | undefined;
            }>>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    List: {
        name: "List";
        props: zod.ZodObject<{
            items: zod.ZodNullable<zod.ZodArray<zod.ZodUnion<readonly [zod.ZodString, zod.ZodType<Record<string, unknown>, unknown, zod_v4_core.$ZodTypeInternals<Record<string, unknown>, unknown>>]>>>;
            dataPath: zod.ZodNullable<zod.ZodString>;
            emptyMessage: zod.ZodNullable<zod.ZodString>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Timeline: {
        name: "Timeline";
        props: zod.ZodObject<{
            dataPath: zod.ZodNullable<zod.ZodString>;
            items: zod.ZodNullable<zod.ZodArray<zod.ZodType<Record<string, unknown>, unknown, zod_v4_core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
            titleKey: zod.ZodNullable<zod.ZodString>;
            dateKey: zod.ZodNullable<zod.ZodString>;
            descriptionKey: zod.ZodNullable<zod.ZodString>;
            statusKey: zod.ZodNullable<zod.ZodString>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    SearchResults: {
        name: "SearchResults";
        props: zod.ZodObject<{
            query: zod.ZodString;
            results: zod.ZodArray<zod.ZodObject<{
                title: zod.ZodString;
                url: zod.ZodString;
                snippet: zod.ZodString;
                favicon: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                image: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                video: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    url: zod.ZodString;
                    thumbnail: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    provider: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    duration: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, zod_v4_core.$strip>>>;
                date: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                source: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                position: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            }, zod_v4_core.$strip>>;
            totalResults: zod.ZodNullable<zod.ZodNumber>;
            searchTime: zod.ZodNullable<zod.ZodNumber>;
            sources: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                title: zod.ZodString;
                url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                domain: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                favicon: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                snippet: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                date: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                pageNumber: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                excerpt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                documentTitle: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            }, zod_v4_core.$strip>>>>;
            synthesis: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                summary: zod.ZodString;
                keyPoints: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                    text: zod.ZodString;
                    citations: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString>>>;
                }, zod_v4_core.$strip>>>>;
                sections: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                    title: zod.ZodString;
                    content: zod.ZodString;
                    citations: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString>>>;
                }, zod_v4_core.$strip>>>>;
                followUpQuestions: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString>>>;
            }, zod_v4_core.$strip>>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    DriveFile: {
        name: "DriveFile";
        props: zod.ZodObject<{
            id: zod.ZodString;
            name: zod.ZodString;
            mimeType: zod.ZodString;
            thumbnailLink: zod.ZodOptional<zod.ZodString>;
            webViewLink: zod.ZodOptional<zod.ZodString>;
            iconLink: zod.ZodOptional<zod.ZodString>;
            modifiedTime: zod.ZodOptional<zod.ZodString>;
            owners: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                displayName: zod.ZodOptional<zod.ZodString>;
                photoLink: zod.ZodOptional<zod.ZodString>;
            }, zod_v4_core.$strip>>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Weather: {
        name: "Weather";
        props: zod.ZodObject<{
            location: zod.ZodString;
            current: zod.ZodObject<{
                temp: zod.ZodNumber;
                condition: zod.ZodString;
                humidity: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                windSpeed: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                windUnit: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                feelsLike: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                uvIndex: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                visibility: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                pressure: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            }, zod_v4_core.$strip>;
            forecastDaily: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                date: zod.ZodString;
                tempMin: zod.ZodNumber;
                tempMax: zod.ZodNumber;
                condition: zod.ZodString;
                icon: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                precipChance: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            }, zod_v4_core.$strip>>>>;
            forecastHourly: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                time: zod.ZodString;
                temp: zod.ZodNumber;
                condition: zod.ZodString;
                icon: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            }, zod_v4_core.$strip>>>>;
            unit: zod.ZodNullable<zod.ZodOptional<zod.ZodEnum<{
                C: "C";
                F: "F";
            }>>>;
            accentColor: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Audio: {
        name: "Audio";
        props: zod.ZodObject<{}, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Video: {
        name: "Video";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            videos: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                caption: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                description: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                createdAt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                author: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                license: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                source: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                poster: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                duration: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                resolution: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                fps: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                codec: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                bitrate: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                sizeBytes: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                transcript: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                tags: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                    label: zod.ZodString;
                    tone: zod.ZodOptional<zod.ZodEnum<{
                        success: "success";
                        default: "default";
                        warning: "warning";
                        danger: "danger";
                    }>>;
                }, zod_v4_core.$strip>>>>;
                metadata: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    model: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    prompt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    negativePrompt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    seed: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    steps: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    guidance: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    style: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    lora: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString>>>;
                    safety: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    aspectRatio: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    motion: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, zod_v4_core.$strip>>>;
                status: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    status: zod.ZodNullable<zod.ZodOptional<zod.ZodEnum<{
                        generating: "generating";
                        ready: "ready";
                        failed: "failed";
                    }>>>;
                    progress: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    errorMessage: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, zod_v4_core.$strip>>>;
                location: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    sourceType: zod.ZodNullable<zod.ZodOptional<zod.ZodEnum<{
                        url: "url";
                        stream: "stream";
                        upload: "upload";
                        embed: "embed";
                    }>>>;
                    src: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    streamUrl: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    embedUrl: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    uploadName: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    provider: zod.ZodNullable<zod.ZodOptional<zod.ZodEnum<{
                        custom: "custom";
                        youtube: "youtube";
                        vimeo: "vimeo";
                        dailymotion: "dailymotion";
                        twitch: "twitch";
                        tiktok: "tiktok";
                        twitter: "twitter";
                    }>>>;
                }, zod_v4_core.$strip>>>;
            }, zod_v4_core.$strip>>>>;
            accentColor: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Image: {
        name: "Image";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            images: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                caption: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                description: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                createdAt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                author: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                license: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                source: zod.ZodString;
                width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                format: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                sizeBytes: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                alt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                tags: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                    label: zod.ZodString;
                    tone: zod.ZodOptional<zod.ZodEnum<{
                        success: "success";
                        default: "default";
                        warning: "warning";
                        danger: "danger";
                    }>>;
                }, zod_v4_core.$strip>>>>;
                metadata: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    model: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    prompt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    negativePrompt: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    seed: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    steps: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    guidance: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    sampler: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    scheduler: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    style: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    lora: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString>>>;
                    upscaler: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    safety: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    aspectRatio: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, zod_v4_core.$strip>>>;
                status: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    status: zod.ZodNullable<zod.ZodOptional<zod.ZodEnum<{
                        generating: "generating";
                        ready: "ready";
                        failed: "failed";
                    }>>>;
                    progress: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    errorMessage: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, zod_v4_core.$strip>>>;
                location: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    sourceType: zod.ZodNullable<zod.ZodOptional<zod.ZodEnum<{
                        url: "url";
                        stream: "stream";
                        upload: "upload";
                        embed: "embed";
                    }>>>;
                    src: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    streamUrl: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    embedUrl: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    uploadName: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                }, zod_v4_core.$strip>>>;
            }, zod_v4_core.$strip>>>>;
            accentColor: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            columns: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Gallery: {
        name: "Gallery";
        props: zod.ZodObject<{}, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Message: {
        name: "Message";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodString>;
            messages: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                sender: zod.ZodString;
                content: zod.ZodString;
                timestamp: zod.ZodString;
                participantId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod_v4_core.$strip>>;
            participants: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                role: zod.ZodString;
                avatar: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                color: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod_v4_core.$strip>>>;
            activeAgents: zod.ZodNullable<zod.ZodArray<zod.ZodString>>;
            lock: zod.ZodNullable<zod.ZodBoolean>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Email: {
        name: "Email";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodString>;
            description: zod.ZodNullable<zod.ZodString>;
            emails: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                from: zod.ZodString;
                subject: zod.ZodString;
                body: zod.ZodString;
                date: zod.ZodString;
                read: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
            }, zod_v4_core.$strip>>;
            lock: zod.ZodNullable<zod.ZodBoolean>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    CalendarAgenda: {
        name: "CalendarAgenda";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            description: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            view: zod.ZodDefault<zod.ZodOptional<zod.ZodEnum<{
                day: "day";
                week: "week";
                agenda: "agenda";
            }>>>;
            selectedDate: zod.ZodOptional<zod.ZodString>;
            events: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                title: zod.ZodString;
                description: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                location: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                start: zod.ZodString;
                end: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                allDay: zod.ZodOptional<zod.ZodBoolean>;
                attendees: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                    email: zod.ZodString;
                    name: zod.ZodOptional<zod.ZodString>;
                    responseStatus: zod.ZodOptional<zod.ZodEnum<{
                        accepted: "accepted";
                        declined: "declined";
                        tentative: "tentative";
                        needsAction: "needsAction";
                    }>>;
                }, zod_v4_core.$strip>>>>;
                meetingLink: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                color: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            }, zod_v4_core.$strip>>>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    DriveFileList: {
        name: "DriveFileList";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            description: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            viewMode: zod.ZodDefault<zod.ZodOptional<zod.ZodEnum<{
                grid: "grid";
                list: "list";
            }>>>;
            files: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                mimeType: zod.ZodString;
                size: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                modifiedTime: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                webViewLink: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                iconLink: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                thumbnailLink: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                owners: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                    displayName: zod.ZodOptional<zod.ZodString>;
                    photoLink: zod.ZodOptional<zod.ZodString>;
                }, zod_v4_core.$strip>>>>;
                shared: zod.ZodOptional<zod.ZodBoolean>;
                starred: zod.ZodOptional<zod.ZodBoolean>;
            }, zod_v4_core.$strip>>>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Workout: {
        name: "Workout";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodString>;
            items: zod.ZodArray<zod.ZodType<_onegenui_schemas.ExerciseItem, unknown, zod_v4_core.$ZodTypeInternals<_onegenui_schemas.ExerciseItem, unknown>>>;
            lock: zod.ZodNullable<zod.ZodBoolean>;
            exercises: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodType<_onegenui_schemas.ExerciseItem, unknown, zod_v4_core.$ZodTypeInternals<_onegenui_schemas.ExerciseItem, unknown>>>>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Nutrition: {
        name: "Nutrition";
        props: zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            meals: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                items: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    name: zod.ZodString;
                    protein: zod.ZodNumber;
                    carbs: zod.ZodNumber;
                    fats: zod.ZodNumber;
                    calories: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                    grams: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                    consumed: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                    alternatives: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                        id: zod.ZodString;
                        name: zod.ZodString;
                        protein: zod.ZodNumber;
                        carbs: zod.ZodNumber;
                        fats: zod.ZodNumber;
                        calories: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                        grams: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                        reason: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    }, zod_v4_core.$strip>>>>;
                }, zod_v4_core.$strip>>;
                alternatives: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    name: zod.ZodString;
                    items: zod.ZodArray<zod.ZodObject<{
                        id: zod.ZodString;
                        name: zod.ZodString;
                        protein: zod.ZodNumber;
                        carbs: zod.ZodNumber;
                        fats: zod.ZodNumber;
                        calories: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                        grams: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                        consumed: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                        alternatives: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                            id: zod.ZodString;
                            name: zod.ZodString;
                            protein: zod.ZodNumber;
                            carbs: zod.ZodNumber;
                            fats: zod.ZodNumber;
                            calories: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                            grams: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                            reason: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                        }, zod_v4_core.$strip>>>>;
                    }, zod_v4_core.$strip>>;
                    reason: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                }, zod_v4_core.$strip>>>>;
            }, zod_v4_core.$strip>>;
            dailyTargets: zod.ZodOptional<zod.ZodNullable<zod.ZodObject<{
                calories: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                protein: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                carbs: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                fats: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
            }, zod_v4_core.$strip>>>;
            lock: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Flight: {
        name: "Flight";
        props: zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            flights: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                airline: zod.ZodString;
                flightNumber: zod.ZodString;
                departure: zod.ZodObject<{
                    code: zod.ZodString;
                    city: zod.ZodString;
                    time: zod.ZodString;
                    date: zod.ZodOptional<zod.ZodString>;
                    terminal: zod.ZodOptional<zod.ZodString>;
                }, zod_v4_core.$strip>;
                arrival: zod.ZodObject<{
                    code: zod.ZodString;
                    city: zod.ZodString;
                    time: zod.ZodString;
                    date: zod.ZodOptional<zod.ZodString>;
                    terminal: zod.ZodOptional<zod.ZodString>;
                }, zod_v4_core.$strip>;
                duration: zod.ZodString;
                price: zod.ZodOptional<zod.ZodObject<{
                    amount: zod.ZodNumber;
                    currency: zod.ZodDefault<zod.ZodString>;
                }, zod_v4_core.$strip>>;
                bookingUrl: zod.ZodOptional<zod.ZodString>;
                status: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                    "On Time": "On Time";
                    Delayed: "Delayed";
                    Boarding: "Boarding";
                    Departed: "Departed";
                    Cancelled: "Cancelled";
                }>>>;
                gate: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                seat: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                class: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                foundBy: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod_v4_core.$strip>>>;
            trips: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                outbound: zod.ZodObject<{
                    id: zod.ZodString;
                    airline: zod.ZodString;
                    flightNumber: zod.ZodString;
                    departure: zod.ZodObject<{
                        code: zod.ZodString;
                        city: zod.ZodString;
                        time: zod.ZodString;
                        date: zod.ZodOptional<zod.ZodString>;
                        terminal: zod.ZodOptional<zod.ZodString>;
                    }, zod_v4_core.$strip>;
                    arrival: zod.ZodObject<{
                        code: zod.ZodString;
                        city: zod.ZodString;
                        time: zod.ZodString;
                        date: zod.ZodOptional<zod.ZodString>;
                        terminal: zod.ZodOptional<zod.ZodString>;
                    }, zod_v4_core.$strip>;
                    duration: zod.ZodString;
                    price: zod.ZodOptional<zod.ZodObject<{
                        amount: zod.ZodNumber;
                        currency: zod.ZodDefault<zod.ZodString>;
                    }, zod_v4_core.$strip>>;
                    bookingUrl: zod.ZodOptional<zod.ZodString>;
                    status: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                        "On Time": "On Time";
                        Delayed: "Delayed";
                        Boarding: "Boarding";
                        Departed: "Departed";
                        Cancelled: "Cancelled";
                    }>>>;
                    gate: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    seat: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    class: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    foundBy: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                }, zod_v4_core.$strip>;
                return: zod.ZodOptional<zod.ZodObject<{
                    id: zod.ZodString;
                    airline: zod.ZodString;
                    flightNumber: zod.ZodString;
                    departure: zod.ZodObject<{
                        code: zod.ZodString;
                        city: zod.ZodString;
                        time: zod.ZodString;
                        date: zod.ZodOptional<zod.ZodString>;
                        terminal: zod.ZodOptional<zod.ZodString>;
                    }, zod_v4_core.$strip>;
                    arrival: zod.ZodObject<{
                        code: zod.ZodString;
                        city: zod.ZodString;
                        time: zod.ZodString;
                        date: zod.ZodOptional<zod.ZodString>;
                        terminal: zod.ZodOptional<zod.ZodString>;
                    }, zod_v4_core.$strip>;
                    duration: zod.ZodString;
                    price: zod.ZodOptional<zod.ZodObject<{
                        amount: zod.ZodNumber;
                        currency: zod.ZodDefault<zod.ZodString>;
                    }, zod_v4_core.$strip>>;
                    bookingUrl: zod.ZodOptional<zod.ZodString>;
                    status: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                        "On Time": "On Time";
                        Delayed: "Delayed";
                        Boarding: "Boarding";
                        Departed: "Departed";
                        Cancelled: "Cancelled";
                    }>>>;
                    gate: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    seat: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    class: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    foundBy: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                }, zod_v4_core.$strip>>;
                totalPrice: zod.ZodOptional<zod.ZodObject<{
                    amount: zod.ZodNumber;
                    currency: zod.ZodDefault<zod.ZodString>;
                }, zod_v4_core.$strip>>;
                bookingUrl: zod.ZodOptional<zod.ZodString>;
            }, zod_v4_core.$strip>>>;
            lock: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Hotel: {
        name: "Hotel";
        props: zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodString>;
            hotels: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                rating: zod.ZodOptional<zod.ZodNumber>;
                address: zod.ZodOptional<zod.ZodString>;
                dates: zod.ZodOptional<zod.ZodObject<{
                    checkIn: zod.ZodString;
                    checkOut: zod.ZodString;
                }, zod_v4_core.$strip>>;
                price: zod.ZodOptional<zod.ZodObject<{
                    amount: zod.ZodNumber;
                    currency: zod.ZodString;
                    perNight: zod.ZodOptional<zod.ZodBoolean>;
                }, zod_v4_core.$strip>>;
                image: zod.ZodOptional<zod.ZodString>;
                amenities: zod.ZodOptional<zod.ZodArray<zod.ZodString>>;
                status: zod.ZodOptional<zod.ZodEnum<{
                    Available: "Available";
                    Booked: "Booked";
                    "Sold Out": "Sold Out";
                    Reserved: "Reserved";
                }>>;
                roomType: zod.ZodOptional<zod.ZodString>;
                guests: zod.ZodOptional<zod.ZodNumber>;
                bookingUrl: zod.ZodOptional<zod.ZodString>;
            }, zod_v4_core.$strip>>>;
            layout: zod.ZodOptional<zod.ZodEnum<{
                list: "list";
                card: "card";
            }>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Trip: {
        name: "Trip";
        props: zod.ZodObject<{}, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    BookingForms: {
        name: "BookingForms";
        props: zod.ZodObject<{}, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Kanban: {
        name: "Kanban";
        props: zod.ZodObject<{
            title: zod.ZodNullable<zod.ZodString>;
            columns: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                title: zod.ZodString;
                color: zod.ZodNullable<zod.ZodString>;
                items: zod.ZodNullable<zod.ZodArray<zod.ZodType<Record<string, unknown>, unknown, zod_v4_core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
            }, zod_v4_core.$strip>>;
            lock: zod.ZodNullable<zod.ZodBoolean>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    TodoList: {
        name: "TodoList";
        props: zod.ZodObject<{}, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    RoutineScheduler: {
        name: "RoutineScheduler";
        props: zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            view: zod.ZodDefault<zod.ZodEnum<{
                day: "day";
                week: "week";
                timeline: "timeline";
            }>>;
            selectedDate: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            days: zod.ZodArray<zod.ZodObject<{
                date: zod.ZodString;
                dayOfWeek: zod.ZodOptional<zod.ZodNumber>;
                blocks: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    title: zod.ZodString;
                    description: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    startTime: zod.ZodString;
                    endTime: zod.ZodString;
                    category: zod.ZodEnum<{
                        workout: "workout";
                        meal: "meal";
                        supplement: "supplement";
                        work: "work";
                        rest: "rest";
                        sleep: "sleep";
                        personal: "personal";
                        other: "other";
                    }>;
                    priority: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                        medium: "medium";
                        low: "low";
                        high: "high";
                    }>>>;
                    completed: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                    recurring: zod.ZodOptional<zod.ZodNullable<zod.ZodObject<{
                        pattern: zod.ZodEnum<{
                            custom: "custom";
                            daily: "daily";
                            weekly: "weekly";
                        }>;
                        daysOfWeek: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodNumber>>>;
                    }, zod_v4_core.$strip>>>;
                    linkedEntityId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    linkedEntityType: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                        workout: "workout";
                        meal: "meal";
                        supplement: "supplement";
                        calendar_event: "calendar_event";
                    }>>>;
                    notes: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    color: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                }, zod_v4_core.$strip>>;
                notes: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod_v4_core.$strip>>;
            timeRange: zod.ZodOptional<zod.ZodNullable<zod.ZodObject<{
                start: zod.ZodDefault<zod.ZodString>;
                end: zod.ZodDefault<zod.ZodString>;
            }, zod_v4_core.$strip>>>;
            granularity: zod.ZodDefault<zod.ZodEnum<{
                "15min": "15min";
                "30min": "30min";
                "1hr": "1hr";
            }>>;
            lock: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
            showCategories: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodEnum<{
                workout: "workout";
                meal: "meal";
                supplement: "supplement";
                work: "work";
                rest: "rest";
                sleep: "sleep";
                personal: "personal";
                other: "other";
            }>>>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    SupplementTracker: {
        name: "SupplementTracker";
        props: zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            supplements: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                dosage: zod.ZodString;
                unit: zod.ZodDefault<zod.ZodEnum<{
                    g: "g";
                    other: "other";
                    mg: "mg";
                    mcg: "mcg";
                    IU: "IU";
                    ml: "ml";
                    capsules: "capsules";
                    tablets: "tablets";
                    drops: "drops";
                }>>;
                category: zod.ZodEnum<{
                    protein: "protein";
                    other: "other";
                    vitamin: "vitamin";
                    mineral: "mineral";
                    amino_acid: "amino_acid";
                    herb: "herb";
                    probiotic: "probiotic";
                    omega: "omega";
                    pre_workout: "pre_workout";
                    post_workout: "post_workout";
                    medication: "medication";
                }>;
                timing: zod.ZodEnum<{
                    pre_workout: "pre_workout";
                    post_workout: "post_workout";
                    morning: "morning";
                    pre_meal: "pre_meal";
                    with_meal: "with_meal";
                    post_meal: "post_meal";
                    evening: "evening";
                    bedtime: "bedtime";
                }>;
                frequency: zod.ZodDefault<zod.ZodEnum<{
                    custom: "custom";
                    daily: "daily";
                    weekly: "weekly";
                    twice_daily: "twice_daily";
                    as_needed: "as_needed";
                }>>;
                withFood: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                notes: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                brand: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                stack: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod_v4_core.$strip>>;
            schedule: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                date: zod.ZodString;
                doses: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    supplementId: zod.ZodString;
                    scheduledTime: zod.ZodString;
                    taken: zod.ZodDefault<zod.ZodBoolean>;
                    takenAt: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    skipped: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                    skipReason: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                }, zod_v4_core.$strip>>;
                notes: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod_v4_core.$strip>>>>;
            selectedDate: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            view: zod.ZodDefault<zod.ZodEnum<{
                daily: "daily";
                weekly: "weekly";
                inventory: "inventory";
            }>>;
            showStacks: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
            lock: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Calendar: {
        name: "Calendar";
        props: zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            view: zod.ZodDefault<zod.ZodEnum<{
                day: "day";
                month: "month";
                year: "year";
                week: "week";
                agenda: "agenda";
            }>>;
            selectedDate: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            events: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                title: zod.ZodString;
                description: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                start: zod.ZodString;
                end: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                allDay: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                location: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                color: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                category: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                    workout: "workout";
                    meal: "meal";
                    supplement: "supplement";
                    work: "work";
                    personal: "personal";
                    other: "other";
                    health: "health";
                    social: "social";
                    travel: "travel";
                    reminder: "reminder";
                }>>>;
                recurring: zod.ZodOptional<zod.ZodNullable<zod.ZodObject<{
                    pattern: zod.ZodEnum<{
                        daily: "daily";
                        weekly: "weekly";
                        monthly: "monthly";
                        yearly: "yearly";
                    }>;
                    interval: zod.ZodOptional<zod.ZodNumber>;
                    endDate: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    daysOfWeek: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodNumber>>>;
                }, zod_v4_core.$strip>>>;
                reminders: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                    type: zod.ZodEnum<{
                        email: "email";
                        notification: "notification";
                    }>;
                    minutes: zod.ZodNumber;
                }, zod_v4_core.$strip>>>>;
                linkedEntityId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                linkedEntityType: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                    workout: "workout";
                    meal: "meal";
                    task: "task";
                    supplement: "supplement";
                    diary: "diary";
                    routine: "routine";
                }>>>;
                status: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                    tentative: "tentative";
                    confirmed: "confirmed";
                    cancelled: "cancelled";
                }>>>;
                completed: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                priority: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                    medium: "medium";
                    low: "low";
                    high: "high";
                }>>>;
                tags: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodString>>>;
                attendees: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    status: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                        accepted: "accepted";
                        declined: "declined";
                        tentative: "tentative";
                        pending: "pending";
                    }>>>;
                }, zod_v4_core.$strip>>>>;
                notes: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod_v4_core.$strip>>;
            showWeekNumbers: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
            firstDayOfWeek: zod.ZodDefault<zod.ZodNumber>;
            highlightToday: zod.ZodDefault<zod.ZodBoolean>;
            showMiniCalendar: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
            showCategories: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodEnum<{
                workout: "workout";
                meal: "meal";
                supplement: "supplement";
                work: "work";
                personal: "personal";
                other: "other";
                health: "health";
                social: "social";
                travel: "travel";
                reminder: "reminder";
            }>>>>;
            enableQuickAdd: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
            workingHours: zod.ZodOptional<zod.ZodNullable<zod.ZodObject<{
                start: zod.ZodDefault<zod.ZodString>;
                end: zod.ZodDefault<zod.ZodString>;
            }, zod_v4_core.$strip>>>;
            lock: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    Diary: {
        name: "Diary";
        props: zod.ZodObject<{
            title: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            entries: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                date: zod.ZodString;
                title: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                content: zod.ZodString;
                mood: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                    neutral: "neutral";
                    great: "great";
                    good: "good";
                    bad: "bad";
                    terrible: "terrible";
                }>>>;
                energy: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                sleep: zod.ZodOptional<zod.ZodNullable<zod.ZodObject<{
                    hours: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                    quality: zod.ZodOptional<zod.ZodNullable<zod.ZodEnum<{
                        great: "great";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>>;
                }, zod_v4_core.$strip>>>;
                gratitude: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodString>>>;
                highlights: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodString>>>;
                challenges: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodString>>>;
                goals: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    text: zod.ZodString;
                    completed: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                }, zod_v4_core.$strip>>>>;
                tags: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodString>>>;
                linkedEntities: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                    type: zod.ZodEnum<{
                        workout: "workout";
                        meal: "meal";
                        supplement: "supplement";
                        calendar_event: "calendar_event";
                        routine: "routine";
                    }>;
                    id: zod.ZodString;
                    label: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                }, zod_v4_core.$strip>>>>;
                weather: zod.ZodOptional<zod.ZodNullable<zod.ZodObject<{
                    condition: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                    temperature: zod.ZodOptional<zod.ZodNullable<zod.ZodNumber>>;
                }, zod_v4_core.$strip>>>;
                location: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                photos: zod.ZodOptional<zod.ZodNullable<zod.ZodArray<zod.ZodString>>>;
                private: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
                createdAt: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                updatedAt: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod_v4_core.$strip>>;
            selectedDate: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            view: zod.ZodDefault<zod.ZodEnum<{
                single: "single";
                calendar: "calendar";
                timeline: "timeline";
            }>>;
            showMoodTracker: zod.ZodDefault<zod.ZodBoolean>;
            showEnergyTracker: zod.ZodDefault<zod.ZodBoolean>;
            showGratitude: zod.ZodDefault<zod.ZodBoolean>;
            showLinkedEntities: zod.ZodDefault<zod.ZodBoolean>;
            enableSearch: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
            lock: zod.ZodOptional<zod.ZodNullable<zod.ZodBoolean>>;
        }, zod_v4_core.$strip>;
        description: string;
        hasChildren: boolean;
    };
    DocumentIndex: {
        type: string;
        component: react.NamedExoticComponent<_onegenui_react.ComponentRenderProps<Record<string, unknown>>>;
        schema: zod.ZodObject<{
            title: zod.ZodString;
            description: zod.ZodOptional<zod.ZodString>;
            pageCount: zod.ZodNumber;
            nodes: zod.ZodArray<zod.ZodType<DocumentIndexNode, unknown, zod_v4_core.$ZodTypeInternals<DocumentIndexNode, unknown>>>;
            accentColor: zod.ZodOptional<zod.ZodString>;
            collapsed: zod.ZodDefault<zod.ZodOptional<zod.ZodBoolean>>;
        }, zod_v4_core.$strip>;
    };
    SourceCitation: {
        type: string;
        component: react.NamedExoticComponent<_onegenui_react.ComponentRenderProps<Record<string, unknown>>>;
        schema: zod.ZodObject<{
            title: zod.ZodString;
            description: zod.ZodOptional<zod.ZodString>;
            citations: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                nodeId: zod.ZodString;
                text: zod.ZodString;
                pageNumber: zod.ZodNumber;
                sectionTitle: zod.ZodString;
                confidence: zod.ZodOptional<zod.ZodEnum<{
                    medium: "medium";
                    low: "low";
                    high: "high";
                }>>;
            }, zod_v4_core.$strip>>;
            showPageNumbers: zod.ZodDefault<zod.ZodOptional<zod.ZodBoolean>>;
            collapsed: zod.ZodDefault<zod.ZodOptional<zod.ZodBoolean>>;
            accentColor: zod.ZodOptional<zod.ZodString>;
        }, zod_v4_core.$strip>;
    };
};
/** Get list of all registered component names */
declare const componentNames: string[];
/** Check if a component is registered */
declare function hasComponent(name: string): boolean;

declare const VERSION = "0.1.0";

export { ActivityFeed, type ActivityFeedProps, ArticleCard, type ArticleCardProps, BookingForms, Calendar, CalendarAgenda, CitationViewer, type CitationViewerProps, type ComponentRegistry, DeepAnalysisPanel, type DeepAnalysisPanelProps, Diary, DocumentExplorer, type DocumentExplorerProps, DocumentIndex, DocumentIndexDefinition, DocumentTimeline, type DocumentTimelineProps, Email, EntityExplorer, type EntityExplorerProps, Flight, Hotel, Kanban, KnowledgeGraph, type KnowledgeGraphProps, Message, Nutrition, Pricing, type PricingProps, ProfileCard, type ProfileCardProps, type ReportSection, ResearchReport, type ResearchReportProps, type Source as ResearchSource, RoutineScheduler, SourceCitation, SourceCitationDefinition, SupplementTracker, TodoList, Trip, type UseDocumentExplorerOptions, type UseDocumentExplorerReturn, type UseKnowledgeBaseOptions, type UseKnowledgeBaseReturn, type UseQuestionAnswerOptions, type UseQuestionAnswerReturn, VERSION, Workout, componentDefinitions, componentNames, componentRegistry, hasComponent, useDocumentExplorer, useKnowledgeBase, useQuestionAnswer };
