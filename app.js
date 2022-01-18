const app = Vue.createApp({
  data() {
    return {
      calc: "",
      value: null,
    };
  },
  methods: {
    add() {
      this.calc += "+";
    },

    minus() {
        this.calc += "-";
    },

    add() {
        this.calc += "+";
    },

    multiply() {
        this.calc += "*";
      },

    divide() {
        this.calc += "/";
      },
    
    setModifier(x) {
        this.calc += x;
      },

    calculate() {
        this.value += eval(this.calc);
        this.calc = this.value
    },

    reset () {
        this.value = null;
        this.calc = "";
    },

    key(e) {
        console.log(e.keyCode);
    }
    
  },
});

app.mount("#app");
