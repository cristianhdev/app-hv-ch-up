<template>
  <div>
    <div v-if="loading">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
    <div v-else>
      <b-tabs content-class="mt-2" fill card>
        <b-tab :title="descriptions[0].titulo" active>
          <hr />
          <b-row>
            <b-col sm="12" md="12" lg="6">
              <b-card img-top tag="article" class="
                mb-2
                marckclassTime
                extra-margin
                animate__animated
                animate__delay-slower
                animate__fadeIn
                animate__delay-1s
              ">
                <b-card-text>
                  <div class="text-left">
                    <span style="font-weight: 700; font-size: 18px">{{
                      descriptions[0].fecha_inicial +
                        " - " +
                        descriptions[0].fecha_final
                    }}</span><br />
                    <span style="font-size: 14px">{{ descriptions[0].years }} - Armenia</span><br />

                    <hr style="
                      width: 100%;
                      background-color: white;
                      display: inline-block;
                      margin: 0px !important;
                    " />
                    <br />
                  </div>

                  <span v-html="descriptions[0].text" class="text-justify"></span>
                </b-card-text>
              </b-card>
            </b-col>
            <b-col sm="12" md="12" lg="6">
              <b-card v-if="slider == 0" img-top tag="article" class="
                mb-2
                marckclassTime
                extra-margin
                animate__animated
                animate__delay-slower
                animate__fadeIn
                animate__delay-1s
              ">
                <b-card-text>
                  <b-row>
                    <b-col sm="12" md="12" lg="12">
                      <h5>Presentaciónes de contenido dinamico</h5>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="4" md="6" lg="6">
                      <b-img :src="gits[0].imgs[1]" fluid class="pt-4" responsive width="340px" />
                    </b-col>
                    <b-col sm="4" md="6" lg="6">
                      <b-img :src="gits[0].imgs[2]" fluid class="pt-4" responsive width="340px" />
                    </b-col>
                  </b-row>
                  <b-row class="mt-3">
                    <b-col sm="6" md="6" lg="6" class="pt-4" width="340px">
                      <h5>Actividades interactivas (Juegos)</h5>
                      <b-img :src="gits[0].imgs[0]" fluid class="pt-4" width="340px" />
                    </b-col>
                    <b-col sm="6" md="6" lg="6" class="pt-4">
                      <h5>Banners Animados (Gif's)</h5>
                      <b-img :src="gits[0].imgs[3]" fluid class="pt-4" width="340px" />
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab :title="descriptions[1].titulo">
          <b-row>
            <b-col sm="12" md="12" lg="6">
              <b-card img-top tag="article" class="
                mb-2
                marckclassTime
                extra-margin
                animate__animated
                animate__delay-slower
                animate__fadeIn
                animate__delay-1s
              ">
                <b-card-text>
                  <div class="text-left">
                    <span style="font-weight: 700; font-size: 18px">{{
                      descriptions[1].fecha_inicial +
                        " - " +
                        descriptions[1].fecha_final
                    }}</span><br />
                    <hr style="
                      width: 100%;
                      background-color: white;
                      display: inline-block;
                      margin: 0px !important;
                    " />
                    <br />
                    <span style="font-size: 14px">{{ descriptions[1].years }} - Armenia</span><br />


                  </div>

                  <span v-html="descriptions[1].text" class="text-justify"></span>
                </b-card-text>
              </b-card>
            </b-col>
            <b-col sm="12" md="12" lg="6">
              <b-card img-top tag="article" class="
                mb-2
                marckclassTime
                extra-margin
                animate__animated
                animate__delay-slower
                animate__fadeIn
                animate__delay-1s
              ">
                <b-card-text>
                  <b-row>
                    <b-col sm="12" md="12" lg="12">
                      <h5>Paginas Web (Html5 y Wordpress)</h5>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="4" md="6" lg="6">
                      <b-img :src="gits[1].imgs[0]" fluid class="pt-4" width="340px" />
                    </b-col>
                    <b-col sm="4" md="6" lg="6">
                      <b-img :src="gits[1].imgs[1]" fluid class="pt-4" width="340px" />
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>

        <b-tab :title="descriptions[2].titulo">
          <b-row>
            <b-col sm="12" md="12" lg="6">
              <b-card img-top tag="article" class="
            mb-2
            marckclassTime
            extra-margin
            animate__animated
            animate__delay-slower
            animate__fadeIn
            animate__delay-1s
          ">
                <b-card-text>
                  <div class="text-left">
                    <span style="font-weight: 700; font-size: 18px">{{
                      descriptions[2].fecha_inicial +
                        " - " +
                        descriptions[2].fecha_final
                    }}</span><br />
                    <span style="font-size: 14px">{{ descriptions[2].years }} - Armenia</span><br />

                    <hr style="
                  width: 100%;
                  background-color: white;
                  display: inline-block;
                  margin: 0px !important;
                " />
                    <br />
                  </div>
                  <div class="text-justify">
                    <span v-html="descriptions[2].text" />
                  </div>
                </b-card-text>
              </b-card>
            </b-col>
            <b-col sm="12" md="12" lg="6">
              <b-card img-top tag="article" class="
            mb-2
            marckclassTime
            extra-margin
            animate__animated
            animate__delay-slower
            animate__fadeIn
            animate__delay-1s
          ">
                <b-card-text>
                  <b-row>
                    <b-col sm="4" md="6" lg="12">
                      <h4>Actividades Interactivas</h4>
                    </b-col>
                    <b-col sm="4" md="6" lg="6">
                      <b-img :src="gits[2].imgs[0]" fluid class="pt-4" width="340px" />
                    </b-col>
                    <b-col sm="4" md="6" lg="6">
                      <b-img :src="gits[2].imgs[1]" fluid class="pt-4" width="340px" />
                    </b-col>
                    <b-col sm="4" md="6" lg="6">
                      <b-img :src="gits[2].imgs[2]" fluid class="pt-4" width="340px" />
                    </b-col>
                    <b-col sm="4" md="6" lg="6">
                      <b-img :src="gits[2].imgs[3]" fluid class="pt-4" width="340px" />
                    </b-col>

                  </b-row>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab :title="descriptions[3].titulo">
          <b-row>
            <b-col sm="12" md="12" lg="6">
              <b-card img-top tag="article" class="
            mb-2
            marckclassTime
            extra-margin
            animate__animated
            animate__delay-slower
            animate__fadeIn
            animate__delay-1s
          ">
                <b-card-text>
                  <div class="text-left">
                    <span style="font-weight: 700; font-size: 18px">{{
                      descriptions[3].fecha_inicial +
                        " - " +
                        descriptions[3].fecha_final
                    }}</span><br />
                    <span style="font-size: 14px">{{ descriptions[3].years }} - Armenia</span><br />

                    <hr style="
                  width: 100%;
                  background-color: white;
                  display: inline-block;
                  margin: 0px !important;
                " />
                    <br />
                  </div>
                  <div class="text-justify">
                    <span v-html="descriptions[3].text" />
                  </div>
                 
                </b-card-text>
              </b-card>
            </b-col>
            <b-col sm="12" md="12" lg="6">
              <b-card img-top tag="article" class="
            mb-2
            marckclassTime
            extra-margin
            animate__animated
            animate__delay-slower
            animate__fadeIn
            animate__delay-1s
          ">
                <b-card-text>
                  <b-row>

                    <b-col sm="4" md="6" lg="12">
                      <b-img :src="imagenBiometria" fluid class="pt-4" width="640px" height="500px" />
                    </b-col>


                  </b-row>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </div>

  </div>
</template>

<script>
import Material1S from "../assets/gifs/Material1.gif";
import Material2S from "../assets/gifs/Material2.gif";
import Material3S from "../assets/gifs/Material3.gif";
import BanneS from "../assets/gifs/Banner1.gif";
//Pages seoimpacto
import Material1SP from "../assets/pagina/PlantosasFullpage.png";
import Material2SP from "../assets/pagina/PlateringFullPage.png";
import Material3SP from "../assets/pagina/RiveraFullPage.png";
//Pages ColombianGame
import Material1CG from "../assets/pagina/arte_modelo_modernista.png";
import Material2CG from "../assets/pagina/conversion_de_unidades.png";
import Material3CG from "../assets/pagina/simbolos_patrios.png";
import Material4CG from "../assets/pagina/compaaraciondefracciones.png";

//IMAGEN
import imagenDasboad from "../assets/pagina/confincafe-biometria.png";
//Axios
import axios from 'axios'
export default {
  props: {
    slider: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    cantidadAños() {
      /* console.log(this.descriptions[this.slider].fecha_inicial.split(" "));
          console.log(this.descriptions[this.slider].fecha_final.split(" "));
          let years=Number(this.descriptions[this.slider].fecha_inicial.split(" ")[1])- Number(this.descriptions[this.slider].fecha_final.split(" ")[1]) */
      return true;
    },
  },
  data() {
    return {
      loading: true,
      gits: [
        {
          imgs: [Material1S, Material2S, Material3S, BanneS],
        },
        {
          imgs: [Material1SP, Material2SP, Material3SP],
        },
        {
          imgs: [Material1CG, Material2CG, Material3CG, Material4CG],
        },
      ],
      descriptions: [],
      imagenBiometria: imagenDasboad
    };
  },
  mounted() {
    axios.get(`${axios.defaults.baseURL}/descriptions`).then((res) => {
      this.descriptions = res.data
    }).finally(() => {
      this.loading = false
    });

  },
};
</script>

<style scope>
.marckclassTime {
  /* background-color: RGBA(73, 87, 98, 0.7); */
  background-color: RGBA(73, 87, 98, 0.7);
  color: white;
  box-shadow: -5px 5px 0px white;
}

.extra-margin {
  margin-left: 29px;
  margin-right: 29px;
}

@media (min-width: 320px) and (max-width: 480px) {

  /* CSS */
  .extra-margin {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>