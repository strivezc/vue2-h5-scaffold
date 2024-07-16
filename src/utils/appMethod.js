import {isAndroid, isIOS} from './index';


/**
 *@desc 不同意协议，通知app清空数据返回登录页
 *@author zzc
 *@date 2021/08/26
 */
export function disagreePrivacy(){
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    try {
      return window.webkit.messageHandlers.disagreePrivacy.postMessage(null)
    } catch (error) {
      console.log(error)
    }
  } else if (/(Android)/i.test(navigator.userAgent)) {
    try {
      return window.qd.disagreePrivacy()
    } catch (error) {
      console.log(error)
    }
  }
}

/**
 *@desc 返回原生
 *@author zzc
 *@date 2021/11/12
 */
export function goBack() {
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.goBack.postMessage(null)
    } catch (error) {
      console.log(error)
    }
  } else if (isAndroid()) {
    try {
      return window.qd.goBack()
    } catch (error) {
      console.log(error)
    }
  }
}

/**
 *@desc 退出登录
 *@author zzc
 *@date 2021/11/12
 */
export function logout() {
  if (isIOS()) {
    try {
      return window.webkit.messageHandlers.logout.postMessage(null)
    } catch (error) {
      console.log(error)
    }
  } else if (isAndroid()) {
    try {
      return window.qd.logout()
    } catch (error) {
      console.log(error)
    }
  }
}
