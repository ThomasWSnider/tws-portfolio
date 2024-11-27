<script setup>
import { ref } from "vue";

let submitted = false
const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfCSnZ0jKYkQW9RlH38_xCVeXFtUJ79DRC7ARuEQVQufKvq9Q/formResponse'

const editableMessageData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

</script>


<template>
  <iframe name="hidden-iframe" id="hiddenIframe" style="display:none;"></iframe>
  <form method="post" target="hiddenIframe" id="bootstrapForm" onsubmit.prevent="submitted = true">
    <div class="row justify-content-center">
      <fieldset>
        <h2>Send Me A Message<br><small></small></h2>
      </fieldset>

      <!-- Field type: "short" id: "1924068137" -->
      <div class="col-6 mt-3 mx-auto">
        <fieldset>
          <legend for="1924068137">Email</legend>
          <div class="form-group">
            <input v-model="editableMessageData.email" id="1551830678" type="text" name="entry.1551830678"
              class="form-control" required>
          </div>
        </fieldset>
      </div>


      <!-- Field type: "short" id: "1570205503" -->
      <div class="col-6 mt-3 mx-auto">
        <fieldset>
          <legend for="1570205503">Name</legend>
          <div class="form-group">
            <input v-model="editableMessageData.name" id="520950269" type="text" name="entry.520950269"
              class="form-control" required>
          </div>
        </fieldset>
      </div>

      <!-- Field type: "short" id: "2145665440" -->
      <div class="col-12 mt-3">
        <fieldset>
          <legend for="2145665440">Subject</legend>
          <div class="form-group">
            <input v-model="editableMessageData.subject" id="780295815" type="text" name="entry.780295815"
              class="form-control">
          </div>
        </fieldset>
      </div>

      <!-- Field type: "paragraph" id: "1984878330" -->
      <div class="col-12 mt-3">
        <fieldset>
          <legend for="1984878330">Message</legend>
          <div class="form-group">
            <textarea v-model="editableMessageData.message" id="1070418067" name="entry.1070418067" class="form-control"
              style="height: 129px;" required></textarea>
          </div>
        </fieldset>
      </div>

      <input type="hidden" name="fvv" value="1">
      <input type="hidden" name="fbzx" value="-2698408044705719117">
      <!--
      CAVEAT: In multipages (multisection) forms, *pageHistory* field tells to google what sections we've currently completed.
      This usually starts as "0" for the first page, then "0,1" in the second page... up to "0,1,2..N" in n-th page.
      Keep this in mind if you plan to change this code to recreate any sort of multipage-feature in your exported form.
      We're setting this to the total number of pages in this form because we're sending all fields from all the section together.
      -->
      <input type="hidden" name="pageHistory" value="0">
      <div class="col-2 text-center mt-3">
        <input class="btn btn-primary px-5 fs-5" type="submit" value="Send Message">
      </div>
    </div>
  </form>
</template>


<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>