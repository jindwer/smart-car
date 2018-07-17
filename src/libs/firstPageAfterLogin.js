/**
 * 依据角色获取登录之后的首页
 */
export default (permission) => {
    switch(permission){
        case 'ADMIN': /* 超级管理员 */
            return '/companyList'; // 集团管理列表

        case 'COMPANY_ADMIN': /* 集团管理员 */
        case 'COMPANY_INFO_ADMIN': /* 集团信息管理员 */
            return '/company'; // 集团概况页面

        case 'STORE_ADMIN': /* 售后管理 */
            return '/store'; // 站点主页

        case 'SUPERVISOR_ADMIN': /* 前台管理 */
        case 'SUPERVISOR': /* 服务顾问 */
            return '/storeManage'; // 定损单

        case 'WORKSHOP_ADMIN': /* 车间经理 */
        case 'WORKSHOP_YARDMAN': /* 车间调度 */
            return '/storeManage/guwen'; // 顾问看板(只读 B)

        case 'WORKSHOP_ENGINEER': /* 车间技师 */
            return '/storeManage/diaodu'; // 调度看板(只读 B)

        case 'SPAREPART_ADMIN': /* 备件经理 */
            return '/storeManage/yichang'; // 异常看板

        default:
            return '/'; // 登录    
    }
}