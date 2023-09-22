<template>
  <div class="boxleft">
    <el-table :data="infoGot" height="500px" border style="width: 90%"
    @row-click="handleClick"
    >

      <el-table-column fixed prop="name" label="项目名称 ">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Loading } from 'element-ui';


export default {
  data() {
    return {
    
    }
  },
  props: {
    infoGot: []
  },
  methods: {
    handleClick(row) {
      console.log(row.name);
      // console.log(row.projectCode);
      this.$store.commit('showindow',true);
      this.$store.commit('getsiteId',row.projectCode);
      // console.log(this.infoGot[0].name);
      
    }
  },



}
</script>
<style>
.boxleft {
  width: 80%;
  height: 100px;


}
</style>