export interface Problem {
    id: number;
    name: string;
    source: string;
    result: number /** 0 - not tryed, 1 - tryed and not accepted, 2 - accepted*/;
    solved: number;
}

// temporary datas
export const ELEMENT_PROBLEM: Problem[] = [
    { id: 0, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 1, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 2, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 3, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 4, name: 'A + B', source: "Noob's Contest", result: 1, solved: 123 },
    { id: 5, name: 'A + B', source: "Noob's Contest", result: 0, solved: 144 },
    { id: 6, name: 'A + B', source: "Noob's Contest", result: 0, solved: 1232 },
    { id: 7, name: 'A + B', source: "Noob's Contest", result: 2, solved: 2 },
    { id: 8, name: 'A + B', source: "Noob's Contest", result: 2, solved: 23 },
    { id: 9, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 10, name: 'A + B', source: "Noob's Contest", result: 1, solved: 0 },
    { id: 11, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 12, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 13, name: 'A + B', source: "Noob's Contest", result: 1, solved: 0 },
    { id: 14, name: 'A + B', source: "Noob's Contest", result: 2, solved: 0 },
    { id: 15, name: 'A + B', source: "Noob's Contest", result: 1, solved: 0 },
    { id: 16, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 17, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 18, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 19, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 20, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 21, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 22, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 23, name: 'A + B', source: "Noob's Contest", result: 1, solved: 0 },
    { id: 24, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 25, name: 'A + B', source: "Noob's Contest", result: 2, solved: 123 },
    { id: 26, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 27, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 28, name: 'A + B', source: "Noob's Contest", result: 1, solved: 0 },
    { id: 29, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 30, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 31, name: 'A + B', source: "Noob's Contest", result: 2, solved: 432 },
    { id: 32, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 33, name: 'A + B', source: "Noob's Contest", result: 2, solved: 1231 },
    { id: 34, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
    { id: 35, name: 'A + B', source: "Noob's Contest", result: 0, solved: 0 },
];
