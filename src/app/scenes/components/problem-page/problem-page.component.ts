import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CodeModel } from '@ngstack/code-editor';
import { HttpService } from 'src/app/core/services/http.service';
import { SolutionResult } from 'src/app/shared/models/enums/solutionResults';
import { SolutionCreate } from 'src/app/shared/models/solutionCreate';
import { Problem } from '../../../shared/models/problem';

@Component({
    selector: 'app-problem-page',
    templateUrl: './problem-page.component.html',
    styleUrls: ['./problem-page.component.sass'],
})
export class ProblemPageComponent implements OnInit {
    public solutionResults = SolutionResult;
    public currentProblem: Problem;
    private solution: SolutionCreate;

    public editorTheme = 'vs';
    public editorModel: CodeModel = {
        language: 'python',
        uri: 'main.py',
        value: '# write code here',
    };
    public editorOptions = {
        contextmenu: true,
        minimap: {
            enabled: true,
        },
    };

    public solutionColumns: string[] = ['createdAt', 'result'];
    public userSolutions = new MatTableDataSource();

    constructor(private httpService: HttpService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const problemId = this.route.snapshot.paramMap.get('id');
        this.solution = {
            problemId: problemId,
            script: '',
        };
        this.httpService.getFullRequest<Problem>(`/api/problem/${problemId}`).subscribe((res) => {
            this.currentProblem = res.body;
            this.userSolutions.data = this.currentProblem.solutions;
        });
    }

    onCodeChanged(value) {
        this.solution.script = value;
    }

    public submitSolution(): void {
        console.log('submit');
        this.httpService.postFullRequest<SolutionCreate, any>('/api/solution', this.solution).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
