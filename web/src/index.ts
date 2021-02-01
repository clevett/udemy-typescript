import User from "./models/User"
import axios from 'axios'

const user = new User({ name: 'Alex', age: 18 })

user.set({ name: "Phil", age: 40 })

user.save()