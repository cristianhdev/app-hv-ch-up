<template>
  <transition name="animate__animated animate__fadeInUp">
    <div class="img-background mx-auto">
      <b-container class="about">
        <b-row>
          <b-col sm="12" md="6" lg="12">
            <h2
              class="
                text-left
                animate__animated animate__delay-slower animate__flipInX
              "
            >
              Experiencia
            </h2>
            <hr style="text-left;width:100%" />
          </b-col>
        </b-row>
        <b-row>
          <b-col
            sm="8"
            md="6"
            lg="12"
            class="
              animate__animated
              animate__delay-slower
              animate__fadeInLeft
              
            "
          > <!-- @splide:moved="onMounted" -->
            <splide @splide:move="onMounted" :options="options" >
              <splide-slide >
                <experiencia-textos :slider="slide" />
              </splide-slide>
              <splide-slide>
                 <experiencia-textos :slider="slide" />
              </splide-slide>
          
              <template v-slot:controls>
                <div class="splide__progress">
                  <div class="splide__progress__bar"></div>
                </div>
              </template>
            </splide>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </transition>
</template>

<script>
import Background from "../assets/background-exp.jpg";
/* import Timeline from "timeline-vuejs"; */
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import experienciaTextos from "@/components/experienciaTextoComponent";
export default {
  components: {
    Splide,
    SplideSlide,
    experienciaTextos,
  },
  data() {
    return {
      options: {
        rewind: true,
        perPage: 1,
        pagination: false,
        height: "auto",
        autoHeight:true,
        width: "auto"
      },
      slide: 0,
      sliding: null,
      backgrounds: [Background],
      messageWhenNoItems: "There are not items",
      timelineItems1: [
        {
          from: new Date(2011, 11),
          to: new Date(2011, 11),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Prestación de servicios profesionales para apoyar el proceso de línea de producción mediante el diseño y equipo adecuación didáctica y gráfica de recursos educativos de cursos de formación titulada y complementaria con mediación virtual y a distancia pertenecientes a la oferta educativa SENA en lo que relacionado con la programación, pruebas y ajustes de aplicativos, paginas web y demás Objetos Virtuales de Aprendizaje (OVAs).",
        },
      ],
      timelineItems2: [
        {
          from: new Date(2012, 3),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Prestación de servicios profesionales para apoyar el proceso de línea de producción mediante el diseño y equipo adecuación didáctica y gráfica de recursos educativos de cursos de formación titulada y complementaria con mediación virtual y a distancia pertenecientes a la oferta educativa SENA en lo que relacionado con la programación, pruebas y ajustes de aplicativos, paginas web y demás Objetos Virtuales de Aprendizaje (OVAs).",
        },
      ],
      timelineItems3: [
        {
          from: new Date(2013, 2),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Prestación de servicios profesionales para apoyar el proceso de línea de producción mediante el diseño y equipo adecuación didáctica y gráfica de recursos educativos de cursos de formación titulada y complementaria con mediación virtual y a distancia pertenecientes a la oferta educativa SENA en lo que relacionado con la programación, pruebas y ajustes de aplicativos, paginas web y demás Objetos Virtuales de Aprendizaje (OVAs).",
        },
      ],
      timelineItems4: [
        {
          from: new Date(2014, 1),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Prestación de servicios profesionales para apoyar el proceso de línea de producción mediante el diseño y equipo adecuación didáctica y gráfica de recursos educativos de cursos de formación titulada y complementaria con mediación virtual y a distancia pertenecientes a la oferta educativa SENA en lo que relacionado con la programación, pruebas y ajustes de aplicativos, paginas web y demás Objetos Virtuales de Aprendizaje (OVAs).",
        },
      ],
      timelineItems5: [
        {
          from: new Date(2015, 0),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Prestación de servicios profesionales para apoyar el proceso de línea de producción mediante el diseño y equipo adecuación didáctica y gráfica de recursos educativos de cursos de formación titulada y complementaria con mediación virtual y a distancia pertenecientes a la oferta educativa SENA en lo que relacionado con la programación, pruebas y ajustes de aplicativos, paginas web y demás Objetos Virtuales de Aprendizaje (OVAs).",
        },
      ],
      timelineItems6: [
        {
          from: new Date(2016, 1),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Prestación de servicios profesionales para apoyar el proceso de línea de producción mediante el diseño y equipo adecuación didáctica y gráfica de recursos educativos de cursos de formación titulada y complementaria con mediación virtual y a distancia pertenecientes a la oferta educativa SENA en lo que relacionado con la programación, pruebas y ajustes de aplicativos, paginas web y demás Objetos Virtuales de Aprendizaje (OVAs).",
        },
      ],
      timelineItems7: [
        {
          from: new Date(2017, 5),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Prestación de servicios profesionales para apoyar el proceso de línea de producción mediante el diseño y equipo adecuación didáctica y gráfica de recursos educativos de cursos de formación titulada y complementaria con mediación virtual y a distancia pertenecientes a la oferta educativa SENA en lo que relacionado con la programación, pruebas y ajustes de aplicativos, paginas web y demás Objetos Virtuales de Aprendizaje (OVAs).",
        },
      ],
      timelineItems8: [
        {
          from: new Date(2018, 7),
          title: "<b>SEOIMPACTO</b>",
          description:
            "Prestación de servicios profesionales con el objetivo de desarrollar páginas Web en HTML5, CSS, JAVASCRIPT y WORDPRESS de acuerdo a las necesidades del cliente, implementanto tecnologias informaticas.",
        },
      ],
    };
  },
  computed: {
    getIdParam() {
      console.log(this.$route.params.slider);
      return this.$route.params.slider;
    },
  },
  beforeMount() {},
  methods: {
    onMounted(splide,next,prev) {
      // do something
      console.log(next)
      console.log(prev)
      this.slide = next;
    },
    onItemTimeLine() {
      alert("item");
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.marckclassTime {
  /* background-color: RGBA(73, 87, 98, 0.7); */
  background-color: RGBA(73, 87, 98, 0.7);
  color: white;
  box-shadow: -5px 5px 0px white;
}

.description-items {
  font-weight: 100 !important;
  margin: 0 !important;
  font-size: 16px !important;
  text-align: justify !important;
  padding: 3px 12px !important;
}

/* .marckclassTime:hover {
  background-color: RGBA(73, 87, 98, 0.7);
  color:white;
  box-shadow: -5px 5px 0px white;
} */

.experience {
  background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(167, 179, 203, 0.63) 86.76%
    ),
    #ffffff;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  padding: 5em 0px !important;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.container-experiencia{
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: center;
    margin: 32px auto;
    padding: 11px;
}

.colum-experiencia{
  padding:5px 5px
}
</style>