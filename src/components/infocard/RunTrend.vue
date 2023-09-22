
<template>
  <div class="showtrend">
    <el-row>
  
    <el-card shadow="never">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>52</span>
        <div class="bottom clearfix">
          <span>接入总数</span>
        </div>
      </div>
    </el-card>
    <el-card >
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>52</span>
        <div class="bottom clearfix">
          <span>覆盖项目</span>
        </div>
      </div>
    </el-card>
</el-row>
<el-row>
  
  <el-card shadow="never">
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
    <div style="padding: 14px;">
      <span>52</span>
      <div class="bottom clearfix">
        <span>在线总数</span>
      </div>
    </div>
  </el-card>
  <el-card >
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
    <div style="padding: 14px;">
      <span>52</span>
      <div class="bottom clearfix">
        <span>在线率</span>
      </div>
    </div>
  </el-card>
</el-row>


  </div>

</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .el-row {
    display: flex;

  }
  .el-card__body {
    width: 100%;
    display: flex;
   
  }


  .image {
    width: 50%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>