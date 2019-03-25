<template>
  <div class="form-config-container">
        <el-form label-position="left">
            <el-form-item label="表单名称">
                <el-button @click="show()">查看</el-button>
            </el-form-item>
      <el-form-item label="表单名称">
        <el-input v-model="data.name"></el-input>
      </el-form-item>
      <el-form-item label="表单描述">
        <el-input v-model="data.description"></el-input>
      </el-form-item>
      <el-form-item label="录入次数">
        <el-input-number v-model="data.maxTimes" :min="1" :max="10" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="审批">
        <el-checkbox v-model="data.hasAudit" label="需要审批"/>
      </el-form-item>

      <el-form-item label="排序（数值越小越靠前）">
        <el-input-number v-model="data.sort" :min="0" :max="1000" :step="1"></el-input-number>
      </el-form-item>

      <el-form-item label="表单字段宽度">
        <el-input-number v-model="data.labelWidth" :min="0" :max="200" :step="10"></el-input-number>
      </el-form-item>

      <el-form-item label="标签对齐方式">
        <el-radio-group v-model="data.labelPosition">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['data'],
    methods:{
      show:function(event){
          console.log(this.data)

          this.data['name'] = 'sdfsdksdlfasdjfladsf';
          return this.data;
      }
    }
}
</script>
