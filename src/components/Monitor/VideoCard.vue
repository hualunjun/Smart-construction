<template>
<div class="dialog">
<!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->

<el-dialog
  title="提示"
 :visible="$store.state.dialogVisible1"
  @open="handleOpen"
  @close="handleClose"


  >
  <div class="list">
    <div class="comTable"><comTable :infoGot=" gottdata"></comTable></div>    
    <div class="win"><win> </win></div>    
    
      </div>
  <span slot="footer" class="dialog-footer">

  </span>
</el-dialog>

</div>

</template>



<script>
import comTable from '../Table/comTable.vue';
import win from './win.vue';
  export default {
    name: 'VideoCard',
    components: {
      comTable,
      win
    },
    data() {
      return {
        
      };
    },
    methods: {
      handleOpen(){
        console.log("弹窗打开");
        // this.$store.commit('showindow',true);
      },
      handleClose(){
        // this.$store.commit('showindow',false);
        // stopstreamimg()
        // this.dialogVisible: false;
        this.$store.commit('showindow',false);
        
        console.log("弹窗关闭");

      },

    },
    mounted() {
      console.log("mounted` hook was called");
    },
    
  };
</script>
<style>


.el-dialog{
  width: 900px;
  
 

  .list{
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    width: 400px;
    height: 400px;
    /* margin: 100px; */
    .comTable{
      margin-left: 30px;
    }
    
  }
}
</style>