<template>
    <div class="map">
      <VideoCard ></VideoCard>
      
      <div class="left"> 
        <companyList class="l-top" :infoGot=" gottdata"></companyList>
        <RunTrend class="l-bottom"></RunTrend>
        
      </div>
    <!-- <div >{{ $store.state.count}}</div> -->
      <div class="box1"></div>
    
    </div>
    
    


</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios';
import VideoCard from '../Monitor/VideoCard.vue';
import companyList from '../Table/companyList.vue';
import RunTrend from '../infocard/RunTrend.vue';

export default {
    name: 'ShangHai',
    components: {
      VideoCard,
      companyList,
      RunTrend
    },
    data() {
        return {
            gottdata: [],
            // chartData:[]


            
        }
    },
    methods: {
      showvideo(){ 
        // this.$store.commit('showindow',true);
      },
        showBox1: async function () {
            var myChart = echarts.init(document.querySelector('.box1'));
            myChart.showLoading();
            let { data } = await axios.get("static/shanghai.json");
            // let {data} = await axios.get("static/shanghainobroder.json");   
            // 注册地图
            echarts.registerMap('shanghai', data);
            myChart.hideLoading();
            let chartData = [
                { name: "地块配套初中工程", value: 12, projectCode: "PRJ20221116110244", longitude: 121.586131, latitude: 31.297820 },
                { name: "地块配套高中工程", value: 13, projectCode: "PRJ20221116110232", longitude: 121.406131, latitude: 31.397820 },
                { name: "地块配套大学工程", value: 13, projectCode: "PRJ20221116110231", longitude: 121.489934, latitude: 31.398896 },
                { name: "地块配程", value: 14, projectCode: "PRJ2022111611024", longitude: 121.375972, latitude: 31.111658 },
            ];
            let lodata = [
                { value: [121.586131, 31.297820] }
            ];
            chartData = this.gottdata.map((item) => {
                return { name: item.name, value: item.cityCode, scatter: [item.longitude, item.latitude] };
            });
            // console.log(chartData);
            let option = {
                backgroundColor: 'rgb(4,34,60)',
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'click',
                    formatter: p => {
                        let val = p.value;
                        let txtCon = "<div style='text-align:left'>" + p.name + ":<br />销售额：" + val + '万</div>';
                        return txtCon;
                    }
                },
                geo: {
                    type: 'map',
                    map: 'shanghai',
                    roam: true,
                    label: {
                        show: true,
                        color: '#8dd7fc'
                    },
                    zoom: 1.6,
                    center: [121.430317, 31.222771],
                    itemStyle: {
                        normal: {
                            areaColor: '#rgb(0,0,1)',
                            borderColor: 'rgb(71, 122, 129)',
                            borderWidth: 1.5,
                        },
                        emphasis: {
                            areaColor: '#8dd7fc',
                            borderWidth: 1,
                            shadowBlur: 25,
                        }
                    },
                },
                series: [
                    {
                        type: 'map',
                        geoIndex: 0,
                        map: 'shanghai',
                        roam: true,
                        zoom: 1.3,
                        label: {
                            show: false,
                        },
                        data: chartData,
                    },
                    {
                        name: '散点',
                        // data: lodata,
                        data: chartData.map((it) => {
                            return { name: it.name, value: [it.scatter[0], it.scatter[1], it.scatter[2]] };
                        }),
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        tooltip: {
                            show: true,
                            trigger: 'item',
                            triggerOn: 'click',
                            enterable: true,
                            showContent: true,
                            hideDelay: 1000000,
                            formatter: (p) => {
                                let name = p.name;
                                let val = p.value;
                                let txtCon = "<div style='text-align:left'>" + name + "<br />";
                                console.log(123);
                                
                                
                                // this.showvideo();
                                return txtCon;
                                
                                // this.showvideo();
                            }
                        },
                        rippleEffect: {
                            brushType: 'fill'
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(255,0,0)',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                    },
                    //       symbolSize: function(val) {
                    //           return val[2] / 10;
                    //       },
                    //     showEffectOn: 'render', //加载完毕显示特效
                    // }
                ]
            };
            myChart.setOption(option);
        }
    },
    mounted() {
        axios.get("https://lingangjh.com:8555/videoMonitor/video").then((res) => {
            console.log(res.data.site);
            console.log(res.data);
            this.gottdata = res.data.site;
            // this.chartData = res.data.site;
        });
        this.showBox1();
    },
    
}
</script>

<style>
.map{
  display: flex;
  flex-direction: row;
  .box1{  
    width: 70%;
    height: 1000px;
    border: 1px solid #000;
  }
  .left{
    width: 30%;
    display: flex;
    flex-direction: column;
    .l-top{
      width: 100%;
      height: 50%;
      /* border: 1px solid #000; */
    }
    .l-bottom{
      width: 100%;
      height: 50%;
      /* border: 1px solid #000; */
    }


   
  }
}

</style>