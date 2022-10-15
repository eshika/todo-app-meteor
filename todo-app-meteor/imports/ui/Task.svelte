<script>
    import { TasksCollection } from '../api/TasksCollection';
  
    export let task;
  
    const toggleChecked = () => {
      // Set the checked property to the opposite of its current value when the checkbox is clicked
      TasksCollection.update(task._id, {
        // Set isChecked to opposite
        $set: { isChecked: !task.isChecked }
      });
    };
  
    // Remove task from tasks collection when delete is clicked
    const deleteThisTask = () => {
      TasksCollection.remove(task._id);
    };
  </script>
  
  <li>
      <!-- Checkbox for toggling task status -->
      <input
              type="checkbox"
             readonly
             checked={!!task.isChecked}
             on:click={toggleChecked}
      />
      <!-- Task text -->
      <span>{ task.text }</span>
      <!-- Delete button for removing tasks  -->
      <button class="delete" on:click={deleteThisTask}>&times;</button>
  </li>