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
      tempText:''
    }
  },

  methods:{

    deleteTask(i){
      this.todoList.splice(i, 1);
      ////////////////////////////////////aggiungere check sul booleano
    },

    addTask(){
      const newTask = {
        text: this.tempText,
        done: false
      }
      this.todoList.unshift(newTask);
      this.tempText = '';
    }

  },

  mounted(){

  }

}).mount('#app')