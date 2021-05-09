<template>
  <h3>英语复习</h3>
  <van-row>
    <van-field
      v-model="title"
      rows="2"
      autosize
      label="题目"
      label-width="30px"
      type="textarea"
    />
  </van-row>

  <div class="popup_div">
    <van-checkbox-group v-model="checked" :max="max"  >
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          clickable
          :key="item"
          :title="this.letter[index] + `&nbsp&nbsp&nbsp&nbsp${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <van-checkbox
              :disabled= this.static
              checked-color="#ee0a24"
              :name="item"
              :ref="(el) => (checkboxRefs[index] = el)"
              @click.stop
            />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
import {
  Button,
  Field,
  Switch,
  Loading,
  Grid,
  GridItem,
  Col,
  Row,
  List,
  Search,
  Cell,
  CellGroup,
  Popup,
  Icon,
  Checkbox,
  CheckboxGroup,
} from "vant";
import { apiAddress } from "@/views/API/api"; // 导入我们的api接口
import { ref, onBeforeUpdate } from "vue";
export default {
  name: "Exam",

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
    [Search.name]: Search,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Popup.name]: Popup,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
  },
  data() {
    const checked = ref([]);
    const checkboxRefs = ref([]);
    const toggle = (index) => {
      checkboxRefs.value[index].toggle();
      console.log(checked);
      // if (
      //   this.right.replace(/^\s+|\s+$/g, "") ==
      //   this.list[index].replace(/^\s+|\s+$/g, "")
      // ) {
         
        this.list = ["precede2", "process2", "provide2", "possess2"];
        this.title = "1. I want something to eat. Please give me a .";
         this. checked = ref([]);
       this. checkboxRefs = ref([]);
      // }else{
      //   console.log(2);
      // }
    };
    onBeforeUpdate(() => {
      checkboxRefs.value = [];
    });
    return {
      static: false,
      right: "provide",
      toggle,
      checked,
      checkboxRefs,
      letter: ["A", "B", "C", "D", "E", "F", "G"],
      list: ["precede", "process", "provide", "possess"],
      max: "1",
      title:
        "1. I want something to eat. Please give me a . Please give me a .Please give me a . Please give me a .Please give me a . Please give me a .Please give me a .",
    };
  },
  mounted() {},
  created() {
    this.getApi();
  },
  methods: {
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
.popup_div {
  text-align: left;
}
</style>