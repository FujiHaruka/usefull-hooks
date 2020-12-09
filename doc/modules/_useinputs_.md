**[usefull-hooks](../README.md)**

> [Globals](../README.md) / "useInputs"

# Module: "useInputs"

## Index

### Type aliases

* [UseInputsValue](_useinputs_.md#useinputsvalue)

### Functions

* [TypeConverter](_useinputs_.md#typeconverter)
* [ValueAttrSelector](_useinputs_.md#valueattrselector)
* [useInputs](_useinputs_.md#useinputs)

## Type aliases

### UseInputsValue

Ƭ  **UseInputsValue**: string \| number \| boolean \| string[]

*Defined in [useInputs.ts:4](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useInputs.ts#L4)*

## Functions

### TypeConverter

▸ `Const`**TypeConverter**(`inputs`: any): (Anonymous function)

*Defined in [useInputs.ts:7](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useInputs.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`inputs` | any |

**Returns:** (Anonymous function)

___

### ValueAttrSelector

▸ `Const`**ValueAttrSelector**(`inputs`: any): (Anonymous function)

*Defined in [useInputs.ts:24](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useInputs.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`inputs` | any |

**Returns:** (Anonymous function)

___

### useInputs

▸ `Const`**useInputs**<T\>(`initialInputs`: T): object

*Defined in [useInputs.ts:45](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useInputs.ts#L45)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | { [name:string]: [UseInputsValue](_useinputs_.md#useinputsvalue);  } |

#### Parameters:

Name | Type |
------ | ------ |
`initialInputs` | T |

**Returns:** object

Name | Type |
------ | ------ |
`inputs` | T |
`onChange` | {} |
`reset` | () => void |
