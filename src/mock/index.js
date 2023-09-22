//引入mockjs
import Mock from 'mockjs'
//使用mockjs模拟数据
Mock.mock('/api/data', {
  "code":200,
  "ret" :0,
  "msg" :"success",
  "data": [
      { ID: 11,SiteID: 312323, "name":"@cname" ,"todayAttendance|100-200": 1,"AttendanceCount|100-200": 1, lastMonthAtt: 55, lastMonthsalary :42342, toBepaid:0,
         StartDate: "@date", PlannedConstructionTime: "@date", EstimatedCompletionDate: "@date", "last|1-100": 1,
         "img": "@image('50x50', '#2', '#FFF', 'png','gondi')",
         },
         { ID: 12,SiteID: 561123, "name":"@cname" , "todayAttendance|100-200": 1, "AttendanceCount|100-200": 1, lastMonthAtt: 44, lastMonthsalary :12242, toBepaid:0,
         StartDate: "@date", PlannedConstructionTime: "@date", EstimatedCompletionDate: "@date", "last|1-100": 1,
         "img": "@image('50x50', '#50B355', '#FFF', 'png','gondi')",
         },
         { ID: 13,SiteID: 314123, "name":"@cname" , "todayAttendance|100-200": 1, "AttendanceCount|100-200": 1, lastMonthAtt: 33, lastMonthsalary :33342, toBepaid:0,
         StartDate: "@date", PlannedConstructionTime: "@date", EstimatedCompletionDate: "@date", "last|1-100": 1,
         "img": "@image('50x50', '#564654', '#FFF', 'png','gondi')",
         },
         { ID: 14,SiteID: 332123, "name":"@cname" , "todayAttendance|100-200": 1, "AttendanceCount|100-200": 1, lastMonthAtt: 22, lastMonthsalary :45342, toBepaid:0,
         StartDate: "@date", PlannedConstructionTime: "@date", EstimatedCompletionDate: "@date", "last|1-100": 1,
         "img": "@image('50x50', '#50B355', '#FFF', 'png','gondi')",
         },

    ]


});         