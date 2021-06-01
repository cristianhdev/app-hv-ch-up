<template>
    <transition name="animate__animated animate__fadeInUp">
      <div  class="img-background mx-auto">
        <b-container class="about">
          <b-row>
            <b-col sm="12" md="6" lg="12">
              <h2 class="text-left animate__animated animate__delay-slower animate__flipInX">
                Experiencia
              </h2>
              <hr style="text-left;width:100%" />
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="8" md="6" lg="6" class="animate__animated animate__delay-slower animate__fadeInLeft animate__delay-2s ">
              <splide :options="options">
                <splide-slide>
                  <Timeline
                    class="marckclassTime description-items animate__animated animate__delay-slower animate__fadeInLeft animate__delay-1s"
                    data-aos="fade-left"
                    :timeline-items="timelineItems1"
                    :message-when-no-items="messageWhenNoItems"
                  />
                </splide-slide>
                <splide-slide>
                  <Timeline
                    class="marckclassTime animate__animated animate__delay-slower animate__fadeInLeft animate__delay-1s"
                    data-aos="fade-left"
                    :timeline-items="timelineItems2"
                    :message-when-no-items="messageWhenNoItems"
                  />
                </splide-slide>
                <splide-slide>
                  <Timeline
                    class="marckclassTime animate__animated animate__delay-slower animate__fadeInLeft animate__delay-1s"
                    data-aos="fade-left"
                    :timeline-items="timelineItems3"
                    :message-when-no-items="messageWhenNoItems"
                  />
                </splide-slide>
                <splide-slide>
                  <Timeline
                    class="marckclassTime animate__animated animate__delay-slower animate__fadeInLeft animate__delay-1s"
                    data-aos="fade-left"
                    :timeline-items="timelineItems4"
                    :message-when-no-items="messageWhenNoItems"
                  />
                </splide-slide>
                <splide-slide>
                  <Timeline
                    class="marckclassTime animate__animated animate__delay-slower animate__fadeInLeft animate__delay-1s"
                    data-aos="fade-left"
                    :timeline-items="timelineItems5"
                    :message-when-no-items="messageWhenNoItems"
                  />
                </splide-slide>
                <splide-slide>
                  <Timeline
                    class="marckclassTime animate__animated animate__delay-slower animate__fadeInLeft animate__delay-1s"
                    data-aos="fade-left"
                    :timeline-items="timelineItems6"
                    :message-when-no-items="messageWhenNoItems"
                  />
                </splide-slide>
                <splide-slide>
                  <Timeline
                    class="marckclassTime animate__animated animate__delay-slower animate__fadeInLeft animate__delay-1s"
                    data-aos="fade-left"
                    :timeline-items="timelineItems7"
                    :message-when-no-items="messageWhenNoItems"
                  />
                </splide-slide>
                <splide-slide>
                  <Timeline
                  
                    class="marckclassTime  text-item-time animate__animated animate__delay-slower animate__fadeInLeft animate__delay-1s"
                    data-aos="fade-left"
                    :timeline-items="timelineItems8"
                    :message-when-no-items="messageWhenNoItems"
                  />
                </splide-slide>
                <template v-slot:controls>
                  <div class="splide__progress">
                    <div class="splide__progress__bar"></div>
                  </div>
                </template>
              </splide>
            </b-col>
            <b-col sm="4" md="4" lg="6" class="animate__animated animate__delay-slower animate__fadeInRight animate__delay-1s">
              
                <b-tabs
                  style="
                    padding: 12px;
                    box-shadow: 5px 5px 0px rgba(73, 87, 98, 0.8);
                  "
                  content-class="mt-2"
                  fill card
                >
                 
                  <b-tab title="¿Que realice?" active>
                    <b-row>
                       <b-col sm="12" md="12" lg="12" >
                      <h5>Presentaciónes de contenido dinamico</h5>
                       </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="4" md="2" lg="6"  >
                        <b-img :src="gits[1]" fluid class="pt-4" />
                      </b-col>
                      <b-col sm="4" md="2" lg="6" >
                         <b-img :src="gits[2]" fluid class="pt-4" />
                      </b-col>
                    </b-row>
                    <b-row class="mt-3">
                      <b-col sm="6" md="6" lg="6" class="pt-4">
                        <h5>Actividades interactivas</h5>
                        <b-img :src="gits[0]" fluid class="pt-4" />
                      </b-col>
                      <b-col sm="6" md="6" lg="6" class="pt-4">
                        <h5>Banners Animados (Gif's)</h5>
                        <b-img :src="gits[3]" fluid class="pt-4" />
                      </b-col>
                    </b-row>
                  </b-tab>
                   <b-tab title="Desafios" 
                    ><p class="animate__animated animate__fadeIn text-justify">
                      <span>{{ descriptions[slide].text }}</span>
                    </p></b-tab
                  >
                  <b-tab title="¿Que aprendi?">
                    <b-row>
                      <b-col sm="3" md="6" lg="12" >
                        <ul class="text-justify">
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem illum sequi fuga voluptates voluptas dolores nemo nostrum. Maiores recusandae distinctio molestiae dolorem ut non debitis quis amet aliquam facere?</li>
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem illum sequi fuga voluptates voluptas dolores nemo nostrum. Maiores recusandae distinctio molestiae dolorem ut non debitis quis amet aliquam facere?</li>
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem illum sequi fuga voluptates voluptas dolores nemo nostrum. Maiores recusandae distinctio molestiae dolorem ut non debitis quis amet aliquam facere?</li>
                        </ul>
                      </b-col>
                    </b-row>
                  </b-tab>
                </b-tabs>
            
            </b-col>
          </b-row>
        </b-container>
      </div>
    </transition>
</template>

<script>
import Material1 from "../assets/gifs/Material1.gif";
import Material2 from "../assets/gifs/Material2.gif";
import Material3 from "../assets/gifs/Material3.gif";
import Banner from "../assets/gifs/Banner1.gif";
import Background from "../assets/background-exp.jpg";
import Timeline from "timeline-vuejs";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Timeline,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        direction: "ttb",
        heightRatio: 0.9,
        width: "auto",
        perPage: 1,
        pagination:false,
        height:'600px',
        padding:{
          top:'57px'
        }
      },
      slide: 0,
      sliding: null,
      backgrounds: [Background],
      gits: [Material1, Material2, Material3, Banner],
      messageWhenNoItems: "There are not items",
      timelineItems1: [
        {
          from: new Date(2011, 11),
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
            "Prestación de servicios profesionales con el objetivo de desarrollar páginas Web de acuerdo a las necesidades del cliente, implementanto tecnologias informaticas.",
        },
      ],
      descriptions: [
        {
          text: ` Text1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.\n
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.`,
        },
        {
          text: ` Text2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.`,
        },
        {
          text: ` Text3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.`,
        },
        {
          text: ` Text4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.`,
        },
        {
          text: ` Text5: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.`,
        },
        {
          text: ` Text6: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.`,
        },
        {
          text: ` Text7: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.`,
        },
        {
          text: ` Text8: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.`,
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


.description-items{
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
</style>