import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    AttachmentMgmtComponent,
    CapitalMgmtComponent,
    CurrencyMgmtComponent,
    DepartmentMgmtComponent,
    ItemMgmtComponent,
    MailDetailMgmtComponent,
    MasterApproverMgmtComponent,
    PlantMgmtComponent,
    PMCostModelMasterApproverMgmtComponent,
    QuestionMgmtComponent,
    TypeOfRequestMgmtComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
