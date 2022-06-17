// 总劳动人力数
let dataTotal = {
    total: 100,
    job: 40,
    company: 50,
    work: 60,
    personNumber: 62
}

// 人员区域分布
let dataArea = [
    [59, '水南街道'],
    [78, '西市街道'],
    [41, '茅家岭街道'],
    [127, '灵溪街道'],
    [20, '东市街道'],
    [79, '北门街道'],
    [91, '沙溪镇'],
    [10, '朝阳镇'],
    [201, '秦峰乡']
]

// 前五省份
let dataProvinces = [
    { value: 40, name: '20%' },
    { value: 38, name: '10%' },
    { value: 32, name: '15%' },
    { value: 30, name: '20%' },
    { value: 28, name: '25%' },
]

// 行业薪资岗位 柱状图
let dataJobSalary =
    // [
    //     { "name": "移动web前端", "value": 580, "valueA": 7, "values": "30000及以上", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "web前端", "value": 78, "valueA": 10, "values": "30000及以上", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "Java", "value": 41, "valueA": 7, "values": "12000-15000", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "其他产品职位", "value": 127, "valueA": 7, "values": "12000-15000", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "C++", "value": 201, "valueA": 6, "values": "9000-12000", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "Android", "value": 79, "valueA": 5, "values": "7000-9000", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "产品经理", "value": 79, "valueA": 4, "values": "5000-7000", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "游戏制作人", "value": 91, "valueA": 4, "values": "5000-7000", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "会计", "value": 101, "valueA": 4, "values": "5000-7000", "check": false, "total": 0, "male": 0, "female": 0 }, 
    //     { "name": "建筑工程师", "value": 101, "valueA": 4, "values": "5000-7000", "check": false, "total": 0, "male": 0, "female": 0 }
    // ]
    [
        [7, '监察和司法', 231],
        [10, '财政经济', 231],
        [7, '教育科学文化卫生', 231],
        [7, '农业和农村', 231],
        [6, '环境与资源保护', 231],
        [5, '社会建设', 231],
        [4, '外事华侨民族宗教', 231],
        [4, '预算', 231],
    ]
// [
//     [580, '监察和司法'],
//     [78, '财政经济'],
//     [41, '教育科学文化卫生'],
//     [127, '农业和农村'],
//     [201, '环境与资源保护'],
//     [79, '社会建设'],
//     [91, '外事华侨民族宗教'],
//     [101, '预算'],
// ]

// 行业薪资
let dataWorkIndustry = [
    { value: 40, name: '20%' },
    { value: 38, name: '10%' },
    { value: 32, name: '15%' },
    { value: 30, name: '20%' },
    { value: 28, name: '25%' },
]

// 求职岗位热度
let dataJobWantedHot = [
    [59, '水南街道'],
    [78, '西市街道'],
    [41, '茅家岭街道'],
    [127, '灵溪街道'],
    [20, '东市街道'],
    [79, '北门街道'],
    [91, '沙溪镇'],
    [10, '朝阳镇'],
    [201, '秦峰乡']
]

// 招聘职位热度
let dataJobHot = [
    [59, '水南街道'],
    [78, '西市街道'],
    [41, '茅家岭街道'],
    [127, '灵溪街道'],
    [20, '东市街道'],
    [79, '北门街道'],
    [91, '沙溪镇'],
    [10, '朝阳镇'],
    [201, '秦峰乡']
]

// 人员区域分布右边的饼图
let dataPie = [
    { value: 40, name: '20%' },
    { value: 38, name: '10%' },
    { value: 32, name: '15%' },
    { value: 30, name: '20%' },
    { value: 28, name: '25%' },
]

// 滚动的泡泡
let dataPop = [
    { name: "教育" },
    { name: "水利" },
    { name: "卫生" },
    { name: "教育" },
    { name: "行政" },
    { name: "交通" },
]

/**
 * 年龄、性别、学历比例分布
 */
// 年龄、学历
let dataAge = [
    { value: 4, name: '20-29岁' },
    { value: 2, name: '30-39岁' },
    { value: 2, name: '40-49岁' },
    { value: 1, name: '50岁以上' },
]
let dataEducation = [
    { value: 4, name: '20-29岁' },
    { value: 2, name: '30-39岁' },
    { value: 2, name: '40-49岁' },
    { value: 1, name: '50岁以上' },
]
// 性别人数
let dataGender = {
    female: 41922,
    male: 18510,
    total: 60432
}

// 求职意愿、企业用工数走势图
let dataJobWanted = [
    {
        datetime: ['17', '18', '19', '20', '21', '22', '23'],
        job: [12, 211, 21, 21, 31, 23],
        company: [12, 211, 21, 21, 31, 23]
    }
]

// 地图数据
let dataMap = {
    data: [],
    geoCoordMap: {},
}

// 平台求职能力图
var dataPlatformJob = [{
    name: '学历',
    value: 56,
    max: 100
}, {
    name: '职业资格',
    value: 56,
    max: 100
}, {
    name: '职称',
    value: 56,
    max: 100
}, {
    name: '工资',
    value: 56,
    max: 100
}, {
    name: '年龄',
    value: 56,
    max: 100
}]
var dataPlatformJobVal = [43, 100, 28, 3, 150]

// 地图数据
let dataMapProvince = [
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