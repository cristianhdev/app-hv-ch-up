<template>
  <div id="experience">
    <div class="img-background">
      <b-container fluid="lg">
        <b-row>
          <b-col cols="*">
            <b-row class="justify-content-center justify-content-md-start">
              <div class="mx-auto overlay">
                <h2
                  class="title mx-auto title-ligth animate__animated animate__fadeInUp"
                >
                  EXPERIENCIA
                  <div class="mx-auto">
                    <b-button
                      variant="primary"
                      class="mr-3"
                      href="#view"
                      size="sm"
                      to='/experiencia-container/0'
                      >SENA AGROINDUSTRIAL</b-button
                    >
                    <b-button
                      variant="primary"
                      class="mr-3"
                      href="#view"
                      size="sm"
                       to='/experiencia-container/6'
                      >SEOIMPACTO</b-button
                    >
                    <b-button
                      variant="primary"
                      class="mr-3"
                      href="#view"
                      size="sm"
                      >FREELANCE</b-button
                    >
                  </div>
                </h2>
              </div>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scope>
.img-background {
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: linear-gradient(
      0deg,
      rgba(73, 87, 98, 0.86) -13.97%,
      rgba(13, 13, 13, 0.28) 97.41%
    ),
    url("../assets/screen-job.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  background-position: 50% 50%;
}
</style>