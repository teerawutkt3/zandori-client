<template>
  <Button color="outline-secondary" :click="this.click">Cancel</Button>
</template>

<script>
import Button from "./button"

export default {
	name: "b-cancel",
	props: {
		click: {
			type: Function,
			default: () => {}
		}
	},
	components: {
		Button
	}
}
</script>

<style scoped></style>
