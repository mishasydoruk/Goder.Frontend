import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { MenuProblem } from '../../../shared/models/menuProblem';

@Component({
    selector: 'app-problems-page',
    templateUrl: './problems-page.component.html',
    styleUrls: ['./problems-page.component.sass'],
})
export class ProblemsPageComponent implements OnInit {
    private problems: MenuProblem[] = [];

    public displayedColumns: string[] = ['position', 'name', 'result', 'solved'];
    public dataSource = new MatTableDataSource(this.problems);

    constructor(private hettpService: HttpService, private router: Router) {}

    ngOnInit(): void {
        this.hettpService.getFullRequest<MenuProblem[]>('/api/problem/0/50').subscribe(
            (res) => {
                this.problems = this.problems.concat(res.body);
                this.dataSource.data = this.problems.map((problem, position) => {
                    problem.position = position + 1;
                    return problem;
                });
            },
            (err) => {
                console.log(err);
            }
        );
    }

    public openProblem(problem: MenuProblem): void {
        this.router.navigate(['problem', problem.id]);
        console.log(problem);
    }
}
