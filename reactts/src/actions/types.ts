import { FetchTodosAction, DeleteTodoAction } from './todos'

export enum ActionsTypes {
  fetchTodos, //will default to 0 followed by 1, 2....
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction
