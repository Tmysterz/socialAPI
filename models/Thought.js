const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Must have a thought'],
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
        },
    }
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
  
const Thought = model('thought', thoughtSchema);

module.exports = Thought;