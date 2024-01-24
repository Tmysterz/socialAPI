const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// all routes are working
// /api/users

router.route('/').get(getUsers).post(createUser);

// all routes work are working
// /api/users/:userId

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// api/users/:userId/friends

// route not working for either

router.route('/:userId/friends').post(addFriend)

// api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;