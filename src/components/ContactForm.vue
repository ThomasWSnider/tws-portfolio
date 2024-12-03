<script setup>
import { ref } from "vue";
import ThankYouMessage from "./ThankYouMessage.vue";

let submitted = ref(false);

const editableMessageData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const googleForm = ref(null)

function submitGoogleForm() {
  submitted.value = true
  const formElement = googleForm.value
  const iframe = document.getElementById('hiddenIframe')
  // @ts-ignore
  formElement.target = iframe.name
  formElement.submit()
}

function handleIframeLoad() {
  return
}
</script>


<template>
  <iframe name="hiddenIframe" id="hiddenIframe" style="display:none;" @load="handleIframeLoad"></iframe>
  <div v-if="submitted" class="p-5 bg-page">
    <ThankYouMessage />
  </div>
  <form v-else ref="form"
    action="https://docs.google.com/forms/d/e/1FAIpQLSfCSnZ0jKYkQW9RlH38_xCVeXFtUJ79DRC7ARuEQVQufKvq9Q/formResponse"
    target="hiddenIframe" id="bootstrapForm" @submit.prevent="submitGoogleForm">
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
    </div>
  </form>
</template>


<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>