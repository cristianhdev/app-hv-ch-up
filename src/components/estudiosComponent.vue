<template>
  <transition>
    <div class="img-background mx-auto">
      <b-container class="estudios">
        <b-row>
          <b-col sm="12" md="12" lg="12">
              <div v-if="loading">
              <estudio-skeleton></estudio-skeleton>
            </div>
            <div v-else>
              <h2
                class="text-left animate__animated animate__delay-slower animate__flipInX"
              >
                Estudios
                <hr style="text-left;width:100%">
              </h2>
            </div>
          </b-col>
        </b-row>
        <b-row>
        </b-row>
        <b-row class="mt-3">
          <b-col sm="8" md="12" lg="6">
            <div class="mx-auto" >
              <div v-if="loading">
                <b-skeleton-img
                  animation="fade"
                  no-aspectE
                  height="350px"
                ></b-skeleton-img>
              </div>
              <div v-else id="slider" class="animate__animated  animate__fadeInLeft">
                <splide  :options="options">
                  <splide-slide
                   
                    v-for="(certificado, key) in certificados"
                    :key="key"
                  >
                    <div>
                      <b-img
                        :src="certificado.imagenCertificado"
                        thumbnail fluid
                        :alt="certificado.descripcion"
                      ></b-img>
                    </div>
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
          <b-col sm="8" md="12" lg="6">
            <article id="skills" class="mx-auto animate__animated  animate__fadeInRight" >
              <div v-if="loading"></div>
              <div v-else>
                <div v-for="(skill, index, key) in skills" :key="key">
                  <div
                    @mouseenter="onAnimatedProgress(index)"
                    @mouseleave="offAnimatedProgress(index)"
                  >
                    <p
                      style="
                        text-aling: left;
                        text-align: left;
                        font-size: 14px;
                      "
                    >
                      {{ skill.nombre }}
                    </p>
                    <b-progress
                      :max="100"
                      show-progress
                      class="mx-auto"
                      :animated="skill.animated"
                    >
                      <b-progress-bar
                        variant="secondary"
                        :value="Number(skill.porcentaje)"
                      >
                        <span style="font-size: 14px">
                          {{ skill.porcentaje + "%" }}
                        </span>
                      </b-progress-bar>
                    </b-progress>
                  </div>
                  <br />
                </div>
              </div>
            </article>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </transition>
</template>

<script>
import background from "../assets/background.png";
import imagen1 from "../assets/TecnicoSena.png";
import imagen2 from "../assets/TecnicoEAM.png";
import imagen3 from '../assets/DMR.jpg'
import imagen4 from "../assets/less.png";
import imagen5 from "../assets/Vue2.png";
import imagen6 from "../assets/React.png";
import imagen7 from "../assets/typescript.png";
/* import imagen8 from "../assets/photoshop.png"; */
import imagen9 from "../assets/htmlyjavascript.png";
import imagen10 from "../assets/certificado-git.jpg";
import imagen11 from "../assets/linux-basic.png";
import imagen12 from "../assets/cetificacion-tenologias.png";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import estudioSkeleton from "@/components/estudioSkeletonComponent";
/* import SkillService from "../services/skillsservice"; */
export default {
  components: {
    Splide,
    SplideSlide,
    estudioSkeleton,
  },
  data() {
    return {
      skills: [
        { nombre: "HTML", porcentaje: 90, animated: false },
        { nombre: "CSS", porcentaje: 90, animated: false },
        { nombre: "Javascript", porcentaje: 90, animated: false },
        { nombre: "Node.js", porcentaje: 70, animated: false },
        { nombre: "Express.js", porcentaje: 70, animated: false },
        { nombre: "Vue(2-3).js", porcentaje: 90, animated: false },
        { nombre: "React", porcentaje: 60, animated: false },
        { nombre: "Typeorm", porcentaje: 70, animated: false },
        { nombre: "Bootstrap", porcentaje: 70, animated: false },
        { nombre: "Laravel", porcentaje: 50, animated: false },
      ],
      loading: false,
      skillService: null,
      imagenesCertificado: {
        imagen1: imagen1,
      },
      options: {
        rewind: true,
        lazyLoad: 'nearby',
        width: "auto",
        perPage: 1,
        gap: "4rem",
      },
      backgroundEstudio: background,
      certificados: [ 
        {
          title: "Tecnico Profesional",
          descripcion: "Desarrollo de Software EAM",
          imagenCertificado: imagen2,
        },
         {
          title: "Tecnico Profesional",
          descripcion: "Programación de Software SENA",
          imagenCertificado: imagen1,
        },
        {
          title: "Tecnico En Mantenimiento y Reparacion",
          descripcion: "Desarrollo de Software EAM",
          imagenCertificado: imagen3,
        },
        {
          title: "NDG Linux Essentials",
          descripcion: "NDG Linux UNHATCHED",
          imagenCertificado: imagen11,
        },
        {
          title: "Competencias laborales",
          descripcion: "Certificado competencias laborales",
          imagenCertificado: imagen12,
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
  methods: {
    onAnimatedProgress(index) {
      this.skills[index].animated = true;
    },
    offAnimatedProgress(index) {
      this.skills[index].animated = !this.skills[index].animated;
    },
  },
  computed: {},
  created() {
    //this.skillService = new SkillService();
    setTimeout(() => {
      this.loading = false;
    }, 3200);
  },
  mounted() {
    /* console.log(this.skillService);
    this.skillService.getAllSkills().then((res) => {
      res.map((skill) => {
        this.skills.push(skill);
      });
      setTimeout(() => {
        this.loading = false;
      }, 3200);
    }); */
  },
};
</script>

<style>
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

  #slider{
    margin-bottom:35px;
  }
}


</style>