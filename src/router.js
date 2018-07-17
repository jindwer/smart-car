const routers = [{
    path: '/',
    meta: {
        title: '登录-智慧钣喷集团',
        auth: '01'
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
},{
    path: '/addCompany',
    meta: {
        title: '添加集团-智慧钣喷集团',
        auth: '03'
    },
    component: (resolve) => require(['./views/home/admin/addCompany.vue'], resolve)
},{
    path: '/companyList',
    meta: {
        title: '集团管理-智慧钣喷集团',
        auth: '02'
    },
    component: (resolve) => require(['./views/home/admin/companyList.vue'], resolve)
},{
    path: '/company',
    component: (resolve) => require(['./views/home/company/index.vue'], resolve),
    children: [
        {
            path: '',
            meta: {
                title: '集团概况-智慧钣喷集团',
                auth: '04'
            },
            component: (resolve) => require(['./views/home/company/main.vue'], resolve),
        },
        {
            path: 'storeList',
            meta: {
                title: '集团维修站列表-智慧钣喷集团',
                auth: '14'
            },
            component: (resolve) => require(['./views/home/company/storeList.vue'], resolve),
        },
        {
            path: 'dayBanpeng',
            meta: {
                title: '集团日钣喷台数-智慧钣喷集团',
                auth: '05'
            },
            component: (resolve) => require(['./views/home/company/dayBanpeng.vue'], resolve),
        },
        {
            path: 'monthBanpeng',
            meta: {
                title: '集团月钣喷台数-智慧钣喷集团',
                auth: '06'
            },
            component: (resolve) => require(['./views/home/company/monthBanpeng.vue'], resolve),
        },
        {
            path: 'jiaochelv',
            meta: {
                title: '集团准时交车率-智慧钣喷集团',
                auth: '07'
            },
            component: (resolve) => require(['./views/home/company/jiaochelv.vue'], resolve),
        },
        {
            path: 'countShichang',
            meta: {
                title: '集团维修时长统计-智慧钣喷集团',
                auth: '08'
            },
            component: (resolve) => require(['./views/home/company/countShichang.vue'], resolve),
        },
        {
            path: 'analyzeLeixing',
            meta: {
                title: '集团维修类型分析-智慧钣喷集团',
                auth: '09'
            },
            component: (resolve) => require(['./views/home/company/analyzeLeixing.vue'], resolve),
        },
        {
            path: 'countBujian',
            meta: {
                title: '集团维修部件统计-智慧钣喷集团',
                auth: '10'
            },
            component: (resolve) => require(['./views/home/company/countBujian.vue'], resolve),
        },
        {
            path: 'baogao',
            meta: {
                title: '集团工作报告-智慧钣喷集团',
                auth: '11'
            },
            component: (resolve) => require(['./views/home/company/baogao.vue'], resolve),
        },
        {
            path: 'systemConfig',
            meta: {
                title: '集团系统设置-智慧钣喷集团',
                auth: '12'
            },
            component: (resolve) => require(['./views/home/company/systemConfig.vue'], resolve),
        },
        {
            path: 'addStore',
            meta: {
                title: '集团添加维修站-智慧钣喷集团',
                auth: '13'
            },
            component: (resolve) => require(['./views/home/company/addStore.vue'], resolve),
        }
    ]
},{
    path: '/store',
    meta: {
        title: '站点主页-智慧钣喷集团',
        auth: '15'
    },
    component: (resolve) => require(['./views/home/store/Group.vue'], resolve)
},{
    path: '/storeManage',
    component: (resolve) => require(['./views/home/store/index.vue'], resolve),
    children: [
        {
            path: '',
            meta: {
                title: '定损单-智慧钣喷集团',
                auth: '16'
            },
            component: (resolve) => require(['./views/home/store/judge.vue'], resolve)
        },
        {
            path: 'guwen',
            meta: {
                title: '顾问看板-智慧钣喷集团',
                auth: '17'
            },
            component: (resolve) => require(['./views/home/store/guwenkanban.vue'], resolve)
        },
        {
            path: 'jiaoche',
            meta: {
                title: '交车看板-智慧钣喷集团',
                auth: '18'
            },
            component: (resolve) => require(['./views/home/store/jiaochekanban.vue'], resolve)
        },
        {
            path: 'jiesuan',
            meta: {
                title: '结算工单-智慧钣喷集团',
                auth: '19'
            },
            component: (resolve) => require(['./views/home/store/jiesuangongdan.vue'], resolve)
        },
        {
            path: 'diaodu',
            meta: {
                title: '调度看板-智慧钣喷集团',
                auth: '20'
            },
            component: (resolve) => require(['./views/home/store/diaodukanban.vue'], resolve)
        },
        {
            path: 'jishi',
            meta: {
                title: '技师工作台-智慧钣喷集团',
                auth: '21'
            },
            component: (resolve) => require(['./views/home/store/jishigongzuotai.vue'], resolve)
        },
        {
            path: 'jindu',
            meta: {
                title: '进度看板-智慧钣喷集团',
                auth: '22'
            },
            component: (resolve) => require(['./views/home/store/jindukanban.vue'], resolve)
        },
        {
            path: 'yichang',
            meta: {
                title: '异常看板-智慧钣喷集团',
                auth: '23'
            },
            component: (resolve) => require(['./views/home/store/yichangkanban.vue'], resolve)
        },
        { // 具有多个页面 24-1 24-2 24-3 24-4 24-5
            path: 'systemConfig',
            meta: {
                title: '站点系统设置-智慧钣喷集团',
                auth: ''
            },
            component: (resolve) => require(['./views/home/store/systemConfig.vue'], resolve)
        },
        {
            path: 'baogao',
            meta: {
                title: '站点工作报告-智慧钣喷集团',
                auth: '25'
            },
            component: (resolve) => require(['./views/home/store/baogao.vue'], resolve)
        }
    ]
},{
    path: '*',
    meta: {
        title: '页面不存在-智慧钣喷集团',
        auth: ''
    },
    component: (resolve) => require(['./views/notFound.vue'], resolve)
}];
export default routers;