import { Test } from './test';
import { Solution } from './solution';

export interface Problem {
    id: string;
    name: string;
    description: string;
    timeLimit: number;
    memoryLimit: number;
    tests: Test[];
    solutions: Solution[];
}
