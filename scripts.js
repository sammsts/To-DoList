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
            if (this.newTask.text) {
                this.taskList.push(this.newTask);
                this.newTask = {
                    active: false
                };
                
                localStorage.setItem("tasks", JSON.stringify(this.taskList))

            } else {
                alert("To-do text is required");
            }
        }
    },

    created() {
        this.taskList = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.taskList;
    },

    //Utilizado no update porque não é uma aplicação grande, então, não vai pesar o sistema.
    updated() {
        localStorage.setItem("tasks", JSON.stringify(this.taskList));
    }
};

Vue.createApp(toDoList).mount('#app');