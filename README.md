# Ember Demo - Description

This is a basic demo showing

1. List all the available services for a given clinician (clinician ID)
[http://localhost:4200/clinicians/2](http://localhost:4200/clinicians/2)

2. List all the office locations where a particular service is available
[http://localhost:4200/clinicians/2/offices/3866](http://localhost:4200/clinicians/2/offices/3866)


## Known issues: 
1. After selecting a practice from the a clinician's page, the resulting page is blank. It needs to be refreshed before it displays. 
2. After selecting a location from the locations page, a Toast notification should appear. But the view cannot find the action in the controller. 


## Installation

* `git clone https://github.com/beetz12/ember-interview`
* `cd ember-interview`
* `yarn install`

## Configuration

1. You may update the BASE_API url in app/config/environment.js
2. You may access a specific clinician's page by changing the clinician id in the url: [http://localhost:4200/clinicians/2](http://localhost:4200/clinicians/2)


## Running / Development

* Activate your browser's CORS plugin. I'm using [https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en](Cors Unblock)
* `ember serve`
* Visit the clinician page at [http://localhost:4200/clinicians/2](http://localhost:4200/clinicians/2).
* Visit the locations page at [http://localhost:4200/clinicians/2/offices/3866](http://localhost:4200/clinicians/2/offices/3866).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
