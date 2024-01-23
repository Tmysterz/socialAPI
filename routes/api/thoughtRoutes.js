const router = require('express').Router();
// export functions for thoughts from controller file

const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

// /api/courses
// ask for help about .post(createThought) getting null back after creating thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// ask for help about .put(updateThought) getting null back think my syntax in insomnia is wrong
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// route works correctly
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// not deleting after i use the route
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
