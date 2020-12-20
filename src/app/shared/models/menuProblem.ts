export interface MenuProblem {
    id: number;
    name: string;
    result: number /** 0 - not tryed, 1 - tryed and not accepted, 2 - accepted*/;
    solved: number;
}
