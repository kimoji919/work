<template>
  <div class="upload">
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        拖拉文件至此 或者 <em>点击这里上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png 文件大小需小于 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup scope>
import { UploadFilled } from "@element-plus/icons-vue";
</script>
<style >

</style>