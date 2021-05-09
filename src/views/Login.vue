<template>
<h3>北部湾补考复习模拟训练</h3>
<van-grid :gutter="10">
  <van-grid-item icon="http://localhost:8080/yingyu.jpg" @click="geTo('英语复习')"  text="英语" />
  <van-grid-item icon="http://localhost:8080/makesi.jpg"  @click="geTo('马克思原理')" text="马克思原理" />
  <van-grid-item icon="http://localhost:8080/java.jpg"  @click="geTo('Java基础')" text="Java基础" />
  <van-grid-item icon="http://localhost:8080/sqlserver.jpg" @click="geTo('数据库原理')"  text="数据库原理" />
   <van-grid-item icon="http://localhost:8080/wangluo.jpg" @click="geTo('计算机网络')" text="计算机网络" />
</van-grid>
</template>

<script>
import { Button , Field , Switch ,Loading ,Grid, GridItem} from 'vant';
import { apiAddress } from '@/views/API/api';// 导入我们的api接口

export default {
  name: 'Login',
  components: {
    [Button.name]: Button,
     [Field.name]: Field,
     [Switch.name]: Switch,
     [Loading.name]:Loading,
     [Grid.name]:Grid,
     [GridItem.name]:GridItem
  },
  data() {
    return {
       checked: true,
    };
  },
   created () {
        this.onLoad();
    },
    methods: {    
      geTo(name){
      this.$router.push({
        path: `/TestHome/${name}`
      })
      } ,       
        // 获取数据            
        onLoad() {
            // 调用api接口，并且提供了两个参数                
            apiAddress({                    
                type: 0,                    
                sort: 1                
            }).then(res => {
                // 获取数据成功后的其他操作
                console.log(res);         
            })            
        }   
    }
}
</script>
