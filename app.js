new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: 0,
    y: 0,
  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert("you clicked");
    },
  },

  /*data: {
     first-name: 'Sandali',
    last-name: 'Singh',
    website: 'https://vuejs.org/guide/quick-start.html',
    websitetag: '<a href="https://vuejs.org/guide/quick-start.html"> the vue js docs </a>'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + " " +this.name;
    }
  }
*/
});
