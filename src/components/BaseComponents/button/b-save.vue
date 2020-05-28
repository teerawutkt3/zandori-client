<template>
  <Button color="outline-warning" :type="type" :click="this.click">
    <i class="fa fa-floppy-o"></i> Save
  </Button>
</template>

<script>
import Button from "./button"
export default {
	name: "b-save",
	props: {
		click: {
			type: Function,
			default: () => {}
		},
		type: {
			type: String,
			default: "button"
		}
	},
	components: {
		Button
	}
}
</script>

<style></style>
