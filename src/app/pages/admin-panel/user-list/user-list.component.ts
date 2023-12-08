import { Component } from '@angular/core';
import { Employee, UserListService } from 'src/app/shared/services/admin-panel-services/user-list.service';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { ExportingEvent } from 'devextreme/ui/data_grid';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListService],
})
export class UserListComponent {
  
  employees!: Employee[] ;

  readonly allowedPageSizes = [5, 10, 20, 'all'];

  saleAmountHeaderFilter: any;

  applyFilterTypes: any;

  currentFilter: any;

  showFilterRow!: boolean;

  showHeaderFilter!: boolean;

  constructor(service: UserListService ) {
    this.employees = service.getEmployees();
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
