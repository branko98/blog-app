<template>
  <div>
    <form @submit.prevent="handleAdd">
      <input type="text" id="title" placeholder="Title" v-model="newPost.title" minlength="2" />
      <br />
      <textarea
        id="text"
        placeholder="Text"
        v-model="newPost.text"
        minlength="5"
        rows="4"
        cols="50"
      ></textarea>
      <br />
      <button class="btn btn-primary" type="submit">Add post</button>
      <button class="btn btn-light" type="reset">Reset</button>
    </form>
  </div>
</template>

<script>
import { postsService } from "../services/posts";

export default {
  data() {
    return {
      id: undefined,
      newPost: {
        title: undefined,
        text: undefined
      }
    };
  },

  created() {
    if (this.$router.currentRoute.params.id) {
      this.id = this.$router.currentRoute.params.id;

      postsService
        .getPost(this.id)
        .then(response => {
          this.newPost = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },

  methods: {
    handleAdd() {
      if (this.id) {
        postsService.editPost(this.newPost, this.id);
        this.$router.push("/posts");
      } else {
        postsService.addPost(this.newPost);
        this.$router.push("/posts");
      }
    }
  }
};
</script>

<style>
</style>
