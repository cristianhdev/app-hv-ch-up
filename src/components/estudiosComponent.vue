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
        <b-row class="mt-5">
          <!--      <b-col sm="4"
            md="6"
            lg="4">
          
          </b-col -->>
          <b-col sm="8" md="8" lg="12">
            <b-row class="mt-5">
              <b-col
                v-for="(certificado, key) in certificados"
                :key="key"
                sm="2"
                md="2"
                lg="4"
                
              >
                <b-card
                  :title="certificado.title"
                  :img-src="certificado.imagenCertificado"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem"
                  class="mb-2"
                  data-aos="fade-in"
                >
                  <b-card-text>
                    {{ certificado.descripcion }}
                  </b-card-text>
                  <!-- 
            <b-button href="#" variant="primary">Go somewhere</b-button> -->
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </transition>
  </div>
</template>

<script>
import imagen1 from "../assets/TecnicoSena.png";
import imagen2 from "../assets/TecnicoEAM.png";
/* import imagen3 from '../assets/learnig.jpg' */
import imagen4 from "../assets/less.png";
import imagen5 from "../assets/Vue2.png";
import imagen6 from "../assets/React.png";
import imagen7 from "../assets/typescript.png";
import imagen8 from "../assets/photoshop.png";
import imagen9 from "../assets/htmlyjavascript.png";
import imagen10 from "../assets/certificado-git.jpg";
export default {
  data() {
    return {
      imagenesCertificado: {
        imagen1: imagen1,
      },
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
        {
          title: "Photoshop",
          descripcion: "Photoshop Domestika",
          imagenCertificado: imagen8,
        },
        {
          title: "Html y JavaScript",
          descripcion: "Html y JavaScript SENA",
          imagenCertificado: imagen9,
        },
        {
          title: "Git y GitHub",
          descripcion: "Git y GitHub 100% practico",
          imagenCertificado: imagen10,
        }
      ],
    };
  },
};
</script>

<style>
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
  position: relative;
}

@media screen {
  .img-background {
    min-width: 100%;
  }
}
</style>