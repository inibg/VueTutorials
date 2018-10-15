<template>
  <div>
    <h3>Events Dashboard</h3>
    <button @click="signOut" class="btn btn-danger btn-sm signout-btn">
      Sign out
    </button>
    <hr>
    <AddEvent /> 
    <hr>
    {{$store.state.events}}
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
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
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = []
      snap.forEach(event => {
        events.push(event.val())
      })
      this.$store.dispatch('setEvents', events)
    })
  }
}
</script>
