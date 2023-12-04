import { Component } from '@angular/core';
import { Employee, Service, State } from '../../../shared/services/app.service';
import { AttachmentMgmtService } from 'src/app/shared/services/admin-panel-services/attachment-mgmt.service';
import { OnInit} from '@angular/core';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';




@Component({
  selector: 'app-attachment-mgmt',
  templateUrl: './attachment-mgmt.component.html',
  styleUrls: ['./attachment-mgmt.component.scss'],
  providers: [Service],
})

export class AttachmentMgmtComponent implements OnInit {
  dataSource: Employee[];

  readonly allowedPageSizes = [5, 10, 20, 'all'];

  states: State[];

  saleAmountHeaderFilter: any;

  applyFilterTypes: any;

  currentFilter: any;

  showFilterRow!: boolean;

  showHeaderFilter!: boolean;

  constructor(service: Service) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
    this.showFilterRow = true;
  }

  onExportingPDF(e:any) {
    const doc = new jsPDF();
    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      indent: 5,
    }).then(() => {
      doc.save('Companies.pdf');
    });
  }

  

  ngOnInit(): void {};
}

