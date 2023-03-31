export declare class ZillaCollection<Key, Value> extends Map<Key, Value> {
    constructor(iterable?: Iterable<[Key, Value]>);
    get(key: Key): Value | undefined;
    has(key: Key): boolean;
    set(key: Key, value: Value): this;
    delete(key: Key): boolean;
    clear(): void;
    forEach(callbackfn: (value: Value, key: Key, map: this) => void, thisArg?: any): void;
    entries(): IterableIterator<[Key, Value]>;
    keys(): IterableIterator<Key>;
    restore(): void;
    values(): IterableIterator<Value>;
    [Symbol.iterator](): IterableIterator<[Key, Value]>;
    [Symbol.toStringTag]: string;
    static from<Key, Value>(iterable: Iterable<[Key, Value]>): ZillaCollection<Key, Value>;
    static fromArray<Key, Value>(array: [Key, Value][]): ZillaCollection<Key, Value>;
    static fromPairs<Key, Value>(pairs: [Key, Value][]): ZillaCollection<Key, Value>;
}
//# sourceMappingURL=ZillaCollection.d.ts.map