<template>
  <Button color="outline-secondary" :click="this.click"
    ><i class="fa fa-reply"></i> Back</Button
  >
</template>

<script>
import Button from "./button"

export default {
	name: "b-back",
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
