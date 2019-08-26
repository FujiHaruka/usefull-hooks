> **[usefull-hooks](../README.md)**

[Globals](../README.md) / ["util/JSONStorage"](../modules/_util_jsonstorage_.md) / [JSONStorage](_util_jsonstorage_.jsonstorage.md) /

# Class: JSONStorage <**T**>

Wrapper of localstorage to save JSON data

## Type parameters

▪ **T**

## Hierarchy

* **JSONStorage**

### Index

#### Constructors

* [constructor](_util_jsonstorage_.jsonstorage.md#constructor)

#### Properties

* [key](_util_jsonstorage_.jsonstorage.md#key)

#### Accessors

* [storage](_util_jsonstorage_.jsonstorage.md#private-storage)

#### Methods

* [clear](_util_jsonstorage_.jsonstorage.md#clear)
* [get](_util_jsonstorage_.jsonstorage.md#get)
* [save](_util_jsonstorage_.jsonstorage.md#save)

## Constructors

###  constructor

\+ **new JSONStorage**(`key`: string): *[JSONStorage](_util_jsonstorage_.jsonstorage.md)*

*Defined in [util/JSONStorage.ts:5](https://github.com/FujiHaruka/usefull-hooks/blob/e7b36a2/src/util/JSONStorage.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[JSONStorage](_util_jsonstorage_.jsonstorage.md)*

## Properties

###  key

• **key**: *string*

*Defined in [util/JSONStorage.ts:5](https://github.com/FujiHaruka/usefull-hooks/blob/e7b36a2/src/util/JSONStorage.ts#L5)*

## Accessors

### `Private` storage

• **get storage**(): *`Storage`*

*Defined in [util/JSONStorage.ts:27](https://github.com/FujiHaruka/usefull-hooks/blob/e7b36a2/src/util/JSONStorage.ts#L27)*

**Returns:** *`Storage`*

## Methods

###  clear

▸ **clear**(): *void*

*Defined in [util/JSONStorage.ts:23](https://github.com/FujiHaruka/usefull-hooks/blob/e7b36a2/src/util/JSONStorage.ts#L23)*

**Returns:** *void*

___

###  get

▸ **get**(): *null | `T`*

*Defined in [util/JSONStorage.ts:10](https://github.com/FujiHaruka/usefull-hooks/blob/e7b36a2/src/util/JSONStorage.ts#L10)*

**Returns:** *null | `T`*

___

###  save

▸ **save**(`value`: `T`): *void*

*Defined in [util/JSONStorage.ts:18](https://github.com/FujiHaruka/usefull-hooks/blob/e7b36a2/src/util/JSONStorage.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |

**Returns:** *void*