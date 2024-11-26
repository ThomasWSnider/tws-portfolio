<script setup>

</script>


<template>
  <form action="https://docs.google.com/forms/d/e/1FAIpQLSfCSnZ0jKYkQW9RlH38_xCVeXFtUJ79DRC7ARuEQVQufKvq9Q/formResponse"
    target="_self" id="bootstrapForm" method="POST">
    <div class="row">
      <fieldset>
        <h2>Send Me A Message<br><small></small></h2>
      </fieldset>

      <!-- Field type: "short" id: "1924068137" -->
      <div class="col-4 mx-auto">
        <fieldset>
          <legend for="1924068137">Email</legend>
          <div class="form-group">
            <input id="1551830678" type="text" name="entry.1551830678" class="form-control" required>
          </div>
        </fieldset>
      </div>


      <!-- Field type: "short" id: "1570205503" -->
      <div class="col-4 mx-auto">
        <fieldset>
          <legend for="1570205503">Name</legend>
          <div class="form-group">
            <input id="520950269" type="text" name="entry.520950269" class="form-control" required>
          </div>
        </fieldset>
      </div>


      <!-- Field type: "paragraph" id: "1984878330" -->
      <div class="col-12">
        <fieldset>
          <legend for="1984878330">Message</legend>
          <div class="form-group">
            <textarea id="1070418067" name="entry.1070418067" class="form-control" required></textarea>
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

      <input class="btn btn-primary" type="submit" value="Submit">
    </div>
  </form>
</template>


<style lang="scss" scoped></style>