import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [TableComponent],
	imports: [CommonModule, TableRoutingModule, MatTableModule, MatInputModule],
})
export class TableModule {}
