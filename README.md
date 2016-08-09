# Grid

Typescript Immutable 2d grid with transformation functions.

## Install
```
npm install @mkennedy3000/grid
```

## Usage

[Create](#create)
* [constructor](#constructor)
* [`Grid.withRows(rows)`](#withrows)
* [`Grid.withCols(cols)`](#withcols)


[Reading the Grid](#reading-the-grid)
* [`get(x,y)`](#get)
* [`height`](#height)
* [`numRows`](#numrows)
* [`rows`](#rows)
* [`width`](#width)
* [`cols`](#cols)

[Transforms](#transforms)
* [`transpose()`](#transpose)
* Mirror
    * [`flipX()`](#flipx)
    * [`flipY()`](#flipy)
* Rotate
    * [`rotate90()`](#rotate90)
    * [`rotate180()`](#rotate180)
    * [`rotate270()`](#rotate270)

### Create

#### constructor
```typescript
const grid = new Grid([1,2,3,4,5,6], 3, 2);
```
```
1 2 3
4 5 6
```

#### `withRows()`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]);
```
```
1 2 3
4 5 6
```

#### `withCols()`
```typescript
const grid = Grid.withCols([[1,4],[2,5],[3,6]]);
```
```
1 2 3
4 5 6
```

### Reading the Grid

#### `get`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]);
grid.get(0,1); // => 4
grid.get(1,0); // => 2
```
#### `height`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]);
grid.height; // => 2
```
#### `numRows`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]);
grid.numRows; // => 2
```
#### `rows`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]);
grid.rows; // => [[1,2,3],[4,5,6]]
```
#### `width`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]);
grid.width; // => 3
```
#### `numCols`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]);
grid.numCols; // => 3
```
#### `cols`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]);
grid.numRows; // => [[1,4],[2,5],[3,6]]
```

### Transforms

Transforms return an entirely new Grid. The grid the transform was called on is unaffected.

#### `transpose()`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]).transpose().transpose();
```
```
1 2 3 => 1 4 => 1 2 3
4 5 6    2 5    4 5 6
         3 6
```

#### `flipX()`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]).flipX();
```
```
1 2 3 => 3 2 1
4 5 6    6 5 4
```

#### `flipY()`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]).flipY();
```
```
1 2 3 => 4 5 6
4 5 6    1 2 3
```

#### `rotate90()`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]).rotate90();
```
```
1 2 3 => 4 1
4 5 6    5 2
         6 3
```

#### `rotate180()`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]).rotate180();
```
```
1 2 3 => 6 5 4
4 5 6    3 2 1
```

#### `rotate270()`
```typescript
const grid = Grid.withRows([[1,2,3],[4,5,6]]).rotate270();
```
```
1 2 3 => 3 6
4 5 6    2 5
         1 4
```