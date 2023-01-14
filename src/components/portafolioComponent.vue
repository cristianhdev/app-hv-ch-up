<template>
  <transition name="bounce">
    <div class="img-background mx-auto">
      <b-container>
        <b-row>
          <b-col sm="12" md="12" lg="12">
            <div>
              <h2 class="
                  text-left
                  animate__animated animate__delay-slower animate__flipInX
                ">
                Portafolio
                <hr style="text-left;width:100%" />
              </h2>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col id="slider" sm="12" md="12" lg="6">
            <div class="mx-auto mt-4 animate__animated animate__fadeInLeft">
              <splide @splide:moved="onMounted" :options="options">
                <splide-slide v-for="(imagPortafolio, key) in imagPortafolios" :key="key">
                  <div>
                    <b-img :src="imagPortafolio.img" thumbnail fluid :alt="imagPortafolio.descripcion"></b-img>
                  </div>
                </splide-slide>
                <template v-slot:controls>
                  <div class="splide__progress">
                    <div class="splide__progress__bar"></div>
                  </div>
                </template>
              </splide>
              <b-row>
                <b-col lg="12" class="text-center mb-2">
                  <div class="icons">
                    <div v-for="(icon, index, key) in imagPortafolios[
                      onPosicionSlider
                    ].icons" :key="key">
                      <div :id="`tooltip-target-${index}`">
                        <img placement="bottom" :src="icon.url" />
                        <b-tooltip :target="`tooltip-target-${index}`" triggers="hover">
                          {{ icon.text }}
                        </b-tooltip>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col id="slider" sm="12" md="12" lg="6">
            <div class="
                mx-auto
                mt-4
                text-justify
                animate__animated animate__fadeInRight
              ">
              <b-row>
                <b-col lg="12">
                  <portafolio-texto :posicion="onPosicionSlider" />
                </b-col>
                <div class="mx-auto">
                  <b-button style="background-color: #495762" class="mr-3 mt-3 mb-3"
                    :href="imagPortafolios[onPosicionSlider].url" target="_blank" size="sm"
                    v-if="imagPortafolios[onPosicionSlider].url != null">
                    <img class="btnIconS" placement="bottom" src="../assets/ico/globe-solid.svg" />IR A LA
                    PAGINA</b-button>
                  <b-button style="background-color: #495762" class="mr-3 mt-3 mb-3"
                    :href="imagPortafolios[onPosicionSlider].guihuburl" target="_blank" size="sm"
                    v-if="imagPortafolios[onPosicionSlider].guihuburl != null">
                    <img class="btnIconS" placement="bottom" src="../assets/ico/github-brands.svg" />GITHUB
                  </b-button>
                </div>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </transition>
</template>

<script>
//Paginas
import imgPlantosa from "../assets/pagina/Plantosas-cropt.png";
import imgSimbolosPatrios from "../assets/pagina/simbolos_patrios.png";
import imgConfiCafe from "../assets/pagina/confincafe-biometria.png";
import imgPlastering from "../assets/pagina/Plastering-cropt.png";
import imgRivera from "../assets/pagina/Rivera-cropt.png";
import imgOrizon from "../assets/pagina/OrizonMobile.png";
import imgNaturalWayu from "../assets/pagina/naturalwayu.png";
import imgAppPrestamos from "../assets/APPPrestamos.png";
//Icons
import imgHtml5 from "../assets/ico/html5-brands.svg";
import imgCss3 from "../assets/ico/css3-brands.svg";
import imgJs from "../assets/ico/js-square-brands.svg";
import imgVue from "../assets/ico/vuejs-brands.svg";
import imgWordpress from "../assets/ico/wordpress-brands.svg";
import imgFigma from "../assets/ico/figma-brands.svg";
import imgFirabese from "../assets/ico/firebase_icon_132390.svg";
import imgFramework7 from "../assets/ico/f7-icon.svg";
import imgAngular from "../assets/ico/angular-brands.svg";

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
          img: imgSimbolosPatrios,
          descripcion: "pagina1",
          url: "https://simbolospatrios.onrender.com",
          guihuburl: null,
          icons: [
            {
              url: imgHtml5,
              text: "HTML5",
            },
            {
              url: imgCss3,
              text: "CSS3",
            },
            {
              url: imgJs,
              text: "JS",
            },
          ],
        },
        {
          img: imgPlantosa,
          descripcion: "pagina2",
          url: "http://plantosas.com",
          guihuburl: null,
          icons: [
            {
              url: imgHtml5,
              text: "HTML5",
            },
            {
              url: imgCss3,
              text: "CSS3",
            },
            {
              url: imgJs,
              text: "JS",
            },
          ],
        },
        {
          img: imgOrizon,
          descripcion: "pagina3",
          url: "https://orizonmobile-56b43.web.app",
          guihuburl: "https://github.com/cristianh/OrizonMobileVue.git",
          icons: [
            {
              url: imgCss3,
              text: "CSS3",
            },
            {
              url: imgVue,
              text: "VUE3",
            },
            {
              url: imgFigma,
              text: "FIGMA",
            },
          ],
        },
        {
          img: imgNaturalWayu,
          descripcion: "pagina4",
          url: "https://naturalwayu.com",
          guihuburl: null,
          icons: [
            {
              url: imgWordpress,
              text: "Wordpress",
            },
            {
              url: imgCss3,
              text: "CSS3",
            },
            {
              url: imgJs,
              text: "JS",
            },
          ],
        },
        {
          img: imgPlastering,
          descripcion: "pagina5",
          url: "https://plastering.firebaseapp.com",
          guihuburl: null,
          icons: [
            {
              url: imgHtml5,
              text: "HTML5",
            },
            {
              url: imgCss3,
              text: "CSS3",
            },
            {
              url: imgJs,
              text: "JS",
            },
          ],
        },
        {
          img: imgRivera,
          descripcion: "pagina6",
          url: "https://proyectosseoimpacto.firebaseapp.com",
          guihuburl: null,
          icons: [
            {
              url: imgHtml5,
              text: "HTML5",
            },
            {
              url: imgCss3,
              text: "CSS3",
            },
            {
              url: imgJs,
              text: "JS",
            },
          ],
        },
        {
          img: imgAppPrestamos,
          descripcion: "pagina7",
          url: null,
          guihuburl: "https://github.com/cristianh/app-prestamos.git",
          icons: [
            {
              url: imgVue,
              text: "VueJS",
            },
            {
              url: imgCss3,
              text: "CSS3",
            },
            {
              url: imgFramework7,
              text: "Framework7",
            },
            {
              url: imgFirabese,
              text: "Firebase",
            },
          ],
        },
        {
          img: imgConfiCafe,
          descripcion: "pagina8",
          url: null,
          guihuburl: "null",
          icons: [
            {
              url: imgAngular,
              text: "Angular",
            },
            {
              url: imgCss3,
              text: "CSS3",
            },
            {
              url: imgFirabese,
              text: "Firebase",
            },
          ],
        }
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

    /* onArrowsMounted(splide, prev, next) {
      // do something

    }, */
  },
};
</script>

<style scope>
.btn-portafolio {
  background-color: rgba(147, 245, 192, 0.93);
}

.btnIconS {
  display: flex;
  padding: 0px;
  height: 1.3em;
  width: 25px;
  float: left;
  align-items: center;
  justify-content: center;
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