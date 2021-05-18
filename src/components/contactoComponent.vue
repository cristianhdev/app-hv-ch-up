<template>
  <transition name="bounce">
    <div class="img-background mx-auto">
      <b-container fluid="md">
        <b-row>
          <b-col sm="12" md="6" lg="12">
            <h2
              class="text-left animate__animated animate__delay-slower animate__flipInX"
            >
              Contáctame
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6" class="mt-4">
            <b-form @submit.prevent="onSendEmail" novalidate>
              <b-form-group
                class="tl"
                id="input-group-1"
                label="Nombre:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model.trim="$v.formContacto.to_name.$model"
                  type="text"
                  placeholder="Nombre"
                  :class="{
                    'form-group--error': $v.formContacto.to_name.$error,
                  }"
                ></b-form-input>
                <div class="error" v-if="!$v.formContacto.to_name.required && $v.formContacto.to_name.$dirty ">
                  Este campo es requerido.
                </div>
                <div class="error" v-if="!$v.formContacto.to_name.$invalid && $v.formContacto.to_name.$alpha">
                  Solo se permiten caracteres.
                </div>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Correo:"
                label-for="input-1"
                class="tl"
              >
                <b-form-input
                  id="input-1"
                  v-model="$v.formContacto.from_name.$model"
                  type="email"
                  placeholder="Correo"
                  :class="{
                    'form-group--error': $v.formContacto.from_name.$error,
                  }"
                ></b-form-input>
                <div class="error" v-if=" !$v.formContacto.from_name.required && $v.formContacto.from_name.$dirty">
                  Este campo es requerido.
                </div>
                <div class="error" v-if="$v.formContacto.from_name.$invalid && $v.formContacto.from_name.$dirty">
                 No es un correo valido.
                </div>
                
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Descripcion:"
                label-for="input-1"
                class="tl"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="$v.formContacto.message.$model"
                  placeholder="Descripcion"
                  rows="3"
                
                  max-rows="6"
                  :class="{
                    'form-group--error': $v.formContacto.message.$error,
                  }"
                ></b-form-textarea>
                <div class="error" v-if=" !$v.formContacto.message.required && $v.formContacto.message.$dirty">
                  Este campo es requerido.
                </div>
                <div class="error" v-if="(!$v.formContacto.message.$minLength && $v.formContacto.message.$invalid) && $v.formContacto.message.$dirty">
                Se necesitan minimo 4 caracteres.
                </div>
                <div class="error" v-if="(!$v.formContacto.message.$maxLength && $v.formContacto.message.$invalid) && $v.formContacto.message.$dirty">
                Se solo se permiten 100 caracteres.
                </div>
              </b-form-group>
              <div class="tl">
                <b-alert
                  variant="success"
                  @dismissed="mensajeCorreo = false"
                  dismissible
                  v-if="mensajeCorreo"
                  show
                  >Mensaje enviado</b-alert
                >
                <b-button
                  type="submit"
                  variant="primary"
                  :disabled="$v.$invalid"
                  ><b-icon
                    v-if="iconMensaje"
                    icon="arrow-clockwise"
                    animation="spin"
                  ></b-icon
                  >{{ mensajeBoton }}</b-button
                >
                <vue-recaptcha
                  ref="recaptcha"
                  @verify="onVerify"
                  :sitekey="siteEnvKey"
                >
                </vue-recaptcha>
              </div>
            </b-form>
          </b-col>
          <b-col sm="8" md="8" lg="6">
            <div class="imag-center mx-auto">
              <b-img :src="img" fluid alt="Responsive image"></b-img>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </transition>
</template>

<script>
import imagenemail from "../assets/email.png";
import emailjs from "emailjs-com";
import { required, email, maxLength, minLength, alpha } from "vuelidate/lib/validators";
import VueRecaptcha from 'vue-recaptcha';
export default {
  components: {
   VueRecaptcha
  },
  data() {
    return {
      img: imagenemail,
      mensajeCorreo: false,
      iconMensaje: false,
      mensajeBoton: "Enviar",
      siteEnvKey: "",
      formContacto: {
        from_name: "",
        to_name: "",
        message: "",
      },
    };
  },
  validations: {
    formContacto: {
      from_name: {
        required,
        email 
      },
      to_name: {
        required,
        alpha
      },
      message: {
        required,
         minLength: minLength(4),
         maxLength: maxLength(100)
      },
    },
  },
  methods: {
    onVerify(response) {
      console.log(response);
    },
    onSendEmail() {
      this.mensajeBoton = "Enviando...";
      this.iconMensaje = true;
      emailjs
        .send(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          this.formContacto,
          process.env.VUE_APP_USER_ID
        )
        .then(
          (response) => {
            if (response.status == 200) {
              this.mensajeCorreo = true;
              this.$v.$reset();
              this.formContacto = {
                from_name: "",
                to_name: "",
                message: "",
              };
            }
            this.mensajeBoton = "Enviar";
            this.iconMensaje = false;
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    },
  },
};
</script>

<style scoped>
.about {
  margin: 9% 0px 0px 0px;
}

.tl {
  text-align: left;
}

.imag-center {
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

.form-group--error {
  border-left: 3px solid red;
}

.error{
  font-size: 14px;
  color:red
}
</style>