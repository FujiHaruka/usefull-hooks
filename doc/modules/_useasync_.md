**[usefull-hooks](../README.md)**

> [Globals](../README.md) / "useAsync"

# Module: "useAsync"

## Index

### Interfaces

* [UseAsyncValues](../interfaces/_useasync_.useasyncvalues.md)

### Functions

* [useAsync](_useasync_.md#useasync)

## Functions

### useAsync

▸ `Const`**useAsync**<Arg, Result, Empty\>(`fn`: (...args: Arg[]) => Promise<Result\>, `emptyResult`: Empty): object

*Defined in [useAsync.ts:12](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useAsync.ts#L12)*

#### Type parameters:

Name |
------ |
`Arg` |
`Result` |
`Empty` |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | (...args: Arg[]) => Promise<Result\> |
`emptyResult` | Empty |

**Returns:** object

Name | Type |
------ | ------ |
`busy` | boolean |
`doAsync` | (Anonymous function) |
`error` | null \| Error |
`ready` | boolean |
`reset` | (Anonymous function) |
`result` | Result \| Empty |
