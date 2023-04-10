// There are two types of exports :
// 1. export default
// 2. export

export default class User {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

export function printName(user){
    console.log(`The user's name is :\t ${user.name}`)
}

export function printAge(user){
    console.log(`The user's age is :\t ${user.age}`)
}

