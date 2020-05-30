import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class LocationRoute extends Route {
    modelData;

    async initialize(params) {
        console.log('params = ', params)
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
        debugger;
        this.modelData = this.modelData || await this.initialize(params);
        return this.modelData;
    }
}
