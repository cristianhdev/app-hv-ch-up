<template>
  <div>
      <transition name="animate__animated animate__fadeInUp">
    <div id="view">
       
      <b-carousel
        id="carousel-1"
        v-model="slide"
        controls
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->

        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=366&grayscale&blur=4"
        >
          <Timeline
            class="marckclassTime animate__animated animate__delay-slower  animate__flipInX animate__delay-1s"
            data-aos="fade-left"
            :timeline-items="timelineItems1"
            :message-when-no-items="messageWhenNoItems"
          />
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=1&grayscale&blur=4"
        >
          <Timeline
            class="marckclassTime animate__animated animate__delay-slower  animate__flipInX animate__delay-1s"
            data-aos="fade-left"
            :timeline-items="timelineItems3"
            :message-when-no-items="messageWhenNoItems"
          />
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=180&grayscale&blur=4"
        >
          <Timeline
            class="marckclassTime animate__animated animate__delay-slower  animate__flipInX animate__delay-1s"
            data-aos="fade-left"
            :timeline-items="timelineItems4"
            :message-when-no-items="messageWhenNoItems"
          />
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=201&grayscale"
        >
          <Timeline
            class="marckclassTime animate__animated animate__delay-slower  animate__flipInX animate__delay-1s"
            data-aos="fade-left"
            :timeline-items="timelineItems5"
            :message-when-no-items="messageWhenNoItems"
          />
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=2&grayscale"
        >
          <Timeline
            class="marckclassTime animate__animated animate__delay-slower  animate__flipInX animate__delay-1s"
            data-aos="fade-left"
            :timeline-items="timelineItems6"
            :message-when-no-items="messageWhenNoItems"
          />
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=445&grayscale"
        >
          <Timeline
            class="marckclassTime animate__animated animate__delay-slower  animate__flipInX animate__delay-1s"
            data-aos="fade-left"
            :timeline-items="timelineItems7"
            :message-when-no-items="messageWhenNoItems"
          />
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=504&grayscale"
        >
          <Timeline
            class="marckclassTime animate__animated animate__delay-slower  animate__flipInX animate__delay-1s"
            data-aos="fade-left"
            :timeline-items="timelineItems8"
            :message-when-no-items="messageWhenNoItems"
          />
        </b-carousel-slide>
      </b-carousel>
    </div>
    <br />
    <!-- <h1 class="title-dark" data-aos="fade-left">Asi comienza mi aventura</h1> -->
    <b-container fluid="lg">
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="Desafios" active
            ><p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              impedit placeat esse beatae consequuntur, odit dolore facere sit
              quisquam porro vero libero, facilis deserunt cumque exercitationem
              laboriosam reiciendis dolores modi. log Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Maxime dolorum et similique
              esse nobis libero assumenda ipsa, quod blanditiis at laboriosam!
              Cupiditate officia fugit corporis repellendus voluptatibus ipsa,
              consectetur beatae.
            </p></b-tab
          >
          <b-tab title="¿Que aprendi?">
            <b-row>
              <b-col sm="4" md="6" lg="6" pt-5>
                   {{getIdParam}}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus totam hic repudiandae aperiam corrupti ex ad in nulla
                molestiae ipsa, quas similique, autem earum quae exercitationem
                architecto? Earum, dolores ratione! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Accusamus totam hic repudiandae
                aperiam corrupti ex ad in nulla molestiae ipsa, quas similique,
                autem earum quae exercitationem architecto? Earum, dolores
                ratione! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Accusamus totam hic repudiandae aperiam corrupti ex ad in
                nulla molestiae ipsa, quas similique, autem earum quae
                exercitationem architecto? Earum, dolores ratione! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Accusamus totam hic
                repudiandae aperiam corrupti ex ad in nulla molestiae ipsa, quas
                similique, autem earum quae exercitationem architecto? Earum,
                dolores ratione! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusamus totam hic repudiandae aperiam
                corrupti ex ad in nulla molestiae ipsa, quas similique, autem
                earum quae exercitationem architecto? Earum, dolores ratione!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus totam hic repudiandae aperiam corrupti ex ad in nulla
                molestiae ipsa, quas similique, autem earum quae exercitationem
                architecto? Earum, dolores ratione! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Accusamus totam hic repudiandae
                aperiam corrupti ex ad in nulla molestiae ipsa, quas similique,
                autem earum quae exercitationem architecto? Earum, dolores
                ratione!
              </b-col>
              <b-col sm="4" md="6" lg="6" pt-5>
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="100"
                >
                  <img
                    :src="gits[1]"
                    class="pt-5 ml-5 img-responsive"
                    width="350px"
                  />
                </div>
                <br />
                <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="200"
                >
                  <img
                    :src="gits[0]"
                    data-aos="zoom-out-up"
                    class="pt-5 mr-5 img-responsive"
                    width="350px"
                  />
                </div>
                <br />
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="300"
                >
                  <img
                    :src="gits[2]"
                    data-aos="zoom-out-up"
                    class="pt-5 ml-5 img-responsive"
                    width="350px"
                  />
                </div>
                <br />
                <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="400"
                >
                  <img
                    :src="gits[3]"
                    data-aos="zoom-out-up"
                    class="pt-5 mr-5 img-responsive"
                    width="350px"
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </div>

      <!--   <b-row>
        <b-col sm="4" md="6" lg="12"> </b-col>

        <b-col sm="4" md="6" lg="6">
          <Timeline
            data-aos="fade-left"
            :timeline-items="timelineItems1"
            :message-when-no-items="messageWhenNoItems"
          />
          <Timeline
            data-aos="fade-left"
            :timeline-items="timelineItems2"
            :message-when-no-items="messageWhenNoItems"
          />
          <Timeline
            data-aos="fade-left"
            :timeline-items="timelineItems3"
            :message-when-no-items="messageWhenNoItems"
          />
          <Timeline
            data-aos="fade-left"
            :timeline-items="timelineItems4"
            :message-when-no-items="messageWhenNoItems"
          />
          <Timeline
            data-aos="fade-left"
            :timeline-items="timelineItems5"
            :message-when-no-items="messageWhenNoItems"
          />
          <Timeline
            data-aos="fade-left"
            :timeline-items="timelineItems6"
            :message-when-no-items="messageWhenNoItems"
          />
          <Timeline
            data-aos="fade-left"
            :timeline-items="timelineItems7"
            :message-when-no-items="messageWhenNoItems"
          />
          <Timeline
            data-aos="fade-left"
            :timeline-items="timelineItems8"
            :message-when-no-items="messageWhenNoItems"
          />
        </b-col>
        
      </b-row> -->
    </b-container>
      </transition>
  </div>
</template>

<script>
import Material1 from "../assets/gifs/Material1.gif";
import Material2 from "../assets/gifs/Material2.gif";
import Material3 from "../assets/gifs/Material3.gif";
import Banner from "../assets/gifs/Banner1.gif";
import Background from "../assets/background-exp.jpg";
import Timeline from "timeline-vuejs";
export default {
  components: {
    Timeline,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      backgrounds:[Background],
      gits: [Material1, Material2, Material3, Banner],
      messageWhenNoItems: "There are not items",
      timelineItems1: [
        {
          from: new Date(2011, 11),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
      timelineItems2: [
        {
          from: new Date(2012, 3),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
      timelineItems3: [
        {
          from: new Date(2013, 2),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
      timelineItems4: [
        {
          from: new Date(2014, 1),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
      timelineItems5: [
        {
          from: new Date(2015, 0),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
      timelineItems6: [
        {
          from: new Date(2016, 1),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
      timelineItems7: [
        {
          from: new Date(2017, 5),
          title: "<b>SENA AGROINDUSTRIAL QUINDIO</b>",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
      timelineItems8: [
        {
          from: new Date(2018, 7),
          title: "<b>SEOIMPACTO</b>",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
        },
      ],
      /* {
        from: new Date(2016, 1),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2016, 6),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2012, 1),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      } */
      //]
    };
  },
  computed: {
      getIdParam(){
          console.log(this.$route.params.slider);
          return this.$route.params.slider
      }
  },
  beforeMount() {
     
  },
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
    background-color: rgba(0, 0, 0, 0.7);
    
    box-shadow:5px 5px 0px white;
}
</style>