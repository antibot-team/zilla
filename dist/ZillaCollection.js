"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZillaCollection = void 0;
class ZillaCollection extends Map {
    constructor(iterable) {
        super(iterable);
        this[_a] = "ZillaCollection";
    }
    get(key) {
        return super.get(key);
    }
    has(key) {
        return super.has(key);
    }
    set(key, value) {
        super.set(key, value);
        return this;
    }
    delete(key) {
        return super.delete(key);
    }
    clear() {
        super.clear();
    }
    forEach(callbackfn, thisArg) {
        super.forEach(callbackfn, thisArg);
    }
    entries() {
        return super.entries();
    }
    keys() {
        return super.keys();
    }
    restore() {
        return super.clear();
    }
    values() {
        return super.values();
    }
    [Symbol.iterator]() {
        return super[Symbol.iterator]();
    }
    static from(iterable) {
        return new ZillaCollection(iterable);
    }
    static fromArray(array) {
        return new ZillaCollection(array);
    }
    static fromPairs(pairs) {
        return new ZillaCollection(pairs);
    }
}
exports.ZillaCollection = ZillaCollection;
_a = Symbol.toStringTag;
//# sourceMappingURL=ZillaCollection.js.map