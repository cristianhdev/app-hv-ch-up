<template>
  <div>
    <p class="text-red">{{ getCountView }}</p>
  </div>
</template>

<script>
export default {
  props: {
    endDate: {
      type: String,
    },
  },
  data() {
    return {
      dateEnd: new Date(this.endDate),
      countDownView: "",
      timer: null,
    };
  },
  created() {
    this.timer = setInterval(this.onShowRemaining, 1000);
  },
  computed: {
    getCountView() {
      return this.countDownView;
    },
  },
  methods: {
    onShowRemaining() {
      var end = new Date(this.endDate);

      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var timer;

      var now = new Date();
      var distance = end - now;
      if (distance < 0) {
        clearInterval(timer);

        console.log("EXPIRED!");

        return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      console.log(days + " dias, ");
      console.log(hours + " horas, ");
      console.log(minutes + " minutos y ");
      console.log(seconds + " segundos");

      this.countDownView = days>=1?  days + " dias, ": '0'+ days + " dia, ";
      this.countDownView +=  hours>=1? hours + " hora, ":'0'+ hours + " horas, ";
      this.countDownView += minutes + " minutos y ";
      this.countDownView += seconds + " segundos";

    },
  },
};
</script>

<style>
  .text-red{
    color:rgb(143, 231, 224)
  }
</style>