const {createApp, ref} = Vue

createApp({
  setup() {
    let id = 0

    const newTask = ref('')
    const Tasks = ref([
      { id: id++, text: 'Prova Stampa true', done: true},
      { id: id++, text: 'Prova Stampa false', done: false},
    ]);

    function changeDone(index) {
      if (index >= 0 && index < Tasks.value.length) {
        Tasks.value[index].done = !Tasks.value[index].done;
      }
    }
    function addTask() {
      Tasks.value.push({ id: id++, text: newTask.value, done: false})
      newTask.value = ''
    }

    function removeTask(Task) {
      Tasks.value = Tasks.value.filter((t) => t !== Task)
    }

    return {
      newTask,
      Tasks,
      addTask,
      removeTask,
      changeDone
    }
  }
}).mount('#app')