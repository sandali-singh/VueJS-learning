new Vue({
  el: "#app",
  data: {
    characters: ["Mario", "Luigi", "Yoshi", "Browser"],
    ninjas: [
      { name: "Ryu", age: 25 },
      { name: "Yoshi", age: 35 },
      { name: "Ken", age: 55 },
    ],
    name: "",
    age: 20,
    a: 0,
    b: 0,

    available: false,
    nearby: false,

    error: false,
    success: false,
  },

  methods: {
    logName: function () {
      console.log("name entered");
    },
    logAge: function () {
      console.log("age entered");
    },
    /* addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    }, */
  },

  computed: {
    addToA: function () {
      console.log("addToA");
      return this.a + this.age;
    },
    addToB: function () {
      console.log("addToB");
      return this.b + this.age;
    },

    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
});
