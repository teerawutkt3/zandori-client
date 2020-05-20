<template>
  <Button color="outline-warning" :click="this.click">Edit</Button>
</template>

<script>
import Button from "./button";

export default {
  name: "b-edit",
  props: {
    click: {
      type: Function
    }
  },
  components: {
    Button
  }
};
</script>

<style></style>
