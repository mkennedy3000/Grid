"use strict";
var Grid = (function () {
    function Grid(array, _width, _height) {
        this.array = array;
        this._width = _width;
        this._height = _height;
    }
    Grid.withRows = function (rows) {
        var w = rows[0].length;
        var h = rows.length;
        return new Grid(rows.reduce(function (grid, row) { return grid.concat(row); }, []), w, h);
    };
    Grid.withCols = function (cols) {
        return Grid.withRows(cols.reverse()).rotate90();
    };
    Grid.prototype.transpose = function () {
        var _this = this;
        var transposed = this.array.map(function (val, ind) { return _this.get(_this.rowNum(ind), _this.colNum(ind)); }, this);
        return new Grid(transposed, this.width, this.height);
    };
    Grid.prototype.flipX = function () {
        return Grid.withRows(this.rows().map(function (row) { return row.reverse(); }));
    };
    Grid.prototype.flipY = function () {
        return Grid.withCols(this.cols().map(function (col) { return col.reverse(); }));
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
    Grid.prototype.rows = function () {
        var self = this;
        return this.array.reduce(function (grid, val, ind) {
            grid[self.rowNum(ind)].push(val);
            return grid;
        }, Array.from(new Array(this.numRows), function () { return []; }));
    };
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
    Grid.prototype.cols = function () {
        var self = this;
        return this.array.reduce(function (grid, val, ind) {
            grid[self.colNum(ind)].push(val);
            return grid;
        }, Array.from(new Array(this.numCols), function () { return []; }));
    };
    Grid.prototype.pos = function (x, y) {
        return (y * this.width) + x;
    };
    Grid.prototype.rowNum = function (pos) {
        return (pos - this.colNum(pos)) / this.numCols;
    };
    Grid.prototype.colNum = function (pos) {
        return pos % this.numRows;
    };
    return Grid;
}());
exports.Grid = Grid;
