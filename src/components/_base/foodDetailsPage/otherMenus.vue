<template>
  <section>
    <b-container>
      <section class="title_menus mt-2 mb-3">
        <h4>Other Product From Restaurant</h4>
      </section>
      <b-row cols-md="2" cols-lg="2" cols-xl="3">
        <b-col v-for="(items, index) in data" :key="index" class="pr-lg-0">
          <b-card
            :img-src="
              'https://images.unsplash.com/photo-1594030990808-ebd1c2247c28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80'
            "
            class="py-lg-2 py-3 px-3 card_images align-items-center mb-4"
            img-alt="cardProduct"
            img-left
          >
            <section class="desc_Food">
              <h2>Kepiting Saus Khas Dandito</h2>
              <p>
                Kepiting rebus segar dengan saus asam manis yang menggugah
                selera siapapun yang memakannya
              </p>
              <h5>Rp. 74.000</h5>
            </section>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'otherMenus',
  data() {
    return {
      data: 3
    }
  }
}
</script>
<style scoped>
.card_images .card-img-left {
  min-width: 171px;
  height: 171px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 45%;
}
.card {
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
.card-body {
  padding: 0 0 0 5px;
}
.desc_Food {
  font-family: 'Poppins', sans-serif;
}
.desc_Food h2 {
  font-size: 18px;
  font-weight: 700;
  color: #d01010;
  margin-bottom: 5px;
}
.desc_Food p {
  font-size: 12px;
  height: 100px;
  margin-bottom: 0;
}
.desc_Food h5 {
  font-weight: 700;
  font-size: 18px;
}
.title_menus h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #555555;
  font-size: 20px;
}
@media (max-width: 991px) {
  .card_images .card-img-left {
    min-width: 131px;
    height: 171px;
  }
}

@media (max-width: 576px) {
  .card_images .card-img-left {
    min-width: 171px;
    height: 171px;
  }
}
@media (max-width: 393px) {
  .card_images .card-img-left {
    min-width: 131px;
    height: 171px;
  }
}
</style>
