const { User, Thought } = require('../models');

//   need to add more controllers for the users reactions



const headCount = async () => {
    const numberOfUsers = await User.aggregate()
        .count('userCount');
    return numberOfUsers;
}

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();

            const userObj = {
                users,
                headCount: await headCount(),
            };

            res.json(userObj);

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.studentId }).select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }

            res.json({
                user,
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a user and any thoughts they may have created
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID exists' });
            }

            const thought = await Thought.findOneAndUpdate(
                { users: req.params.userId },
                { $pull: { users: req.params.userId }},
                { new: true },
            );

            if (!thought) {
                return res.status(404).json({
                    message: 'User deleted, but no thoughts from user found',
                });
            }

            res.json({ message: 'User successfully deleted' });

        } catch (err) { 
            console.log(err);
            res.status(500).json(err);
        }
    },
    // add a thought to a user
    async addThoughtToUser(req, res) {
        console.log('You are adding a thought');
        console.log(req.body);

        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { thoughts: req.body }},
                { runValidators: true, new: true },
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // remove thought from user
    async removeThoughtFromUser(req, res) {
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.studentId },
                { $pull: { thought: { thoughtId: req.params.thoughtId} } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    },
};