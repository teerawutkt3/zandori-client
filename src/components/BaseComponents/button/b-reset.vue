<template>
  <Button color="outline-secondary" :click="this.click"
    ><i class="fa fa-undo"></i> Reset</Button
  >
</template>

<script>
import Button from "./button";
export default {
  name: "b-reset",
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
