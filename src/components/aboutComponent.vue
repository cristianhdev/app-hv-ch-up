<template>
  <div class="about mx-auto">
    <b-container fluid="md">
      <b-row>
        <b-col sm="12" md="12" lg="6">
          <div
            id="about-my"
            class="animate__animated animate__delay-slower animate__backInLeft"
          >
            <div id="imagen1" class="mark-photo">
              <img src="../assets/HV_cv.jpeg" class="img-fluid" />
            </div>
            <div id="imagen2" class="mark-photo d-xl-none">
              <div v-if="loadingImage">
                <b-skeleton type="avatar" class="avatar-size"></b-skeleton>
              </div>
              <div v-else>
                <img src="../assets/HV_cv-perfil-rep.png" class="img-fluid" />
              </div>
            </div>
          </div>
        </b-col>

        <b-col sm="12" md="12" lg="6">
          <!--  <button @click="mostrar=!mostrar">Mostrar</button> -->
          <article id="about" class="pb-5" v-if="!mostrar">
            <div v-if="loadingImage">
              <p
                class="title-dark text-center mx-auto animate__animated animate__delay-slower animate__fadeInDown"
              >
                <b-skeleton
                  animation="Fade"
                  width="50%"
                >
                </b-skeleton>
              </p>
           
            </div>
            <div v-else>
              <p
                class="title-dark text-center mx-auto animate__animated animate__delay-slower animate__fadeInDown"
              >
                SOBRE MI
              </p>
            </div>
               <hr
              class="animate__animated animate__delay-1s animate__fadeIn"
              style="text-left;width:100%"
            />
            <div v-if="loadingImage">
              <p>
                <b-skeleton
                  animation="Fade"
                  v-for="(i, n, key) in 9"
                  :key="key"
                  width="100%"
                   class="animate__animated animate__delay-1s animate__flipInX"
                >
                </b-skeleton>
              </p>
              <p>
                <b-skeleton
                  animation="Fade"
                  v-for="(i, n, key) in 9"
                  :key="key"
                  width="100%"
                  class="animate__animated animate__delay-1s animate__flipInX"
                >
                </b-skeleton>
              </p>
            </div>
            <div v-else>
              <p
                class="text-justify animate__animated animate__delay-1s animate__flipInX"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quasi maiores dicta ut, perferendis officia sapiente repudiandae
                illo totam dignissimos tempora minima. Commodi porro architecto
                quisquam provident sunt, voluptates at. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Nulla, quasi maiores dicta
                ut, perferendis officia sapiente repudiandae illo totam
                dignissimos tempora minima. Commodi porro architecto quisquam
                provident sunt, voluptates at.
              </p>

              <p
                class="text-justify animate__animated animate__delay-2s animate__flipInX"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quasi maiores dicta ut, perferendis officia sapiente repudiandae
                illo totam dignissimos tempora minima. Commodi porro architecto
                quisquam provident sunt, voluptates at. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Nulla, quasi maiores dicta
                ut, perferendis officia sapiente repudiandae illo totam
                dignissimos tempora minima. Commodi porro architecto quisquam
                provident sunt, voluptates at.
              </p>
            </div>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false,
      homePageData: [],
      loadingImage: true,
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.loadingImage = false;
    }, 1500);
  },
};
</script>

<style scoped >
.avatar-size {
  width: 244.047px !important;
  height: 227.062px !important;
}
.about {
  background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(167, 179, 203, 0.63) 86.76%
    ),
    #ffffff;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  padding: 5em 0px !important;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.mark-photo {
  position: relative;
  width: 365px;
  height: 478px;
  background: linear-gradient(180deg, #2ecfa8 0%, rgba(255, 255, 255, 0) 100%),
    rgba(147, 245, 192, 0.93);
  border-radius: 0px 200px 0px 198px;
}

#about-my img {
  position: relative;
  width: 270.99px;
  height: 360.38px;
  top: 52px;
  border-radius: 0px 144px;
}

.mark-photo {
  border-radius: 0px 200px 0px 198px;
}

@media (min-width: 1281px) {
  /*  .about {
    border: 45px solid red;
  } */
}

@media (min-width: 1025px) and (max-width: 1280px) {
  /* .about {
    border: 45px solid blue;
  } */
}

@media (min-width: 768px) and (max-width: 1024px) {
  /*  .about {
    border: 45px solid silver;
  } */
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .about {
    box-sizing: content-box;
    padding: 5em 0px;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  .mark-photo {
    margin: 0px auto;
    width: 87%;
    height: 34%;
    background: none;
  }

  #imagen1 {
    display: none;
  }

  #imagen2 {
    margin-bottom: 12px;
  }

  #about-my img {
    top: -2px;
    width: 90%;
    height: 100%;
    border-radius: 100%;

    background: linear-gradient(180deg, #2ecfa8 0%, rgba(255, 255, 255, 0) 100%),
      rgba(147, 245, 192, 0.93);
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  /* .about {
    border: 45px solid green;
  } */
}

@media (min-width: 320px) and (max-width: 480px) {
  .about {
    box-sizing: content-box;
    padding: 5em 0px;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  #imagen1 {
    display: none;
  }

  .mark-photo {
    margin: 0px auto;
    width: 87%;
    height: 34%;
    background: none;
  }

  #about-my img {
    top: -2px;
    width: 90%;
    height: 100%;
    border-radius: 100%;

    background: linear-gradient(180deg, #2ecfa8 0%, rgba(255, 255, 255, 0) 100%),
      rgba(147, 245, 192, 0.93);
  }
}
</style>