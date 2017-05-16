Vue.component('hello-world-component', {
  template: '#hello-world-template',
  data: function() {
    return {who: 'world'}
  },
  methods: {
    message: function(text) {
      alert(text);
    }
  }
})
