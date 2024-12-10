<script setup>
import { ref } from "vue";
import ThankYouMessage from "./ThankYouMessage.vue";
import { AppState } from "@/AppState";
import { logger } from "@/utils/Logger";


const editableMessageData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const googleForm = ref(null)

function submitGoogleForm() {
  AppState.submitted = true
  const formElement = googleForm.value
  const iframe = document.getElementById('hiddenIframe')
  if (formElement && iframe) {
    // @ts-ignore
    formElement.target = iframe.name
    formElement.submit()
    editableMessageData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } else {
    logger.log('an error ocurred when attempting to send message')
  }
}

function handleIframeLoad() {
  return
}
</script>


<template>
  <iframe name="hiddenIframe" id="hiddenIframe" style="display:none;" @load="handleIframeLoad"></iframe>
  <Transition name="fade-slide" mode="out-in">
    <div v-if="AppState.submitted" class="p-5 bg-page">
      <ThankYouMessage />
    </div>
    <div v-else class="py-4">
      <form ref="googleForm"
        action="https://docs.google.com/forms/d/e/1FAIpQLSfCSnZ0jKYkQW9RlH38_xCVeXFtUJ79DRC7ARuEQVQufKvq9Q/formResponse"
        target="hiddenIframe" id="bootstrapForm" @submit.prevent="submitGoogleForm" class="container px-4">
        <div class="row justify-content-center">
          <!-- Field type: "short" id: "1924068137" -->
          <div class="col-6 mt-3 mx-auto">
            <fieldset>
              <legend for="1924068137">Email</legend>
              <div class="form-group">
                <input v-model="editableMessageData.email" id="1551830678" type="text" name="entry.1551830678"
                  class="form-control form-control-lg" required maxlength="50" placeholder="Your Email">
              </div>
            </fieldset>
          </div>


          <!-- Field type: "short" id: "1570205503" -->
          <div class="col-6 mt-3 mx-auto">
            <fieldset>
              <legend for="1570205503">Name</legend>
              <div class="form-group">
                <input v-model="editableMessageData.name" id="520950269" type="text" name="entry.520950269"
                  class="form-control form-control-lg" required maxlength="50" placeholder="Your Name">
              </div>
            </fieldset>
          </div>

          <!-- Field type: "short" id: "2145665440" -->
          <div class="col-12 mt-3">
            <fieldset>
              <legend for="2145665440">Subject</legend>
              <div class="form-group">
                <input v-model="editableMessageData.subject" id="780295815" type="text" name="entry.780295815"
                  class="form-control form-control-lg" required maxlength="50" placeholder="Subject">
              </div>
            </fieldset>
          </div>

          <!-- Field type: "paragraph" id: "1984878330" -->
          <div class="col-12 mt-3">
            <fieldset>
              <legend for="1984878330">Message</legend>
              <div class="form-group">
                <textarea v-model="editableMessageData.message" id="1070418067" name="entry.1070418067"
                  class="form-control form-control-lg" style="height: 129px;" required maxlength="1000"
                  placeholder="Message"></textarea>
              </div>
            </fieldset>
          </div>
        </div>
        <input type="hidden" name="fvv" value="1">
        <input type="hidden" name="fbzx" value="-2698408044705719117">
      </form>
      <div class="col-12 text-center mt-3">
        <button class="btn btn-outline-warning px-5 fs-5" type="submit" form="bootstrapForm">Send Message</button>
      </div>
    </div>
  </Transition>
</template>


<style lang="scss" scoped>
textarea {
  resize: none;
  outline: none !important;
  border: none;
}

input {
  outline: none !important;
  border: none;
}

legend {
  color: transparent;
  position: absolute;
  right: 50%;
  top: 100%;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.75s cubic-bezier(0.4, 0, 0.1, 1), transform 0.75s ease-out;
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translatex(10%);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translatex(0);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translate(-10%);
}
</style>