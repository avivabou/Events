import { WORK_STATUSES } from "./constants";
export type WorkStatus = (typeof WORK_STATUSES)[number];
export type User = {
    id: string;
    name: string;
    status: WorkStatus;
    img: string;
};
