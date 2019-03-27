import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


export async function setData(location: string, request: functions.Request, response: functions.Response) {
    if (request.method === "POST") {
        const body = request.body;
        try {
            const snapshot = await admin.firestore().doc(`${location}/${body.name}`).get();
            const oldData = snapshot.data();

            if (!oldData) {
                const setResult = await admin.firestore().doc(`${location}/${body.name}`).set(body);
                response.send(`Data is now live: ${setResult}`);
            } else if ((oldData.data !== body.data) || (oldData.unit !== body.unit)) {
                const updateResult = await admin.firestore().doc(`${location}/${body.name}`).update({ "data": body.data, "unit": body.unit });
                response.send(`Data updated: ${updateResult}`);
            } else {
                response.send('Data has not changed');
            }

        }
        catch (err) {
            console.log(err);
            response.send('An error occured');
        }
    } else {
        response.send('Not a post request');
    }
}
