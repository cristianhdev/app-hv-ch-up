<template>
  <div id="studing">
    <div class="img-background">
      <b-container fluid="lg">
        <b-row>
          <b-col cols="*">
            <b-row class="justify-content-center justify-content-md-start">
              <div class="mx-auto overlay">
                <h2
                  class="title mx-auto title-ligth animate__animated animate__fadeInUp"
                >
                  ESTUDIOS
                </h2>
              </div>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <transition>
      <b-container>
        <br />
        <b-row class="mt-3 mb-5">
          <b-col sm="8" md="8" lg="4">
            <div v-if="loading">
              <b-skeleton animation="fade" width="50%"></b-skeleton>
            </div>
            <div v-else>
               <h2
              style="text-align: left"
              class="animate__animated animate__delay-slower animate__flipInX"
            >
              Skills
            </h2>
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col sm="8" md="8" lg="6">
            <article id="skills" class="mx-auto">
              <div v-if="loading">
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <br />
                <p><b-skeleton animation="fade" width="50%"></b-skeleton></p>
                <b-skeleton animation="fade" width="100%"></b-skeleton>
              </div>
              <div v-else>
                <div v-for="(skill, index, key) in skills" :key="key">
                  <p
                    style="text-aling: left; text-align: left; font-size: 14px"
                  >
                    {{ skill.nombre }}
                  </p>
                  <b-progress :max="100" show-progress class="mx-auto">
                    <b-progress-bar
                      variant="secondary"
                      :value="Number(skill.porcentaje)"
                    >
                      <span style="font-size: 14px">
                        {{ skill.porcentaje + "%" }}
                      </span>
                    </b-progress-bar>
                  </b-progress>
                  <br />
                </div>
              </div>
            </article>
          </b-col>
          <b-col sm="8" md="8" lg="6">
            <div class="mx-auto" data-aos="fade-left">
              <div v-if="loading"> 
                <b-skeleton-img animation="fade" no-aspect height="350px"></b-skeleton-img>
              </div>
              <div v-else>
                 <splide>
                <splide-slide
                  v-for="(certificado, key) in certificados"
                  :key="key"
                >
                  <img :src="certificado.imagenCertificado" />
                </splide-slide>
                <template v-slot:controls>
                  <div class="splide__progress">
                    <div class="splide__progress__bar"></div>
                  </div>
                </template>
              </splide>
              </div>
              
             
            </div>
            <!-- <b-col
                v-for="(certificado, key) in certificados"
                :key="key"
                sm="2"
                md="2"
                lg="6"
              >
                <b-card
                  :title="certificado.title"
                  :img-src="certificado.imagenCertificado"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 16rem"
                  class="mb-2"
                  data-aos="fade-in"
                >
                  <b-card-text>
                    {{ certificado.descripcion }}
                    <font-awesome-icon icon="user-secret" />
                 
                  </b-card-text>
           
                </b-card>
              </b-col> -->
          </b-col>
        </b-row>
      </b-container>
    </transition>
    <br />
    <br />
  </div>
</template>

<script>
import background from "../assets/background.png";
import imagen1 from "../assets/TecnicoSena.png";
import imagen2 from "../assets/TecnicoEAM.png";
/* import imagen3 from '../assets/learnig.jpg' */
import imagen4 from "../assets/less.png";
import imagen5 from "../assets/Vue2.png";
import imagen6 from "../assets/React.png";
import imagen7 from "../assets/typescript.png";
/* import imagen8 from "../assets/photoshop.png"; */
import imagen9 from "../assets/htmlyjavascript.png";
import imagen10 from "../assets/certificado-git.jpg";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import SkillService from "../services/skillsservice";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      skills: [],
      loading: true,
      skillService: null,
      imagenesCertificado: {
        imagen1: imagen1,
      },
      backgroundEstudio: background,
      certificados: [
        {
          title: "Tecnico Profesional",
          descripcion: "Programación de Software SENA",
          imagenCertificado: imagen1,
        },
        {
          title: "Tecnico Profesional",
          descripcion: "Desarrollo de Software EAM",
          imagenCertificado: imagen2,
        },
        {
          title: "Vue2.js",
          descripcion: "Introduccion a las Web apps",
          imagenCertificado: imagen5,
        },
        {
          title: "React.js",
          descripcion: "Aprender React.js",
          imagenCertificado: imagen6,
        },
        {
          title: "Typescript",
          descripcion: "Aprende Typescript de 0 a 100",
          imagenCertificado: imagen7,
        },
        {
          title: "Less",
          descripcion: "Less de 0 a experto",
          imagenCertificado: imagen4,
        },
        /* {
          title: "Photoshop",
          descripcion: "Photoshop Domestika",
          imagenCertificado: imagen8,
        }, */
        {
          title: "Html y JavaScript",
          descripcion: "Html y JavaScript SENA",
          imagenCertificado: imagen9,
        },
        {
          title: "Git y GitHub",
          descripcion: "Git y GitHub 100% practico",
          imagenCertificado: imagen10,
        },
      ],
    };
  },
  computed: {},
  created() {
    this.skillService = new SkillService();
  },
  mounted() {
    console.log(this.skillService);
    this.skillService.getAllSkills().then((res) => {
      res.map((skill) => {
        this.skills.push(skill);
      });
      setTimeout(() => {
        this.loading = false;
      }, 3200);
    });
  },
};
</script>

<style>
.container-flex {
  margin: -23px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.img-background {
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(
      0deg,
      rgba(73, 87, 98, 0.86) -13.97%,
      rgba(13, 13, 13, 0.28) 97.41%
    ),
    url("../assets/learnig.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen {
  .img-background {
    min-width: 100%;
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  /* CSS */
  #skills {
    column-count: 1;
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  /* CSS */
  #skills {
    column-count: 1;
  }
}

#skills {
  column-count: 2;
}
</style>