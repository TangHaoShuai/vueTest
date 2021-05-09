/**   
 * api接口统一管理
 */
import { get, post } from '../../utils/request'

export const apiAddress = p => post('api/login', p);
export const apiAddress1 = p => get('api/login', p);