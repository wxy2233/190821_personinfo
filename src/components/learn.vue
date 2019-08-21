<template>
    <div class="vue-study">

      <h1> vue-基本使用 </h1>
     <div>
       <!-- 双向数据绑定 v-model -->
       <input type="text" v-model="msg"><br>
       <!-- 数据显示 {{ ** }} -->
       {{ msg }}
     </div>

      <h1> vue-模板语法 </h1>
     <div>
       <!--
           MVVM:
           model: 模型，数据对象（data）
           view: 视图，模板页面，用于显示数据  ，包含 指令 和 大括号表达式用于显示数据
           viewmodel: 视图模型（ vue的实例 ）
      -->
       <!-- 模板：动态的HTML页面，包含一些JS语法代码，指令（以v-开头的自定义标签属性）和大括号 -->
       <!-- 1.双括号表达式  -->
       <p>{{ msg }}</p>
       <p>{{ msg.toUpperCase() }}</p>
       <p v-text="info"></p>
       <p v-html="info" ></p>
       <!-- 2.强制数据绑定 -->
       <img :src="img" alt="" style="width: 100px"><br>
       <!-- 3.绑定事件监听 -->
       <a href="" @click.prevent="test">陈情令</a><br>
       <a href="" @click.prevent="test2(msg)">陈情令</a>
     </div>

      <h1> vue-计算机属性和监视</h1>
      <div>
        姓： <input type="text" v-model="firstname"><br>
        名： <input type="text" v-model="lastname"><br>
        姓名1（单向）：<input type="text" v-model="fullName1"><br>
        姓名2（单向）：<input type="text" v-model="fullName2"><br>
        姓名3（双向）：<input type="text" v-model="fullName3">

        <!-- 计算机属性存在缓存，多次读取只执行一个getter
              getter:属性的get方法
              setter:属性的set方法
         -->
        <p>{{ fullName1 }}</p>
        <p>{{ fullName1 }}</p>
        <p>{{ fullName1 }}</p>
      </div>

      <h1> vue-class与style绑定</h1>
      <div>
        <!-- class绑定 -->
        <p :class="a" class="cClass">陈情令</p>
        <p :class="{ aClass:isA ,bClass:isB }" class="cClass">对象</p>

        <!-- style绑定 -->
        <p :style="{ color:color ,fontSize:fontSize +'px' }" class="cClass">魏婴</p>

        <button @click="update">更新</button>
      </div>

      <h1> vue-条件渲染</h1>
     <div>
       <!-- 标签移除 -->
       <p v-if="isA">成功了</p>
       <p v-else="isA">失败了</p>

       <!-- 通过样式隐藏 -->
       <!-- 频繁切换时，使用 v-show-->
       <p v-show="isA">表白成功了</p>
       <p v-show="!isA">表白失败了</p>
       <button @click="isA=!isA">更新</button>
     </div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
              msg:'hello',
              info: '<a href="" >你好</a>',
              img:'https://cn.vuejs.org/images/logo.png',
              firstname: 'A',
              lastname: 'B',
              // fullName1:'',
              fullName2:'A B',
              // fullName3:'',
              a:'aClass',
              isA: true,
              isB:false,
              color:'green',
              fontSize: 20
            };
        },
      methods:{
        test(){
          console.log("ok");
        },
        test2(data){
          console.log(data);
        },
        update(){
          this.a = 'bClass';
          this.isA = !this.isA;
          this.isB = true;
        }
      },
      computed:{
        fullName1(){
          console.log("ok");
          return this.firstname + this.lastname;
        },
        fullName3:{
          // 回调函数：你定义，你没调，但最终执行了
          // 什么时候调用，用来做什么
          get(){
            return this.firstname +  " " + this.lastname;
          },
          set(newVal){ // set 监视当前属性的变化
            console.log(newVal);
            const name = newVal.split(" ");
            this.firstname = name[0];
            this.lastname = name[1];
          }
        }
      },
      watch:{
          "firstname":function (newVal ,oldVal) {
             this.fullName2 = newVal + this.lastname;
          },
          "lastname":function (newVal) {
            this.fullName2 = this.firstname + newVal;
          }
      }
    };
</script>

<style scoped="">
  .aClass {
    color: red;
  }
  .bClass {
    color: cornflowerblue;
  }
  .cClass {
    font-size: 20px;
  }
</style>
