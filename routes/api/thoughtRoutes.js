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
// route works correctly
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// route works correctly
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// route works correctly
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// route works correctly
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
