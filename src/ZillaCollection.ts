export class ZillaCollection<Key, Value> extends Map<Key, Value> {
  public constructor(iterable?: Iterable<[Key, Value]>) {
    super(iterable);
  }

  public get(key: Key): Value | undefined {
    return super.get(key);
  }

  public has(key: Key): boolean {
    return super.has(key);
  }

  public set(key: Key, value: Value): this {
    super.set(key, value);
    return this;
  }

  public delete(key: Key): boolean {
    return super.delete(key);
  }

  public clear(): void {
    super.clear();
  }

  public forEach(
    callbackfn: (value: Value, key: Key, map: this) => void,
    thisArg?: any
  ): void {
    super.forEach(callbackfn, thisArg);
  }

  public entries(): IterableIterator<[Key, Value]> {
    return super.entries();
  }

  public keys(): IterableIterator<Key> {
    return super.keys();
  }

  public restore(): void {
    return super.clear();
  }

  public values(): IterableIterator<Value> {
    return super.values();
  }

  public [Symbol.iterator](): IterableIterator<[Key, Value]> {
    return super[Symbol.iterator]();
  }

  public [Symbol.toStringTag]: string = "ZillaCollection";

  public static from<Key, Value>(
    iterable: Iterable<[Key, Value]>
  ): ZillaCollection<Key, Value> {
    return new ZillaCollection(iterable);
  }

  public static fromArray<Key, Value>(
    array: [Key, Value][]
  ): ZillaCollection<Key, Value> {
    return new ZillaCollection(array);
  }

  public static fromPairs<Key, Value>(
    pairs: [Key, Value][]
  ): ZillaCollection<Key, Value> {
    return new ZillaCollection(pairs);
  }
}
