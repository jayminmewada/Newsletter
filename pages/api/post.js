const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}
// Getting all posts.
async function getPosts(req, res) {
    try {
        let { db } = await connectToDatabase();
        let posts = await db
            .collection('post')
            .find({email:1,name:1})
            .sort({})        
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true,
        });
       
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// Adding a new post
async function addPost(req, res) {
    try {
        let { db } = await connectToDatabase();
        console.log(JSON.parse(req.body));
        await db.collection('post').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
// deleting a post
async function deletePost(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('posts').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}