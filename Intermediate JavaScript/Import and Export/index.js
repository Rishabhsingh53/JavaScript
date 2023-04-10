import User from './user.js'
import {printName as printUserName,printAge as printUserAge} from './user.js'

const user = new User("rishabh",19)

console.log(user)

printUserAge(user)
printUserName(user)