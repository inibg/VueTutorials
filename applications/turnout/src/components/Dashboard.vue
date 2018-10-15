<template>
  <div>
    <h3>Events Dashboard</h3>
    <button @click="signOut" class="btn btn-danger btn-sm signout-btn">
      Sign out
    </button>
    <hr>
    <AddEvent /> 
    <hr>
    {{$store.state}}
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
import AddEvent from './AddEvent.vue'

export default {
  methods: {
    signOut(){
      firebaseApp.auth().signOut()
      this.$store.dispatch('signOut')
    }
  }, 
  components: {
    AddEvent
  }
}
</script>
