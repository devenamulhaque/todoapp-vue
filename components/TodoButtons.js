export default {
    template: `
        <div class="mb-3">
            <button class="bg-red-600 px-4 py-2 rounded text-white mr-2 mb-2" @click="deleteCompletedTasks" v-if="completedTodos.length">Clear Completed Tasks</button>
        </div>
    `,
    props: {
        deleteCompletedTasks: Function,
        completedTodos: Array
    }
}