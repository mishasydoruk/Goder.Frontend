import { Component, OnInit } from '@angular/core';
import { ELEMENT_PROBLEM } from './problems-data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-problems-page',
    templateUrl: './problems-page.component.html',
    styleUrls: ['./problems-page.component.sass'],
})
export class ProblemsPageComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'source', 'result', 'solved'];

    dataSource = new MatTableDataSource(ELEMENT_PROBLEM);

    constructor() {}

    ngOnInit(): void {}
}
