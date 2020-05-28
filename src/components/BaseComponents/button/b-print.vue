<template>
  <Button color="outline-info" :click="this.click">Print</Button>
</template>

<script>
import Button from "./button"

export default {
	name: "b-print",
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
