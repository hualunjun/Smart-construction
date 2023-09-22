<template>
   <div class="boxleft">
   <el-table :data="gottdata" height="400px" border style="width: 200px"
  @row-click="handleClick"
    >
  
   <el-table-column fixed prop="camName" label="设备视频">
  </el-table-column>
  </el-table>
  </div>
  </template>
  
  <script>
  import { Loading } from 'element-ui';
  import axios from 'axios';
  
  export default {
   data() {
return {
 watchedData: null,
 gottdata: '',
 requestData:{
  siteId:null,
  tunnelNo: null,
  serial:null

 }
  } 
},
  // 设置请求头，将 Content-Type 设置为 application/json
  
methods: {
 handleClick(row) {
    const headers = {'Content-Type': 'application/json',};
  //   const requestData = {
  //      siteId: "PRJ20221116110244",
  //     tunnelNo: 8,
  //     serial: "K79908595"
  //  }
   console.log(row)
  //  if(row.status == 1){
  //   this.$message({
  //     message: '该摄像头不在线',
  //     type: 'warning'
  //   });
  //   return;
  //  }else{}
    this.requestData.siteId = row.siteId;
    this.requestData.tunnelNo = row.tunnelNo;
    this.requestData.serial = row.serial;

   

   
   axios.post("https://lingangjh.com:8555/videoMonitor/getVideoLiveUrl", this.requestData,
    {headers:headers}).then((res) => {
        console.log(res.data);
        this.gottdata = res.data;
        this.$store.commit('getvideourl',res.data);
    }).catch((err) => {
        console.log(err);
        this.$message({
        message: '该摄像头不在线',
        type: 'warning'
        });
    });
   }
  },
  props: {
   tableData: []
   },
  created() {
  this.$store.watch(
      (state) => state.dialogVisible1,
      (newValue, oldValue) => {
     if(newValue == true){
        this.watchedData = this.$store.state.siteId;
        let url = "https://lingangjh.com:8555/videoMonitor/getMonitor?siteId=";
        url += this.watchedData;
        console.log(url);
        axios.get(url).then((res) => {
            console.log(res);
            this.gottdata = res.data;
       }); 
      }
    }
    )
   },
}
  </script>
  <style>
  .boxleft {
   width: 80%;
   height: 100px;
  }
  </style>