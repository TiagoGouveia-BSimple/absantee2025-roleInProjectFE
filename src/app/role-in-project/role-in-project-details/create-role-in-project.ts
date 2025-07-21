import { PeriodDate, PeriodDateString } from "../../PeriodDate";

export interface CreateRoleInProject {
    projectId: string,
    period: PeriodDateString,
    userId: string,
    roleId: string
}

