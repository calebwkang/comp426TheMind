const {RealmsServiceClient} = require('@google-cloud/game-servers');

async function createRealm(id) {
    const client = new RealmsServiceClient();

    // TODO(developer): uncomment the following section, and add values
    const projectId = 'adept-turbine-291020';
    const location = 'us-central1';
    const realmId = id;

    const request = {
        parent: `projects/${projectId}/locations/${location}`,
        realmId,
        realm: {
            // Must use a valid support time zone.
            // See https://cloud.google.com/dataprep/docs/html/Supported-Time-Zone-Values_66194188
            timeZone: 'US/Eastern',
            description: 'My The Mind Game Server',
        },
    };

    const [operation] = await client.createRealm(request);
    const results = await operation.promise();
    const [realm] = results;

    console.log('Realm created:');

    console.log(`\tRealm name: ${realm.name}`);
    console.log(`\tRealm description: ${realm.description}`);
    console.log(`\tRealm time zone: ${realm.timeZone}`);
}
createRealm().then(r => console.log(r));