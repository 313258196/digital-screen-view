
/** 
 * [地图按月按省数据（2017）]
 * @param {[Array]} uploadcnt [上传条数]
 * @param {[Array]} uploadpzs [品种数]
 * @param {[Array]} xsmy [销售码洋]
 * @param {[Array]} kcmy [库存码洋]
*/
var mapD = [
    {
        name: "湖南",
        uploadcnt: "20671",
        uploadpzs: "",
        xsmy: "73.8",
        kcmy: "1579.5"
    },
    {
        name: "上海",
        uploadcnt: "22932",
        uploadpzs: "",
        xsmy: "163.6",
        kcmy: "784.6"
    },
    {
        name: "云南",
        uploadcnt: "56177",
        uploadpzs: "",
        xsmy: "533.2",
        kcmy: "25.2"
    },
    {
        name: "湖北",
        uploadcnt: "8613",
        uploadpzs: "",
        xsmy: "26.2",
        kcmy: "454.6"
    },
    {
        name: "江苏",
        uploadcnt: "1757",
        uploadpzs: "",
        xsmy: "20.6",
        kcmy: "361.8"
    },
    {
        name: "内蒙古",
        uploadcnt: "",
        uploadpzs: "",
        xsmy: "62.2",
        kcmy: "154.3"
    },
    {
        name: "浙江",
        uploadcnt: "141905",
        uploadpzs: "179",
        xsmy: "1097.2",
        kcmy: "1073.4"
    },
    {
        name: "江西",
        uploadcnt: "3033",
        uploadpzs: "",
        xsmy: "12.6",
        kcmy: "615.9"
    },
    {
        name: "四川",
        uploadcnt: "",
        uploadpzs: "",
        xsmy: "",
        kcmy: ""
    }
]
// var mapD = {
//   Jan: [
//     {
//        name: "湖南",
//        uploadcnt: "20671",
//        uploadpzs: "",
//        xsmy: "73.8",
//        kcmy: "1579.5"
//      },
//     {
//        name: "上海",
//        uploadcnt: "22932",
//        uploadpzs: "",
//        xsmy: "163.6",
//        kcmy: "784.6"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "56177",
//        uploadpzs: "",
//        xsmy: "533.2",
//        kcmy: "25.2"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "8613",
//        uploadpzs: "",
//        xsmy: "26.2",
//        kcmy: "454.6"
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "1757",
//        uploadpzs: "",
//        xsmy: "20.6",
//        kcmy: "361.8"
//     },  
//     {
//        name: "内蒙古",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "62.2",
//        kcmy: "154.3"
//     },  
//     {
//        name: "浙江",
//        uploadcnt: "141905",
//        uploadpzs: "179",
//        xsmy: "1097.2",
//        kcmy: "1073.4"
//     },
//     {
//        name: "江西",
//        uploadcnt: "3033",
//        uploadpzs: "",
//        xsmy: "12.6",
//        kcmy: "615.9"
//      },     
//     {
//       name: "四川",
//       uploadcnt: "",
//       uploadpzs: "",
//       xsmy: "",
//       kcmy: ""
//     }
//   ],
//   Feb: [
//     {
//        name: "湖南",
//        uploadcnt: "33456",
//        uploadpzs: "",
//        xsmy: "177.9",
//        kcmy: "1587.1"
//      },
//     {
//        name: "上海",
//        uploadcnt: "23103",
//        uploadpzs: "",
//        xsmy: "159.1",
//        kcmy: "1193.1"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "52433",
//        uploadpzs: "",
//        xsmy: "356.7",
//        kcmy: "18.1"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "10228",
//        uploadpzs: "",
//        xsmy: "32.9",
//        kcmy: "431.3"
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "3515",
//        uploadpzs: "",
//        xsmy: "92.2",
//        kcmy: ""
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "71.6",
//        kcmy: ""
//      },
//      {
//        name: "浙江",
//        uploadcnt: "165366",
//        uploadpzs: "605",
//        xsmy: "1027.9",
//        kcmy: "1056.3"
//      },
//     {
//        name: "江西",
//        uploadcnt: "8589",
//        uploadpzs: "",
//        xsmy: "36.2",
//        kcmy: "464.1"
//      },  
//      {
//        name: "四川",
//        uploadcnt: "409",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      }
//   ],
//   Mar: [
//     {
//        name: "湖南",
//        uploadcnt: "21814",
//        uploadpzs: "",
//        xsmy: "291.6",
//        kcmy: "3076.2"
//      },
//     {
//        name: "上海",
//        uploadcnt: "21240",
//        uploadpzs: "8082",
//        xsmy: "208.2",
//        kcmy: "573.1"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "38102",
//        uploadpzs: "",
//        xsmy: "420.5",
//        kcmy: "25.8"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "7447",
//        uploadpzs: "",
//        xsmy: "27.5",
//        kcmy: "432.2"
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "1294",
//        uploadpzs: "",
//        xsmy: "146.1",
//        kcmy: "989.8"
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "70.5",
//        kcmy: "694.8"
//      },
//      {
//        name: "浙江",
//        uploadcnt: "31804",
//        uploadpzs: "44",
//        xsmy: "269.8",
//        kcmy: "369.9"
//      },
//      {
//        name: "江西",
//        uploadcnt: "2625",
//        uploadpzs: "",
//        xsmy: "7.9",
//        kcmy: ""
//      },  
//      {
//        name: "四川",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      }
//   ],
//   Apr: [
//     {
//        name: "湖南",
//        uploadcnt: "25640",
//        uploadpzs: "",
//        xsmy: "344.1",
//        kcmy: "2923.4"
//      },
//     {
//        name: "上海",
//        uploadcnt: "16221",
//        uploadpzs: "12580",
//        xsmy: "197.9",
//        kcmy: "472.5"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "195973",
//        uploadpzs: "",
//        xsmy: "427.6",
//        kcmy: "25.3"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "3923",
//        uploadpzs: "",
//        xsmy: "28.2",
//        kcmy: "582.2"
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "3849",
//        uploadpzs: "",
//        xsmy: "337.5",
//        kcmy: ""
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "2348",
//        uploadpzs: "",
//        xsmy: "54.4",
//        kcmy: "126.2"
//      },
//      {
//        name: "浙江",
//        uploadcnt: "12974",
//        uploadpzs: "",
//        xsmy: "17.1",
//        kcmy: "65.5"
//      },
//      {
//        name: "江西",
//        uploadcnt: "1392",
//        uploadpzs: "",
//        xsmy: "7.4",
//        kcmy: "410.5"
//      },  
//      {
//        name: "四川",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      }
//   ],
//   May: [
//     {
//        name: "湖南",
//        uploadcnt: "16800",
//        uploadpzs: "",
//        xsmy: "206.9",
//        kcmy: "2457.8"
//      },
//     {
//        name: "上海",
//        uploadcnt: "16023",
//        uploadpzs: "9034",
//        xsmy: "87.4",
//        kcmy: "487.4"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "87231",
//        uploadpzs: "",
//        xsmy: "1106.1",
//        kcmy: "46.5"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "9557",
//        uploadpzs: "",
//        xsmy: "45.1",
//        kcmy: "1050.5"
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "2604",
//        uploadpzs: "",
//        xsmy: "48.1",
//        kcmy: "564.1"
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "3385",
//        uploadpzs: "",
//        xsmy: "45.1",
//        kcmy: "322.1"
//      },
//      {
//        name: "浙江",
//        uploadcnt: "7485",
//        uploadpzs: "",
//        xsmy: "136.6",
//        kcmy: "71.3"
//      },
//      {
//        name: "江西",
//        uploadcnt: "109",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: "412.2"
//      },  
//      {
//        name: "四川",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      }
//   ],
//   Jun: [
//     {
//        name: "湖南",
//        uploadcnt: "11453",
//        uploadpzs: "1",
//        xsmy: "450.3",
//        kcmy: "521.1"
//      },
//     {
//        name: "上海",
//        uploadcnt: "18065",
//        uploadpzs: "28549",
//        xsmy: "67.7",
//        kcmy: "267.1"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "76517",
//        uploadpzs: "",
//        xsmy: "745.7",
//        kcmy: "42.6"
//      },    
//     {
//        name: "江苏",
//        uploadcnt: "3562",
//        uploadpzs: "",
//        xsmy: "81.1",
//        kcmy: "465.2"
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "753",
//        uploadpzs: "",
//        xsmy: "40.8",
//        kcmy: "180.1"
//      },
//      {
//        name: "浙江",
//        uploadcnt: "11976",
//        uploadpzs: "",
//        xsmy: "170.3",
//        kcmy: "71.7"
//      },     
//      {
//       name: "湖北",
//       uploadcnt: "",
//       uploadpzs: "",
//       xsmy: "",
//       kcmy: ""
//     },  
//     {
//       name: "四川",
//       uploadcnt: "",
//       uploadpzs: "",
//       xsmy: "",
//       kcmy: ""
//     },
//     {
//       name: "江西",
//       uploadcnt: "",
//       uploadpzs: "",
//       xsmy: "",
//       kcmy: ""
//     }
//   ],
//   Jul: [
//     {
//        name: "湖南",
//        uploadcnt: "80847",
//        uploadpzs: "66",
//        xsmy: "35.1",
//        kcmy: "4066.9"
//      },
//     {
//        name: "上海",
//        uploadcnt: "18570",
//        uploadpzs: "12946",
//        xsmy: "104.6",
//        kcmy: "177.4"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "57718",
//        uploadpzs: "",
//        xsmy: "353.6",
//        kcmy: "31.5"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "750",
//        uploadpzs: "",
//        xsmy: "42.3",
//        kcmy: "551.1"
//      },    
//      {
//        name: "四川",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "5.6",
//        kcmy: ""
//      },
//      {
//        name: "浙江",
//        uploadcnt: "12974",
//        uploadpzs: "",
//        xsmy: "90.7",
//        kcmy: "623.3"
//      },
//       {
//        name: "江西",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "112.3",
//        kcmy: ""
//      },     
//      {
//       name: "内蒙古",
//       uploadcnt: "",
//       uploadpzs: "",
//       xsmy: "",
//       kcmy: ""
//     }
//   ],
//   Aug: [
//     {
//        name: "湖南",
//        uploadcnt: "58409",
//        uploadpzs: "",
//        xsmy: "281.4",
//        kcmy: "4146.2"
//      },
//     {
//        name: "上海",
//        uploadcnt: "15352",
//        uploadpzs: "16171",
//        xsmy: "67.8",
//        kcmy: "229.1"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "40141",
//        uploadpzs: "",
//        xsmy: "289.1",
//        kcmy: "373.5"
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "2521",
//        uploadpzs: "",
//        xsmy: "85.4",
//        kcmy: "310.9"
//      },   
//      {
//        name: "四川",
//        uploadcnt: "92",
//        uploadpzs: "",
//        xsmy: "5.1",
//        kcmy: ""
//      },
//      {
//        name: "浙江",
//        uploadcnt: "13473",
//        uploadpzs: "",
//        xsmy: "90.5",
//        kcmy: "57.4"
//      },
//       {
//        name: "江西",
//        uploadcnt: "14057",
//        uploadpzs: "",
//        xsmy: "45.8",
//        kcmy: "520.3"
//      },     
//      {
//       name: "内蒙古",
//       uploadcnt: "",
//       uploadpzs: "",
//       xsmy: "",
//       kcmy: ""
//     },  
//     {
//       name: "湖北",
//       uploadcnt: "",
//       uploadpzs: "",
//       xsmy: "",
//       kcmy: ""
//     } 
//   ],
//   Sep: [
//     {
//        name: "湖南",
//        uploadcnt: "50693",
//        uploadpzs: "1",
//        xsmy: "379.1",
//        kcmy: "4115.2"
//      },
//     {
//        name: "上海",
//        uploadcnt: "14678",
//        uploadpzs: "42639",
//        xsmy: "72.3",
//        kcmy: "170.1"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "33405",
//        uploadpzs: "",
//        xsmy: "250",
//        kcmy: "20.5"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "7733",
//        uploadpzs: "2",
//        xsmy: "7.5",
//        kcmy: "1354.4"
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "1534",
//        uploadpzs: "",
//        xsmy: "60.8",
//        kcmy: "100.2"
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "3546",
//        uploadpzs: "",
//        xsmy: "186.8",
//        kcmy: "14.8"
//      },  
//      {
//        name: "四川",
//        uploadcnt: "351",
//        uploadpzs: "",
//        xsmy: "6.2",
//        kcmy: ""
//      },
//       {
//        name: "江西",
//        uploadcnt: "6827",
//        uploadpzs: "",
//        xsmy: "80.7",
//        kcmy: "614.3"
//      },
//      {
//        name: "浙江",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      }
//   ],
//   Oct: [
//     {
//        name: "湖南",
//        uploadcnt: "72028",
//        uploadpzs: "",
//        xsmy: "70.3",
//        kcmy: ""
//      },
//     {
//        name: "上海",
//        uploadcnt: "10008",
//        uploadpzs: "9664",
//        xsmy: "53.4",
//        kcmy: "61.4"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "97368",
//        uploadpzs: "",
//        xsmy: "49.7",
//        kcmy: "1.9"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "16161",
//        uploadpzs: "",
//        xsmy: "94.6",
//        kcmy: ""
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "3123",
//        uploadpzs: "",
//        xsmy: "74.1",
//        kcmy: "33.2"
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "499",
//        uploadpzs: "",
//        xsmy: "65.7",
//        kcmy: "12.4"
//      },  
//      {
//        name: "四川",
//        uploadcnt: "94",
//        uploadpzs: "",
//        xsmy: "5.1",
//        kcmy: ""
//      },
//      {
//        name: "江西",
//        uploadcnt: "1969",
//        uploadpzs: "",
//        xsmy: "8.1",
//        kcmy: "320.2"
//      },
//      {
//        name: "浙江",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      }
//   ],
//   Nov: [
//     {
//        name: "湖南",
//        uploadcnt: "45188",
//        uploadpzs: "",
//        xsmy: "20.6",
//        kcmy: ""
//      },
//     {
//        name: "上海",
//        uploadcnt: "13960",
//        uploadpzs: "3115",
//        xsmy: "56.2",
//        kcmy: ""
//      },  
//      {
//        name: "云南",
//        uploadcnt: "67467",
//        uploadpzs: "",
//        xsmy: "43.6",
//        kcmy: ""
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "22398",
//        uploadpzs: "",
//        xsmy: "185.6",
//        kcmy: ""
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "8224",
//        uploadpzs: "",
//        xsmy: "186.7",
//        kcmy: "147.3"
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "131512",
//        uploadpzs: "",
//        xsmy: "53.1",
//        kcmy: "22.1"
//      },  
//      {
//        name: "四川",
//        uploadcnt: "363",
//        uploadpzs: "",
//        xsmy: "5.2",
//        kcmy: ""
//      },
//      {
//        name: "江西",
//        uploadcnt: "23111",
//        uploadpzs: "",
//        xsmy: "94.2",
//        kcmy: ""
//      },
//      {
//        name: "浙江",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      }
//   ],
//   Dec: [
//     {
//        name: "湖南",
//        uploadcnt: "66053",
//        uploadpzs: "16",
//        xsmy: "166.1",
//        kcmy: "2655.2"
//      },
//     {
//        name: "上海",
//        uploadcnt: "13939",
//        uploadpzs: "837",
//        xsmy: "67.2",
//        kcmy: "78.1"
//      },  
//      {
//        name: "云南",
//        uploadcnt: "39226",
//        uploadpzs: "",
//        xsmy: "27.8",
//        kcmy: "10.4"
//      },  
//      {
//        name: "湖北",
//        uploadcnt: "22886",
//        uploadpzs: "",
//        xsmy: "289.9",
//        kcmy: "1219.3"
//      },  
//     {
//        name: "江苏",
//        uploadcnt: "2331",
//        uploadpzs: "",
//        xsmy: "30.6",
//        kcmy: "254.3"
//      },  
//      {
//        name: "四川",
//        uploadcnt: "5990",
//        uploadpzs: "",
//        xsmy: "4.2",
//        kcmy: ""
//      },
//       {
//        name: "江西",
//        uploadcnt: "4835",
//        uploadpzs: "",
//        xsmy: "126.1",
//        kcmy: "243.2"
//      },  
//      {
//        name: "内蒙古",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      },
//      {
//        name: "浙江",
//        uploadcnt: "",
//        uploadpzs: "",
//        xsmy: "",
//        kcmy: ""
//      }
//   ]
// };


function dataOne() {
    return {
        mapD: mapD,
    }
};

