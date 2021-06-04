<template >
  <div class="texto-content">
    <h3 :class="{ 'fade-in-text': animate }" class="textDecoration">
      {{ textosPortafolio[onCambiaTexto].titulo }}
    </h3>
    <br />
    <p :class="{ 'fade-in-text': animate }">
      <span v-html="textosPortafolio[onCambiaTexto].descripcion" />
    </p>
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
      textosPortafolio: [
        {
          titulo: "PLANTO S.A.S",
          descripcion: `<p>Página Web para la empresa <b>PLANTO S.A.S</b>, ubicada en la ciudad de <b>Armenia - Quindío</b>,  con el propósito de comercializar y mostrar su oferta de productos,  desarrollo realizado para la empresa <b>SEOIMPACTO</b>, en la cual hice parte como <b>Desarrollador Web</b>.</p>
          <p>Para la implementación y entrega de esta página se utilizaron diversos lenguajes de etiquetado y programación tales como: <b>HTML5</b>, <b>CSS3</b> y <b>JAVASCRIPT</b>.</p>`,
        },
        {
          titulo: "ORIZONMOBILE",
          descripcion: `<p>Desarrollo <b>Freelance</b> de prototipo tipo tienda virtual para venta de celulares y planes de internet, enfocada  al <b>Frontend</b>.</p> 
          <p>Para la implementación y entrega de esta página se utilizo <b>Figma</b>, <b>CSS Flexbox</b> y <b>Vue.js V3</b>.</p>`,
        },
        {
          titulo: "NATURALWAYU",
          descripcion: `<p>Página web desarrollada  en <b>Wordpress</b> como <b>Freelance</b>, para la empresa <b>Naturalwayu</b> (Colombia-Ecuador), para la oferta y venta de sus productos, se implemento catalogo de productos, pasarela de pago y multi-página para los paises de <b>Canada</b>, <b>Estados Unidos</b>, <b>Ecuador</b> y <b>Colombia</b>.</p>`,
        },
        {
          titulo: "PLASTERING",
          descripcion: `<p>Página Web para la empresa estadounidense  <b>Quality Finish</b> de Miami Florida y su oferta de servicios y mano de obra para instalación de sistemas modulares <b>Drywall</b>, desarrollo realizado para la empresa <b>SEOIMPACTO</b>, de la cual hice parte como <b>Desarrollador Web</b>.</p>
          <p>Para la implementación y entrega de esta página se utilizaron diversos lenguajes de etiquetado y programación tales como: <b>HTML5</b>, <b>CSS3</b> y <b>JAVASCRIPT</b>.</p>`,
        },
        {
          titulo: "QUALITY RUFING",
          descripcion: `<p>Pagina Web para la empresa estadounidense <b>RH QUALITTY ROOFING</b> y su oferta de servicios en reparación e instalación de techos, , desarrollo realizado para la empresa <b>SEOIMPACTO</b>, de la cual hice parte como <b>Desarrollador Web</b>.</p>
          <p>Para la implementación y entrega de esta página se utilizaron diversos lenguajes de etiquetado y programación tales como: <b>HTML5</b>, <b>CSS3</b> y <b>JAVASCRIPT</b>.</p>`,
        },
        {
          titulo: "APP MOBILE PRESTAMOS",
          descripcion: `<p>Aplicación Mobile para administración de prestamos, implementa geolocalizacion, control de rutas, registro, actualizacion y eliminacion de usuarios.</p>
          <p>Para la implementación y entrega de la app se utilizo <b>Firebase Cloud Funtions</b>, <b>VUEjs</b> y <b>Framework7</b>.</p>`,
        },
      ],
    };
  },
  computed: {
    onCambiaTexto() {
      return this.positionTexto;
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

  .textDecoration{
    text-decoration: underline;
  }


</style>