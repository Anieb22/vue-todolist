const {createApp, ref} = Vue

createApp({
  setup() {
    let id = 0

    const newTask = ref('')
    const Tasks = ref([
      { id: id++, text: 'Prova Stampa' },
    ])

    function addTask() {
      Tasks.value.push({ id: id++, text: newTask.value })
      newTask.value = ''
    }

    function removeTask(Task) {
      Tasks.value = Tasks.value.filter((t) => t !== Task)
    }

    return {
      newTask,
      Tasks,
      addTask,
      removeTask
    }
  }
}).mount('#app')