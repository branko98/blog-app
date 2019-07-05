<template>
  <div>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <h3>{{ post.title}}</h3>
        <p>{{ post.text }}</p>
        <!-- <p>Comments: </p> -->
        {{ diffForHumans(post.createdAt )}} </br>
        <router-link class="btn-primary btn" :to="`/posts/${post.id}`">View post</router-link>
        <button class="btn btn-danger" @click="handleDelete(post.id)">Delte post</button>
        <router-link class="btn-light btn" :to="`/edit/${post.id}`">Edit post</router-link>
        
      </li>
    </ul>
  </div>
</template>

<script>
import { postsService } from "../services/posts";
import { dateMixin } from "../mixins/DateMixin"

export default {
    mixins: [ dateMixin ],
  data() {
    return {
      posts: []
    };
  },

  created() {
    postsService
      .getAll()
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods:{
      handleDelete(id){
          postsService.deletePost(id)
                .then(() => {
                    this.posts = this.posts.filter(post => post.id !== id);
                })
      }
  }
};
</script>
