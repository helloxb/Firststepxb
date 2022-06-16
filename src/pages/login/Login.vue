<template>
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr/>
  <button @click="updateName">修改store中的name</button>
  <div v-for="(item,i) in data" :key="i" class="divaa test-color">
    <p style="color: red;">{{item.title}}</p>
    <p style="color: green;">{{item.id}}</p>
    <p style="color: orange;">{{item.body}}</p>
    <p style="color: pink;">{{item.userId}}</p>
  </div>
  <n-button>naive-ui</n-button>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import { useMainStore } from '@/store/main'
import { NButton } from "naive-ui"
import loginss  from '@/service/api/login/login'
import {ILoginParams} from '@/service/api/login/types'
import HelloWorldVue from '@/components/HelloWorld.vue';
const mainStore = useMainStore()

const updateName = ()=>{
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了'
  })
}
interface ss {
  body:string,
  id:number,
  title:string,
  userId:number
}
 const data = ref<ss[]>([]);
 const aa = async () =>{
   console.log('111');
      await loginss.login().then((reee) =>{
      if(reee){
        data.value = reee;
        console.log(data.value);
      }
    }).catch((err)=>{console.log(err);
    })
   } 
  aa();
</script>
<style  scoped>
  .divaa{
    width: 80%;
    margin: 20px 0px 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>