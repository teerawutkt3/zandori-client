<template>
  <b-container class="mb-5">
    <h2><u>Base Components</u></h2>
    <b-row>
      <b-col>
        <Card />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Button />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Card from "../components/Page/BaseComponents/Card";
import Button from "../components/Page/BaseComponents/Button";
export default {
  components: {
    Card,
    Button
  }
};
</script>
