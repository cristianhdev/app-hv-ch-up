<template>
  <div id="portafolio">
    <div class="img-background-portafolio">
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
                  <b-button @click="stateShowFrame=true,position=0" variant="primary" class="mr-3" href="#view" size="sm"
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
.btn-portafolio{
  background-color:
    rgba(147, 245, 192, 0.93)
}
</style>