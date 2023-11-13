import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { AttachmentMgmtComponent } from './pages/admin-panel/attachment-mgmt/attachment-mgmt.component';
import { CapitalMgmtComponent } from './pages/admin-panel/capital-mgmt/capital-mgmt.component';
import { CurrencyMgmtComponent } from './pages/admin-panel/currency-mgmt/currency-mgmt.component';
import { DepartmentMgmtComponent } from './pages/admin-panel/department-mgmt/department-mgmt.component';
import { ItemMgmtComponent } from './pages/admin-panel/item-mgmt/item-mgmt.component';
import { MailDetailMgmtComponent } from './pages/admin-panel/mail-detail-mgmt/mail-detail-mgmt.component';
import { MasterApproverMgmtComponent } from './pages/admin-panel/master-approver-mgmt/master-approver-mgmt.component';
import { PlantMgmtComponent } from './pages/admin-panel/plant-mgmt/plant-mgmt.component';
import { PMCostModelMasterApproverMgmtComponent } from './pages/admin-panel/pmcost-model-master-approver-mgmt/pmcost-model-master-approver-mgmt.component';
import { QuestionMgmtComponent } from './pages/admin-panel/question-mgmt/question-mgmt.component';
import { TypeOfRequestMgmtComponent } from './pages/admin-panel/type-of-request-mgmt/type-of-request-mgmt.component';
import { UserListComponent } from './pages/admin-panel/user-list/user-list.component';
import { FormListPageComponent } from './pages/main-pages/form-list-page/form-list-page.component';
import { FormPageComponent } from './pages/main-pages/form-page/form-page.component';
import { ProcessManagementComponent } from './pages/main-pages/process-management/process-management.component';

const routes: Routes = [

  //! MAİN PAGES
  {
    path: 'form-list-page',
    component: FormListPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'form-page',
    component: FormPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'process-management',
    component: ProcessManagementComponent,
    canActivate: [ AuthGuardService ]
  },

  //! ADMİN PANEL PATHS
  {
    path: 'currency-mgmt',
    component: CurrencyMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'capital-mgmt',
    component: CapitalMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'attachment-mgmt',
    component: AttachmentMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'department-mgmt',
    component: DepartmentMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'item-mgmt',
    component: ItemMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'mail-detail-mgmt',
    component: MailDetailMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'master-approver-mgmt',
    component: MasterApproverMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'plant-mgmt',
    component: PlantMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pmcost-model-master-approver-mgmt',
    component: PMCostModelMasterApproverMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'question-mgmt',
    component: QuestionMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'type-of-request-mgmt',
    component: TypeOfRequestMgmtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [ AuthGuardService ]
  },

  //! DEFAULT PATHS
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ]
})
export class AppRoutingModule { }
