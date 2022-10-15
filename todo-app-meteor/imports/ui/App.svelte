<script>
  import { TasksCollection } from '/imports/api/TasksCollection';
  import Task from '/imports/ui/Task.svelte';
  import TaskForm from '/imports/ui/TaskForm.svelte';

  // Hide completed starts as false
  let hideCompleted = false;

  // Hide completed filter checks if isChecked is true
  const hideCompletedFilter = { isChecked: { $ne: true } };

  // Declare variables
  let incompleteCount;
  let pendingTasksTitle = '';
  let tasks = [];

  $m: {
    // Fetch all tasks, apply hideCompleted filter, sort by creation time
    tasks = TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, {
      sort: { createdAt: -1 },
    }).fetch();

    // Count how many are incomplete (pending)
    incompleteCount = TasksCollection.find(hideCompletedFilter).count();

    // Format string for the header based on incompleteCount
    pendingTasksTitle = `${incompleteCount ? ` ${incompleteCount}` : '0'}`;
  }

  // Function that sets the value of hideCompleted based on button clicks
  const setHideCompleted = (value) => {
    hideCompleted = value;
  };
</script>

<div class="app">
  <header>
    <div class="app-bar">
      <div class="app-header">
        <!-- Header with website name and number of pending tasks -->
        <h1>📝️ To Do List, Pending Tasks: {pendingTasksTitle}</h1>
      </div>
    </div>
  </header>

  <div class="main">
    <!-- Show task form at top as defined in TaskForm.svelte  -->
    <TaskForm />
    <div class="filter">
      <!-- Button to filter by completed status -->
      <button on:click={() => setHideCompleted(!hideCompleted)}>
        <!-- Button text says Show All if hidden else Hide Completed if not hidden -->
        {hideCompleted ? 'Show All' : 'Hide Completed'}
      </button>
    </div>
    <!-- Task list -->
    <ul class="tasks">
      <!-- Render each task as defined in Task.svelte -->
      {#each tasks as task (task._id)}
        <Task task={task} />
      {/each}
    </ul>
  </div>
</div>