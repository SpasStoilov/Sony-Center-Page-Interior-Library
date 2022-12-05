export function DEEP_COPY_ARRAY(ARR){
    let copyArr = []

    for (let value of ARR ){
        
        if (value.constructor.name == 'Array'){
            copyArr.push(DEEP_COPY_ARRAY(value))
        }
        else if (value.constructor.name == 'Object'){
            copyArr.push(DEEP_COPY_OBJECT(value))
        }
        else {
            copyArr.push(value)
        }
    }

    return copyArr
}

export function DEEP_COPY_OBJECT(OBJ){
    let copyObj = {}

    for (let [key, value] of Object.entries(OBJ) ){
        
        if (value.constructor.name == 'Array'){
            copyObj[key] = DEEP_COPY_ARRAY(value)
        }
        else if (value.constructor.name == 'Object'){
            copyObj[key] = DEEP_COPY_OBJECT(value)
        }
        else {
            copyObj[key] = value
        }
    }

    return copyObj
}
