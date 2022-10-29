let tinySlider = tns({
  container: ".my_tiny_slider",
  "slideBy": "1",
  "speed": 1000,
  "nav": false,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    1300:{
      items: 4,
      gutter: 94
    },
    1024:{
      items: 4,
      gutter: 94
    },
    768:{
      items: 4,
      gutter: 94
    },
    480:{
      items: 4,
      gutter: 94
    },
  }


})
