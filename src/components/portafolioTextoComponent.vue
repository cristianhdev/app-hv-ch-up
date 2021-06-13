<template >
  <div class="texto-content">
    <div v-if="lodingSkeleton">
      <h3 :class="{ 'fade-in-text': animate }" class="textDecoration">
      <b-skeleton animation="fade" width="40%" height="10%" class="text-center"></b-skeleton>
      </h3>
      <br>
       <p :class="{ 'fade-in-text': animate }">
         <b-skeleton animation="fade" width="100%"></b-skeleton>
         <b-skeleton animation="fade" width="100%"></b-skeleton>
         <b-skeleton animation="fade" width="100%"></b-skeleton>
         <b-skeleton animation="fade" width="100%"></b-skeleton>
         <b-skeleton animation="fade" width="70%"></b-skeleton>
         <b-skeleton animation="fade" width="90%"></b-skeleton>
       </p>
       <p :class="{ 'fade-in-text': animate }">
         <b-skeleton animation="fade" width="100%"></b-skeleton>
         <b-skeleton animation="fade" width="100%"></b-skeleton>
         <b-skeleton animation="fade" width="100%"></b-skeleton>
         <b-skeleton animation="fade" width="100%"></b-skeleton>
        
       </p> 
    </div>
    <div v-else>
      <h3 :class="{ 'fade-in-text': animate }" class="textDecoration">
        {{ textosPortafolio[onCambiaTexto].titulo }}
      </h3>
      <br />
      <p :class="{ 'fade-in-text': animate }">
        <span v-html="textosPortafolio[onCambiaTexto].descripcion" />
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    posicion: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    posicion(newVal) {
      // watch it
      this.positionTexto = newVal;
      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 2500);
    },
  },
  data() {
    return {
      positionTexto: this.posicion,
      animate: false,
      textosPortafolio:null,
      lodingSkeleton:true
    };
  },
  mounted() {
    axios.get(`${axios.defaults.baseURL}/portafolio`).then((res) => {
      this.textosPortafolio = res.data;
      console.log(this.textosPortafolio);
    }).finally(()=>{
      this.lodingSkeleton=false
    })
  },
  computed: {
    onCambiaTexto() {
      return this.positionTexto
    },
  },
};
</script>

<style scope>
.btn-portafolio {
  background-color: rgba(147, 245, 192, 0.93);
}

.fade-in-text {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.texto-content h3 {
  text-align: center;
}

.textDecoration {
  text-decoration: underline;
}
</style>