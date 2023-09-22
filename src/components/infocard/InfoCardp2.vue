<template>
<el-card class="box-card" shadow="never">
  <div class="content">
    <div class="left">   
      <img :src="infoGot.img" width="50px" height="50px" alt="pic">
      <div class="left-bottom">
        <p class="person">
          <span class="number">{{infoGot.todayAttendance}}</span>
          <span class="human">人</span>
        </p>
        
        <p class="attendence">今日出勤</p>
        
      </div>

  </div>
  <div class="right">
    <div class="top">
      <div class="top-name">{{infoGot.name}}</div>
      <div class="top-time">
      
        <span class="start">开始时间：{{infoGot.StartDate}}</span>
        <span class="plan">计划施工：{{infoGot.PlannedConstructionTime}}</span>
        <span class="last">剩余工期：{{infoGot.last}}天</span>
        <span class="target">预计竣工：{{infoGot.EstimatedCompletionDate }}</span>
        </div>
      
    </div>
    <div class="bottom">
      <div class="smallcard1"><el-card class="box-card1" shadow="never">
        <span class="info">
          <svg t="1692432938580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4180" width="16" height="16"><path d="M234.666667 704H170.666667a21.333333 21.333333 0 0 1 0-42.666667h64v-128H170.666667a21.333333 21.333333 0 0 1 0-42.666666h64v-128H170.666667a21.333333 21.333333 0 0 1 0-42.666667h64v-64a85.333333 85.333333 0 0 1 85.333333-85.333333h426.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v512a85.333333 85.333333 0 0 1-85.333333 85.333333H320a85.333333 85.333333 0 0 1-85.333333-85.333333v-64z m170.666666-341.333333a21.333333 21.333333 0 0 0 0 42.666666h256a21.333333 21.333333 0 0 0 0-42.666666H405.333333z m0 128a21.333333 21.333333 0 0 0 0 42.666666h256a21.333333 21.333333 0 0 0 0-42.666666H405.333333z m0 128a21.333333 21.333333 0 0 0 0 42.666666h106.666667a21.333333 21.333333 0 0 0 0-42.666666h-106.666667z" fill="rgb(62,116,150)" p-id="4181"></path></svg>
        <div class="text">在场人数</div>

        </span>
        <p class="realcontent1">
          <span class="number">{{ infoGot.AttendanceCount }}</span>
          <span class="human">人</span>
        </p>
      </el-card></div>
      <div class="smallcard2"><el-card class="box-card1" shadow="never">
        <span class="info">
          <svg t="1692432938580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4180" width="16" height="16"><path d="M234.666667 704H170.666667a21.333333 21.333333 0 0 1 0-42.666667h64v-128H170.666667a21.333333 21.333333 0 0 1 0-42.666666h64v-128H170.666667a21.333333 21.333333 0 0 1 0-42.666667h64v-64a85.333333 85.333333 0 0 1 85.333333-85.333333h426.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v512a85.333333 85.333333 0 0 1-85.333333 85.333333H320a85.333333 85.333333 0 0 1-85.333333-85.333333v-64z m170.666666-341.333333a21.333333 21.333333 0 0 0 0 42.666666h256a21.333333 21.333333 0 0 0 0-42.666666H405.333333z m0 128a21.333333 21.333333 0 0 0 0 42.666666h256a21.333333 21.333333 0 0 0 0-42.666666H405.333333z m0 128a21.333333 21.333333 0 0 0 0 42.666666h106.666667a21.333333 21.333333 0 0 0 0-42.666666h-106.666667z" fill="rgb(62,116,150)" p-id="4181"></path></svg>
        <div class="text">上月出勤</div>

        </span>
        <p class="realcontent2">
          <span class="number">{{infoGot.lastMonthAtt}}</span>
          <span class="human">人</span>
        </p>

      </el-card></div>
      <div class="smallcard3"><el-card class="box-card1" shadow="never">
        <span class="info">
          <svg t="1692432938580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4180" width="16" height="16"><path d="M234.666667 704H170.666667a21.333333 21.333333 0 0 1 0-42.666667h64v-128H170.666667a21.333333 21.333333 0 0 1 0-42.666666h64v-128H170.666667a21.333333 21.333333 0 0 1 0-42.666667h64v-64a85.333333 85.333333 0 0 1 85.333333-85.333333h426.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v512a85.333333 85.333333 0 0 1-85.333333 85.333333H320a85.333333 85.333333 0 0 1-85.333333-85.333333v-64z m170.666666-341.333333a21.333333 21.333333 0 0 0 0 42.666666h256a21.333333 21.333333 0 0 0 0-42.666666H405.333333z m0 128a21.333333 21.333333 0 0 0 0 42.666666h256a21.333333 21.333333 0 0 0 0-42.666666H405.333333z m0 128a21.333333 21.333333 0 0 0 0 42.666666h106.666667a21.333333 21.333333 0 0 0 0-42.666666h-106.666667z" fill="rgb(62,116,150)" p-id="4181"></path></svg>
        <div class="text">上月工资</div>
        </span>
        <p class="realcontent3">
          <span class="number">{{ infoGot.lastMonthsalary }}</span>
          <span class="human">万元</span>
        </p>
        </el-card></div>
      <div class="smallcard4"><el-card class="box-card1" shadow="never">
        <span class="info">
          <svg t="1692432938580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4180" width="16" height="16"><path d="M234.666667 704H170.666667a21.333333 21.333333 0 0 1 0-42.666667h64v-128H170.666667a21.333333 21.333333 0 0 1 0-42.666666h64v-128H170.666667a21.333333 21.333333 0 0 1 0-42.666667h64v-64a85.333333 85.333333 0 0 1 85.333333-85.333333h426.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v512a85.333333 85.333333 0 0 1-85.333333 85.333333H320a85.333333 85.333333 0 0 1-85.333333-85.333333v-64z m170.666666-341.333333a21.333333 21.333333 0 0 0 0 42.666666h256a21.333333 21.333333 0 0 0 0-42.666666H405.333333z m0 128a21.333333 21.333333 0 0 0 0 42.666666h256a21.333333 21.333333 0 0 0 0-42.666666H405.333333z m0 128a21.333333 21.333333 0 0 0 0 42.666666h106.666667a21.333333 21.333333 0 0 0 0-42.666666h-106.666667z" fill="rgb(62,116,150)" p-id="4181"></path></svg>
        <div class="text">待发工资</div>
        </span>
        <p class="realcontent4">
          <span class="number">{{ infoGot.toBepaid }}</span>
          <span class="human">元</span>
        </p>
        </el-card></div>  
    </div>


  </div>
    

  </div>

   
</el-card>
</template>
<script>
export default {
  name: 'InfoCard',
  data:function(){
    return{
      img:""
    }
  },
  props: {
    infoGot: Array
  },
  mounted:function(){
    this.img = this.infoGot.img;
  }

}

</script>
<style>
  .content {
    display: flex;
    
    /* justify-content: space-around; */
    justify-content: space-evenly;
    .left {
      
      
      
      .left-bottom {
        /*上下居中*/
        font-size: 12px;
        .person {
          margin-top: 3px;
          margin-bottom: 0px;
        }
        .attendence {

          margin-top: 0px;
          margin-bottom: 3px;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      .top {
        text-align: center;
        align-items: center; /* Center the text vertically */
        justify-content: center; /* Center the text horizontally */
        font-size: 12px;
        margin-bottom: 5px;
        .top-name{
         
          margin-bottom: 5px;
        }
        .top-time{
          margin-top: 3px;
          font-size: 10px;
          .start{
            margin-right: 5px;
          }
          .plan{
            margin-right: 5px;
          }
          .last{
            margin-right: 5px;
          }
        }


        
      }
      .bottom {
        display: flex;
        text-align: center;
        align-items: center; /* Center the text vertically */
        justify-content: center; /* Center the text horizontally */
        height: 20px;
        .smallcard1 {
          flex: 1;
          font-size: 18px;
          margin-top: 40px;
          /* margin-bottom: 5px; */
          margin-left: 5px;
          margin-right: 10px;
          
          .box-card1{
            
            border: 1px solid rgb(62,116,150);
            .realcontent1{
              
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              margin-top: 1px;
              /* border: 1px solid rgb(62,116,150); */
            }


          }
          
          .el-card__body {
          padding: 5px;
          /* border: 3px solid rgb(62,116,150); */
          
          
         }     
        }
        .smallcard2 {
          flex: 1;
          /* margin-bottom: 5px;
          padding-bottom: 5px; */
          margin-top: 40px;
          margin-left: 5px;
          margin-right: 10px;
          .el-card__body {
          padding: 5px;
          
         
         }
         .box-card1{
          border: 1px solid rgb(62,116,150);
          .realcontent2{
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              margin-top: 1px;
              
              
            }
         }
        }
        .smallcard3 {
          flex: 1;
          
          margin-top: 40px;
          margin-left: 5px;
          margin-right: 10px;
          .el-card__body {
          padding: 5px;
         
         }
         .box-card1{
          border: 1px solid rgb(62,116,150);
          .realcontent3{
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              margin-top: 1px;
              
              
            }
         }
        }
        .smallcard4 {
    
          /* flex: 1; */
          margin-top: 40px;
          margin-left: 5px;
          margin-right: 10px;
          .el-card__body {
          padding: 5px;
          
         }
         .box-card1{
          border: 1px solid rgb(62,116,150);
          .realcontent4{
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              margin-top: 1px;
              
              
              
            }
         }
        }
     
        }
      }
     
    
  }
  .text {
    font-size: 5px;
  }

  .item {
    margin-bottom: 11px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 560px;
    
  }
  .box-card1{
    width: 80px;
    height: 40px;
    font-size: 3px;
    text-align: top;
    align-items: top; /* Center the text vertically */
    justify-content: top; /* Center the text horizontally */
    /* border-color: rgb(62,116,150); */
   
  }
.info{
  display: flex;
}
div.el-card__body {
  padding: 6px;
  /* 设置背景颜色 */
  background-color: rgb(4,34,60);
   /* 设置字体颜色 */
  color: rgb(62,116,150);
  /* 设置边框颜色 */
  /* border: 1px solid rgb(62,116,150); */
  /* border-color: rgb(62,116,150); */
  }

.number{
  color: rgb(64,164,146);
}
</style>