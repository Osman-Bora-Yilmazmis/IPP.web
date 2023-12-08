import { Component } from '@angular/core';
import { Employee, UserListService,Task } from 'src/app/shared/services/admin-panel-services/user-list.service';
import { Input, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';


@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.scss'],
  providers: [UserListService],
})
export class DetailGridComponent implements AfterViewInit {
  @Input() key!: number;

  tasksDataSource!: DataSource;

  tasks: Task[];

  readonly allowedPageSizes = [5, 10, 20, 'all'];

  constructor(private service: UserListService) {
    this.tasks = service.getTasks();
  }

  ngAfterViewInit() {
    this.tasksDataSource = new DataSource({
      store: new ArrayStore({
        data: this.tasks,
        key: 'ID',
      }),
      filter: ['EmployeeID', '=', this.key],
    });
  }

  completedValue(rowData:any) {
    return rowData.Status == 'Completed';
  }
}
