import { Button, Form, Input, message } from "antd";
import React, { useCallback, useState } from "react";
import styles from "./index.less";
import { login } from "@/service";
import { history } from "umi";

export default React.memo(() => {
  const [loading,setLoading]=useState<boolean>(false)
  const handleLogin = useCallback((values:{email:string,password:string}) => {
    setLoading(true);
    login({...values}).then((res:any)=>{
      if(res.code==200){
        const {token}=res.data
        localStorage.setItem('token',`${token}`)
        history.push('/config')
      }else{
        message.error(res.msg)
      }
    })
  }, []);
  return (
    <div className={styles.login}>
      <div className={styles.switch}>
        <span title="账号登录">
          <div className={styles.loginForm}>
            <h2 className={styles.title}>账号登录</h2>
            <Form
              name="normal_login"
              className="login-form"
              onFinish={handleLogin}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: "请输入您的邮箱!" }]}
              >
                <Input
                  // prefix={<UserOutlined />}
                  placeholder="Email"
                  size="large"
                  autoComplete="on"
                  allowClear
                />
              </Form.Item>
              <Form.Item
                style={{ marginTop: 20 }}
                name="password"
                rules={[{ required: true, message: "请输入您的密码!" }]}
              >
                <Input
                  // prefix={<LockOutlined />}
                  type="password"
                  placeholder="密码"
                  size="large"
                  autoComplete="on"
                  allowClear
                />
              </Form.Item>
              <Form.Item style={{ marginTop: 40 }}>
                <Button type="primary" size="large" loading={loading} block htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
            <div className={styles.desc}>登录仅支持密码登录</div>
          </div>
        </span>
      </div>
    </div>
  );
});
