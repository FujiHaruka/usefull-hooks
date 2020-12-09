**[usefull-hooks](../README.md)**

> [Globals](../README.md) / "useHistory"

# Module: "useHistory"

## Index

### Type aliases

* [History](_usehistory_.md#history)

### Variables

* [HistoryContext](_usehistory_.md#historycontext)

### Functions

* [HistoryContextProvider](_usehistory_.md#historycontextprovider)
* [useHistory](_usehistory_.md#usehistory)

## Type aliases

### History

Ƭ  **History**: RouteComponentProps[\"history\"]

*Defined in [useHistory.tsx:4](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useHistory.tsx#L4)*

## Variables

### HistoryContext

• `Const` **HistoryContext**: Context<History<unknown\>\> = React.createContext<History\>(null as any)

*Defined in [useHistory.tsx:6](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useHistory.tsx#L6)*

## Functions

### HistoryContextProvider

▸ `Const`**HistoryContextProvider**(`__namedParameters`: { children: ReactNode ; history: History<unknown\>  }): Element

*Defined in [useHistory.tsx:11](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useHistory.tsx#L11)*

Context provider for useHistory() hook

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { children: ReactNode ; history: History<unknown\>  } |

**Returns:** Element

___

### useHistory

▸ `Const`**useHistory**(): History

*Defined in [useHistory.tsx:24](https://github.com/FujiHaruka/usefull-hooks/blob/master/src/useHistory.tsx#L24)*

Hook to use history object via context

**Returns:** History
