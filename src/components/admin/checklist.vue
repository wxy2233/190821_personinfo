<template>
  <div id="assess">
    <p style="font-size: 28px;text-align: center;font-weight:bold;margin-bottom: 8px">应聘者面试评价表</p>
   <div style="width: 80%;margin: 0 auto">
     <div class="info" style="display:flex;flex-flow: row wrap;">
       <div style="width: 50%;">
         <p>Interviewed by</p>
         <p><span>公司面试者：</span>
           <el-input v-model="judgeInterviewedBy" placeholder="" style="width: 60%;"></el-input>
         </p>
       </div>
       <div style="width: 50%">
         <p>Date</p>
         <p>日期：
           <el-input v-model="judgeDate" placeholder="" style="width: 60%;"></el-input>
         </p>
       </div>
     </div>
     <hr style="margin-bottom: 2px;"/>
     <div class="info" style="display:flex;flex-flow: row wrap;">
       <div style="width: 100%;">
         <p style="font-size: 18px;padding: 6px">advantage</p>
         <p style="font-size: 18px;padding: 3px">应聘者的优点：
           <el-input
             type="textarea"
             :rows="2"
             placeholder="请输入内容"
             v-model="judgeAdvantage">
           </el-input>
         </p>
       </div>
     </div>
     <div class="info" style="display:flex;flex-flow: row wrap;">
       <div style="width: 100%;">
         <p style="font-size: 18px;padding: 6px">Weakness</p>
         <p style="font-size: 18px;padding: 3px">应聘者的缺点：
           <el-input
             type="textarea"
             :rows="2"
             placeholder="请输入内容"
             v-model="judgeWeakness">
           </el-input>
         </p>
       </div>
     </div>
     <div class="info">
       <p style="padding: 6px">Hired or not？</p>
       <p style="padding: 6px">是否录用？：
         <el-radio v-model="judgeHiredId" label="1" >是(Yes)</el-radio>
         <el-radio v-model="judgeHiredId" label="2">否(No)</el-radio>
       </p>
     </div>
     <hr style="margin-bottom: 2px;"/>
     <div class="info" style="display:flex;flex-flow: row wrap;">
       <div style="width: 50%;">
         <p style="margin-top: 2px">Date of start</p>
         <p>入职日期：
           <el-input v-model="judgeDateOfStart" placeholder="" style="width: 60%;"></el-input>
         </p>
       </div>
       <div style="width: 50%">
         <p>Salary/Wage</p>
         <p>工资：
           <el-input v-model="judgeSalary" placeholder="" style="width: 60%;"></el-input>
         </p>
       </div>
     </div>
     <hr style="margin-bottom: 2px;"/>
     <div class="info" style="width: 100%;margin-top: 2px">
       <p  style="margin-top: 2px;padding: 4px">Approved</p>
         <p style="padding: 3px">批准者：
           <input type="text" v-model="judgeApproved" style="font-size: 18px; border-right: none;border-left: none;border-top: none;border-bottom: 1px solid black;outline:medium;">
         </p>
       </div>
   </div>

    <!--保存-->
    <div style="display: flex;justify-content: space-around;margin-top: 40px">
      <el-button @click="go('infoRecord')" type="primary" size="medium" round >返回</el-button>
      <el-button @click="sendAssess(id)" type="primary" size="medium" round >保存</el-button>
    </div>
  </div>

</template>

<script>
    export default {
        name: "assess",
      data(){
          return{
            id:'1',
            judgeInterviewedBy:'',
            judgeDate:'',
            judgeAdvantage:'',
            judgeWeakness:'',
            judgeHiredId:'',
            judgeDateOfStart:'',
            judgeSalary:'',
            judgeApproved:'',

          }
      },
      created(){
        this.id = this.$route.query.id;
      },
      methods:{
        sendAssess(id){
          let _this = this;
          let post = {
            judgePNameId:this.id,
            judgeInterviewedBy:this.judgeInterviewedBy,
            judgeDate:this.judgeDate,
            judgeHiredId:this.judgeHiredId,
            judgeAdvantage:this.judgeAdvantage,
            judgeWeakness:this.judgeWeakness,
            judgeDateOfStart:this.judgeDate,
            judgeSalary:this.judgeSalary,
            judgeApproved:this.judgeApproved

          };
          _this.util.sendAjax(_this,post,'judge/insert',(res)=> {
            if(res.data.code=="100"){
            _this.$router.push({name:"infoRecord"})
            }
            })
        },
        go(linkhref, params) {
          if (params) {
            this.$router.push({
              path: linkhref,
              query: {index: params}
            });
          } else {
            this.$router.push({name: linkhref});
          }
        },
        },
    }
</script>

<style scoped>
  p{

  }
  >>> .el-input__inner {
    border: none;
  }
  >>>.el-textarea__inner{
    text-indent:2em;
    letter-spacing:1px;
    resize: none;
    padding: 4px;
    font-size: 16px;
  }
  .info p {
    font-size: 18px;
    vertical-align: inherit;
  }
</style>
