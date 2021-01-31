interface ObjectType {
    id: number,
    params?: object
}
interface ObjectTypes {
    [type: string] : ObjectType
}

/**
 * @return ObjectType
 * @param type
 */
export default (type: string) => {
    const types:ObjectTypes = {
        'embedded': {
            id: 1
        },
        'poster': {
            id: 2
        },
        'video': {
            id: 3
        },
        'note': {
            id: 6
        }
    }
    return types[type] ? types[type] : null;
}
