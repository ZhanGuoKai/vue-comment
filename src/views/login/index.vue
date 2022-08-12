<template>
  <div class="login-container">
    <el-tabs type="border-card" class="tab" :stretch="true">
      <el-tab-pane>
        <span slot="label" class="tab-label">密码登录</span>
        <el-form
          ref="passwordForm"
          :model="userInfo"
          :rules="validateRules"
          :status-icon="true"
        >
          <el-form-item prop="phone">
            <el-input v-model="userInfo.phone" placeholder="输入手机号" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="userInfo.password" placeholder="输入密码" />
          </el-form-item>
        </el-form>
        <el-button class="login" type="primary" @click="loginByPassword">
          登 &nbsp; 录
        </el-button>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" class="tab-label">验证码登录</span>
        <el-form
          ref="codeForm"
          :model="userInfo"
          :rules="validateRules"
          :status-icon="true"
        >
          <el-form-item prop="phone">
            <el-input v-model="userInfo.phone" placeholder="输入手机号" />
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="userInfo.code" placeholder="输入验证码">
              <el-button
                slot="append"
                :disabled="codeButtonDisabled"
                @click="getCode"
              >
                {{ codeButtonText }}
              </el-button>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button class="login" type="primary" @click="loginByCode">
          登录/注册
        </el-button>
      </el-tab-pane>
      <el-checkbox>
        <span>同意点评</span>
        <el-button type="text">《用户协议》</el-button>
        <span>和</span>
        <el-button type="text">《隐私协议》</el-button>
      </el-checkbox>
    </el-tabs>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import loginApi from '@/api/login';

export default {
  name: 'Login',

  data() {
    return {
      /** 用户输入信息 */
      userInfo: {
        phone: '',
        password: '',
        code: ''
      },
      /** 表单验证规则 */
      validateRules: {
        phone: [
          { required: true, trigger: 'blur', message: '请输入手机号' },
          { len: 11, trigger: 'blur', message: '请输入11位手机号' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码' },
          { min: 6, max: 20, trigger: 'blur', message: '密码长度为6~20' },
          {
            pattern: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]*$/,
            trigger: 'blur',
            message: '密码必须且只能包含数字和字母'
          }
        ],
        code: [{ required: true, trigger: 'blur', message: '请输入验证码' }]
      },
      /** 再次发送验证码剩余的时间 */
      time: 0
    };
  },

  methods: {
    ...mapActions(['Login']),

    /** 获取验证码 */
    getCode() {
      const phone = this.userInfo.phone;
      if (phone && phone.length == 11) {
        loginApi
          .getVerificationCode(phone)
          .then(response => {
            if (response.success) {
              this.$message.success('发送成功！');
              this.time = 60;
              const timer = setInterval(() => {
                this.time--;
                if (this.time == 0) clearInterval(timer);
              }, 1000);
            } else {
              this.$message.error(response.msg);
            }
          })
          .catch(error => this.$message.error(error));
      } else {
        this.$message.warning('请输入11位手机号');
      }
    },

    /**
     * 登录
     *
     * @param {{phone:string,password:string?,code:string?}} userInfo 用户登录信息
     */
    async login(userInfo) {
      try {
        await this.Login(userInfo);
        this.$message('登录成功');
        this.$router.replace('/');
      } catch (error) {
        this.$message.error(error);
      }
    },

    /** 密码登录 */
    loginByPassword() {
      this.$refs.passwordForm.validate(async validate => {
        if (!validate) {
          this.$message.warning('请正确填写信息');
          return;
        }
        const { phone, password } = this.userInfo;
        this.login({ phone, password });
      });
    },

    /** 验证码登录 */
    loginByCode() {
      this.$refs.codeForm.validate(async validate => {
        if (!validate) {
          this.$message.warning('请正确填写信息');
          return;
        }
        const { phone, code } = this.userInfo;
        this.login({ phone, code });
      });
    }
  },

  computed: {
    /** 验证码按钮文字 */
    codeButtonText() {
      return this.time == 0 ? '发送验证码' : `再次发送(${this.time})`;
    },

    /** 验证码按钮是否不可用 */
    codeButtonDisabled() {
      return this.time != 0;
    }
  }
};
</script>

<style scoped>
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url('~@/assets/login-background.jpg');
  background-position: center;
  background-size: 100%;
}
.tab {
  position: absolute;
  right: 50px;
  top: 30%;
  width: 350px;
  background-color: white;
}
.tab-label {
  font-size: 18px;
}
.login {
  width: 100%;
  font-size: 16px;
}
</style>
