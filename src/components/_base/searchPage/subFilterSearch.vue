<template>
  <section class="filter">
    <b-card class="mt-lg-3">
      <h2>Filters</h2>
      <hr />
      <section>
        <label class="labelCheckboxList" for="types">Type</label>
        <b-form-checkbox v-model="form.type" value="Drink" unchecked-value="">
          <label class="labelCheckbox" for="labels">Drink</label>
        </b-form-checkbox>
        <b-form-checkbox v-model="form.type" value="Food" unchecked-value="">
          <label class="labelCheckbox" for="labels">Food</label>
        </b-form-checkbox>
      </section>
      <section>
        <label class="labelCheckboxList" for="Price">Price</label>
        <b-form-checkbox v-model="form.Price" value="Low" unchecked-value="">
          <label class="labelCheckbox" for="labels">Low</label>
        </b-form-checkbox>
        <b-form-checkbox v-model="form.Price" value="Medium" unchecked-value="">
          <label class="labelCheckbox" for="labels">Medium</label>
        </b-form-checkbox>
        <b-form-checkbox v-model="form.Price" value="High" unchecked-value="">
          <label class="labelCheckbox" for="labels">High</label>
        </b-form-checkbox>
      </section>
      <section>
        <label class="labelCheckboxList" for="District">District</label>
        <b-form-checkbox
          v-model="form.District"
          value="Balikpapan Kota"
          unchecked-value=""
          aria-label="labels"
        >
          <label class="labelCheckbox" for="labels">Balikpapan Kota</label>
        </b-form-checkbox>
        <b-form-checkbox
          v-model="form.District"
          value="Balikpapan Utara"
          unchecked-value=""
        >
          <label class="labelCheckbox" for="labels">Balikpapan Utara</label>
        </b-form-checkbox>
        <b-form-checkbox
          v-model="form.District"
          value="Balikpapan Barat"
          unchecked-value=""
        >
          <label class="labelCheckbox" for="labels">Balikpapan Barat</label>
        </b-form-checkbox>
      </section>
    </b-card>
  </section>
</template>
<script>
export default {
  name: 'Filtering',
  data() {
    return {
      form: {
        type: '',
        Price: '',
        District: ''
      }
    }
  },
  methods: {
    checked() {
      console.log(this.form.District)
    }
  }
}
</script>
<style scoped>
.labelCheckbox {
  font-family: 'Poppins', sans-serif;
}
.checkBox {
  font-family: 'Poppins', sans-serif;
}
.labelCheckboxList {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 19px;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}
.card h2 {
  font-family: 'Arvo', serif;
  margin-bottom: 0;
}
hr {
  margin-top: 0;
}
</style>
