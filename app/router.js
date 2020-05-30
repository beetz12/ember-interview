import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('clinician', { path: '/clinicians/:clinician_id' });
  this.route('location', { path: '/clinicians/:clinician_id/offices/:cpt_id' });
});