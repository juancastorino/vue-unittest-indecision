<template>
  <h1>Indecision</h1>
  <img v-if="img" :src="img" alt="img_bg" />
  <div class="bg-dark"></div>
  <br />
  <div class="indecision-container">
    <input
      class="input-question"
      type="text"
      placeholder="Hazme una pregunta"
      v-model="question"
    />
    <p>Recuerda terminar con un signo de interrogacion</p>
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      answer: null,
      img: null,
      isValidQuestion: false,
    };
  },
  watch: {
    question(value, oldValue) {
      this.isValidQuestion = false;
      this.img = null;
      if (!value.includes("?")) {
        return;
      }
      this.isValidQuestion = true;
      this.getAnswer();
    },
  },
  methods: {
    async getAnswer() {
      this.answer = "Pensando...";
      const data = await fetch("https://yesno.wtf/api")
        .then((res) => {
          const retorno = res.json();
          return retorno;
        })
        .then((ret) => {
          this.answer = ret.answer == "no" ? "No" : "Si";
          this.img = ret.image;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.input-question {
  margin-bottom: 10px;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>

 