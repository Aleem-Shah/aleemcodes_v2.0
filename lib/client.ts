import React from 'react'
import { Client } from 'appwrite';
export const client = () => {
    


    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('6646e50e00253d5c2606');
 
        const databases = new Databases(client);

const promise = databases.createDocument(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    ID.unique(),
    {}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}
