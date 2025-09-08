/**
 * 获取路由参数
 */
export const getRouteParams = (route) => {
    return route.params;
};
/**
 * 获取路由查询参数
 */
export const getRouteQuery = (route) => {
    return route.query;
};
/**
 * 构建路由路径
 */
export const buildRoutePath = (name, params) => {
    return { name, params };
};
/**
 * 检查当前路由是否匹配
 */
export const isRouteActive = (route, targetName) => {
    return route.name === targetName;
};
