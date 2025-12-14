const postService = require('../services/postService');

/**
 * Get all posts (public view - latest posts)
 */
const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.render('posts/index', { posts: posts, user: req.user || null });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).render('error', {
            message: 'Error',
            error: { status: 500, message: 'Failed to fetch posts' }
        });
    }
}

/**
 * Get a single post by ID (public view)
 */
const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postService.getPostById(id);

        if (!post) {
            return res.status(404).render('error', {
                message: 'Not Found',
                error: { status: 404, message: 'Post not found' }
            });
        }

        res.render('posts/show', { post: post, user: req.user || null });
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).render('error', {
            message: 'Error',
            error: { status: 500, message: 'Failed to fetch post' }
        });
    }
}

module.exports = {
    getAllPosts,
    getPostById
};