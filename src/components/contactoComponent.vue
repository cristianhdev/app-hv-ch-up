<template>
  <div>
    <b-container fluid="lg">
      <div class="contacto">
        <b-form action="" method="post" novalidate>
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="formContacto.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            formContacto:{
                email:''
            }
        }
    },
}
</script>

<style scoped>
.contacto {
  display: flex;
}
</style>