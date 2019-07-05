<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.text }}</p>
  </div>
</template>

<script>
import { postsService } from "../services/posts";

export default {
  data() {
    return {
      post: {},
      id: this.$router.currentRoute.params.id
    };
  },
  created() {
    postsService
      .getPost(this.id)
      .then(response => {
        this.post = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
