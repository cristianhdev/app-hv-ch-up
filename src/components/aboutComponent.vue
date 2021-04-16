<template>
  <div class="about mx-auto">
    <b-container fluid="md">
      <b-row>
        <b-col sm="12" md="6" lg="6">
          <div id="about-my" class="animate__animated animate__delay-slower  animate__backInLeft">
            <div class="mark-photo d-none d-sm-block">
              <img src="../assets/HV_cv.jpeg" class="img-fluid" />
            </div>
            <div class="mark-photo d-lg-none d-none d-lg-block d-xl-none">
              <img src="../assets/HV_cv.jpeg" class="img-fluid" />
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <article id="about">
            <p
              class="title-dark mx-auto animate__animated animate__delay-slower animate__fadeInDown"
            >
              SOBRE MI
            </p>
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
      homePageData: [],
    };
  },
};
</script>

<style scoped >
.about {
  box-sizing: content-box;
  background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(167, 179, 203, 0.63) 86.76%
    ),
    #ffffff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  padding: 7em 0px !important;
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

#about-my,
#about {
  /* padding: 6em 0px; */
  vertical-align: middle;
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

@media only screen {
  .about {
    box-sizing: content-box;
    padding: 9em 0px;
    height: 70vh;
    overflow: hidden;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
}
</style>





