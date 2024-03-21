import {layoutStore} from "../stores/layout.ts"
import {userStore} from "../stores/user.ts"
import router from '../routes'
import {message, Modal} from "ant-design-vue";
import copy from "copy-to-clipboard";

export const changeLayout = (layout: string) => {
  const layoutSt = layoutStore()
  layoutSt.changeLayout(layout)
}

export const logout = () => {
  const user = userStore()
  user.setUserData({
    email: '',
    name: '',
    role: '',
  })
  router.push('/login')
}

export const checkClipboardPermission = async () => {
  try {
    const permissionStatus = await navigator.permissions.query({name: "write-on-clipboard"});
    console.log(permissionStatus.state);
  } catch (error) {
    console.error("Error checking clipboard permission:", error);
  }
}

export const writeToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    message.success('Copied!')
  } catch (error: any) {
    message.error(error.message)
  }
}

export const showOtp = async (title: string, otp: string, expiry: number = 30) => {
  try {
    const modal = Modal.success({
      title,
      content: `You OTP code is: ${otp}, Will close in ${expiry} second.`,
      okText: 'Copy OTP',
      onOk: (async () => {
        //await checkClipboardPermission()
        //await writeToClipboard(result.code)
        copy(otp, {
          debug: true,
          message: 'Copied!',
        });
        message.success('Copied!')
      })
    });

    const interval = setInterval(() => {
      expiry -= 1;
      modal.update({
        content: `You OTP code is: ${otp}, Will close in ${expiry} second.`,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      modal.destroy();
    }, expiry * 1000);
  } catch (err: any) {
    message.error(err.message)
  }
}