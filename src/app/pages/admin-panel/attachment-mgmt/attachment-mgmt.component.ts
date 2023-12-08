import { Component } from '@angular/core';
import { Employee, FileItem, Service, State } from '../../../shared/services/app.service';
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

  fileItems: FileItem[];

  constructor(service: Service) {
    this.fileItems = service.getFileItems();
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

