import { Mongo } from 'meteor/mongo';
 
// Create new mongo collection to store tasks
export const TasksCollection = new Mongo.Collection('tasks');