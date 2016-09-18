export declare class Grid<T> {
    private array;
    private _width;
    private _height;
    constructor(array: Array<T>, _width: number, _height: number);
    static withRows<U>(rows: Array<Array<U>>): Grid<U>;
    static withCols<U>(cols: Array<Array<U>>): Grid<U>;
    transpose(): Grid<T>;
    flipX(): Grid<T>;
    flipY(): Grid<T>;
    rotate90(): Grid<T>;
    rotate180(): Grid<T>;
    rotate270(): Grid<T>;
    get(x: number, y: number): T;
    height: number;
    numRows: number;
    rows: Array<Array<T>>;
    width: number;
    numCols: number;
    cols: Array<Array<T>>;
    private pos(x, y);
    private rowNum(pos);
    private colNum(pos);
}
