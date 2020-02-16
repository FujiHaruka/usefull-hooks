[usefull-hooks](../README.md) › ["useValues"](_usevalues_.md)

# External module: "useValues"

## Index

### Type aliases

* [UseValuesAction](_usevalues_.md#usevaluesaction)

### Functions

* [buildValuesSetter](_usevalues_.md#const-buildvaluessetter)
* [useValues](_usevalues_.md#const-usevalues)

## Type aliases

###  UseValuesAction

Ƭ **UseValuesAction**: *Dispatch‹SetStateAction‹Partial‹T›››*

*Defined in [src/useValues.ts:3](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useValues.ts#L3)*

## Functions

### `Const` buildValuesSetter

▸ **buildValuesSetter**<**T**>(`set`: Dispatch‹SetStateAction‹T››): *(Anonymous function)*

*Defined in [src/useValues.ts:5](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useValues.ts#L5)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`set` | Dispatch‹SetStateAction‹T›› |

**Returns:** *(Anonymous function)*

___

### `Const` useValues

▸ **useValues**<**T**>(`initialValues`: T): *[T, [UseValuesAction](_usevalues_.md#usevaluesaction)‹T›, function]*

*Defined in [src/useValues.ts:15](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useValues.ts#L15)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`initialValues` | T |

**Returns:** *[T, [UseValuesAction](_usevalues_.md#usevaluesaction)‹T›, function]*
