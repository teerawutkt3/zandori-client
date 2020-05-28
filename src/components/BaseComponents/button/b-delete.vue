<template>
  <Button color="outline-danger" :click="this.click"
    ><i class="fa fa-trash"></i> Delete</Button
  >
</template>

<script>
import Button from "./button"
export default {
	name: "b-delete",
	props: {
		click: {
			type: Function
		}
	},
	components: {
		Button
	}
}
</script>

<style></style>
