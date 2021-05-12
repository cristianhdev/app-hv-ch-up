<template>
<transition name="bounce">
  <div class="contacto mx-auto">
    <b-container fluid="md">
      <b-row>
        <b-col sm="12" md="6" lg="12">
          <h3 class="text-left">Contáctame</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" md="6" lg="6" class="mt-4">
          <b-form action="" method="post" novalidate>
            <b-form-group
              class="tl"
              id="input-group-1"
              label="Nombre:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="formContacto.nombre"
                type="text"
                placeholder="Nombre"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Descripcion:"
              label-for="input-1"
              class="tl"
            >
              <b-form-input
                id="input-1"
                v-model="formContacto.description"
                type="email"
                placeholder="Correo"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="Descripcion:"
              label-for="input-1"
              class="tl"
            >
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Descripcion"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <div class="tl">
               <b-button  type="submit" variant="primary">Enviar</b-button>
            </div>
          </b-form>
          
        </b-col>
        <b-col sm="8" md="8" lg="6"> 
          <div class="imag-center mx-auto">
           <b-img  :src="img" fluid alt="Responsive image"></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </transition>
</template>

<script>
import imagenemail from '../assets/email.png'
export default {
  data() {
    return {
      img:imagenemail,
      formContacto: {
        email: "",
      },
    };
  },
};
</script>

<style scoped>


.about {
  margin: 9% 0px 0px 0px;
}

.tl{
text-align:left
}

.contacto{
  box-sizing: content-box;
  background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(167, 179, 203, 0.63) 86.76%
    ),
    #ffffff;
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  padding: 7em 0px !important;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.imag-center{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>