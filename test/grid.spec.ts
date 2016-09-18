import { Grid } from "../src/grid";

describe('Grid', () => {

    it('cannot create a Grid with missing arguments', () => {
        expect(() => new Grid(undefined, 1, 1)).toThrow(new Error('Grid representation not provided'));
        expect(() => new Grid([], undefined, 1)).toThrow(new Error('Width not defined'));
        expect(() => new Grid([], 1, undefined)).toThrow(new Error('Height not defined'));
    });

    it('cannot create a Grid if grid representation is smaller than wanted Grid size', () => {
        expect(() => new Grid([1,2,3], 2, 2)).toThrow(new Error('Grid representation too small'));
    });

    it('cannot create a Grid that isn\'t rectangular', () => {
        const gridNotRectError = new Error('Grid must be rectangular');

        expect(() => Grid.withRows([[1,2,3], [2,3], [1,2,3]])).toThrow(gridNotRectError);
        expect(() => Grid.withCols([[1,2,3], [1,2,3], [1,2,3,4]])).toThrow(gridNotRectError);
    });

    describe('smallest possible Grid (1x1)', () => {

        let smallGrid : Grid;
        beforeAll(() => {
            smallGrid = new Grid([1], 1, 1);
        });

        it('can be created', () => {
            assertRows(smallGrid, [[1]]);
            assertCols(smallGrid, [[1]]);

            expect(Grid.withRows([[1]])).toEqual(smallGrid);
            expect(Grid.withCols([[1]])).toEqual(smallGrid);
        });

        it('can be transposed', () => {
            const transposed = smallGrid.transpose();
            const expectedRows = [[1]];
            const expectedCols = [[1]];

            assertRows(transposed, expectedRows);
            assertCols(transposed, expectedCols);
        });

        it('can be flipped across the x axis', () => {
            const flippedX = smallGrid.flipX();
            const expectedRows = [[1]];
            const expectedCols = [[1]];

            assertRows(flippedX, expectedRows);
            assertCols(flippedX, expectedCols);
        });

        it('can be flipped across the y axis', () => {
            const flippedY = smallGrid.flipY();
            const expectedRows = [[1]];
            const expectedCols = [[1]];

            assertRows(flippedY, expectedRows);
            assertCols(flippedY, expectedCols);
        });

        it('can be rotated 90 degrees', () => {
            const rotated90 = smallGrid.rotate90();
            const expectedRows = [[1]];
            const expectedCols = [[1]];

            assertRows(rotated90, expectedRows);
            assertCols(rotated90, expectedCols);
        });

        it('can be rotated 180 degrees', () => {
            const rotated180 = smallGrid.rotate180();
            const expectedRows = [[1]];
            const expectedCols = [[1]];

            assertRows(rotated180, expectedRows);
            assertCols(rotated180, expectedCols);
        });

        it('can be rotated 270 degrees', () => {
            const rotated270 = smallGrid.rotate270();
            const expectedRows = [[1]];
            const expectedCols = [[1]];

            assertRows(rotated270, expectedRows);
            assertCols(rotated270, expectedCols);
        });
    });

    describe('square Grid (3x3)', () => {

        let squareGrid : Grid;
        beforeAll(() => {
            squareGrid = new Grid([
                1,2,3,
                4,5,6,
                7,8,9
            ], 3, 3);
        });

        it('can be created', () => {
            const expectedRows = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ];
            const expectedCols = [[1,4,7],[2,5,8],[3,6,9]];
            assertRows(squareGrid, expectedRows);
            assertCols(squareGrid, expectedCols);

            expect(Grid.withRows(expectedRows)).toEqual(squareGrid);
            expect(Grid.withCols(expectedCols)).toEqual(squareGrid);
        });

        it('can be transposed', () => {
            const transposed = squareGrid.transpose();
            const expectedRows = [
                [1,4,7],
                [2,5,8],
                [3,6,9]
            ];
            const expectedCols = [[1,2,3],[4,5,6],[7,8,9]];

            assertRows(transposed, expectedRows);
            assertCols(transposed, expectedCols);
        });

        it('can be flipped across the x axis', () => {
            const flippedX = squareGrid.flipX();
            const expectedRows = [
                [3,2,1],
                [6,5,4],
                [9,8,7]
            ];
            const expectedCols = [[3,6,9],[2,5,8],[1,4,7]];

            assertRows(flippedX, expectedRows);
            assertCols(flippedX, expectedCols);
        });

        it('can be flipped across the y axis', () => {
            const flippedY = squareGrid.flipY();
            const expectedRows = [
                [7,8,9],
                [4,5,6],
                [1,2,3]
            ];
            const expectedCols = [[7,4,1],[8,5,2],[9,6,3]];

            assertRows(flippedY, expectedRows);
            assertCols(flippedY, expectedCols);
        });

        it('can be rotated 90 degrees', () => {
            const rotated90 = squareGrid.rotate90();
            const expectedRows = [
                [7,4,1],
                [8,5,2],
                [9,6,3]
            ];
            const expectedCols = [[7,8,9],[4,5,6],[1,2,3]];

            assertRows(rotated90, expectedRows);
            assertCols(rotated90, expectedCols);
        });

        it('can be rotated 180 degrees', () => {
            const rotated180 = squareGrid.rotate180();
            const expectedRows = [
                [9,8,7],
                [6,5,4],
                [3,2,1]
            ];
            const expectedCols = [[9,6,3],[8,5,2],[7,4,1]];

            assertRows(rotated180, expectedRows);
            assertCols(rotated180, expectedCols);
        });

        it('can be rotated 270 degrees', () => {
            const rotated270 = squareGrid.rotate270();
            const expectedRows = [
                [3,6,9],
                [2,5,8],
                [1,4,7]
            ];
            const expectedCols = [[3,2,1],[6,5,4],[9,8,7]];

            assertRows(rotated270, expectedRows);
            assertCols(rotated270, expectedCols);
        });
    });

    describe('wide Grid (4x2)', () => {

        let wideGrid : Grid;
        beforeAll(() => {
            wideGrid = new Grid([
                1,2,3,4,
                5,6,7,8
            ], 4, 2);
        });

        it('can be created', () => {
            const expectedRows = [
                [1,2,3,4],
                [5,6,7,8],
            ];
            const expectedCols = [[1,5],[2,6],[3,7],[4,8]];
            assertRows(wideGrid, expectedRows);
            assertCols(wideGrid, expectedCols);

            expect(Grid.withRows(expectedRows)).toEqual(wideGrid);
            expect(Grid.withCols(expectedCols)).toEqual(wideGrid);
        });

        it('can be transposed', () => {
            const transposed = wideGrid.transpose();
            const expectedRows = [
                [1,5],
                [2,6],
                [3,7],
                [4,8]
            ];
            const expectedCols = [[1,2,3,4],[5,6,7,8]];

            assertRows(transposed, expectedRows);
            assertCols(transposed, expectedCols);
        });

        it('can be flipped across the x axis', () => {
            const flippedX = wideGrid.flipX();
            const expectedRows = [
                [4,3,2,1],
                [8,7,6,5],
            ];
            const expectedCols = [[4,8],[3,7],[2,6],[1,5]];

            assertRows(flippedX, expectedRows);
            assertCols(flippedX, expectedCols);
        });

        it('can be flipped across the y axis', () => {
            const flippedY = wideGrid.flipY();
            const expectedRows = [
                [5,6,7,8],
                [1,2,3,4],
            ];
            const expectedCols = [[5,1],[6,2],[7,3],[8,4]];

            assertRows(flippedY, expectedRows);
            assertCols(flippedY, expectedCols);
        });

        it('can be rotated 90 degrees', () => {
            const rotated90 = wideGrid.rotate90();
            const expectedRows = [
                [5,1],
                [6,2],
                [7,3],
                [8,4]
            ];
            const expectedCols = [[5,6,7,8],[1,2,3,4]];

            assertRows(rotated90, expectedRows);
            assertCols(rotated90, expectedCols);
        });

        it('can be rotated 180 degrees', () => {
            const rotated180 = wideGrid.rotate180();
            const expectedRows = [
                [8,7,6,5],
                [4,3,2,1],
            ];
            const expectedCols = [[8,4],[7,3],[6,2],[5,1]];

            assertRows(rotated180, expectedRows);
            assertCols(rotated180, expectedCols);
        });

        it('can be rotated 270 degrees', () => {
            const rotated270 = wideGrid.rotate270();
            const expectedRows = [
                [4,8],
                [3,7],
                [2,6],
                [1,5]
            ];
            const expectedCols = [[4,3,2,1],[8,7,6,5]];

            assertRows(rotated270, expectedRows);
            assertCols(rotated270, expectedCols);
        });
    });

    describe('tall Grid (2x4)', () => {

        let tallGrid : Grid;
        beforeAll(() => {
            tallGrid = new Grid([
                1,2,
                3,4,
                5,6,
                7,8
            ], 2, 4);
        });

        it('can be created', () => {
            const expectedRows = [
                [1,2],
                [3,4],
                [5,6],
                [7,8]
            ];
            const expectedCols = [[1,3,5,7],[2,4,6,8]];
            assertRows(tallGrid, expectedRows);
            assertCols(tallGrid, expectedCols);

            expect(Grid.withRows(expectedRows)).toEqual(tallGrid);
            expect(Grid.withCols(expectedCols)).toEqual(tallGrid);
        });

        it('can be transposed', () => {
            const transposed = tallGrid.transpose();
            const expectedRows = [
                [1,3,5,7],
                [2,4,6,8]
            ];
            const expectedCols = [[1,2],[3,4],[5,6],[7,8]];

            assertRows(transposed, expectedRows);
            assertCols(transposed, expectedCols);
        });

        it('can be flipped across the x axis', () => {
            const flippedX = tallGrid.flipX();
            const expectedRows = [
                [2,1],
                [4,3],
                [6,5],
                [8,7]
            ];
            const expectedCols = [[2,4,6,8],[1,3,5,7]];

            assertRows(flippedX, expectedRows);
            assertCols(flippedX, expectedCols);
        });

        it('can be flipped across the y axis', () => {
            const flippedY = tallGrid.flipY();
            const expectedRows = [
                [7,8],
                [5,6],
                [3,4],
                [1,2]
            ];
            const expectedCols = [[7,5,3,1],[8,6,4,2]];

            assertRows(flippedY, expectedRows);
            assertCols(flippedY, expectedCols);
        });

        it('can be rotated 90 degrees', () => {
            const rotated90 = tallGrid.rotate90();
            const expectedRows = [
                [7,5,3,1],
                [8,6,4,2]
            ];
            const expectedCols = [[7,8],[5,6],[3,4],[1,2]];

            assertRows(rotated90, expectedRows);
            assertCols(rotated90, expectedCols);
        });

        it('can be rotated 180 degrees', () => {
            const rotated180 = tallGrid.rotate180();
            const expectedRows = [
                [8,7],
                [6,5],
                [4,3],
                [2,1]
            ];
            const expectedCols = [[8,6,4,2],[7,5,3,1]];

            assertRows(rotated180, expectedRows);
            assertCols(rotated180, expectedCols);
        });

        it('can be rotated 270 degrees', () => {
            const rotated270 = tallGrid.rotate270();
            const expectedRows = [
                [2,4,6,8],
                [1,3,5,7]
            ];
            const expectedCols = [[2,1],[4,3],[6,5],[8,7]];

            assertRows(rotated270, expectedRows);
            assertCols(rotated270, expectedCols);
        });
    });

    function assertRows(grid: Grid, rows: Array<Array>): void {
        expect(grid.height).toEqual(rows.length);
        expect(grid.numRows).toEqual(rows.length);
        expect(grid.rows).toEqual(rows);

        for (let y = 0; y < rows.length; y++) {
            let row = rows[y];
            for (let x = 0; x < row.length; x++) {
                expect(grid.get(x, y)).toBe(row[x]);
            }
        }
    }

    function assertCols(grid: Grid, cols: Array<Array>): void {
        expect(grid.width).toEqual(cols.length);
        expect(grid.numCols).toEqual(cols.length);
        expect(grid.cols).toEqual(cols);
    }
});