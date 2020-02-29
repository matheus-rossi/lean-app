<template>
  <div style='margin : 0px; overflow: hidden;'>
    <a-scene embedded arjs>
          <a-assets>
            <video id="vid" loop="true" crossorigin="anonymous"
                  src='https://cdn.glitch.com/f8908c29-7a4c-455b-93ca-6172548f04c2%2FBig_Buck_Bunny_Trailer_1080p.ogv.360p.vp9.webm?v=1566582340300'></video>
            <video id="videonew" loop="true" crossorigin="anonymous"
                  src='https://cdn.glitch.com/3d5f1a64-d80e-4a74-852f-82c882e4edd4%2Fsintel_trailer-480p.mp4?v=1568116731427'></video>
          </a-assets>
          <a-marker preset='hiro' vidhandler>
            <a-box position="-1 0 0" material='src: #vid'></a-box>
            <a-box position="1 0 0" material='src: #videonew'></a-box>
          </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    videoHandler () {
      this.AFRAME.registerComponent('vidhandler', {
        init: function () {
          this.toggle = false
          this.vidNodes = document.querySelectorAll('#vid, #videonew')
          for (let i = 0; i < this.vidNodes.length; i++) {
            this.vidNodes[i].pause()
          }
        },
        tick: function () {
          if (this.el.object3D.visible === true) {
            if (!this.toggle) {
              this.toggle = true
              for (let i = 0; i < this.vidNodes.length; i++) {
                this.vidNodes[i].play()
              }
            }
          } else {
            this.toggle = false
            for (let i = 0; i < this.vidNodes.length; i++) {
              this.vidNodes[i].pause()
            }
          }
        }
      })
    }
  }
}
</script>

<style>
</style>
