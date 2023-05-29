export default {
    template: `
        <form @submit.prevent="addNewTask" class="mb-8 flex w-full">
            <input v-model="addNew" type="text" placeholder="Add a new task" class="border p-4 flex-grow">
            <button class="bg-yellow-600 p-4 border border-color-yellow-600 text-white">Add New</button>
        </form>
    `,
    data(){
        return {
            addNew: ''
        }
    },
    methods: {
        addNewTask(){
            this.$emit('updateNewTask', this.addNew)
            this.addNew = ''
        }
    }
}