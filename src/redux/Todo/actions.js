
export const addTodo = (todo) => {
    return {
        type : 'add',
        payload : todo
    }
}

export const deleteTodo = (id) => {
    return {
        type : 'delete',
        payload : id
    }
}   