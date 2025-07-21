import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CollaboratorDetailsComponent } from './collaborators/collaborator-details/collaborator-details.component';
import { CollaboratorDetailsResolver } from './collaborator-details.resolver';
import { CollaboratorHolidaysResolver } from './collaborator-holidays.resolver';
import { CollaboratorHolidaysComponent } from './collaborators/collaborator-holidays/collaborator-holidays.component';
import { AssociationsProjectCollaboratorComponent } from './associations-project-collaborator/associations-project-collaborator.component';
import { AssociationCollaboratorResolver } from './association-collaborator.resolver';
import { ProjectComponent } from './projects/project/project.component';
import { AssociationProjectResolver } from './association-project.resolver';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { ProjectDetailsResolver } from './projects/resolvers/project-details.resolver';
import { RoleInProjectComponent } from './role-in-project/role-in-project.component';
import { RoleInProjectDetailsComponent } from './role-in-project/role-in-project-details/role-in-project-details.component';
import { ProjectRoleListComponent } from './projects/project-role-list/project-role-list.component';
import { ProjectRoleResolver } from './projects/resolvers/project-role.resolver';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: 'details/:projectId',
                component: ProjectComponent,
                resolve: {
                    ProjectData: ProjectDetailsResolver
                }
            },
            {
                path: 'create',
                component: ProjectFormComponent
            },
            {
                path: 'edit/:projectId',
                component: ProjectFormComponent,
                resolve: {
                    ProjectData: ProjectDetailsResolver
                }
            },
            {
                path: 'associations/:selectedId',
                component: AssociationsProjectCollaboratorComponent,
                resolve: {
                    AssociationData: AssociationProjectResolver
                }
            },
            {
                path: 'roleInProjects/:roleId',
                component: ProjectRoleListComponent,
                resolve: {
                    RoleData: ProjectRoleResolver
                }
            }
        ]
    },
    {
        path: 'collaborators',
        component: CollaboratorsComponent,
        children: [
            {
                path: 'details/:collabId',
                component: CollaboratorDetailsComponent,
                resolve: {
                    DetailsData: CollaboratorDetailsResolver
                }
            },
            {
                path: 'holidays/:collabId',
                component: CollaboratorHolidaysComponent,
                resolve: {
                    HolidaysData: CollaboratorHolidaysResolver
                }
            },
            {
                path: 'associations/:selectedId',
                component: AssociationsProjectCollaboratorComponent,
                resolve: {
                    AssociationData: AssociationCollaboratorResolver
                }
            }
        ]
    }, {
        path: 'role-in-project',
        component: RoleInProjectComponent,
        children: [
            {
                path: 'details/:roleInProjectId',
                component: RoleInProjectDetailsComponent
            }
        ]
    }
];
