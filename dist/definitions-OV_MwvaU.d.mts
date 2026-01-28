import '@onegenui/ui/definitions';
import { z } from 'zod';
import * as _onegenui_schemas from '@onegenui/schemas';
import { ComponentDefinition } from '@onegenui/core';

/**
 * Message component schema definition
 */
declare const MessagePropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodString>;
    messages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        sender: z.ZodString;
        content: z.ZodString;
        timestamp: z.ZodString;
        participantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    participants: z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        role: z.ZodString;
        avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    activeAgents: z.ZodNullable<z.ZodArray<z.ZodString>>;
    lock: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>;
/** Type inference for Message props */
type MessageProps = z.infer<typeof MessagePropsSchema>;
/**
 * Message component definition for catalog registration
 */
declare const MessageDefinition: {
    name: "Message";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodString>;
        messages: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            sender: z.ZodString;
            content: z.ZodString;
            timestamp: z.ZodString;
            participantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        participants: z.ZodNullable<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            role: z.ZodString;
            avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        activeAgents: z.ZodNullable<z.ZodArray<z.ZodString>>;
        lock: z.ZodNullable<z.ZodBoolean>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Email component schema definition
 */
declare const EmailPropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    emails: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        from: z.ZodString;
        subject: z.ZodString;
        body: z.ZodString;
        date: z.ZodString;
        read: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>>;
    lock: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>;
/** Type inference for Email props */
type EmailProps = z.infer<typeof EmailPropsSchema>;
/**
 * Email component definition for catalog registration
 */
declare const EmailDefinition: {
    name: "Email";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        emails: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            from: z.ZodString;
            subject: z.ZodString;
            body: z.ZodString;
            date: z.ZodString;
            read: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, z.core.$strip>>;
        lock: z.ZodNullable<z.ZodBoolean>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

declare const CalendarAgendaSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    view: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        day: "day";
        week: "week";
        agenda: "agenda";
    }>>>;
    selectedDate: z.ZodOptional<z.ZodString>;
    events: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        location: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        start: z.ZodString;
        end: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        allDay: z.ZodOptional<z.ZodBoolean>;
        attendees: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            email: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            responseStatus: z.ZodOptional<z.ZodEnum<{
                accepted: "accepted";
                declined: "declined";
                tentative: "tentative";
                needsAction: "needsAction";
            }>>;
        }, z.core.$strip>>>>;
        meetingLink: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        color: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
type CalendarAgendaProps = z.infer<typeof CalendarAgendaSchema>;
/**
 * CalendarAgenda component definition for catalog registration
 */
declare const CalendarAgendaDefinition: {
    name: "CalendarAgenda";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        view: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
            day: "day";
            week: "week";
            agenda: "agenda";
        }>>>;
        selectedDate: z.ZodOptional<z.ZodString>;
        events: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            location: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            start: z.ZodString;
            end: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            allDay: z.ZodOptional<z.ZodBoolean>;
            attendees: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
                email: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                responseStatus: z.ZodOptional<z.ZodEnum<{
                    accepted: "accepted";
                    declined: "declined";
                    tentative: "tentative";
                    needsAction: "needsAction";
                }>>;
            }, z.core.$strip>>>>;
            meetingLink: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            color: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Workout component schema definition
 */
declare const WorkoutPropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodType<_onegenui_schemas.ExerciseItem, unknown, z.core.$ZodTypeInternals<_onegenui_schemas.ExerciseItem, unknown>>>;
    lock: z.ZodNullable<z.ZodBoolean>;
    exercises: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<_onegenui_schemas.ExerciseItem, unknown, z.core.$ZodTypeInternals<_onegenui_schemas.ExerciseItem, unknown>>>>>;
}, z.core.$strip>;
/** Type inference for Workout props */
type WorkoutProps = z.infer<typeof WorkoutPropsSchema>;
/**
 * Workout component definition for catalog registration
 */
declare const WorkoutDefinition: {
    name: "Workout";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodString>;
        items: z.ZodArray<z.ZodType<_onegenui_schemas.ExerciseItem, unknown, z.core.$ZodTypeInternals<_onegenui_schemas.ExerciseItem, unknown>>>;
        lock: z.ZodNullable<z.ZodBoolean>;
        exercises: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<_onegenui_schemas.ExerciseItem, unknown, z.core.$ZodTypeInternals<_onegenui_schemas.ExerciseItem, unknown>>>>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Nutrition component schema definition
 */
declare const NutritionPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    meals: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            protein: z.ZodNumber;
            carbs: z.ZodNumber;
            fats: z.ZodNumber;
            calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            grams: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            consumed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            alternatives: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                protein: z.ZodNumber;
                carbs: z.ZodNumber;
                fats: z.ZodNumber;
                calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                grams: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>;
        alternatives: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                protein: z.ZodNumber;
                carbs: z.ZodNumber;
                fats: z.ZodNumber;
                calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                grams: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                consumed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                alternatives: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    protein: z.ZodNumber;
                    carbs: z.ZodNumber;
                    fats: z.ZodNumber;
                    calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    grams: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>>;
            reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>>;
    dailyTargets: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        protein: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        carbs: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fats: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
/** Type inference for Nutrition props */
type NutritionProps = z.infer<typeof NutritionPropsSchema>;
/**
 * Nutrition component definition for catalog registration
 */
declare const NutritionDefinition: {
    name: "Nutrition";
    props: z.ZodObject<{
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        meals: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            items: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                protein: z.ZodNumber;
                carbs: z.ZodNumber;
                fats: z.ZodNumber;
                calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                grams: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                consumed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                alternatives: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    protein: z.ZodNumber;
                    carbs: z.ZodNumber;
                    fats: z.ZodNumber;
                    calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    grams: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, z.core.$strip>>>>;
            }, z.core.$strip>>;
            alternatives: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                items: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    protein: z.ZodNumber;
                    carbs: z.ZodNumber;
                    fats: z.ZodNumber;
                    calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    grams: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    consumed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                    alternatives: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        name: z.ZodString;
                        protein: z.ZodNumber;
                        carbs: z.ZodNumber;
                        fats: z.ZodNumber;
                        calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        grams: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, z.core.$strip>>>>;
                }, z.core.$strip>>;
                reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>;
        dailyTargets: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            calories: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            protein: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            carbs: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            fats: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

declare const FlightPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    flights: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        airline: z.ZodString;
        flightNumber: z.ZodString;
        departure: z.ZodObject<{
            code: z.ZodString;
            city: z.ZodString;
            time: z.ZodString;
            date: z.ZodOptional<z.ZodString>;
            terminal: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        arrival: z.ZodObject<{
            code: z.ZodString;
            city: z.ZodString;
            time: z.ZodString;
            date: z.ZodOptional<z.ZodString>;
            terminal: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        duration: z.ZodString;
        price: z.ZodOptional<z.ZodObject<{
            amount: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, z.core.$strip>>;
        bookingUrl: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "On Time": "On Time";
            Delayed: "Delayed";
            Cancelled: "Cancelled";
            Boarding: "Boarding";
            Departed: "Departed";
        }>>>;
        gate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        seat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        class: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    trips: z.ZodOptional<z.ZodArray<z.ZodObject<{
        outbound: z.ZodObject<{
            id: z.ZodString;
            airline: z.ZodString;
            flightNumber: z.ZodString;
            departure: z.ZodObject<{
                code: z.ZodString;
                city: z.ZodString;
                time: z.ZodString;
                date: z.ZodOptional<z.ZodString>;
                terminal: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            arrival: z.ZodObject<{
                code: z.ZodString;
                city: z.ZodString;
                time: z.ZodString;
                date: z.ZodOptional<z.ZodString>;
                terminal: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            duration: z.ZodString;
            price: z.ZodOptional<z.ZodObject<{
                amount: z.ZodNumber;
                currency: z.ZodDefault<z.ZodString>;
            }, z.core.$strip>>;
            bookingUrl: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                "On Time": "On Time";
                Delayed: "Delayed";
                Cancelled: "Cancelled";
                Boarding: "Boarding";
                Departed: "Departed";
            }>>>;
            gate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            seat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            class: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            foundBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>;
        return: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            airline: z.ZodString;
            flightNumber: z.ZodString;
            departure: z.ZodObject<{
                code: z.ZodString;
                city: z.ZodString;
                time: z.ZodString;
                date: z.ZodOptional<z.ZodString>;
                terminal: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            arrival: z.ZodObject<{
                code: z.ZodString;
                city: z.ZodString;
                time: z.ZodString;
                date: z.ZodOptional<z.ZodString>;
                terminal: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            duration: z.ZodString;
            price: z.ZodOptional<z.ZodObject<{
                amount: z.ZodNumber;
                currency: z.ZodDefault<z.ZodString>;
            }, z.core.$strip>>;
            bookingUrl: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                "On Time": "On Time";
                Delayed: "Delayed";
                Cancelled: "Cancelled";
                Boarding: "Boarding";
                Departed: "Departed";
            }>>>;
            gate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            seat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            class: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            foundBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        totalPrice: z.ZodOptional<z.ZodObject<{
            amount: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
        }, z.core.$strip>>;
        bookingUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type FlightProps = z.infer<typeof FlightPropsSchema>;
declare const FlightDefinition: {
    name: "Flight";
    props: z.ZodObject<{
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        flights: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            airline: z.ZodString;
            flightNumber: z.ZodString;
            departure: z.ZodObject<{
                code: z.ZodString;
                city: z.ZodString;
                time: z.ZodString;
                date: z.ZodOptional<z.ZodString>;
                terminal: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            arrival: z.ZodObject<{
                code: z.ZodString;
                city: z.ZodString;
                time: z.ZodString;
                date: z.ZodOptional<z.ZodString>;
                terminal: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            duration: z.ZodString;
            price: z.ZodOptional<z.ZodObject<{
                amount: z.ZodNumber;
                currency: z.ZodDefault<z.ZodString>;
            }, z.core.$strip>>;
            bookingUrl: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                "On Time": "On Time";
                Delayed: "Delayed";
                Cancelled: "Cancelled";
                Boarding: "Boarding";
                Departed: "Departed";
            }>>>;
            gate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            seat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            class: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            foundBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        trips: z.ZodOptional<z.ZodArray<z.ZodObject<{
            outbound: z.ZodObject<{
                id: z.ZodString;
                airline: z.ZodString;
                flightNumber: z.ZodString;
                departure: z.ZodObject<{
                    code: z.ZodString;
                    city: z.ZodString;
                    time: z.ZodString;
                    date: z.ZodOptional<z.ZodString>;
                    terminal: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                arrival: z.ZodObject<{
                    code: z.ZodString;
                    city: z.ZodString;
                    time: z.ZodString;
                    date: z.ZodOptional<z.ZodString>;
                    terminal: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                duration: z.ZodString;
                price: z.ZodOptional<z.ZodObject<{
                    amount: z.ZodNumber;
                    currency: z.ZodDefault<z.ZodString>;
                }, z.core.$strip>>;
                bookingUrl: z.ZodOptional<z.ZodString>;
                status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    "On Time": "On Time";
                    Delayed: "Delayed";
                    Cancelled: "Cancelled";
                    Boarding: "Boarding";
                    Departed: "Departed";
                }>>>;
                gate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                seat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                class: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                foundBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>;
            return: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                airline: z.ZodString;
                flightNumber: z.ZodString;
                departure: z.ZodObject<{
                    code: z.ZodString;
                    city: z.ZodString;
                    time: z.ZodString;
                    date: z.ZodOptional<z.ZodString>;
                    terminal: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                arrival: z.ZodObject<{
                    code: z.ZodString;
                    city: z.ZodString;
                    time: z.ZodString;
                    date: z.ZodOptional<z.ZodString>;
                    terminal: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                duration: z.ZodString;
                price: z.ZodOptional<z.ZodObject<{
                    amount: z.ZodNumber;
                    currency: z.ZodDefault<z.ZodString>;
                }, z.core.$strip>>;
                bookingUrl: z.ZodOptional<z.ZodString>;
                status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    "On Time": "On Time";
                    Delayed: "Delayed";
                    Cancelled: "Cancelled";
                    Boarding: "Boarding";
                    Departed: "Departed";
                }>>>;
                gate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                seat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                class: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                foundBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            totalPrice: z.ZodOptional<z.ZodObject<{
                amount: z.ZodNumber;
                currency: z.ZodDefault<z.ZodString>;
            }, z.core.$strip>>;
            bookingUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Hotel component schema definition
 */
declare const HotelPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    hotels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        rating: z.ZodOptional<z.ZodNumber>;
        address: z.ZodOptional<z.ZodString>;
        dates: z.ZodOptional<z.ZodObject<{
            checkIn: z.ZodString;
            checkOut: z.ZodString;
        }, z.core.$strip>>;
        price: z.ZodOptional<z.ZodObject<{
            amount: z.ZodNumber;
            currency: z.ZodString;
            perNight: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        image: z.ZodOptional<z.ZodString>;
        amenities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        status: z.ZodOptional<z.ZodEnum<{
            Available: "Available";
            Booked: "Booked";
            "Sold Out": "Sold Out";
            Reserved: "Reserved";
        }>>;
        roomType: z.ZodOptional<z.ZodString>;
        guests: z.ZodOptional<z.ZodNumber>;
        bookingUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    layout: z.ZodOptional<z.ZodEnum<{
        list: "list";
        card: "card";
    }>>;
}, z.core.$strip>;
/** Type inference for Hotel props */
type HotelProps = z.infer<typeof HotelPropsSchema>;
/**
 * Hotel component definition for catalog registration
 */
declare const HotelDefinition: {
    name: "Hotel";
    props: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        hotels: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            rating: z.ZodOptional<z.ZodNumber>;
            address: z.ZodOptional<z.ZodString>;
            dates: z.ZodOptional<z.ZodObject<{
                checkIn: z.ZodString;
                checkOut: z.ZodString;
            }, z.core.$strip>>;
            price: z.ZodOptional<z.ZodObject<{
                amount: z.ZodNumber;
                currency: z.ZodString;
                perNight: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            image: z.ZodOptional<z.ZodString>;
            amenities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            status: z.ZodOptional<z.ZodEnum<{
                Available: "Available";
                Booked: "Booked";
                "Sold Out": "Sold Out";
                Reserved: "Reserved";
            }>>;
            roomType: z.ZodOptional<z.ZodString>;
            guests: z.ZodOptional<z.ZodNumber>;
            bookingUrl: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        layout: z.ZodOptional<z.ZodEnum<{
            list: "list";
            card: "card";
        }>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Trip component schema definition
 */
declare const TripPropsSchema: z.ZodObject<{}, z.core.$strip>;
/** Type inference for Trip props */
type TripProps = z.infer<typeof TripPropsSchema>;
/**
 * Trip component definition for catalog registration
 */
declare const TripDefinition: {
    name: "Trip";
    props: z.ZodObject<{}, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * BookingForms component schema definition
 */
declare const BookingFormsPropsSchema: z.ZodObject<{}, z.core.$strip>;
/** Type inference for BookingForms props */
type BookingFormsProps = z.infer<typeof BookingFormsPropsSchema>;
/**
 * BookingForms component definition for catalog registration
 */
declare const BookingFormsDefinition: {
    name: "BookingForms";
    props: z.ZodObject<{}, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Kanban component schema definition
 */
declare const KanbanPropsSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodString>;
    columns: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        color: z.ZodNullable<z.ZodString>;
        items: z.ZodNullable<z.ZodArray<z.ZodType<Record<string, unknown>, unknown, z.core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
    }, z.core.$strip>>;
    lock: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>;
/** Type inference for Kanban props */
type KanbanProps = z.infer<typeof KanbanPropsSchema>;
/**
 * Kanban component definition for catalog registration
 */
declare const KanbanDefinition: {
    name: "Kanban";
    props: z.ZodObject<{
        title: z.ZodNullable<z.ZodString>;
        columns: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            color: z.ZodNullable<z.ZodString>;
            items: z.ZodNullable<z.ZodArray<z.ZodType<Record<string, unknown>, unknown, z.core.$ZodTypeInternals<Record<string, unknown>, unknown>>>>;
        }, z.core.$strip>>;
        lock: z.ZodNullable<z.ZodBoolean>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * TodoList component schema definition
 */
declare const TodoListPropsSchema: z.ZodObject<{}, z.core.$strip>;
/** Type inference for TodoList props */
type TodoListProps = z.infer<typeof TodoListPropsSchema>;
/**
 * TodoList component definition for catalog registration
 */
declare const TodoListDefinition: {
    name: "TodoList";
    props: z.ZodObject<{}, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * RoutineScheduler component props schema
 */
declare const RoutineSchedulerPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    view: z.ZodDefault<z.ZodEnum<{
        day: "day";
        week: "week";
        timeline: "timeline";
    }>>;
    selectedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    days: z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        dayOfWeek: z.ZodOptional<z.ZodNumber>;
        blocks: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            startTime: z.ZodString;
            endTime: z.ZodString;
            category: z.ZodEnum<{
                workout: "workout";
                meal: "meal";
                supplement: "supplement";
                work: "work";
                rest: "rest";
                sleep: "sleep";
                personal: "personal";
                other: "other";
            }>;
            priority: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
            completed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            recurring: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                pattern: z.ZodEnum<{
                    custom: "custom";
                    daily: "daily";
                    weekly: "weekly";
                }>;
                daysOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
            }, z.core.$strip>>>;
            linkedEntityId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            linkedEntityType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                workout: "workout";
                meal: "meal";
                supplement: "supplement";
                calendar_event: "calendar_event";
            }>>>;
            notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    timeRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        start: z.ZodDefault<z.ZodString>;
        end: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>>;
    granularity: z.ZodDefault<z.ZodEnum<{
        "15min": "15min";
        "30min": "30min";
        "1hr": "1hr";
    }>>;
    lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    showCategories: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
        workout: "workout";
        meal: "meal";
        supplement: "supplement";
        work: "work";
        rest: "rest";
        sleep: "sleep";
        personal: "personal";
        other: "other";
    }>>>>;
}, z.core.$strip>;
type RoutineSchedulerProps = z.infer<typeof RoutineSchedulerPropsSchema>;
/**
 * RoutineScheduler component definition for catalog registration
 */
declare const RoutineSchedulerDefinition: {
    name: "RoutineScheduler";
    props: z.ZodObject<{
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        view: z.ZodDefault<z.ZodEnum<{
            day: "day";
            week: "week";
            timeline: "timeline";
        }>>;
        selectedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        days: z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            dayOfWeek: z.ZodOptional<z.ZodNumber>;
            blocks: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                startTime: z.ZodString;
                endTime: z.ZodString;
                category: z.ZodEnum<{
                    workout: "workout";
                    meal: "meal";
                    supplement: "supplement";
                    work: "work";
                    rest: "rest";
                    sleep: "sleep";
                    personal: "personal";
                    other: "other";
                }>;
                priority: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    high: "high";
                    medium: "medium";
                    low: "low";
                }>>>;
                completed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                recurring: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    pattern: z.ZodEnum<{
                        custom: "custom";
                        daily: "daily";
                        weekly: "weekly";
                    }>;
                    daysOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
                }, z.core.$strip>>>;
                linkedEntityId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                linkedEntityType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    workout: "workout";
                    meal: "meal";
                    supplement: "supplement";
                    calendar_event: "calendar_event";
                }>>>;
                notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        timeRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            start: z.ZodDefault<z.ZodString>;
            end: z.ZodDefault<z.ZodString>;
        }, z.core.$strip>>>;
        granularity: z.ZodDefault<z.ZodEnum<{
            "15min": "15min";
            "30min": "30min";
            "1hr": "1hr";
        }>>;
        lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        showCategories: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
            workout: "workout";
            meal: "meal";
            supplement: "supplement";
            work: "work";
            rest: "rest";
            sleep: "sleep";
            personal: "personal";
            other: "other";
        }>>>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * SupplementTracker component props schema
 */
declare const SupplementTrackerPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    supplements: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        dosage: z.ZodString;
        unit: z.ZodDefault<z.ZodEnum<{
            other: "other";
            mg: "mg";
            g: "g";
            mcg: "mcg";
            IU: "IU";
            ml: "ml";
            capsules: "capsules";
            tablets: "tablets";
            drops: "drops";
        }>>;
        category: z.ZodEnum<{
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
        timing: z.ZodEnum<{
            pre_workout: "pre_workout";
            post_workout: "post_workout";
            morning: "morning";
            pre_meal: "pre_meal";
            with_meal: "with_meal";
            post_meal: "post_meal";
            evening: "evening";
            bedtime: "bedtime";
        }>;
        frequency: z.ZodDefault<z.ZodEnum<{
            custom: "custom";
            daily: "daily";
            weekly: "weekly";
            twice_daily: "twice_daily";
            as_needed: "as_needed";
        }>>;
        withFood: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        brand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stack: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    schedule: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        doses: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            supplementId: z.ZodString;
            scheduledTime: z.ZodString;
            taken: z.ZodDefault<z.ZodBoolean>;
            takenAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            skipped: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            skipReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    selectedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    view: z.ZodDefault<z.ZodEnum<{
        daily: "daily";
        weekly: "weekly";
        inventory: "inventory";
    }>>;
    showStacks: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type SupplementTrackerProps = z.infer<typeof SupplementTrackerPropsSchema>;
/**
 * SupplementTracker component definition for catalog registration
 */
declare const SupplementTrackerDefinition: {
    name: "SupplementTracker";
    props: z.ZodObject<{
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        supplements: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            dosage: z.ZodString;
            unit: z.ZodDefault<z.ZodEnum<{
                other: "other";
                mg: "mg";
                g: "g";
                mcg: "mcg";
                IU: "IU";
                ml: "ml";
                capsules: "capsules";
                tablets: "tablets";
                drops: "drops";
            }>>;
            category: z.ZodEnum<{
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
            timing: z.ZodEnum<{
                pre_workout: "pre_workout";
                post_workout: "post_workout";
                morning: "morning";
                pre_meal: "pre_meal";
                with_meal: "with_meal";
                post_meal: "post_meal";
                evening: "evening";
                bedtime: "bedtime";
            }>;
            frequency: z.ZodDefault<z.ZodEnum<{
                custom: "custom";
                daily: "daily";
                weekly: "weekly";
                twice_daily: "twice_daily";
                as_needed: "as_needed";
            }>>;
            withFood: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            brand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            stack: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        schedule: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            doses: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                supplementId: z.ZodString;
                scheduledTime: z.ZodString;
                taken: z.ZodDefault<z.ZodBoolean>;
                takenAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                skipped: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                skipReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        selectedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        view: z.ZodDefault<z.ZodEnum<{
            daily: "daily";
            weekly: "weekly";
            inventory: "inventory";
        }>>;
        showStacks: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Calendar component props schema
 */
declare const CalendarPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    view: z.ZodDefault<z.ZodEnum<{
        day: "day";
        week: "week";
        agenda: "agenda";
        month: "month";
        year: "year";
    }>>;
    selectedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    events: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        start: z.ZodString;
        end: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        allDay: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        category: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
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
        recurring: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            pattern: z.ZodEnum<{
                daily: "daily";
                weekly: "weekly";
                monthly: "monthly";
                yearly: "yearly";
            }>;
            interval: z.ZodOptional<z.ZodNumber>;
            endDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            daysOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
        }, z.core.$strip>>>;
        reminders: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                email: "email";
                notification: "notification";
            }>;
            minutes: z.ZodNumber;
        }, z.core.$strip>>>>;
        linkedEntityId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        linkedEntityType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            workout: "workout";
            meal: "meal";
            supplement: "supplement";
            routine: "routine";
            diary: "diary";
            task: "task";
        }>>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            tentative: "tentative";
            confirmed: "confirmed";
            cancelled: "cancelled";
        }>>>;
        completed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        priority: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            high: "high";
            medium: "medium";
            low: "low";
        }>>>;
        tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        attendees: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                accepted: "accepted";
                declined: "declined";
                tentative: "tentative";
                pending: "pending";
            }>>>;
        }, z.core.$strip>>>>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    showWeekNumbers: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    firstDayOfWeek: z.ZodDefault<z.ZodNumber>;
    highlightToday: z.ZodDefault<z.ZodBoolean>;
    showMiniCalendar: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    showCategories: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
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
    enableQuickAdd: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    workingHours: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        start: z.ZodDefault<z.ZodString>;
        end: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>>;
    lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type CalendarProps = z.infer<typeof CalendarPropsSchema>;
/**
 * Calendar component definition for catalog registration
 */
declare const CalendarDefinition: {
    name: "Calendar";
    props: z.ZodObject<{
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        view: z.ZodDefault<z.ZodEnum<{
            day: "day";
            week: "week";
            agenda: "agenda";
            month: "month";
            year: "year";
        }>>;
        selectedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        events: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            start: z.ZodString;
            end: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            allDay: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            category: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
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
            recurring: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                pattern: z.ZodEnum<{
                    daily: "daily";
                    weekly: "weekly";
                    monthly: "monthly";
                    yearly: "yearly";
                }>;
                interval: z.ZodOptional<z.ZodNumber>;
                endDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                daysOfWeek: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
            }, z.core.$strip>>>;
            reminders: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    email: "email";
                    notification: "notification";
                }>;
                minutes: z.ZodNumber;
            }, z.core.$strip>>>>;
            linkedEntityId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            linkedEntityType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                workout: "workout";
                meal: "meal";
                supplement: "supplement";
                routine: "routine";
                diary: "diary";
                task: "task";
            }>>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                tentative: "tentative";
                confirmed: "confirmed";
                cancelled: "cancelled";
            }>>>;
            completed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            priority: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                high: "high";
                medium: "medium";
                low: "low";
            }>>>;
            tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            attendees: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    accepted: "accepted";
                    declined: "declined";
                    tentative: "tentative";
                    pending: "pending";
                }>>>;
            }, z.core.$strip>>>>;
            notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        showWeekNumbers: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        firstDayOfWeek: z.ZodDefault<z.ZodNumber>;
        highlightToday: z.ZodDefault<z.ZodBoolean>;
        showMiniCalendar: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        showCategories: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
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
        enableQuickAdd: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        workingHours: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            start: z.ZodDefault<z.ZodString>;
            end: z.ZodDefault<z.ZodString>;
        }, z.core.$strip>>>;
        lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

/**
 * Diary component props schema
 */
declare const DiaryPropsSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entries: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        date: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        content: z.ZodString;
        mood: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            great: "great";
            good: "good";
            neutral: "neutral";
            bad: "bad";
            terrible: "terrible";
        }>>>;
        energy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sleep: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            hours: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            quality: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                great: "great";
                good: "good";
                fair: "fair";
                poor: "poor";
            }>>>;
        }, z.core.$strip>>>;
        gratitude: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        highlights: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        challenges: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        goals: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            text: z.ZodString;
            completed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, z.core.$strip>>>>;
        tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        linkedEntities: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                workout: "workout";
                meal: "meal";
                supplement: "supplement";
                calendar_event: "calendar_event";
                routine: "routine";
            }>;
            id: z.ZodString;
            label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
        weather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            temperature: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        photos: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        private: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    selectedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    view: z.ZodDefault<z.ZodEnum<{
        timeline: "timeline";
        single: "single";
        calendar: "calendar";
    }>>;
    showMoodTracker: z.ZodDefault<z.ZodBoolean>;
    showEnergyTracker: z.ZodDefault<z.ZodBoolean>;
    showGratitude: z.ZodDefault<z.ZodBoolean>;
    showLinkedEntities: z.ZodDefault<z.ZodBoolean>;
    enableSearch: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type DiaryProps = z.infer<typeof DiaryPropsSchema>;
/**
 * Diary component definition for catalog registration
 */
declare const DiaryDefinition: {
    name: "Diary";
    props: z.ZodObject<{
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        entries: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            date: z.ZodString;
            title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            content: z.ZodString;
            mood: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                great: "great";
                good: "good";
                neutral: "neutral";
                bad: "bad";
                terrible: "terrible";
            }>>>;
            energy: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            sleep: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                hours: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                quality: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    great: "great";
                    good: "good";
                    fair: "fair";
                    poor: "poor";
                }>>>;
            }, z.core.$strip>>>;
            gratitude: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            highlights: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            challenges: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            goals: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                text: z.ZodString;
                completed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, z.core.$strip>>>>;
            tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            linkedEntities: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    workout: "workout";
                    meal: "meal";
                    supplement: "supplement";
                    calendar_event: "calendar_event";
                    routine: "routine";
                }>;
                id: z.ZodString;
                label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
            weather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                temperature: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, z.core.$strip>>>;
            location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            photos: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            private: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        selectedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        view: z.ZodDefault<z.ZodEnum<{
            timeline: "timeline";
            single: "single";
            calendar: "calendar";
        }>>;
        showMoodTracker: z.ZodDefault<z.ZodBoolean>;
        showEnergyTracker: z.ZodDefault<z.ZodBoolean>;
        showGratitude: z.ZodDefault<z.ZodBoolean>;
        showLinkedEntities: z.ZodDefault<z.ZodBoolean>;
        enableSearch: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        lock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>;
    description: string;
    hasChildren: boolean;
};

interface DocumentIndexNode {
    title: string;
    nodeId: string;
    startPage: number;
    endPage: number;
    summary?: string;
    children?: DocumentIndexNode[];
}
declare const DocumentIndexPropsSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    pageCount: z.ZodNumber;
    nodes: z.ZodArray<z.ZodType<DocumentIndexNode, unknown, z.core.$ZodTypeInternals<DocumentIndexNode, unknown>>>;
    accentColor: z.ZodOptional<z.ZodString>;
    collapsed: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
type DocumentIndexProps = z.infer<typeof DocumentIndexPropsSchema>;
declare const DocumentIndexDefinition: ComponentDefinition;

declare const CitationSchema: z.ZodObject<{
    id: z.ZodString;
    nodeId: z.ZodString;
    text: z.ZodString;
    pageNumber: z.ZodNumber;
    sectionTitle: z.ZodString;
    confidence: z.ZodOptional<z.ZodEnum<{
        high: "high";
        medium: "medium";
        low: "low";
    }>>;
}, z.core.$strip>;
type Citation = z.infer<typeof CitationSchema>;
declare const SourceCitationPropsSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    citations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        nodeId: z.ZodString;
        text: z.ZodString;
        pageNumber: z.ZodNumber;
        sectionTitle: z.ZodString;
        confidence: z.ZodOptional<z.ZodEnum<{
            high: "high";
            medium: "medium";
            low: "low";
        }>>;
    }, z.core.$strip>>;
    showPageNumbers: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    collapsed: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    accentColor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
type SourceCitationProps = z.infer<typeof SourceCitationPropsSchema> & {
    onCitationClick?: (citation: Citation) => void;
};
declare const SourceCitationDefinition: ComponentDefinition;

export { DiaryPropsSchema as A, BookingFormsPropsSchema as B, CalendarAgendaSchema as C, type DocumentIndexNode as D, DiaryDefinition as E, FlightPropsSchema as F, type DiaryProps as G, HotelPropsSchema as H, DocumentIndexPropsSchema as I, type DocumentIndexProps as J, KanbanPropsSchema as K, SourceCitationPropsSchema as L, type SourceCitationProps as M, NutritionPropsSchema as N, MessagePropsSchema as O, MessageDefinition as P, type MessageProps as Q, RoutineSchedulerPropsSchema as R, SupplementTrackerPropsSchema as S, TripPropsSchema as T, EmailPropsSchema as U, EmailDefinition as V, WorkoutPropsSchema as W, type EmailProps as X, DocumentIndexDefinition as Y, SourceCitationDefinition as Z, CalendarAgendaDefinition as a, type CalendarAgendaProps as b, WorkoutDefinition as c, type WorkoutProps as d, NutritionDefinition as e, type NutritionProps as f, FlightDefinition as g, type FlightProps as h, HotelDefinition as i, type HotelProps as j, TripDefinition as k, type TripProps as l, BookingFormsDefinition as m, type BookingFormsProps as n, KanbanDefinition as o, type KanbanProps as p, TodoListPropsSchema as q, TodoListDefinition as r, type TodoListProps as s, RoutineSchedulerDefinition as t, type RoutineSchedulerProps as u, SupplementTrackerDefinition as v, type SupplementTrackerProps as w, CalendarPropsSchema as x, CalendarDefinition as y, type CalendarProps as z };
