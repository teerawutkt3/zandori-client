<template>
  <div>
    <h3>Card</h3>
    <b-row>
      <b-col>
        <b-card :header="true" :imgShow="true">
          <template v-slot:header> Hedare</template>
          <template v-slot:body>#1 Content</template>
        </b-card>
      </b-col>
      <b-col>
        <b-card :header="false" :imgShow="true">
          <template v-slot:body>#2 Content</template>
        </b-card>
      </b-col>
      <b-col>
        <b-card :header="true" :imgShow="false">
          <template v-slot:header>Hedare</template>
          <template v-slot:body>#3 Content</template>
        </b-card>
      </b-col>
      <b-col>
        <b-card :header="false" :imgShow="false">
          <template v-slot:body>#4 Content</template>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <pre> {{ description_1 }}</pre>
      </b-col>
      <b-col>
        <pre> {{ description_2 }}</pre>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <pre> {{ description_3 }}</pre>
      </b-col>
      <b-col>
        <pre> {{ description_4 }}</pre>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
	data() {
		return {
			description_1: `
#1
<b-card :header="true" :imgShow="true" :src="imgPath">
    <template v-slot:header>Hedare</template>
    <template v-slot:body> Content</template>
</b-card>
            `,
			description_2: `
#2
<b-card :header="false" :imgShow="true" :src="imgPath">
    <template v-slot:body> Content</template>
</b-card>
    `,
			description_3: `
#3
<b-card :header="true" :imgShow="false">
    <template v-slot:header>Hedare</template>
    <template v-slot:body> Content</template>
</b-card>
    `,
			description_4: `
#4
<b-card :header="false" :imgShow="false">
    <template v-slot:body> Content</template>
</b-card>
    `
		}
	}
}
</script>
