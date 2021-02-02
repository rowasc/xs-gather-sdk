import * as objectTypes from "../src/objectTypes";
it('Returns null when I send an incorrect object type name', () => {
    return expect(objectTypes.default('sould')).toBe(null);
});
it('Returns the correct object type when I send video as the object type name', () => {
    return expect(objectTypes.default('video')).toStrictEqual({id: 3});
});

it('Does not explode if I send it an empty string', () => {
    return expect(objectTypes.default('')).toStrictEqual(null);
});