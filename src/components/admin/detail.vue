<template>
  <div id="detail" style="width: 80%;margin: 0 auto 30px;min-width: 1122px;text-indent: 1em">
    <div style="display: flex;justify-content: space-between;align-items: center">
      <div class="logo">
        <img src="../../assets/logo.jpg" alt="">
      </div>
      <p style="font-size: 28px;text-align: center;font-weight:bold;margin-bottom: 8px">员工登记表</p>
      <div style="width: 10%"></div>
    </div>
    <hr/>
    <p style="margin-top:6px;font-size: 16px;letter-spacing:2px;margin-bottom: 2px ">
      说明：请如实填写您的个人信息。本表仅做入职使用，公司会妥善保管。（*必填；其他选填）</p>
    <hr style="margin-bottom: 2px;"/>
    <hr/>
    <p style="


    margin-top:6px;font-size: 22px;font-weight:bold;margin-bottom: 4px">PERSONAL INFORMATION 个人资料</p>
    <hr/>
    <!--个人资料-->
    <div class="info" style="display:flex;flex-flow: row wrap;">
      <div style="width: 25%;">
        <p>Name</p>
        <p>*姓名：
          {{ input_name }}
        </p>
      </div>
      <div style="width: 30%">
        <p>Marritial Status</p>
        <p style="margin-left: 6px">*婚姻状况：
          {{ input_marritial }}
        </p>
      </div>
      <div style="width: 40%">
        <p>ID Card Number</p>
        <p>身份证号码：
          {{ input_number }}
        </p>
      </div>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info" style="display:flex;flex-flow: row wrap;">
      <div style="width: 25%;">
        <p style="margin-left: 6px">M/F</p>
        <p>*性别：
          {{ input_mf }}
        </p>
      </div>
      <div style="width: 30%">
        <p>Date of Birth</p>
        <p>*出生日期：
          {{ input_birth }}
        </p>
      </div>
      <div style="width: 40%">
        <p>Telephone</p>
        <p>*电话号码：
          {{ input_telephone }}
        </p>
      </div>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info" style="display:flex;flex-flow: row wrap;">
      <div style="width: 25%;">
        <p style="margin-left: 6px">Nation</p>
        <p>*民族：
         {{ input_nation }}
        </p>
      </div>
      <div style="width: 30%">
        <p>Position</p>
        <p>*申请职位：
          {{ input_position }}
        </p>
      </div>
      <div style="width: 40%">
        <p style="margin-left: 6px">Tencentlnstant Messenger</p>
        <p>*QQ号码：
          {{ input_QQ }}
        </p>
      </div>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info" style="display:flex;flex-flow: row wrap;">
      <div style="width: 25%;">
        <p>Native Place</p>
        <p>*籍贯：
          {{ input_place }}
        </p>
      </div>
      <div style="width: 30%">
        <p>Account character</p>
        <p>*户口性质：
          {{ input_accountCharacter }}
        </p>
      </div>
      <div style="width: 40%">
        <p>Wachat</p>
        <p>*微信号码：
          {{ input_weChat }}
        </p>
      </div>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info" style="display:flex;flex-flow: row wrap;">
      <div style="width: 25%;">
        <p>Height</p>
        <p>身高：
         {{  input_height }}
        </p>
      </div>
      <div style="width: 30%">
        <p style="margin-left: 6px">Salary Expectation</p>
        <p>薪资要求：
          {{  input_input_salary }}
        </p>

      </div>
      <div style="width: 40%">
        <p style="margin-left: 6px">Post Code</p>
        <p>*邮箱号码：
          {{  input_postCode }}
        </p>
      </div>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info" style="display:flex;flex-flow: row wrap;">
      <div style="width: 50%;">
        <p>Permanent Address</p>
        <p>*现住地址：
          {{  input_address }}
        </p>
      </div>
      <div style="width: 50%">
        <p>Domiciled Address</p>
        <p>户籍住址：
          {{  input_DA }}
        </p>
      </div>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info" style="display:flex;flex-flow: row wrap;">
      <div style="width:50%;">
        <p>Health Statue</p>
        <p style="display: inline-block;">*病史：
          {{  input_healthstatue }}
        </p>
      </div>
      <div style="width: 50%;">
        <p style="margin-left: 6px">Date Of Start</p>
        <p>预期开始工作日期：
          {{ input_start }}
        </p>
      </div>


    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info">
      <p style="padding: 2px">Are you a smoker？</p>
      <p style="padding: 2px">*您是否吸烟？：{{radio1==1?"是":"否"}}
      </p>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info">
      <p style="padding: 2px">Are you employed now？</p>
      <p style="padding: 2px">*您目前是否在职？：{{radio1==1?"是":"否"}}

      </p>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info">
      <p style="padding: 2px">If so,May we inquire of your prensent employer？</p>
      <p style="padding: 2px">*我们可否向您现在的雇主了解情况吗？：{{radio1==1?"是":"否"}}
      </p>
    </div>
    <hr style="margin-bottom: 2px;"/>
    <div class="info">
      <p style="padding: 2px">Ever applied to our compary before？</p>
      <p style="padding: 2px">*以前是否申请过本公司？：
        <input type="text"  readonly  v-model="once_applied"
               style="width: 75%; text-indent:1em; font-size: 18px; border: none;border-bottom: 1px solid black;outline:medium;">
      </p>
    </div>
    <hr style="margin-bottom: 2px;"/>


    <!--教育情况-->
    <p style="margin-top:16px;font-size: 22px;font-weight:bold;">*EDUCATION 教育情况</p>
    <table style="font-size: 18px;width:100%;">
      <tr style="height:40px">
        <th style="border-top:1px solid black;border-right:1px solid black;width: 20%;">
          <p>date</p>
          <p>日期</p>
        </th>
        <th style="border-top:1px solid black;border-right:1px solid black;width: 30%">
          <p>Name of school</p>
          <p>学校名称</p>
        </th>
        <th style="border-top:1px solid black;border-right:1px solid black;width: 30%">
          <p>Special field of study</p>
          <p>专业</p>
        </th>
        <th style="border-top:1px solid black;border-left:1px solid black;width: 20%">
          <p>Academic career</p>
          <p>学历</p>
        </th>
      </tr>
      <tr style="height:40px" v-for="item in info_arr">
        <th style="border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;width: 20%">
          <input type="text" readonly  v-model="item.eduDate"  style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
        <th style="border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;width: 30%">
          <input type="text" readonly   v-model="item.eduNameOfSchool" style=" font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
        <th style="border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;width: 30%">
          <input type="text" readonly  v-model="item.eduSpecialFieldOfStudy" style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
        <th style="border-top:1px solid black;border-left:1px solid black;border-bottom:1px solid black;width: 20%">
          <input type="text" readonly   v-model="item.eduAcdemicCareer" style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
      </tr>


    </table>


    <!--工作经历-->
    <p style="margin-top:16px;font-size: 22px;font-weight:bold;font-weight:600">*WORKING EXPRERIENCE 工作经历</p>
    <table style="font-size: 18px;width: 100%">
      <tr>
        <th style="border-top:1px solid black;border-right:1px solid black;width: 16%">
          <p>date</p>
          <p>日期</p>
        </th>
        <th style=" border-top:1px solid black;border-right:1px solid black;width: 30%">
          <p>Name and Employer</p>
          <p>工作单位称</p>
        </th>
        <th style="border-top:1px solid black;border-right:1px solid black;width: 12%">
          <p>Position</p>
          <p>职位</p>
        </th>
        <th style="border-top:1px solid black;border-left:1px solid black;width: 12%">
          <p>Salary</p>
          <p>薪资</p>
        </th>
        <th style="border-top:1px solid black;border-left:1px solid black;width: 30%">
          <p>Reason of Leaving</p>
          <p>离职原因</p>
        </th>
      </tr>
      <tr style="height: 40px" v-for="list in info_list">
        <th style="border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;width: 16%">
          <input type="text" readonly  v-model="list.wDate" style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
        <th style="border:1px solid black;width: 30%">
          <input type="text" readonly  v-model="list.wNameAndEmployer" style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
        <th style="border:1px solid black;width: 12%">
          <input type="text" readonly  v-model="list.wPosition" style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
        <th style="border-top:1px solid black;border-left:1px solid black;border-bottom:1px solid black;width: 12%">
          <input type="text" readonly  v-model="list.wSalary" style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
        <th style="border-top:1px solid black;border-left:1px solid black;border-bottom:1px solid black;width: 30%">
          <input type="text" readonly  v-model="list.wReasonOfLeaving" style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
        </th>
      </tr>

    </table>

    <!--职能考试-->
    <p style="margin-top:16px;margin-bottom: 30px; font-size: 22px;text-align: center;font-weight:bold;font-weight:600">
      TRAINING/FUNCTIONALAUTHORITYEXAMINATION(When&What)
    </p>
    <p style="margin-top:16px;margin-bottom: 30px; font-size: 22px;text-align: center;font-weight:bold;font-weight:600">
      *培训/职能考试（何时和何种）
    </p>
    <textarea readonly  v-model="test" cols="10" rows="3" style="width: 100%;text-indent:2em;font-size: 16px"></textarea>
    <p style="font-size: 18px;letter-spacing:2px; margin-bottom: 10px">紧急联系人：（用于紧急情况下使用。入职必填）</p>
    <div class="content" style="display:flex;flex-flow: row wrap;font-size: 18px;margin-bottom: 6px;" v-for="item in info_re">
      <div class="grid-content bg-purple">姓名：
        <input type="text" readonly  v-model="item.urgentFaminyName"
               style="font-size: 18px; border-right: none;border-left: none;border-top: none;border-bottom: 1px solid black; outline:medium;">
      </div>
      <div class="grid-content bg-purple-light">关系：
        <input type="text" readonly  v-model="item.urgentRelation" style="font-size: 18px; border: none;border-bottom: 1px solid black;outline:medium;"></div>
      <div class="grid-content bg-purple">联系电话：
        <input type="text" readonly v-model="item.urgentFamilyTelephone" style="font-size: 18px; border: none;border-bottom: 1px solid black;outline:medium;"></div>
    </div>
    <p style="font-size: 18px;font-weight:bold;line-height: 30px;margin-bottom: 20px;margin-top:20px">
      说明：本人在此入职申请表所填写的一切内容均属真实准确，如有隐瞒及虚报，愿接受公司无偿辞退处理并付相关责任。</p>
    <div style="display:flex;flex-flow: row wrap;font-size: 18px;margin-top: 6px;margin-bottom: 40px">
      <div class="grid-content bg-purple" style="width: 50%;"> *应聘人签名：
        <input type="text" readonly v-model="note"
               style="font-size: 18px; border-right: none;border-left: none;border-top: none;border-bottom: 1px solid black;outline:medium;">
      </div>
      <div class="grid-content bg-purple-light" style="width: 50%;">日期：
        <input type="text" readonly  v-model="time" style="font-size: 18px; border: none;border-bottom: 1px solid black;outline:medium;">
      </div>
    </div>

    <!--评价-->
    <el-button @click="go('infoRecord')" type="primary" size="medium" round style="margin-left: 20%">返回</el-button>

    <el-button @click="handleAssess(id)" type="primary" size="medium" round style="margin-left: 50%">评价</el-button>

  </div>

</template>

<script>
    export default {
        name: "detail",
      data() {
        return {
          id:"",
          info_arr :[],
          info_list:[],
          info_re:[],
          input_name: '',
          input_marritial: '',
          input_number: '',
          input_mf: '',
          input_birth: '',
          input_telephone: '',
          input_nation: '',
          input_position: '',
          input_QQ: '',
          input_place: '',
          input_accountCharacter: '',
          input_weChat: '',
          input_height: '',
          input_salary: '',
          input_postCode: '',
          input_DA: '',
          input_address: '',
          input_healthstatue: '',
          pHealthCondition:'',
          input_start: '',
          input_input_salary: '',
          items:[
            {
              eduDate:'',
              eduNameOfSchool:'',
              eduSpecialFieldOfStudy:'',
              eduAcdemicCareer:'',
            },
            {
              eduDate:'',
              eduNameOfSchool:'',
              eduSpecialFieldOfStudy:'',
              eduAcdemicCareer:'',

            }
          ],
          lists:[
            {
              wDate:'',
              wNameAndEmployer:'',
              wPosition:'',
              wSalary:'',
              wReasonOfLeaving:'',
            },
            {
              wDate:'',
              wNameAndEmployer:'',
              wPosition:'',
              wSalary:'',
              wReasonOfLeaving:'',
            },
            {
              wDate:'',
              wNameAndEmployer:'',
              wPosition:'',
              wSalary:'',
              wReasonOfLeaving:'',

            }
          ],
          urgentName:[
            {
              urgentFaminyName:'',
              urgentRelation:'',
              urgentFamilyTelephone:'',
            },
            {
              urgentFaminyName:'',
              urgentRelation:'',
              urgentFamilyTelephone:'',
            },
          ],
          status: [{
            value: '1',
            label: '未婚'
          },
            {
              value: '2',
              label: '已婚'
            },
            {
              value: '3',
              label: '已婚未育'
            },
            {
              value: '4',
              label: '已婚已育'
            }
          ],
          options: [{
            value: '1',
            label: '男'
          }, {
            value: '2',
            label: '女'
          }],
          options2: [
            {
              value: '101',
              label: 'PHP实习生'
            },
            {
              value: '102',
              label: '文案策划'
            },
            {
              value: '103',
              label: 'java'
            },
            {
              value: '104',
              label: 'ios'
            },
            {
              value: '105',
              label: '项目经理'
            }, {
              value: '106',
              label: '项目助理'
            }, {
              value: '107',
              label: '前端工程师'
            },
            {
              value: '108',
              label: 'PHP'
            },
            {
              value: '109',
              label: 'android'
            },
            {
              value: '110',
              label: '产品经理'
            },
            {
              value: '111',
              label: '产品助理'
            },
            {
              value: '112',
              label: 'UI设计'
            },
            {
              value: '113',
              label: '法务专员'
            },
            {
              value: '114',
              label: '全职会计'
            }, {
              value: '115',
              label: '人力资源主管'
            }, {
              value: '116',
              label: '人力资源助理'
            },
            {
              value: '117',
              label: '电商运营'
            },
            {
              value: '118',
              label: '新媒体运营'
            },
            {
              value: '119',
              label: '行政'
            },
          ],
          options3: [{
            value: '1',
            label: '本市'
          }, {
            value: '2',
            label: '外省'
          }],
          options4: [{
            value: '1',
            label: '有'
          }, {
            value: '2',
            label: '无'
          }],
          radio1: '1',
          radio2: '',
          radio3: '',
          once_applied:'',
          test:'',
          note:'',
          time:'',
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.getData(this.id)
      },
      methods:{
        getData(id){
          let _this = this;
          let post = {
           pId:this.id
          };
          _this.util.sendAjax(_this,post,'person/getPersonBy',(res)=>{
            console.log(res)
            this.input_name=res.data.map.person.pName;
            this.input_mf=res.data.map.person.pSexId==1?"男":"女";
            this.input_birth=res.data.map.person.pDateOfBirth;
            this.input_number=res.data.map.person.pIdCardNumber;
            this.input_nation=res.data.map.person.pNation;
            this.input_place=res.data.map.person.pNativePlace;
            this.input_height=res.data.map.person.pHeight;
            this.input_marritial=res.data.map.person.marry.mCondition;
            this.input_healthstatue=res.data.map.person.pHealth==1?"有":"无";
            this.pHealthCondition=res.data.map.person.pHealthCondition;
            this.input_address=res.data.map.person.pPermanentAddress;
            this.input_postCode=res.data.map.person.pPostCode;
            this.input_telephone=res.data.map.person.pTelephone;
            this.input_DA=res.data.map.person.pDomiciledAddress;
            this.input_position=res.data.map.person.position.positionName;
            this.input_input_salary=res.data.map.person.pSalaryExpectation;
            this.input_QQ=res.data.map.person.pQq;
            this.input_weChat=res.data.map.person.pWechat;
            this.radio2=res.data.map.person.pBeOnJobld==1?"是":"否";
            this.radio3=res.data.map.person.pGetPresentInformationId==1?"是":"否";
            this.radio1=res.data.map.person.pSmokerId==1?"是":"否";
            this.once_applied=res.data.map.person.pOnceApplied;
            this.input_accountCharacter=res.data.map.person.pResidenceId==1?"本市":"外省";
            this.test=res.data.map.person.pTrain;
            this.note=res.data.map.person.pNote;
            this.time=res.data.map.person.pTime;
            this.info_arr=res.data.map.person.educations==''?'暂无':res.data.map.person.educations;
            this.info_list=res.data.map.person.experiences==''?'暂无':res.data.map.person.experiences;
            this.info_re=res.data.map.person.relations;
          })
        },
        handleAssess(id){
          this.$router.push({path: '/checklist', query: {id: id}})
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

      }
    }
</script>

<style scoped>
  .logo {
    margin-top: 20px;
    margin-left: 5%;
  }

  >>> .el-input__inner {
    border: none;
  }
  .info {
    text-indent: 1em;
    padding: 10px 0;
  }
  .info p {
    font-size: 18px;
    vertical-align: inherit;
  }

  table {
    border-collapse: collapse;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
  }

  th {
    text-align: center;
    font-weight: normal;
  }
 >>>.el-radio__input.is-disabled+span.el-radio__label{
color: black;
   pointer-events:none;
 }
</style>
