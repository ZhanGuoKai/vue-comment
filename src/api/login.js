import request from '@/utils/request';
import qs from 'querystring';

/**
 * @typedef Info 用户登录信息
 * @property {string} phone 手机号
 * @property {string=} password 密码
 * @property {string=} code 验证码
 */
/**
 * @template T 响应数据类型
 * @typedef Response<T> 响应信息
 * @property {number} code 响应码
 * @property {string} msg 响应信息
 * @property {boolean} success 是否操作成功
 * @property {T} data 响应数据
 */

export default {
  /**
   * 登录
   *
   * @param {Info} userInfo 用户登录信息
   * @returns {Promise<Response<{token:string}>>}
   */
  login(userInfo) {
    return request.post('/uaa/login', userInfo);
  },

  /**
   * 获取验证码
   *
   * @param {string} phone 手机号
   * @returns {Promise<Response<{}>>}
   */
  getVerificationCode(phone) {
    return request.post('/uaa/auth/send/code', qs.stringify({ phone }));
  },

  /**
   * 登出
   * 
   * @returns {Promise<Response<{}>>}
   */
  logout() {
    return request.post('/uaa/auth/logout');
  }
};
