# Grid

Typescript Immutable 2d grid with transformation functions.

[Create](#create)
* [constructor](#constructor)
* [`Grid.withRows(rows)`](#withRows)
* [`Grid.withCols(cols)`](#withCols)


[Reading the Grid](#reading-the-grid)
* [`get(x,y)`](#get)
* [`height`](#height)
* [`numRows`](#numRows)
* [`rows`](#rows)
* [`width`](#width)
* [`cols`](#cols)

[Transforms](#transforms)
* [`transpose()`](#transpose())
* Mirror
    * [`flipX()`](#flipX())
    * [`flipY()`](#flipY())
* Rotate
    * [`rotate90()`](#rotate90())
    * [`rotate180()`](#rotate180())
    * [`rotate270()`](#rotate270())

## Install
```
npm install @mkennedy3000/grid
```

## Usage

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
#### `height`
#### `numRows`
#### `rows`
#### `width`
#### `numCols`
#### `cols`

### Transforms

Transforms return an entirely new Grid. The grid the transform was called on is unaffected.

#### `transpose()`
#### `flipX()`
#### `flipY()`
#### `rotate90()`
#### `rotate180()`
#### `rotate270()`