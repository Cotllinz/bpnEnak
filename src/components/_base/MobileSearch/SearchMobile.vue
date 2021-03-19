<template>
  <main class="searchMobiles">
    <b-container>
      <b-row>
        <b-col cols="12">
          <div>
            <section class="d-flex">
              <b-icon
                @click="Close(0)"
                icon="x-circle"
                style="cursor: pointer;"
                scale="2"
                class="ml-auto mt-4 mr-3"
                variant="danger"
              ></b-icon>
            </section>
            <b-input-group class="search__Input mt-4">
              <template #prepend>
                <b-input-group-text class="search_btn"
                  ><b-icon
                    icon="search"
                    font-scale="1.5"
                    aria-hidden="true"
                    style="color:#797878;"
                  ></b-icon
                ></b-input-group-text>
              </template>
              <b-form-input
                autocomplete="off"
                type="text"
                @keyup.enter="searchFood($event)"
                @keyup="searchFood($event)"
                placeholder="Search Food"
                maxlength="30"
              ></b-form-input>
            </b-input-group>
          </div>
        </b-col>
        <b-col cols="12">
          <b-card class="mt-3">
            <h2>Filters</h2>
            <hr />
            <section>
              <label class="labelCheckboxList" for="types">Type</label>
              <b-form-checkbox
                @change="searchFilter"
                value="drinks"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels">Drink</label>
              </b-form-checkbox>
              <b-form-checkbox
                @change="searchFilter"
                value="foods"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels">Food</label>
              </b-form-checkbox>
            </section>
            <section>
              <label class="labelCheckboxList" for="Price">Price</label>
              <b-form-checkbox
                @change="searchFilter"
                value="low"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels">Low</label>
              </b-form-checkbox>
              <b-form-checkbox
                @change="searchFilter"
                value="mid"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels">Medium</label>
              </b-form-checkbox>
              <b-form-checkbox
                @change="searchFilter"
                value="high"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels">High</label>
              </b-form-checkbox>
            </section>
            <section>
              <label class="labelCheckboxList" for="District">District</label>
              <b-form-checkbox
                value="balikpapan kota"
                @change="searchFilter"
                unchecked-value=""
                aria-label="labels"
              >
                <label class="labelCheckbox" for="labels"
                  >Balikpapan Kota</label
                >
              </b-form-checkbox>
              <b-form-checkbox
                @change="searchFilter"
                value="balikpapan utara"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels"
                  >Balikpapan Utara</label
                >
              </b-form-checkbox>
              <b-form-checkbox
                @change="searchFilter"
                value="balikpapan barat"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels"
                  >Balikpapan Barat</label
                >
              </b-form-checkbox>
              <b-form-checkbox
                @change="searchFilter"
                value="balikpapan tengah"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels"
                  >Balikpapan Tengah</label
                >
              </b-form-checkbox>
              <b-form-checkbox
                @change="searchFilter"
                value="balikpapan timur"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels"
                  >Balikpapan Timur</label
                >
              </b-form-checkbox>
              <b-form-checkbox
                @change="searchFilter"
                value="balikpapan selatan"
                unchecked-value=""
              >
                <label class="labelCheckbox" for="labels"
                  >Balikpapan Selatan</label
                >
              </b-form-checkbox>
            </section>
          </b-card>
        </b-col>
        <b-col cols="12" class="text-center">
          <button class="py-2 px-5 btn_search mb-3  mt-3 ">Search</button>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SearchMobile',
  methods: {
    ...mapMutations(['setCase']),
    Close(payload) {
      this.setCase(payload)
    }
  }
}
</script>
<style scoped>
.searchMobiles {
  height: auto;
  min-height: 100vh;
  background: rgb(220, 233, 253);
}
.input-group,
input {
  height: 45px;
}
.search_btn {
  border-radius: 10px;
  padding-left: 20px;
  background: #fafafa;
  border-right: none;
}
input[type='text'] {
  font-family: 'Poppins', sans-serif;
  outline: none;
  padding: 5px 14px 5px;
  font-size: 18px;
  background: #fafafa;
  border-radius: 10px;
  letter-spacing: 4px;
  box-shadow: none !important;
  border: 1px solid #ccc;
  border-left: none;
}
.labelCheckbox {
  font-size: 15px;
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
  font-size: 25px;
}
hr {
  margin-top: 0;
}
.btn_search {
  border: none;
  font-weight: 500;
  box-shadow: 2px 3px 7px rgb(182, 182, 182);
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  background: #d01010;
  color: #ffffff;
}
</style>
