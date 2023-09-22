<template>
  <div id="app">
    <!-- <InfoCard></InfoCard> -->
    <!-- <InfoCard class="item" v-for="(item) in hasInfocard " :key="item.id" :infoGot=" item"></InfoCard> -->
    <ShangHai></ShangHai>
    
  </div>
</template>

<script>

import InfoCard from './components/infocard/InfoCard.vue'
import axios from 'axios';
import InfoCardp2 from './components/infocard/InfoCardp2.vue'
import ShangHai from './components/Map/ShangHai.vue';


export default {
  name: 'App',
  components: {
    // InfoCard,
    ShangHai,
    // InfoCardp2
   
  },
  data() {
    return {
      hasInfocard: [ ]

    }
  },
  created:function(){
    // axios.get("https://lingangjh.com:8555/videoMonitor/video").then((response)=>{
    //   console.log(response);
    //   // this.hasInfocard = response.data.data;
    // })
    // .catch((err) => {
    //       console.log(err);
    //     });
    

  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
