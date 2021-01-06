<template>
  <ul class="username-type-tag">
    <li>
      <i class="icon icon-size-18 icon-mb--4"></i>
      手机
    </li>
    <li>
      <i class="icon icon-size-18 icon-mb--4"></i>
      邮箱
    </li>
  </ul>
</template>

<script>
export default {
  name: "PageName",
  components: {},
  props: {}
}
</script>

<style lang="scss" scoped>
  .username-type-tag{
    text-align: right;
    li {
      display: inline-block;
      margin-left: 15px;
      padding: 7px 15px 6px 14px;
      border-radius: 100px;
      font-size: 14px;
      background-color: #fff;
      line-height: 18px;
      color: #ccc;
    }
  }
</style>
