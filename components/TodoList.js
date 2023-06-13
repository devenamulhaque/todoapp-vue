export default {
    template: `
        <div class="mb-8 px-4 py-6 border" v-if="filteredTask.length">
            <h2 class="text-xl font-medium mb-3">{{title}} - ({{filteredTask.length}})</h2>
            <ul>
                <li class="flex" v-for="(todo, index) in filteredTask" :key="todo.id">
                    <label class="flex-grow">
                        <input class="mr-2" type="checkbox" v-model="todo.completed">
                        <del v-if="todo.completed">{{todo.todo}}</del>
                        <span v-if="!todo.completed">{{todo.todo}}</span>
                    </label>
                    <div @click="deleteTask(todo)" class="text-red-700 cursor-pointer">
                        <svg class="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </div>
                </li>
            </ul>
        </div>
    `,
    props: {
        title: String,
        filteredTask: Array,
        deleteTask: Function
    }
}