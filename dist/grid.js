"use strict";
var Grid = (function () {
    function Grid(array, _width, _height) {
        this.array = array;
        this._width = _width;
        this._height = _height;
        if (!array) {
            throw new Error('Grid representation not provided');
        }
        else if (!_width) {
            throw new Error('Width not defined');
        }
        else if (!_height) {
            throw new Error('Height not defined');
        }
        else if ((_width * _height) > array.length) {
            throw new Error('Grid representation too small');
        }
    }
    Grid.withRows = function (rows) {
        var w = rows[0].length;
        if (!rows.every(function (row) { return row.length === w; })) {
            throw new Error('Grid must be rectangular');
        }
        var h = rows.length;
        return new Grid(rows.reduce(function (grid, row) { return grid.concat(row); }, []), w, h);
    };
    Grid.withCols = function (cols) {
        return Grid.withRows(cols.reverse()).rotate90();
    };
    Grid.prototype.transpose = function () {
        return Grid.withRows(this.cols);
    };
    Grid.prototype.flipX = function () {
        return Grid.withRows(this.rows.map(function (row) { return row.reverse(); }));
    };
    Grid.prototype.flipY = function () {
        return Grid.withCols(this.cols.map(function (col) { return col.reverse(); }));
    };
    Grid.prototype.rotate90 = function () {
        return this.transpose().flipX();
    };
    Grid.prototype.rotate180 = function () {
        return this.flipY().flipX();
    };
    Grid.prototype.rotate270 = function () {
        return this.transpose().flipY();
    };
    Grid.prototype.get = function (x, y) {
        return this.array[this.pos(x, y)];
    };
    Object.defineProperty(Grid.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "numRows", {
        get: function () {
            return this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "rows", {
        get: function () {
            var self = this;
            var newGrid = [];
            while (newGrid.length < this.numRows) {
                newGrid.push([]);
            }
            return this.array.reduce(function (grid, val, ind) {
                grid[self.rowNum(ind)].push(val);
                return grid;
            }, newGrid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "numCols", {
        get: function () {
            return this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "cols", {
        get: function () {
            var self = this;
            var newGrid = [];
            while (newGrid.length < this.numCols) {
                newGrid.push([]);
            }
            return this.array.reduce(function (grid, val, ind) {
                grid[self.colNum(ind)].push(val);
                return grid;
            }, newGrid);
        },
        enumerable: true,
        configurable: true
    });
    Grid.prototype.pos = function (x, y) {
        return (y * this.width) + x;
    };
    Grid.prototype.rowNum = function (pos) {
        return Math.ceil((pos - this.colNum(pos)) / this.numCols);
    };
    Grid.prototype.colNum = function (pos) {
        return pos % this.width;
    };
    return Grid;
}());
exports.Grid = Grid;
