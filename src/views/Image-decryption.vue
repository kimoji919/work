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
<style>
.el-upload{
  color: chartreuse;
}
.el-upload-dragger {
  
    background: none !important;
    border: none !important;
    border-radius: none !important;
    box-sizing: border-box;
    width: 500px !important;
    height: 250px !important;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.el-upload-dragger .el-icon--upload {
    font-size: 170px !important;
    color: var(--el-text-color-placeholder);
    margin: 40px 0 16px;
    line-height: 50px;
}
.upload {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 750px;
  height: 450px;
  margin: 20px;
  box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.1),
    -18px -18px 30px rgba(255, 255, 255, 1);
  border-radius: 50px;
  background-color: #efeeee;
  transition: box-shadow 0.2s ease-out;
  position: relative;
}
.upload:hover {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 18px 18px 30px rgba(0, 0, 0, 0.1),
    inset -18px -18px 30px rgba(255, 255, 255, 1);
  transition: box-shadow 0.2s ease-out;
}
</style>
