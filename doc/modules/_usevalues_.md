**[usefull-hooks](../README.md)**

> [Globals](../README.md) / "useValues"

# Module: "useValues"

## Index

### Type aliases

* [UseValuesAction](_usevalues_.md#usevaluesaction)

### Functions

* [buildValuesSetter](_usevalues_.md#buildvaluessetter)
* [useValues](_usevalues_.md#usevalues)

## Type aliases

### UseValuesAction

Ƭ  **UseValuesAction**<T\>: Dispatch<SetStateAction<Partial<T\>\>\>

*Defined in [useValues.ts:3](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useValues.ts#L3)*

#### Type parameters:

Name |
------ |
`T` |

## Functions

### buildValuesSetter

▸ `Const`**buildValuesSetter**<T\>(`set`: Dispatch<SetStateAction<T\>\>): (Anonymous function)

*Defined in [useValues.ts:5](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useValues.ts#L5)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`set` | Dispatch<SetStateAction<T\>\> |

**Returns:** (Anonymous function)

___

### useValues

▸ `Const`**useValues**<T\>(`initialValues`: T): [T, [UseValuesAction](_usevalues_.md#usevaluesaction)<T\>, () => void]

*Defined in [useValues.ts:15](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useValues.ts#L15)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | { [key:string]: any;  } |

#### Parameters:

Name | Type |
------ | ------ |
`initialValues` | T |

**Returns:** [T, [UseValuesAction](_usevalues_.md#usevaluesaction)<T\>, () => void]
