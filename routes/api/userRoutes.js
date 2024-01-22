const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addThoughtToUser,
    removeThoughtFromUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId

router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts

router.route('/:userId/thoughts').post(addThoughtToUser);

// api/users/:userId/thoughts/:thoughtId

router.route('/:userId/thoughts/:thoughtId').delete(removeThoughtFromUser);

module.exports = router;


// NEED TO ADD MORE ROUTES FOR USERS REACTIONS