import { Component } from '@angular/core';
import { DepartmentMgmtService } from 'src/app/shared/services/admin-panel-services/department-mgmt.service';
import { Employee, Service, State } from '../../../shared/services/app.service';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { ExportingEvent } from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-department-mgmt',
  templateUrl: './department-mgmt.component.html',
  styleUrls: ['./department-mgmt.component.scss'],
  providers: [Service],
})
export class DepartmentMgmtComponent {
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

  onExporting(e: ExportingEvent) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      customizeCell: function (options) {
        options.excelCell.font = { name: 'Arial', size: 12 };
        options.excelCell.alignment = { horizontal: 'left' };
      },
    }).then(function () {
      workbook.xlsx.writeBuffer().then(function (buffer: BlobPart) {
        saveAs(
          new Blob([buffer], { type: 'application/octet-stream' }),
          'DataGrid.xlsx'
        );
      });
    });
  }
}
