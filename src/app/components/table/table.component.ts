import { Component } from '@angular/core';

interface Transaction {
	uid: number;
	item: string;
	cost: number;
}

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	editRowId: number = -1;
	displayedColumns: string[] = ['item', 'cost'];
	transactions: Transaction[] = [
		{ uid: 1, item: 'Beach ball', cost: 4 },
		{ uid: 2, item: 'Towel', cost: 5 },
		{ uid: 3, item: 'Frisbee', cost: 2 },
		{ uid: 4, item: 'Sunscreen', cost: 4 },
		{ uid: 5, item: 'Cooler', cost: 25 },
		{ uid: 6, item: 'Swim suit', cost: 15 },
	];

	/** Gets the total cost of all transactions. */
	getTotalCost() {
		return this.transactions
			.map((t) => t.cost)
			.reduce((acc, value) => acc + value, 0);
	}

	edit(rowId: number) {
		this.editRowId = rowId;
	}

	updateCellValue(cellId: number, value: number) {
		this.transactions[
			this.transactions.findIndex((item) => item.uid === cellId)
		].cost = value;

		console.log(this.transactions);
	}
}
