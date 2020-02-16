[usefull-hooks](../README.md) › ["useInputs"](_useinputs_.md)

# External module: "useInputs"

## Index

### Type aliases

* [UseInputsValue](_useinputs_.md#useinputsvalue)

### Functions

* [TypeConverter](_useinputs_.md#const-typeconverter)
* [ValueAttrSelector](_useinputs_.md#const-valueattrselector)
* [useInputs](_useinputs_.md#const-useinputs)

## Type aliases

###  UseInputsValue

Ƭ **UseInputsValue**: *string | number | boolean | string[]*

*Defined in [src/useInputs.ts:4](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useInputs.ts#L4)*

## Functions

### `Const` TypeConverter

▸ **TypeConverter**(`inputs`: any): *(Anonymous function)*

*Defined in [src/useInputs.ts:7](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useInputs.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | any |

**Returns:** *(Anonymous function)*

___

### `Const` ValueAttrSelector

▸ **ValueAttrSelector**(`inputs`: any): *(Anonymous function)*

*Defined in [src/useInputs.ts:24](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useInputs.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | any |

**Returns:** *(Anonymous function)*

___

### `Const` useInputs

▸ **useInputs**<**T**>(`initialInputs`: T): *object*

*Defined in [src/useInputs.ts:45](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useInputs.ts#L45)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`initialInputs` | T |

**Returns:** *object*

* **inputs**: *T*

* **onChange**(): *object*

* **reset**(): *function*

  * (): *void*
