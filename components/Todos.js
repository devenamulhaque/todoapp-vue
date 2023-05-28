import TodoList from "./TodoList.js";

export default {
    components: {TodoList},
    template: `
        <h1 class="text-3xl font-bold mb-10">My Todo App</h1>
        <form @submit.prevent="addNewTask" class="mb-8 flex w-full">
            <input v-model="addNew" type="text" placeholder="Add a new task" class="border p-4 flex-grow">
            <button class="bg-yellow-600 p-4 border border-color-yellow-600 text-white">Add New</button>
        </form>
        <div class="mb-3">
            <button class="bg-red-600 px-4 py-2 rounded text-white mr-2 mb-2" @click="deleteCompletedTasks" v-if="completedTask.length">Clear Completed Tasks</button>
        </div>
        <TodoList title="Progress Task" :filteredTask="inProgressTask" :deleteTask="deleteTask" ></TodoList>
        <TodoList title="Completed Task" :filteredTask="completedTask" :deleteTask="deleteTask"></TodoList>
    `,
    data(){
        return {
            todos: [
                {
                    id: 100,
                    name: "this is a single todo",
                    completed: false
                },
                {
                    id: 101,
                    name: "this is a second todo",
                    completed: true
                },
                {
                    id: 102,
                    name: "Daily task for me",
                    completed: false
                },
                {
                    id: 103,
                    name: "Daily task for office",
                    completed: true
                },
            ],
            addedToBag: 0,
            addNew: ''
        }
    },
    methods: {
        addNewTask(){
            return this.todos.push({
                id: this.todos.length + 100,
                name: this.addNew,
                completed: false
            }),
                this.addNew = ''
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