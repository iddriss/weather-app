import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { setData } from './setdata';

admin.initializeApp(functions.config().firebase);

export const weather = functions.https.onRequest((request, response) => {
    console.log(request);
    const req = request;
    console.log(req.body);
    setData('weather', request, response)
        .then(data => data)
        .catch(err => console.log(err));
});

export const pollutants = functions.https.onRequest((request, response) => {

    setData('pollutant', request, response)
        .then(data => data)
        .catch(err => console.log(err))
});
