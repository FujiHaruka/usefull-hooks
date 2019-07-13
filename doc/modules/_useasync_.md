> **[usefull-hooks](../README.md)**

[Globals](../README.md) / ["useAsync"](_useasync_.md) /

# External module: "useAsync"

### Index

#### Interfaces

* [UseAsyncValues](../interfaces/_useasync_.useasyncvalues.md)

#### Functions

* [useAsync](_useasync_.md#const-useasync)

## Functions

### `Const` useAsync

▸ **useAsync**<**Arg**, **Result**, **Empty**>(`fn`: function, `emptyResult`: `Empty`): *object*

*Defined in [useAsync.ts:12](https://github.com/FujiHaruka/usefull-hooks/blob/e7b36a2/src/useAsync.ts#L12)*

**Type parameters:**

▪ **Arg**

▪ **Result**

▪ **Empty**

**Parameters:**

▪ **fn**: *function*

▸ (...`args`: `Arg`[]): *`Promise<Result>`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | `Arg`[] |

▪ **emptyResult**: *`Empty`*

**Returns:** *object*

* **busy**: *boolean*

* **doAsync**: *`(Anonymous function)`*

* **error**: *null | `Error`*

* **ready**: *boolean*

* **reset**: *`(Anonymous function)`*

* **result**: *`Result` | `Empty`*