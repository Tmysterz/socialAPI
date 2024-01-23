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
    const thoughts = [...getRandomThought(20)];

    // Loop 20 times -- add users and required user info to the users array

    for (let i = 0; i < 20; i++) {
        // Get some random thoughts objects using a helper function that we imported from ./data

        const username = getRandomUser();
        const email = getRandomEmail();

        users.push({
            username,
            email,
        });
    }

    // add users to the collection and await the results

    const userData = await User.insertMany(users);
    
    for (let i = 0; i < thoughts.length; i++) {
        const randomUser = userData[Math.floor(Math.random() * userData.length)]
        console.log(randomUser)
        const thoughtData = await Thought.create({username: randomUser.username, reactions: getRandomReaction(1), ...thoughts[i]});

        const user = await User.findOneAndUpdate(
            { _id: randomUser._id },
            { $push: {thoughts: thoughtData._id} },
            { new: true },
        )

        console.log(user);

    }

    console.table(users);
    console.table(thoughts);
    console.info('Seeding Complete!');
    process.exit(0);

})