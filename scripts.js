const toDoList = {
    data() {
        return {
            taskList: [],
            newTask: {
                active: false
            }
        }
    },

    methods: {
        addTask: function() {
            if (this.newTask.message) {
                this.taskList.push(this.newTask);
                this.newTask = {
                    active: false
                };
            } else {
                alert("To-do text is required");
            }
        },
    }
};

Vue.createApp(toDoList).mount('#app');