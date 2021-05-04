<template>
  <div>
    <div class="img-background">
      <b-container fluid="lg">
        <b-row>
          <b-col cols="*">
            <b-row class="justify-content-center justify-content-md-start">
              <div class="mx-auto overlay">
                <h2
                  class="title mx-auto title-ligth animate__animated animate__jackInTheBox animate__delay-1s">
                  <span>404</span><br>
                   Lo sentimos pagina no encontrada<br>
                  <b-button variant="primary" to="/">Volver al inicio</b-button>
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
  /* background: linear-gradient(
      0deg,
      rgba(73, 87, 98, 0.86) -13.97%,
      rgba(13, 13, 13, 0.28) 97.41%
    ),
    url("../assets/screen-job.jpg") no-repeat center center; */
   background: rgb(2,0,36);
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(33,33,112,1) 35%, rgba(44,62,80,1) 100%);
  background-size: cover;
  position: relative;
  background-position: 50% 50%;
}

span {
    font-size:78px;
    text-shadow: 2px 1px 3px #3eee;
}
</style>