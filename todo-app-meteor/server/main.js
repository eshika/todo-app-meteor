import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

// Define function to insert new tasks into collection
const insertTask = taskText => TasksCollection.insert({ text: taskText, createdAt: new Date(), // current time
});

// If no tasks in collection on startup then add default tasks
Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
    ].forEach(insertTask);
  }
});