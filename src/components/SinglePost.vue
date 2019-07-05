<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.text }}</p>
    <add-comment></add-comment>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
import AddComment from "../components/AddComment.vue";

export default {
    components: {
        AddComment
    },

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
