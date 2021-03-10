<template>
  <section>
    <b-container>
      <div class="title_menus mt-2 d-md-flex align-items-center">
        <h4>Creamy Yakitori Pizza</h4>
        <h2 class="ml-auto">Rp. 54.000</h2>
      </div>
      <b-row>
        <b-col md="3">
          <section class="restoImages mt-2 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1559941003-4f656f95b734?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80"
              alt="images_resto"
            />
          </section>
        </b-col>
        <b-col md="9">
          <section class="desc_resto">
            <h2>Caffe Bro Bro Gore</h2>
            <h4><span>Open</span> (Mon - Sat, 09:00 - 21:00)</h4>
            <p>
              Jl. Soekarno-Hatta Km.8 RT 37, Batu Ampar, Kec. Balikpapan Utara,
              Kota Balikpapan, Kota Balikpapan, Kalimantan Timur
            </p>
          </section>
          <div class="rating__resto">
            <b-form-rating
              class="rating_review"
              show-value
              id="rating-inline"
              inline
              precision="2"
              color="#FCC400"
              value="4"
              readonly
            >
            </b-form-rating>
            <p>110 reviews</p>
          </div>
          <button type="button" class="py-2 px-5 btn_visitResto">Visit</button>
        </b-col>
      </b-row>
      <hr />
    </b-container>
  </section>
</template>
<script>
export default {
  name: 'menusInformation'
}
</script>
<style scoped>
.title_menus h4,
.title_menus h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 700;
}
.restoImages img {
  width: 100%;
  object-fit: cover;
  object-position: 45%;
  max-height: 300px;
  border-radius: 6px;
}
.desc_resto {
  max-height: 300px;
  font-family: 'Poppins', sans-serif;
}
.desc_resto h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
}
.desc_resto h4 span {
  color: #ff0000;
  font-size: 18px;
}
.desc_resto p {
  font-size: 14px;
  max-width: 60%;
}
.desc_resto h4 {
  font-size: 18px;
  margin-bottom: 5px;
}
.btn_visitResto {
  position: absolute;
  bottom: 0;
  border: 1px solid #d01010;
  background: #d01010;
  color: #ffffff;
  font-weight: 500;
  font-size: 17px;
  border-radius: 10px;
  right: 0;
}
.rating_review {
  position: absolute;
  top: 40%;
  background: transparent;
  font-size: 40px;
  border: none;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.rating__resto p {
  left: 0;
  right: 0;
  text-align: center;
  top: 74%;
  font-size: 14px;
  color: #777777;
  font-family: 'Poppins', sans-serif;
  position: absolute;
}
.rating_review:focus {
  box-shadow: none;
}
/deep/ .rating_review .b-rating-value {
  bottom: -30px;
  font-family: 'Poppins', sans-serif;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 20px;
  position: absolute;
}
@media (max-width: 991px) {
  .desc_resto p {
    font-size: 14px;
    max-width: 90%;
  }
  .title_menus h4,
  .title_menus h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    margin-bottom: 3px;
    font-weight: 700;
  }
  .desc_resto h2 {
    font-size: 20px;
    margin-top: 5px;
  }
  .desc_resto h4 span {
    font-size: 14px;
  }
  .desc_resto h4 {
    font-size: 14px;
  }
  .rating_review {
    font-size: 25px;
    margin-top: 10px;
    display: block;
  }
  .rating__resto p {
    top: 77%;
  }
  /deep/ .rating_review .b-rating-value {
    bottom: -15px;
    font-size: 17px;
  }
}
@media (max-width: 767px) {
  .restoImages img {
    max-height: 200px;
  }
  .title_menus h4,
  .title_menus h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    margin-bottom: 3px;
    font-weight: 700;
  }
  .desc_resto h2 {
    font-size: 20px;
    margin-top: 5px;
  }
  .desc_resto h4 span {
    font-size: 14px;
  }
  .desc_resto p {
    font-size: 14px;
    max-width: 100%;
  }
  .desc_resto h4 {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .desc_resto {
    font-family: 'Poppins', sans-serif;
  }
  .rating_review {
    position: unset;
    font-size: 30px;
    height: 0;
    margin-top: 10px;
    display: block;
    transform: translateX(52%);
  }
  .rating__resto p {
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    position: unset;
  }
  /deep/ .rating_review .b-rating-value {
    bottom: -45px;
    font-size: 20px;
  }
  .btn_visitResto {
    position: unset;
    display: block;
    margin: 0 auto;
  }
}
@media (max-width: 574px) {
  .rating_review {
    transform: translateX(40%);
  }
}
@media (max-width: 414px) {
  .rating_review {
    transform: translateX(24%);
  }
}
@media (max-width: 396px) {
  .rating_review {
    transform: translateX(20%);
  }
}
@media (max-width: 376px) {
  .rating_review {
    transform: translateX(16%);
  }
}
@media (max-width: 360px) {
  .rating_review {
    transform: translateX(14%);
  }
}
@media (max-width: 320px) {
  .rating_review {
    transform: translateX(10%);
  }
}
</style>
