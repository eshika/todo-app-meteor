import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

Meteor.startup(() => {
  // Render app in the app element in the html
  new App({
    target: document.getElementById('app')
  });
});