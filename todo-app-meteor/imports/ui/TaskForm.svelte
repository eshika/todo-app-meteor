<script>
    import { TasksCollection } from '/imports/api/TasksCollection';

    // Initialize newTask variable
    let newTask = '';

    const handleSubmit = () => {
      // Insert a new task into the collection with the task name and date
      TasksCollection.insert({
        text: newTask,
        createdAt: new Date(), // current time
      });

      // Clear/reset the form
      newTask = '';
    }
</script>

<!-- Create form for submitting task names -->
<form class="task-form" on:submit|preventDefault={handleSubmit}>
    <!-- Text box for typing task name -->
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
    <!-- Submit button to add task -->
    <button type="submit">Add Task</button>
</form>