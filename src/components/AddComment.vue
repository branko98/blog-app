<template>
  <div>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        <hr />
        {{ comment.text }}
        <hr />
        {{ diffForHumans(comment.createdAt )}} </br>
      </li>
    </ul>
    <form @submit.prevent="handleAddComment">
      <input
        type="text"
        id="title"
        placeholder="Title"
        v-model="newComment.text"
        minlength="2"
        required
      />
      <button class="btn btn-light" type="submit">Post Comment</button>
    </form>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
import { dateMixin } from "../mixins/DateMixin";

export default {
    mixins: [ dateMixin ],
  data() {
    return {
      comments: [],
      newComment: {
        text: undefined,
        postId: this.$router.currentRoute.params.id
      }
    };
  },

  created() {
    postsService
      .getComments(this.newComment.postId)
      .then(response => {
        this.comments = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
    handleAddComment() {
      postsService.addComment(this.newComment, this.newComment.postId);
    }
  }
};
</script>

