<template>
  <div>
    <form @submit.prevent="handleAdd">
      <input type="text" id="title" placeholder="Title" v-model="newPost.title" />
      <br />
      <input type="text" id="text" placeholder="Text" v-model="newPost.text" />
      <br />
      <button class="btn btn-primary" type="submit">Add post</button>
      <!-- <button class="btn btn-light" @click="preview()">Preview</button> -->
    </form>
  </div>
</template>

<script>
 import { postsService } from '../services/posts'

export default {
    data () {
        return {
            newPost: {
                title: undefined,
                text: undefined,
            }
        }
    },

    methods: {
        handleAdd() {
            postsService.addPost(this.newPost)
            this.$router.push('/posts')
        }
    }
};
</script>

<style>
</style>
