<template>
  <h3>{{ title }}</h3>
  <div>
  <van-row class="div_row">
      <van-col span="24">
       <van-button type="primary" size="large" to="/TestList" > 查看题库 </van-button>
      </van-col>
  </van-row>

   <van-row class="div_row">
        <van-col span="24">
       <van-button type="primary" size="large" to="/Exam">顺序刷题</van-button>
      </van-col>
   </van-row>

    <van-row class="div_row">
         <van-col span="24">
       <van-button type="primary" size="large">模拟考试</van-button>
      </van-col>
    </van-row>

    <van-row class="div_row">
         <van-col span="24">
       <van-button type="primary" size="large" @click="this.$router.back(-1)">返回</van-button>
      </van-col>
    </van-row>

  </div>
</template>

<script>
import { Button, Field, Switch, Loading, Grid, GridItem , Col, Row } from "vant";
import { apiAddress } from "@/views/API/api"; // 导入我们的api接口
export default {
  name: "TestHome",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Switch.name]: Switch,
    [Loading.name]: Loading,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Col.name]: Col,
    [Row.name]: Row,
  },
  data() {
    return {
      checked: true,
      value: "11111",
      title: "",
    };
  },
  mounted() {
    this.title = this.$route.params.name;
  },
  created() {
    this.onLoad();
  },
  methods: {
    getxx() {
      console.log(this.$route.params.name);
    },
    // 获取数据
    onLoad() {
      // 调用api接口，并且提供了两个参数
      apiAddress({
        type: 0,
        sort: 1,
      }).then((res) => {
        // 获取数据成功后的其他操作
        console.log(res);
      });
    },
  },
};
</script>
<style>
.div_row
{
margin-bottom: 1rem;
}
</style>