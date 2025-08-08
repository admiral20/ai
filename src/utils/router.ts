import type { RouteLocationNormalized } from 'vue-router'

/**
 * 获取路由参数
 */
export const getRouteParams = (route: RouteLocationNormalized) => {
  return route.params
}

/**
 * 获取路由查询参数
 */
export const getRouteQuery = (route: RouteLocationNormalized) => {
  return route.query
}

/**
 * 构建路由路径
 */
export const buildRoutePath = (name: string, params?: Record<string, any>) => {
  return { name, params }
}

/**
 * 检查当前路由是否匹配
 */
export const isRouteActive = (route: RouteLocationNormalized, targetName: string) => {
  return route.name === targetName
}