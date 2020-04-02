import { Component, OnInit } from '@angular/core';
import { TableService } from '../utils/table/table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  tables = [];

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getTables().subscribe(res => this.tables = res);
  }

}
