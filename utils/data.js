const users = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];

const thoughtText = [
    'Decision Tracker i found',
    'Find My Phone update',
    'Learn Piano with me',
    'Starbase Defender is my favorite game',
    'Tower Defense is a game i like to play to kill time',
    'Monopoly Money Manager is fun to play with friends and family',
    'Movie trailers can sometimes be spoilers',
    'Hello world these are my thoughts...',
    'Stupid Social Media App keeps crashing on me',
    'Notes on school material help',
    'Messages on my phone dont go through sometimes',
    'Email is a professional way to communicate',
    'Compass is a good tool to bring into the wilderness',
    'Firefox is not as relavent as google',
    'Running app can help you track how far you can run',
    'Cooking apps help me find new recipes',
    'Poker is more complicated than blackjack',
    'Deliveries can have random delays sometimes',
];

//  do i need seeded reaction text?
// how do i connect the relationship between reactionText and the user that commented it.

const reactionText = [
    'I agree with you on that one',
    'Im kind of confused on what you mean',
    'I disagree with you on that one',
    'I was thinking the same thing!',
    'I couldnt disagree more on this one',
    'hmmm maybe',
];


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user
const getRandomUser = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random thoughts that we can add to user object.
const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughtText),
            username: getRandomUser(),
        });
    }
    return results;
};

const getRandomEmail = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let email = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        email += '@gmail.com'

        return email;
    }
}

const getRandomReaction = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        result.push({
            reactionBody: getRandomArrItem(reactionText),
            username: getRandomUser(),
        });
    }
    return results;
};

module.exports = { getRandomUser, getRandomThought, getRandomReaction, getRandomEmail };