<template>
  <transition name="bounce">
    <div class="img-background mx-auto">
      <b-container>
        <b-row>
          <b-col sm="12" md="12" lg="12">
            <div>
              <h2
                class="text-left animate__animated animate__delay-slower animate__flipInX"
              >
                Portafolio
                <hr style="text-left;width:100%" />
              </h2>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col id="slider" sm="12" md="12" lg="6">
            <div class="mx-auto mt-3 animate__animated animate__fadeInLeft">
              <!-- <FsLightbox
                      :toggler="toggler"
                      :sources="[
                        'images/random-image.jpg',
                        'https://i.imgur.com/fsyrScY.jpg',
                        'https://www.youtube.com/watch?v=xshEZzpS4CQ',
                        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                      ]"
                    /> -->
              <splide
                @splide:moved="onMounted"
                @splide:arrows:mounted="onArrowsMounted"
                :options="options"
              >
                <splide-slide
                  v-for="(imagPortafolio, key) in imagPortafolios"
                  :key="key"
                >
                  <div>
                    <b-img
                      :src="imagPortafolio.img"
                      thumbnail
                      fluid
                      :alt="imagPortafolio.descripcion"
                    ></b-img>
                  </div>
                </splide-slide>
                <template v-slot:controls>
                  <div class="splide__progress">
                    <div class="splide__progress__bar"></div>
                  </div>
                </template>
              </splide>
                  <b-button
                    @click="(stateShowFrame = true), (position = 0)"
                    style="background-color: #495762"
                    class="mr-3 mt-3 mb-3"
                    :href="imagPortafolios[onPosicionSlider].url"
                    target="_blank"
                    size="sm"
                    >IR A LA PAGINA</b-button>
                    <b-button
                    @click="(stateShowFrame = true), (position = 0)"
                    style="background-color: #495762"
                    class="mr-3 mt-3 mb-3"
                    :href="imagPortafolios[onPosicionSlider].url"
                    target="_blank"
                    size="sm"
                    >GITHUB</b-button>
            </div>
          </b-col>
          <b-col id="slider" sm="12" md="12" lg="6">
            <div
              class="mx-auto text-justify animate__animated animate__fadeInRight"
            >
              <b-row>
                <b-col lg="12">
                  <portafolio-texto :posicion="onPosicionSlider" />
                </b-col>
                <b-col lg="12" class="text-center">
                  <div class="icons">
                    <template>
                      <div id="tooltip-target-1">
                        <img
                          placement="bottom"
                          src="../assets/ico/html5-brands.svg"
                        />
                        <b-tooltip target="tooltip-target-1" triggers="hover">
                          HTML5
                        </b-tooltip>
                      </div>
                    </template>
                    <template>
                      <div id="tooltip-target-2">
                        <img src="../assets/ico/css3-brands.svg" />
                        <b-tooltip target="tooltip-target-2" triggers="hover">
                          CSS3
                        </b-tooltip>
                      </div>
                    </template>

                    <img src="../assets/ico/js-square-brands.svg" />
                  </div>
                  <br />
                  <br />
                  <!-- <b-button
                    variant="primary"
                    @click="(stateShowFrame = true), (position = 1)"
                    class="mr-3"
                    href="#view"
                    size="sm"
                    >RIVERA ROOFING</b-button
                  > -->
                  <!-- <b-button
                    variant="primary"
                    @click="(stateShowFrame = true), (position = 2)"
                    class="mr-3"
                    href="#view"
                    size="sm"
                    >PLASTERING</b-button
                  > -->
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <div id="view">
        <iframe
          v-if="stateShowFrame"
          :src="iframeUrls[position].url"
          width="100%"
          height="600px"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </transition>
</template>

<script>
import imgPlantosa from "../assets/pagina/Plantosas-cropt.png";
import imgPlastering from "../assets/pagina/Plastering-cropt.png";
import imgRivera from "../assets/pagina/Rivera-cropt.png";
/* import imgPlantosa from "../assets/pagina/Plantosas.com.png"; */
import portafolioTexto from "../components/portafolioTextoComponent";
/* import FsLightbox from "fslightbox-vue"; */
export default {
  components: {
    portafolioTexto,
    /* FsLightbox,*/
  },
  data() {
    return {
      toggler: false,
      posicionSlide: 0,
      options: {
        type: "fade",
        rewind: true,
        width: "auto",
        perPage: 1,
        gap: "4rem",
      },
      imagPortafolios: [
        {
          img: imgPlantosa,
          descripcion: "pagina1",
          url: "http://plantosas.com",
        },
        {
          img: imgPlastering,
          descripcion: "pagina2",
          url: "https://plastering.firebaseapp.com",
        },
        {
          img: imgRivera,
          descripcion: "pagina3",
          url: "https://proyectosseoimpacto.firebaseapp.com",
        },
      ],
      stateShowFrame: false,
    };
  },
  computed: {
    onPosicionSlider() {
      return this.posicionSlide;
    },
  },
  methods: {
    onMounted(splide) {
      // do something
      this.posicionSlide = splide.index;
    },

    onArrowsMounted(splide, prev, next) {
      // do something
      console.log(splide, prev, next);
    },
  },
};
</script>

<style scope>
.btn-portafolio {
  background-color: rgba(147, 245, 192, 0.93);
}

#slider {
  margin-top: 2%;
}

.icons {
  display: flex;
  width: 100%;
  margin-top: 2%;
  align-items: center;
  text-align: center;
  justify-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.icons img {
  width: 30px;
}
</style>