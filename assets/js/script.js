const { createApp } = Vue;

createApp({

  data(){
    return{

      todoList: [
        {
          text: 'Fare la spesa',
          done: false
        },
        {
          text: 'Studiare Vue',
          done: true
        },
        {
          text: 'Studiare PHP',
          done: false
        },
        {
          text: 'Allenarsi',
          done: true
        },
      ],
      tempText: '',
      errorMsg: '',
      deleteMsg: ''
    }
  },

  methods:{

    deleteTask(i){
      if (this.todoList[i].done === true) {
        this.todoList.splice(i, 1);
        this.deleteMsg = '';
      } else {
        this.deleteMsg = 'Impossibile cancellare dalla lista una task non svolta!';
        this.errorMsg = '';
      }
    },

    addTask(){
      if (this.tempText.length < 4) {
        this.errorMsg = 'Inserire un testo di almeno 4 caratteri';  
        this.deleteMsg = '';
      } else {
        const newTask = {
          text: this.tempText,
          done: false
        }
        this.todoList.unshift(newTask);
        this.tempText = '';
        this.errorMsg = '';
      }
    }

  },

  mounted(){

  }

}).mount('#app')