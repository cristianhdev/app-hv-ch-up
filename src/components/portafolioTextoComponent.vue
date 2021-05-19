<template >
  <div>
      <p :class="{'fade-in-text':animate}" >{{ textosPortafolio[onCambiaTexto].descripcion }}</p>
  </div>
</template>

<script>
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
      this.positionTexto=newVal
      this.animate=true
      setTimeout(() => {
          this.animate=false
      },2500)
    },
  },
  data() {
    return {
      positionTexto: this.posicion,
      animate: false,
      textosPortafolio: [
        {
          descripcion: `Lorem1 ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis tempora harum dolor suscipit provident aut corrupti
                    eos veniam, deleniti neque nihil quibusdam consectetur
                    veritatis, in inventore quis dolore quo est. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Omnis tempora
                    harum dolor suscipit provident aut corrupti eos veniam,
                    deleniti neque nihil quibusdam consectetur veritatis, in
                    inventore quis dolore quo est. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Omnis tempora harum dolor
                    suscipit provident aut corrupti eos veniam, deleniti neque
                    nihil quibusdam consectetur veritatis, in inventore quis
                    dolore quo est. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis tempora harum dolor suscipit
                    provident aut corrupti eos veniam, deleniti neque nihil
                    quibusdam consectetur veritatis, in inventore quis dolore
                    quo est.`,
        },
        {
          descripcion: `Lorem2 ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis tempora harum dolor suscipit provident aut corrupti
                    eos veniam, deleniti neque nihil quibusdam consectetur
                    veritatis, in inventore quis dolore quo est. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Omnis tempora
                    harum dolor suscipit provident aut corrupti eos veniam,
                    deleniti neque nihil quibusdam consectetur veritatis, in
                    inventore quis dolore quo est. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Omnis tempora harum dolor
                    suscipit provident aut corrupti eos veniam, deleniti neque
                    nihil quibusdam consectetur veritatis, in inventore quis
                    dolore quo est. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis tempora harum dolor suscipit
                    provident aut corrupti eos veniam, deleniti neque nihil
                    quibusdam consectetur veritatis, in inventore quis dolore
                    quo est.`,
        },
        {
          descripcion: `Lorem3 ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis tempora harum dolor suscipit provident aut corrupti
                    eos veniam, deleniti neque nihil quibusdam consectetur
                    veritatis, in inventore quis dolore quo est. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Omnis tempora
                    harum dolor suscipit provident aut corrupti eos veniam,
                    deleniti neque nihil quibusdam consectetur veritatis, in
                    inventore quis dolore quo est. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Omnis tempora harum dolor
                    suscipit provident aut corrupti eos veniam, deleniti neque
                    nihil quibusdam consectetur veritatis, in inventore quis
                    dolore quo est. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis tempora harum dolor suscipit
                    provident aut corrupti eos veniam, deleniti neque nihil
                    quibusdam consectetur veritatis, in inventore quis dolore
                    quo est.`,
        },
      ],
    };
  },
  computed: {
    onCambiaTexto() {
      return this.positionTexto;
    }
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
</style>