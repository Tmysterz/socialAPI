const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: [true, 'Must have a reaction'],
            maxLength: 280,
        },
        username: {
            type: String,
            required: [true, 'Must have a username']
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: function () {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return this.createdAt.toLocaleDateString(undefined, options)
            },
        },
    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
        },
    },
)

module.exports = reactionSchema;
