// collaborator-mapper.ts

import { RoleInProject } from "../role-in-project";
import { RoleInProjectViewmodel } from "../role-in-project-details/role-in-project.viewmodel";

export function toRoleInProject(
  r: RoleInProject,
  roleMap: Map<string, string>,
  userMap: Map<string, string>,
  projectMap: Map<string, string>
): RoleInProjectViewmodel {
  return {
    roleInProjectId: r.roleInProjectId,
    projectId: r.projectId,
    projectAcronym: projectMap.get(r.projectId) ?? 'Unknown Project',
    period: r.period,
    userId: r.userId,
    userEmail: userMap.get(r.userId) ?? 'Unknown User',
    roleId: r.roleId,
    roleName: roleMap.get(r.roleId) ?? 'Unknown Role'
  };
}

export function fromRoleInProject(vm: RoleInProjectViewmodel): RoleInProject {
  return {
    roleInProjectId: vm.roleInProjectId,
    projectId: vm.projectId,
    period: vm.period,
    userId: vm.userId,
    roleId: vm.roleId
  };
}
