const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought, getRandomReaction, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Delete the collections if they exist

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users')
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts')
    }

    // Create empty array to hold the users
    const users = [];

    // Loop 20 times -- add users and required user info to the users array
    
    // not sure if this will work yet because of how the user model is constructed

    for (let i = 0; i < 20; i++) {
        // Get some random thoughts objects using a helper function that we imported from ./data
        const thoughts = getRandomThought(20);

        const fullUserName = getRandomUser
        const first = fullUserName.split(' ')[0];
        const last = fullUserName.split(' ')[1];
        const email = getRandomEmail();

        users.push({
            first,
            last,
            email,
            thoughts,
        });
    }




})