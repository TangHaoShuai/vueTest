<template>
  <van-row>
     <van-col span="2" >
     <van-icon class="img_icon" name="arrow-left"  size="30" @click="this.$router.back(-1)"/>
     </van-col>
       <van-col span="22">
         <H4>题库</H4>
     </van-col>
  </van-row>

  <van-search v-model="value" placeholder="请输入搜索关键词" />

<van-row class="popup_div">
  <van-col span="24">

  <van-list
        offset="0"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多啦"
        loading-text="为了让你及格拼命加载中"
        @load="load_more"
        class="publist"
      >
  <van-cell v-for="item in list" :key="item" center title="听力题 TestA" 
  value="1. I want something to eat. Please give me a ." label="答案:A"  @click="getItem(item)"/>
  </van-list>

  </van-col>
</van-row>

<div class="popup_div">
  <van-popup round v-model:show="show" position="bottom" :style="{ height: '60%' }" > 
     <van-cell title="题目类型"  value="听力" size="large" />
     <van-cell title="题目" value=" I want something to eat. Please give me a ." size="large" />
     <van-cell title="选项" value="(A)precede (B)process (C)provide (D)possess" size="large" />
     <van-cell title="正确答案" value="A" size="large" />
     <van-cell title="解析" value="无" size="large" />
  </van-popup>
</div>
</template>

<script>
import { Button, Field, Switch, Loading, Grid, GridItem , Col, Row, List, Search , Cell, CellGroup ,Popup, Icon  } from "vant";
import { apiAddress } from "@/views/API/api"; // 导入我们的api接口
export default {
  name: "TestList",
  components: {
     [Icon.name]: Icon,
    [Button.name]: Button,
    [Field.name]: Field,
    [Switch.name]: Switch,
    [Loading.name]: Loading,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Col.name]: Col,
    [Row.name]: Row,
    [List.name]: List,
    [Search.name]:Search,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Popup.name]:Popup,
  },
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
      show: false,
    };
  },
  mounted() {
    this.title = this.$route.params.name;
  },
  created() {
    this.getApi();
  },
  methods: {
       load_more() {
         console.log("loading    "+this.loading);
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束 加载过程中不触发load事件
        this.loading = false;
        // 数据全部加载完成 是否已加载完成，加载完成后不再触发load事件
        if (this.list.length >= 30) {
          this.finished = true;
        }
      }, 1000);
    },
    getItem(Item){
      console.log(Item);
      this.show = true;
    },
    // 获取数据
    getApi() {
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
.popup_div{
  text-align:left
}
.div_1{
  display: table;
}
.img_icon{
  /* display: inline-block;
  vertical-align: middle; */
  margin-top: 1rem;
}
</style>