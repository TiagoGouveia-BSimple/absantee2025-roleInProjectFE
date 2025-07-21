import { PeriodDate } from "../PeriodDate";

export interface User {
    id: string,
    names: string,
    surnames: string,
    email: string,
    period: PeriodDate
}
