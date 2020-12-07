import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo { userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false 
}

axios.get(url).then(response => {
  const todo = response.data as Todo
  const { id, title, completed } = todo
  TodoConsole(id, title, completed)
})

const TodoConsole = (id: number, title: string, completed: boolean) => {
  console.log(`ID: ${id}, Title: ${title}, ${completed}`)
}

