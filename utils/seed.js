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
    const thoughts = [];

    // Loop 20 times -- add users and required user info to the users array
    
    // not sure if this will work yet because of how the user model is constructed
    // my thoughts and friends fields arnt showing up

    for (let i = 0; i < 20; i++) {
        // Get some random thoughts objects using a helper function that we imported from ./data

        const username = getRandomUser();
        const email = getRandomEmail();

        users.push({
            username,
            email,
        });
    }

    // do i need to push a username to? since it is a required field in my thought model
    for (let i = 0; i < 20;  i++) {

        const thoughtText = getRandomThought(20);
        const reactions = getRandomReaction(20);

        thoughts.push({
            thoughtText,
            reactions,
        })
    }

    // add users to the collection and await the results

    const userData = await User.insertMany(users);

    await Thought.collection.insertOne({
        username: [...userData.map(({_id}) => _id)],
    })

    console.table(users);
    console.table(thoughts);
    console.info('Seeding Complete!');
    process.exit(0);

})