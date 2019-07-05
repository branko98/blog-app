import axios from 'axios';

export default class PostsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('posts')
    }

    addPost(post) {
        return axios.post('posts', post)
    }

    getPost(id) {
        return axios.get(`/posts/${id}`)
    }

    editPost(post, id) {
        return axios.put('/posts/' + id, post)
    }

    deletePost(id){
        return axios.delete('/posts/' + id);
    }

    addComment(comment, postId){
        return axios.post(`posts/${postId}/comments/`, comment);
    }

    getComments(postId){
        console.log(postId)
        return axios.get(`posts/${postId}/comments`)
    }
}

export const postsService = new PostsService()