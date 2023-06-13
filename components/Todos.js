import TodoList from "./TodoList.js";
import TodoButtons from "./TodoButtons.js";
import TodoCreate from "./TodoCreate.js";

export default {
    components: {TodoList, TodoButtons, TodoCreate},
    template: `
        <h1 class="text-3xl font-bold mb-10">My Todo App</h1>
        <TodoCreate @update-new-task="addNewTask"></TodoCreate>
        <TodoButtons :deleteCompletedTasks="deleteCompletedTasks" :completedTodos="completedTask" />
        <TodoList title="Progress Task" :filteredTask="inProgressTask" :deleteTask="deleteTask" ></TodoList>
        <TodoList title="Completed Task" :filteredTask="completedTask" :deleteTask="deleteTask"></TodoList>
    `,
    data(){
        return {
            todos: [],
            addedToBag: 0
        }
    },
    created () {
        fetch('https://dummyjson.com/todos').then(response => response.json()).then(data => {
            this.todos = data.todos
        })
    },
    methods: {
        addNewTask(addNew){
            return this.todos.push({
                id: this.todos.length + 100,
                todo: addNew,
                completed: false
            })
        },
        deleteTask(index){
            const deleteItem = this.todos.indexOf(index)
            this.todos.splice(deleteItem, 1)
        },
        deleteCompletedTasks(){
            const deleteCompletedTasks = this.todos.filter(task => !task.completed)
            this.todos = deleteCompletedTasks
        }
    },
    computed: {
        completedTask(){
            return this.todos.filter(item => item.completed)
        },
        inProgressTask() {
            return this.todos.filter(item => !item.completed)
        }
    }
}