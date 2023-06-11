const {createApp, ref} = Vue

createApp({
  setup() {
    let id = 0

    const newTask = ref('')
    const Tasks = ref([
      { id: id++, text: 'Prova Stampa true', done: true, edit_enabled: false},
      { id: id++, text: 'Prova Stampa false', done: false, edit_enabled: false},
    ]);

    const editText = ref('');

    function changeDone(index) {
      if (index >= 0 && index < Tasks.value.length) {
        Tasks.value[index].done = !Tasks.value[index].done;
      }
    }      
        
    function addTask() {
      Tasks.value.push({ id: id++, text: newTask.value, done: false, edit_enabled: false})
      newTask.value = ''
    }

    function removeTask(Task) {
      Tasks.value = Tasks.value.filter((t) => t !== Task)
    }

      function editTask(index) {
        Tasks.value[index].edit_enabled = !Tasks.value[index].edit_enabled;
      }
      
    return {
      newTask,
      Tasks,
      addTask,
      removeTask,
      changeDone,
      editTask,
      editText
      }
  }

}).mount('#app')