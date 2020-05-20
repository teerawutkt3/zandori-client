<template>
  <Button color="outline-warning" :click="this.click"
    ><i class="fa fa-plus"></i> Add</Button
  >
</template>

<script>
import Button from "./button";
export default {
  name: "b-create",
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
