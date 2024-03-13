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
      errorMsg: ''
    }
  },

  methods:{

    deleteTask(i){
      this.todoList.splice(i, 1);
      ////////////////////////////////////aggiungere check sul booleano
    },

    addTask(){
      if (this.tempText.length < 4) {
        this.errorMsg = 'Inserire un testo di almeno 4 caratteri';  
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