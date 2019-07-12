/*
 * action 类型
 */

export const UPDATE_HOME = 'UPDATE_HOME';

/*
 * action 创建函数
 */
export function updateHome(data) {
  return { type: UPDATE_HOME, data };
}