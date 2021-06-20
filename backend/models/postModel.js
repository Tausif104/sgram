// importing packages
import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        // likes: [
        //     {
        //         user: {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: 'User',
        //         },
        //     },
        // ],
        // comment: [
        //     {
        //         user: {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: 'User',
        //         },
        //         userAvatar: {
        //             type: String,
        //             required: true,
        //         },
        //         name: {
        //             type: String,
        //             required: true,
        //         },
        //         text: {
        //             type: String,
        //             required: true,
        //         },
        //     },
        // ],
    },
    {
        timestamps: true,
    }
)

const Post = mongoose.model('Post', postSchema)

export default Post
