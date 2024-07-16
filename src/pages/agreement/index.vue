<template>
  <div class="content complianceContent">
    <div v-html="content">{{ content }}</div>
    <div v-if="type==2 && showCheck" class="checkbox">
      <van-checkbox v-model="checked" shape="square" @change="changeCheck">我已阅读并同意《隐私政策》</van-checkbox>
    </div>
  </div>
</template>

<script>
import { queryAgreementOne } from '@/api/user'
import { disagreePrivacy } from '@/utils/appMethod'

export default {
  name: 'Agreement',
  data() {
    return {
      content: '',
      type: '',
      checked: true,
      showCheck: null
    }
  },
  created() {
    this.type = this.$route.query.type
    this.platformType = this.$route.query.platformType
    this.showCheck = this.$route.query.showCheck
    this.getContent()
  },
  methods: {
    changeCheck(val) {
      if (!val) {
        this.$dialog.confirm({
          message: '若点击确定撤回《隐私政策》的同意，App将无法正常使用哦！',
          confirmButtonText: '取消撤回',
          cancelButtonText: '确定撤回'
        }).then(() => {
          this.checked = true
        }).catch(() => {
          disagreePrivacy()
        })
      }
    },
    async getContent() {
      try {
        const { data } = await queryAgreementOne({
          type: this.type,
          platformType: this.platformType
        })
        if (data && data.content) {
          this.content = data.content
        }
      } catch (e) {
        console.log(e, 'error')
      }
    }
  }
}
</script>

<style>
  .complianceContent img {
    max-width: 100%;
  }
</style>

<style scoped>
  .content {
    font-size: 30px;
    padding: 20px;
    word-break: break-word;
  }
  .checkbox{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }
</style>
