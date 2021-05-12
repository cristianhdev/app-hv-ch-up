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
                   <h3 class="subtitle-404">Lo sentimos pagina no encontrada</h3><br>
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

span {
    font-size:78px;
    text-shadow: 2px 1px 3px black;
}

.subtitle-404  {
  text-shadow: 2px 1px 3px black;
}
</style>