<template lang="html">
    <div>
          <div class="img-background">
      <b-container fluid="lg">
        <b-row>
          <b-col cols="*">
            <b-row class="justify-content-center justify-content-md-start">
              <div class="mx-auto overlay">
                <h5
                  class="sub-title mx-auto animate__animated animate__fast animate__fadeInDown"
                >
                  FULLSTACK - DEVELOPER
                </h5>
                <h2
                  class="title-ligth mx-auto animate__animated animate__delay-slower animate__fadeInDown"
                >
                  CRISTIAN HERNANDEZ
                </h2>
                <!-- <count-down class="title-ligth mx-auto" :endDate="'05/19/2021 06:00 PM'"/> -->
                <!-- <b-button
                  href="#about-my"
                  class="btn-about mx-auto animate__animated animate__delay-delay-3s animate__fadeInDown"
                  variant="outline-secondary"
                  >Acerca de mi</b-button
                > -->
              </div>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
        <!-- <estudios/>
        <experiencia/> -->
    </div>
</template>

<script>
/*import About from '../components/aboutComponent'
 import Estudios from '../components/estudiosComponent'
import Experiencia from '../components/experienciaComponent' */
/* import countDown from '../components/countDown' */
export default {
  components: {
    //countDown
    /*About ,
        Estudios,
        Experiencia */
  },
};
</script>

<style scoped>
.img-background {
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
      0deg,
      rgba(73, 87, 98, 0.86) -13.97%,
      rgba(13, 13, 13, 0.28) 97.41%
    ),
    url("../assets/computer-background.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  background-position: 50% 50%;
}

@media (max-width: 768px) {
  .img-background {
    min-width: auto;
  }
  #about-my img {
    border-radius: 150%;
    border: 10px solid
      linear-gradient(180deg, #2ecfa8 0%, rgba(255, 255, 255, 0) 100%);
    top: 13px;
  }

  .mark-photo {
    border-radius: 100% 100%;
    width: 295px;
    height: 385px;
  }
}
</style>