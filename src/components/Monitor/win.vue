<template>
  <video id="videoElement" controls width="600" height="400" ></video>
 </template>
<script>
import flvjs from 'flv.js'
export default {
  name: 'videoElement',
  data() {
    return {
      player: null,
      videourl: null,
      winstate: this.$store.state.dialogVisible1,
    };
  },
  // mounted() {

  //   this.$nextTick(() => {
  //     // this.videoPlayer();
  //   });
    
  // },
  beforeUnmount() {
    if(this.player){
      this.player.pause();
      this.player.unload();
      this.player.detachMediaElement();
      this.player.destroy();
      this.player = null;
    }
  },
  methods: {
    videoPlayer(){
      if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        // console.log(this.videourl);
        this.videourl = this.$store.state.videourl;
        this.player = flvjs.createPlayer({
        type: 'flv',
          url: this.videourl
        });
        this.player.attachMediaElement(videoElement);
        this.player.load();
        this.player.play();
     }
    },
    videoUnmount() {
    if(this.player != null){
      this.player.pause();
      this.player.unload();
      this.player.detachMediaElement();
      this.player.destroy();
      this.player = null;
    }
  },
    
  },
  created() {
  this.$store.watch(
      (state) => state.videourl,
      (newValue, oldValue) => {
     if(newValue != null && newValue != oldValue){
      this.videoUnmount();
      this.videoPlayer();   
      this.videourl = newValue;
      }else
        return;
      
      
      // if(newValue == false){
      //   this.videoUnmount();
      // }
    }
    )
   },
  

}


</script>
<style></style>