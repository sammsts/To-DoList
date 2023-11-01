var taskList = [
    {
        "active": false,
        "message": ""
    },
]

const toDoList = {
    data() {
        return {
            taskList: window.taskList,
            newTask: {}
        }
    },

    computed: {
        filteredTaskList() {
            return this.taskList.filter((task) => task.message.trim() !== '');
        },
    },

    methods: {
        addTask: function() {
            if (this.newTask.message) {
                this.taskList.push(this.newTask);
                this.newTask = {};
            } else {
                alert("All fields must be filled");
            }
        },

        removeTask: function() {
            if (this.taskList.length > 0) {
                this.taskList = [{"active": false, "message": ""}];
            }
        }
    }
}

Vue.createApp(toDoList).mount('#app');