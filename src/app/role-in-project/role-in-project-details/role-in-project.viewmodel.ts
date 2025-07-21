import { PeriodDate, PeriodDateString } from "../../PeriodDate";

export interface RoleInProjectViewmodel {
    roleInProjectId: string,
    projectId: string,
    projectAcronym: string,
    period: PeriodDateString,
    userId: string,
    userEmail: string,
    roleId: string,
    roleName: string
}
