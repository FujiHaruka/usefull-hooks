[usefull-hooks](../README.md) › ["useHistory"](_usehistory_.md)

# External module: "useHistory"

## Index

### Type aliases

* [History](_usehistory_.md#history)

### Variables

* [HistoryContext](_usehistory_.md#const-historycontext)

### Functions

* [HistoryContextProvider](_usehistory_.md#const-historycontextprovider)
* [useHistory](_usehistory_.md#const-usehistory)

## Type aliases

###  History

Ƭ **History**: *History*

*Defined in [useHistory.tsx:4](https://github.com/FujiHaruka/usefull-hooks/blob/a7c0738/src/useHistory.tsx#L4)*

## Variables

### `Const` HistoryContext

• **HistoryContext**: *Context‹History‹any››* =  React.createContext<History>(null as any)

*Defined in [useHistory.tsx:6](https://github.com/FujiHaruka/usefull-hooks/blob/a7c0738/src/useHistory.tsx#L6)*

## Functions

### `Const` HistoryContextProvider

▸ **HistoryContextProvider**(`__namedParameters`: object): *Element*

*Defined in [useHistory.tsx:11](https://github.com/FujiHaruka/usefull-hooks/blob/a7c0738/src/useHistory.tsx#L11)*

Context provider for useHistory() hook

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; __type &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray &#124; ReactPortal |
`history` | History‹any› |

**Returns:** *Element*

___

### `Const` useHistory

▸ **useHistory**(): *History*

*Defined in [useHistory.tsx:24](https://github.com/FujiHaruka/usefull-hooks/blob/a7c0738/src/useHistory.tsx#L24)*

Hook to use history object via context

**Returns:** *History*
