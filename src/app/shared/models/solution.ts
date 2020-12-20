import { SolutionResult } from './enums/solutionResults';

export interface Solution {
    id: string;
    createdAt: string;
    result?: SolutionResult;
    executionTime: number;
    executionMemory: number;
    lastExecutedTest: number;
    script: string;
}
