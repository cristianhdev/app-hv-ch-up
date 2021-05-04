<template>
  <div id="portafolio">
    <div class="img-background">
      <b-container fluid="lg">
        <b-row>
          <b-col cols="*">
            <b-row class="justify-content-center justify-content-md-start">
              <div class="mx-auto overlay">
                <h2
                  class="title mx-auto title-ligth animate__animated animate__fadeInUp"
                >
                  PORTAFOLIO<br />
                  <div class="mx-auto">
                  <b-button variant="primary" @click="stateShowFrame=true,position=0" class="mr-3" href="#view" size="sm"
                    >PLANTOSA.SA</b-button
                  >
                  <b-button variant="primary" @click="stateShowFrame=true,position=1" class="mr-3" href="#view" size="sm"
                    >RIVERA ROOFING</b-button
                  >
                  <b-button variant="primary" @click="stateShowFrame=true,position=2" class="mr-3" href="#view" size="sm"
                    >PLASTERING</b-button
                  >
                  </div>
                </h2>
              </div>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <div id="view">
        <iframe v-if="stateShowFrame" :src="iframeUrls[position].url" width="100%" height="600px" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            position:0,
            iframeUrls:[
                {url:'http://plantosas.com'},
                {url:'https://proyectosseoimpacto.firebaseapp.com'},
                {url:'https://plastering.firebaseapp.com'}
            ],
            stateShowFrame:false
        }
    },
    
}
</script>

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
    url("../assets/portafolio.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  background-position: 50% 50%;
}
</style>