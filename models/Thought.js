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
            get: function () {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return this.createdAt.toLocaleDateString(undefined, options)
            },
        },
        // how do i connect this to the user that created the thought
        // not sure if syntax is correct
        username: {
            type: mongoose.Schema.Types.String,
            required: true,
            ref: 'User',
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