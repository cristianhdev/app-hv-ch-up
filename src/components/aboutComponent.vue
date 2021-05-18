<template>
  <div class="about mx-auto">
    <b-container fluid="md">
      <b-row>
        <b-col sm="12" md="6" lg="6">
          <div
            id="about-my"
            class="animate__animated animate__delay-slower animate__backInLeft"
          >
            <div class="mark-photo 	d-none d-sm-block">
              <img src="../assets/HV_cv.jpeg" class=" img-fluid" />
            </div>
            <div class="mark-photo d-xl-none">
              <img src="../assets/HV_cv-perfil-rep.png" class=" img-fluid" />
            </div>
           
          </div>
        </b-col>

        <b-col sm="12" md="6" lg="6" >
          <!--  <button @click="mostrar=!mostrar">Mostrar</button> -->
          <article id="about"  class="pb-5" v-if="!mostrar">
            <p
              class="title-dark text-center mx-auto animate__animated animate__delay-slower animate__fadeInDown"
            >
              SOBRE MI
            </p>
             <hr class="animate__animated animate__delay-1s animate__fadeIn" style="text-left;width:100%">
            <p
              class="text-justify animate__animated animate__delay-1s animate__flipInX"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quasi maiores dicta ut, perferendis officia sapiente repudiandae
              illo totam dignissimos tempora minima. Commodi porro architecto
              quisquam provident sunt, voluptates at. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nulla, quasi maiores dicta ut,
              perferendis officia sapiente repudiandae illo totam dignissimos
              tempora minima. Commodi porro architecto quisquam provident sunt,
              voluptates at.
            </p>

            <p
              class="text-justify animate__animated animate__delay-2s animate__flipInX"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quasi maiores dicta ut, perferendis officia sapiente repudiandae
              illo totam dignissimos tempora minima. Commodi porro architecto
              quisquam provident sunt, voluptates at. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nulla, quasi maiores dicta ut,
              perferendis officia sapiente repudiandae illo totam dignissimos
              tempora minima. Commodi porro architecto quisquam provident sunt,
              voluptates at.
            </p>
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
    };
  },
};
</script>

<style scoped >
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
  padding: 9em 0px !important;
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

#about-my img {
  border-radius: 0px 144px;
}

.mark-photo {
  border-radius: 0px 200px 0px 198px;
}

@media (min-width: 320px) and (max-width: 480px) {
    

  .about {
    
    box-sizing: content-box;
    padding: 9em 0px;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  .mark-photo {
    margin: 29px 12px 29px 12px;
    width: 87%;
    height: 34%;
    background:none
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





