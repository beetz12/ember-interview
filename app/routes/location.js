import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LocationRoute extends Route {
    @service toast;
    modelData;

    async initialize(params) {
        const {clinician_id, cpt_id} = params;
        const response = await fetch(`https://johnny-appleseed.clientsecure.me/client-portal-api/offices?filter[clinicianId]=${clinician_id}&filter[cptCodeId]=${cpt_id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Api-Version': '2020-01-01',
                'Application-Build-Version': '0.0.1',
                'Application-Platform': 'web',
            },
          })
        const services = await response.json();
        console.log(services.data);
        return services.data;
    }
    //called when going from url directly
    async model(params) {
        this.modelData = await this.initialize(params);
        return this.modelData;
    }
    //called during transition from LinkTo
    async afterModel(params) {
        this.modelData = this.modelData || await this.initialize(params);
        debugger;
        return this.modelData;
    }
    @action
    showSelectedLocation(location) {
        this.toast.info('Info', `Location ${location.attributes.street} selected`, {});
    }
}
