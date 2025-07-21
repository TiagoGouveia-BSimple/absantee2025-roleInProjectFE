import { PeriodDate, PeriodDateString } from "../PeriodDate";

export interface RoleInProject {
    roleInProjectId: string,
    projectId: string,
    period: PeriodDateString,
    userId: string,
    roleId: string
}
