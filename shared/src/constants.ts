import { WorkStatus } from "./types";

export const WORK_STATUSES = ["Working", "On Vacation", "Business Trip", "Lunch Time"] as const;

export const WORK_STATUSES_COLORS: {[key in WorkStatus] : string} = {
    "Working": "lightgreen",
    "On Vacation": "red",
    "Business Trip": "purple",
    "Lunch Time": "darkorange",
}