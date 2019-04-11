/**
 * Wrapper of localstorage to save JSON data
 */
export class JSONStorage<T> {
  public key: string
  constructor(key: string) {
    this.key = key
  }

  public get() {
    const value = this.storage.getItem(this.key)
    if (!value) {
      return null
    }
    return JSON.parse(value) as T
  }

  public save(value: T) {
    const json = JSON.stringify(value)
    this.storage.setItem(this.key, json)
  }

  public clear() {
    this.storage.setItem(this.key, '')
  }

  private get storage() {
    return window.localStorage
  }
}
