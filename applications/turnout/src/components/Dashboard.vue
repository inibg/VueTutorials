<template>
  <div>
    <h3>Events Dashboard</h3>
    <button @click="signOut" class="btn btn-danger btn-sm signout-btn">
      Sign out
    </button>
          {{$store.state}}
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  methods: {
    signOut(){
      firebaseApp.auth().signOut()
      this.$store.dispatch('signOut')
    }
  }  
}
</script>
