<template>
  <div id="experience">
    <div class="img-background">
      <b-container fluid="lg">
        <b-row>
          <b-col cols="*" >
            <b-row class="justify-content-center justify-content-md-start">
              <div class="mx-auto overlay">
                <h2 class="title mx-auto title-ligth animate__animated animate__fadeInUp">EXPERIENCIA</h2>
              </div>
            </b-row>
          </b-col>
         
        </b-row>
      </b-container>
    </div>
    <br>
    <!-- <h1 class="title-dark" data-aos="fade-left">Asi comienza mi aventura</h1> -->
    <b-container fluid="lg">
      <b-row>
        <b-col sm="4" md="6" lg="12">
           
        </b-col>
        
        <b-col sm="4" md="6" lg="6">
           <Timeline
           data-aos="fade-left"
    :timeline-items="timelineItems1"
    :message-when-no-items="messageWhenNoItems"/>
           <Timeline
           data-aos="fade-left"
    :timeline-items="timelineItems2"
    :message-when-no-items="messageWhenNoItems"/>
     <Timeline
           data-aos="fade-left"
    :timeline-items="timelineItems3"
    :message-when-no-items="messageWhenNoItems"/>
     <Timeline
           data-aos="fade-left"
    :timeline-items="timelineItems4"
    :message-when-no-items="messageWhenNoItems"/>
      <Timeline
           data-aos="fade-left"
    :timeline-items="timelineItems5"
    :message-when-no-items="messageWhenNoItems"/>
      <Timeline
           data-aos="fade-left"
    :timeline-items="timelineItems6"
    :message-when-no-items="messageWhenNoItems"/>
    <Timeline
           data-aos="fade-left"
    :timeline-items="timelineItems7"
    :message-when-no-items="messageWhenNoItems"/>
        </b-col>
        <b-col sm="4" md="6" lg="6">
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-delay="100"> 
           <img :src="gits[1]"  class=" pt-5 ml-5 img-responsive" width="350px">
          </div>
           <br>
            <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-delay="200"> 
           <img :src="gits[0]" data-aos="zoom-out-up" class="pt-5  mr-5 img-responsive" width="350px">
            </div>
           <br>
            <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-delay="300"> 
           <img :src="gits[2]" data-aos="zoom-out-up" class="pt-5  ml-5 img-responsive" width="350px">
            </div>
           <br>
            <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-delay="400"> 
            <img :src="gits[3]" data-aos="zoom-out-up" class=" pt-5 mr-5 img-responsive" width="350px">
            </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
 import Material1 from "../assets/gifs/Material1.gif";
 import Material2 from "../assets/gifs/Material2.gif";
 import Material3 from "../assets/gifs/Material3.gif";
 import Banner from "../assets/gifs/Banner1.gif";
 import Timeline from 'timeline-vuejs'
export default {
    components: {
      Timeline
  },
  data() {
    return {
    gits:[Material1,Material2,Material3,Banner],
    messageWhenNoItems: 'There are not items',
    timelineItems1: [
      {
        from: new Date(2011, 11),
        title: 'SENA AGROINDUSTRIAL QUINDIO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',

      }],
    timelineItems2: [
      {
        from: new Date(2012, 3),
        title: 'SENA AGROINDUSTRIAL QUINDIO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',

      }],
    timelineItems3: [
      {
        from: new Date(2013, 2),
        title: 'SENA AGROINDUSTRIAL QUINDIO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',

      }],
    timelineItems4: [
      {
        from: new Date(2014, 1),
        title: 'SENA AGROINDUSTRIAL QUINDIO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',

      }],
    timelineItems5: [
      {
        from: new Date(2015, 0),
        title: 'SENA AGROINDUSTRIAL QUINDIO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',

      }],
     timelineItems6: [
      {
        from: new Date(2016, 1),
        title: 'SENA AGROINDUSTRIAL QUINDIO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',

      }],
     timelineItems7: [
      {
        from: new Date(2018, 5),
        title: 'SENA AGROINDUSTRIAL QUINDIO',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',

      }],
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
    }
  },
  methods: {
    onItemTimeLine(){
      alert('item')
    }
  },
}
</script>

<style scope>
  .img-background {
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
      0deg,
      rgba(73, 87, 98, 0.86) -13.97%,
      rgba(13, 13, 13, 0.28) 97.41%
    ),
    url("../assets/screen-job.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  background-position: 50% 50%;
}
</style>