import { Component, OnInit, Input } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { Problem } from '../../../shared/models/problem';
import { Test } from '../../../shared/models/test';
/// How to input content

/// some Data

const SomeProblem: Problem = {
    id: 0,
    name: 'Sightseeing Trip ',
    description: 'Some problem. Try to solve it',
    time_limit: 0.5,
    memory_limit: 64,
};

const SomeTest: Test = { id: 0, input: '3 123 123 890', output: ' .!.' };

@Component({
    selector: 'app-problem-page',
    templateUrl: './problem-page.component.html',
    styleUrls: ['./problem-page.component.sass'],
})
export class ProblemPageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    theme = 'vs';
    some_problem: Problem = SomeProblem;
    some_test: Test = SomeTest;

    model: CodeModel = {
        language: 'python',
        uri: 'main.py',
        value: '# write code here',
    };

    options = {
        contextmenu: true,
        minimap: {
            enabled: true,
        },
    };

    onCodeChanged(value) {
        console.log('CODE', value);
    }
}
