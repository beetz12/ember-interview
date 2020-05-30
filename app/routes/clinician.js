import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from '../config/environment';

export default class ClinicianRoute extends Route {

    async model(params) {
        const clinician_id  = params.clinician_id;
        const response = await fetch(`${ENV.APP.BASE_API}/client-portal-api/cpt-codes?filter[clinicianId]=${clinician_id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Api-Version': '2020-01-01',
                'Application-Build-Version': '0.0.1',
                'Application-Platform': 'web',
            },
          })
        const services = await response.json();
        const data = services.data;

        data.forEach(x => {
          x.clinician_id = clinician_id;
          x.cpt_id = x.id;
        })
        console.log(data);
        return data;
      }
}
