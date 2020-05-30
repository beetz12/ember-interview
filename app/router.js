import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

//need the following routes: 
//1. index route for /clinicians
//2. dynamic segment for /clinicians/:cl

Router.map(function() {
  this.route('clinician', { path: '/clinicians/:clinician_id' });
  // this.route('locations', { path: '/clinician/:clinician_id/locations' });
  this.route('location', { path: '/clinicians/:clinician_id/offices/:cpt_id' });
});