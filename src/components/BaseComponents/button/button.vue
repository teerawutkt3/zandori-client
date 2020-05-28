<template>
  <b-button size="sm" :type="this.type" :variant="this.color" @click="click"
    ><slot></slot
  ></b-button>
</template>

<script>
export default {
	name: "base-button",
	props: {
		click: {
			type: Function,
			default: () => {}
		},
		color: String,
		type: {
			type: String,
			default: "button"
		}
	}
}
</script>
