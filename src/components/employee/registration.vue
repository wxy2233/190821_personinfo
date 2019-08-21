<template>
  <div class="register-container">

    <!-- 头部部分 -->
    <div class="register-header">
      <div class="logo">
        <img src="../../assets/logo.jpg" alt="">
      </div>
      <p style="font-size: 28px;text-align: center;font-weight:bold;margin-bottom: 4px">员工登记表</p>
      <div style="width: 10%"></div>
    </div>

    <div class="">
      <hr/>
      <!-- 说明 -->
      <p style="font-size: 16px;letter-spacing:2px;line-height: 40px;text-indent: 1em">
        说明：请如实填写您的个人信息。本表仅做入职使用，公司会妥善保管。（*必填；其他选填）</p>
      <hr style="margin-bottom: 2px;"/>
      <br>
      <hr/>
    </div>

    <!-- 个人资料  -->
    <div class="person-infomation">
      <p style="font-size: 22px;font-weight:bold;line-height: 50px;text-indent: 1em">PERSONAL INFORMATION 个人资料</p>
      <hr/>
      <div class="person-list">
        <div class="person-item">
          <p>Name</p>
          <p>
            <span class="red">*</span>
            <span>姓名</span>：
            <el-input class="input-margin" v-model="name" style="width: 50%" required="required"></el-input>
          </p>
        </div>
        <div class="person-item">
          <p>Marritial Status</p>
          <p>
            <span class="red">*</span>
            <span>婚姻状况：</span>
            <el-select class="input-margin" v-model="marry" style="width: 50%;">
              <el-option
                v-for="item in marryStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </p>
        </div>
        <div class="person-item">
          <p>ID Card Number</p>
          <p>身份证号码：
            <el-input class="input-margin" v-model="carNumber" style="width: 60%;"></el-input>
          </p>
        </div>
      </div>
      <hr/>

      <div class="person-list">
        <div class="person-item">
          <p>M/F</p>
          <p>
            <span class="red">*</span>
            <span>性别：</span>
            <el-select v-model="gender" class="input-margin" style="width: 50%;">
              <el-option
                v-for="item in genderOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </p>
        </div>
        <div class="person-item">
          <p>Date of Birth</p>
          <p>
            <span class="red">*</span>
            <span>出生日期：</span>
            <el-date-picker v-model="birth" type="date" class="input-margin"
                            style="width: 50%;padding-left: 10px;box-sizing: border-box">
            </el-date-picker>
          </p>
        </div>
        <div class="person-item">
          <p>Telephone</p>
          <p>
            <span class="red">*</span>
            <span>电话号码：</span>
            <el-input v-model="telephone" class="input-margin" style="width: 60%"></el-input>
          </p>
        </div>
      </div>
      <hr/>

      <div class="person-list">
        <div class="person-item">
          <p>Nation</p>
          <p>
            <span class="red">*</span>
            <span>民族：</span>
            <el-input v-model="nation" class="input-margin" style="width: 50%;"></el-input>
          </p>
        </div>
        <div class="person-item">
          <p>Position</p>
          <p>
            <span class="red">*</span>
            <span>申请职位：</span>
            <el-select v-model="position" class="input-margin" style="width: 50%;">
              <el-option
                v-for="item in positionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </p>
        </div>
        <div class="person-item">
          <p>Tencentlnstant Messenger</p>
          <p>
            <span class="red">*</span>
            <span>QQ号码：</span>
            <el-input v-model="QQ" class="input-margin" style="width: 60%;"></el-input>
          </p>
        </div>
      </div>
      <hr/>

      <div class="person-list">
        <div class="person-item">
          <p>Native Place</p>
          <p>
            <span class="red">*</span>
            <span>籍贯：</span>
            <el-input v-model="place" class="input-margin" style="width: 50%;"></el-input>
          </p>
        </div>
        <div class="person-item">
          <p>Account character</p>
          <p>
            <span class="red">*</span>
            <span>户口性质：</span>
            <el-select v-model="accountCharacter" class="input-margin" style="width: 50%;">
              <el-option
                v-for="item in accountOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </p>
        </div>
        <div class="person-item">
          <p>Wachat</p>
          <p>
            <span class="red">*</span>
            <span>微信号码：</span>
            <el-input v-model="weChat" class="input-margin" style="width: 60%;"></el-input>
          </p>
        </div>
      </div>
      <hr/>

      <div class="person-list">
        <div class="person-item">
          <p>Height</p>
          <p>身高：
            <el-input v-model="height" style="width: 50%;margin-left: -26px"></el-input>
          </p>
        </div>
        <div class="person-item">
          <p>Salary Expectation</p>
          <p>薪资要求：
            <el-input v-model="salary" placeholder="" style="width: 50%;margin-left: -26px"></el-input>
          </p>
        </div>
        <div class="person-item">
          <p>Post Code</p>
          <p>
            <span style="color: red">*</span>
            <span>邮箱号码：</span>
            <el-input v-model="postCode" style="width: 60%;margin-left: -26px"></el-input>
          </p>
        </div>
      </div>
      <hr/>

      <div class="person-list">
        <div class="person-item2">
          <p>Permanent Address</p>
          <p>
            <span style="color: red">*</span>
            <span>现住地址：</span>
            <el-input v-model="address" style="width: 50%;margin-left: -26px"></el-input>
          </p>
        </div>
        <div class="person-item2">
          <p>Domiciled Address</p>
          <p>户籍住址：
            <el-input v-model="DA" placeholder="" style="width: 60%;margin-left: -26px"></el-input>
          </p>
        </div>
      </div>
      <hr/>

      <div class="person-list">
        <div class="person-item2">
          <p>Health Statue</p>
          <p style="display: flex; flex-wrap: wrap;">
            <span style="color: red">*</span>
            <span> 病史：</span>
            <el-select v-model="healthstatue"  style="width: 30%;margin-left: -26px">
              <el-option
                v-for="item in healthOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <input type="text" placeholder="(请说明时间和病情况)" v-model="pHealthCondition"
                   style="display: inline-block; width: 75%; text-indent:1em; font-size: 18px;
                  border: none;border-bottom: 1px solid black;outline:medium;
                  margin-top: 25px">
          </p>
        </div>
        <div class="person-item2">
          <p style="margin-left: 6px">Date Of Start</p>
          <p>预期开始工作日期：
            <el-input v-model="startWork" placeholder="" style="width: 36%;margin-left: -26px"></el-input>
          </p>
        </div>


      </div>
      <hr/>

      <div class="person-list2">
        <p style="padding: 2px">Are you a smoker？</p>
        <p style="padding: 2px">
          <span style="color: red">*</span>
          <span>您是否吸烟？：</span>
          <el-radio v-model="radio1" label="1">是(Yes)</el-radio>
          <el-radio v-model="radio1" label="2">否(No)</el-radio>
        </p>
      </div>
      <hr/>
      <div class="person-list2">
        <p style="padding: 2px">Are you employed now？</p>
        <p style="padding: 2px">
          <span style="color: red">*</span>
          <span>您目前是否在职？：</span>
          <el-radio v-model="radio2" label="1">是(Yes)</el-radio>
          <el-radio v-model="radio2" label="2">否(No)</el-radio>
        </p>
      </div>
      <hr/>
      <div class="person-list2">
        <p style="padding: 2px">If so,May we inquire of your prensent employer？</p>
        <p style="padding: 2px">
          <span style="color: red">*</span>
          <span>我们可否向您现在的雇主了解情况吗？：</span>
          <el-radio v-model="radio3" label="1">是(Yes)</el-radio>
          <el-radio v-model="radio3" label="2">否(No)</el-radio>
        </p>
      </div>
      <hr/>
      <div class="person-list2">
        <p style="padding: 2px">Ever applied to our compary before？</p>
        <p style="padding: 2px">
          <span style="color: red">*</span>
          <span>以前是否申请过本公司？：</span>
          <input type="text" placeholder="何时何地" v-model="once_applied"
                 style="width: 75%; text-indent:1em; font-size: 18px; border: none;border-bottom: 1px solid black;outline:medium;">
        </p>
      </div>
      <hr/>
    </div>

    <!--教育情况-->
    <div class="person-educations">
      <p style="margin-top:30px;font-size: 22px;font-weight:bold;">
        <span style="color: red">*</span>
        <span>EDUCATION 教育情况</span></p>
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
        <tr  class="education-info" v-for="item in items">
          <th>
            <input type="text" v-model="item.eduDate">
          </th>
          <th>
            <input type="text" v-model="item.eduNameOfSchool">
          </th>
          <th>
            <input type="text" v-model="item.eduSpecialFieldOfStudy">
          </th>
          <th>
            <input type="text" v-model="item.eduAcdemicCareer">
          </th>
        </tr>
      </table>
    </div>

    <!--工作经历-->
    <div class="person-experience">
      <p style="margin-top:30px;font-size: 22px;font-weight:bold;font-weight:600">
        <span style="color: red">*</span>
        <span>WORKING EXPRERIENCE 工作经历</span></p>
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
        <tr style="height: 40px" v-for="list in lists">
          <th style="border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;width: 16%">
            <input type="text" v-model="list.wDate"
                   style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
          </th>
          <th style="border:1px solid black;width: 30%">
            <input type="text" v-model="list.wNameAndEmployer"
                   style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
          </th>
          <th style="border:1px solid black;width: 12%">
            <input type="text" v-model="list.wPosition"
                   style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
          </th>
          <th style="border-top:1px solid black;border-left:1px solid black;border-bottom:1px solid black;width: 12%">
            <input type="text" v-model="list.wSalary"
                   style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
          </th>
          <th style="border-top:1px solid black;border-left:1px solid black;border-bottom:1px solid black;width: 30%">
            <input type="text" v-model="list.wReasonOfLeaving"
                   style="font-size: 18px; height: 100%;width: 70%; border: none;outline:medium;">
          </th>
        </tr>

      </table>
    </div>

    <!--职能考试-->
   <div class="person-train">
     <p style="margin-top:30px;margin-bottom: 30px; font-size: 22px;text-align: center;font-weight:bold;font-weight:600">
       TRAINING/FUNCTIONALAUTHORITYEXAMINATION(When&What)
     </p>
     <p style="margin-top:16px;margin-bottom: 30px; font-size: 22px;text-align: center;font-weight:bold;font-weight:600">
       <span style="color: red">*</span>
       <span>培训/职能考试（何时和何种）</span>
     </p>
     <textarea v-model="test" cols="10" rows="3" style="width: 100%;text-indent:2em;font-size: 16px"></textarea>
     <p style="font-size: 18px;letter-spacing:2px; margin-bottom: 10px">紧急联系人：（用于紧急情况下使用。入职必填）</p>
     <div class="content" style="display:flex;flex-flow: row wrap;font-size: 18px;margin-bottom: 6px;"
          v-for="item in urgentName">
       <div class="grid-content bg-purple">姓名：
         <input type="text" v-model="item.urgentFaminyName">
       </div>
       <div class="grid-content bg-purple-light">关系：
         <input type="text" v-model="item.urgentRelation"></div>
       <div class="grid-content bg-purple">联系电话：
         <input type="text" v-model="item.urgentFamilyTelephone"></div>
     </div>
     <p style="font-size: 18px;font-weight:bold;line-height: 30px;margin:20px 0">
       说明：本人在此入职申请表所填写的一切内容均属真实准确，如有隐瞒及虚报，愿接受公司无偿辞退处理并付相关责任。</p>
     <div  class="person-size" style="display:flex;flex-flow: row wrap;font-size: 18px;margin-top: 6px;margin-bottom: 40px;">
       <div class="grid-content bg-purple">
         <span style="color: red">*</span>
         <span>应聘人签名：</span>
         <input type="text" v-model="note">
       </div>
       <div class="grid-content bg-purple-light" style="width: 30%;">
         <span style="color: red">*</span>
         <span>日期：</span>
         <el-date-picker v-model="time" type="date" style="width: 60%;border-bottom: 1px solid black;box-sizing: border-box">
         </el-date-picker>
       </div>
     </div>
   </div>

    <!--提交-->
    <el-button @click="postData()" type="primary" size="large" style="margin:0 36% 30px" round>提交</el-button>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "registration",
    data() {
      return {
        name: '',
        carNumber: '',
        marry: '',
        gender: '',
        birth: '',
        telephone: '',
        nation: '',
        position: '',
        QQ: '',
        place: '',
        accountCharacter: '',
        weChat: "",
        height: '',
        postCode: '',
        salary: '',
        address: '',
        DA: '',
        pHealthCondition:'',
        startWork:'',
        healthstatue:"",
        marryStatus: [
          {
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
        genderOptions: [
          {
            value: '1',
            label: '男'
          },
          {
            value: '2',
            label: '女'
          },
        ],
        positionOptions: [
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
        accountOptions: [
          {
            value: '1',
            label: '本市'
          }, {
            value: '2',
            label: '外省'
          }
        ],
        healthOptions:[
          {
            value: '1',
            label: '有'
          }, {
            value: '2',
            label: '无'
          }
        ],
        urgentName: [
          {
            urgentFaminyName: '',
            urgentRelation: '',
            urgentFamilyTelephone: '',
          },
          {
            urgentFaminyName: '',
            urgentRelation: '',
            urgentFamilyTelephone: '',
          },
        ],
        items: [
          {
            eduDate: '',
            eduNameOfSchool: '',
            eduSpecialFieldOfStudy: '',
            eduAcdemicCareer: '',
          },
          {
            eduDate: '',
            eduNameOfSchool: '',
            eduSpecialFieldOfStudy: '',
            eduAcdemicCareer: '',

          }
        ],
        lists: [
          {
            wDate: '',
            wNameAndEmployer: '',
            wPosition: '',
            wSalary: '',
            wReasonOfLeaving: '',
          },
          {
            wDate: '',
            wNameAndEmployer: '',
            wPosition: '',
            wSalary: '',
            wReasonOfLeaving: '',
          },
          {
            wDate: '',
            wNameAndEmployer: '',
            wPosition: '',
            wSalary: '',
            wReasonOfLeaving: '',

          }
        ],
        radio1: '',
        radio2: '',
        radio3: '',
        once_applied: '',
        test: '',
        note: '',
        time: '',
      };
    },
    methods:{
      postData(){
        if (!this.name){
          this.$message.error('名字必填项');
          return;
        }
        if (!this.marry){
          this.$message.error('婚姻状况必填项');
          return;
        }
        if (!this.gender) {
          this.$message.error('性别必填项');
          return;
        }
        if (!this.birth) {
          this.$message.error('出生日期必选项');
          return;
        }
        if (!this.telephone) {
          this.$message.error('手机号码必选项');
          return;
        }
        if (!this.nation) {
          this.$message.error('民族必选项');
          return;
        }
        if (!this.position) {
          this.$message.error('职位必填项');
          return;
        }
        if (!this.QQ) {
          this.$message.error('QQ必填项');
          return;
        }
        if (!this.place) {
          this.$message.error('籍贯必填项');
          return;
        }
        if (!this.accountCharacter) {
          this.$message.error('户口性质必填项');
          return;
        }
        if (!this.weChat) {
          this.$message.error('微信必填项');
          return;
        }
        if (!this.postCode) {
          this.$message.error('邮箱必填项');
          return;
        }
        if (!this.address) {
          this.$message.error('现在地址必填项');
          return;
        }
        if (!this.healthstatue) {
          this.$message.error('病史必选项');
          return;
        }
        if (!this.radio1) {
          this.$message.error('吸烟必选项');
          return;
        }
        if (!this.radio2) {
          this.$message.error('在职情况必选项');
          return;
        }
        if (!this.radio3) {
          this.$message.error('向以前雇主了解情况必选项');
          return;
        }
        if (!this.items) {
          this.$message.error('教育情况必填项');
          return;
        }
        if (!this.test) {
          this.$message.error('培训/职能考试必填项');
          return;
        }
        if (!this.note) {
          this.$message.error('应聘者签名必填项');
          return;
        }
        if (!this.time) {
          this.$message.error('签名日期必填项');
          return;
        }

        if (!this.lists) {
          this.$message.error('工作经历必填项');
          return;
        }
        this.isDisable = true;
        let _this = this;
        let post = {};
        post.pName = this.name;
        post.pMarryConditionId = this.marry;
        post.pIdCardNumber = this.carNumber;
        post.pSexId = this.gender == 1 ? 1 : 2;
        post.pDateOfBirth = this.birth;
        post.pTelephone = this.telephone;
        post.pNation = this.nation;
        post.pQq = this.QQ;
        post.pNativePlace = this.place;
        post.pResidenceId = this.accountCharacter == 1 ? 1 : 2;
        post.pWechat = this.weChat;
        post.pHeight = this.height;
        post.pPostCode = this.postCode;
        post.pDomiciledAddress = this.DA;
        post.pPermanentAddress = this.address;
        post.pHealth = this.healthstatue == 1 ? 1 : 2;
        post.pHealthCondition = this.pHealthCondition;
        post.pDateOfStart = this.input_start;
        post.pSalaryExpectation = this.salary;
        post.relations = this.urgentName;
        post.educations = this.items;
        post.pPositionId = this.position;
        post.pTrain = this.test;
        post.pNote = this.note;
        post.pTime = this.time;
        post.pSmokerId = this.radio1 == 1 ? 1 : 2;
        post.pBeOnJobId = this.radio2 == 1 ? 1 : 2;
        post.pGetPresentInformationId = this.radio3 == 1 ? 1 : 2;
        post.pOnceApplied = this.once_applied;
        post.experiences = this.lists;
        console.log(post);
        _this.util.sendAjax(_this, post, 'person/insert', function (res) {
          if (res.data.code == "100") {
            _this.$router.push({name: "finish"})
          }
        })
      }
    }
  }
</script>

<style scoped="">
  .register-container {
    width: 80%;
    margin: 0 auto;
    min-width: 1122px
  }

  .register-container .register-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .register-container .person-list {
    display: flex;
    flex-flow: row wrap;
    padding: 20px 0 40px;

  }
  .register-container .person-list2 {
    display: flex;
    flex-flow: row wrap;
    text-indent: 1em;
    align-items: center;
    font-size: 18px;
    padding: 30px 0;
  }


  .person-item {
    width: 30%;
    text-indent: 1em;
    line-height: 30px;
    font-size: 18px;
  }
  .person-item2 {
    width: 45%;
    text-indent: 1em;
    line-height: 30px;
    font-size: 18px;
  }

  .red {
    color: red
  }

  .input-margin {
    margin-left: -26px;
  }

  hr {
    background-color: rgba(247, 247, 247, 0.22);
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
    border-top:1px solid black;
    border-right:1px solid black;
    border-bottom:1px solid black;
    width: 20%;
    height:40px
  }
  .education-info {
    text-align:center;
    height:40px
  }
  .education-info th {
    border-top:1px solid black;
    border-right:1px solid black;
    border-bottom:1px solid black;
    width: 20%;
    height:40px
  }
  .education-info input {
    font-size: 18px;
    height: 100%;
    width: 70%;
    border: none;
    outline:medium;
  }
  .content .grid-content {
    margin-right: 30px;

  }

  .content .grid-content input {
    font-size: 18px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
    outline:medium;
    text-indent: 1em
  }
  .person-size .grid-content {
    width: 50%;
    margin-top: 20px
  }
  .person-size .grid-content input {
    font-size: 18px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
    outline:medium;
    text-indent: 1em

  }

</style>
