<template>
  <div class="infoRecord-container">
    <!--标题-->
    <div class="iheader">
      <div class="header">
        <h3>员工登记表</h3>
      </div>
    </div>

    <!--搜索栏-->
    <div class="info-search">
      <el-select v-model="value" placeholder="请选择" style="width:14%;margin-right: 10px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        format="yyyy - MM -dd "
        value-format="yyyy-MM-dd">
      </el-date-picker>
      <span style="margin:0 5px;">至</span>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
        format="yyyy - MM - dd "
        value-format="yyyy-MM-dd">
      </el-date-picker>

      <el-button type="primary" @click="seachTime()" icon="el-icon-search" style="margin-left: 16px">搜索</el-button>
      <input type="text" v-model="pName" placeholder="请输入名字"
             style="margin-left: 20px; padding-left: 16px; width: 10%; height: 34px;font-size: 18px;">
      <el-button type="primary" icon="el-icon-search" @click="seachName()" style="margin-left: 12px"> 搜索</el-button>
    </div>

    <!--员工列表-->
    <div class="info-list">
      <table>
        <thead>
          <tr>
            <th><p>序列</p></th>
            <th><p>姓名</p></th>
            <th><p>应聘职位</p></th>
            <th><p>日期</p></th>
            <th><p>操作</p></th>
            <th><p>录用状态</p></th>
          </tr>
        </thead>
       <tbody>
       <tr v-for="(item,index) in lists">
         <th>{{index + 1}}</th>
         <th>{{item.pName}}</th>
         <th>{{item.position.positionName}}</th>
         <th>{{item.pTime}}</th>
         <th>
           <el-button type="primary" plain @click="handleEdit(item.pId)" v-if="item.pEvaluated==0"
                      style="padding: 5px">详情
           </el-button>
           <el-button type="info" plain @click="handleSelect(item.pId)" style="padding: 5px">查看</el-button>
           <el-button type="danger" plain @click="handleDelete(item.pId)" style="padding: 5px">删除</el-button>
         </th>
         <th style="border-bottom: 1px solid black ">
           {{item.pEvaluated == 0 ? '未审核' : (item.pEvaluated == 1 ? '通过' : '未通过')}}
         </th>
       </tr>
       </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "infoRecord",
    data() {
      return {
        options: [{
          value: '4',
          label: '全部'
        }, {
          value: '1',
          label: '录用'
        }, {
          value: '2',
          label: '未录用'
        },
          {
            value: '0',
            label: '未审核'
          },
        ],
        value: '',
        value1: '',
        value2: '',
        lists: [],
        pName: '',
        total: 1,

      }
    },
    created() {
      this.getadmin()
    },
    methods: {
      getadmin() {
        let _this = this;
        let data_obj = {};
        _this.util.sendAjax(_this, data_obj, 'person/getAllPersons', (res) => {
          this.lists = res.data.map.persons;
        })
      },
      seachName() {
        let _this = this;
        let seachName = {
          pName: this.pName,
        };
        _this.util.sendAjax(_this, seachName, 'person/searchPersonByName', (res) => {
          console.log(JSON.stringify(res));
          this.lists = res.data.map.persons;

        })
      },
      seachTime() {
        let _this = this;
        let seachTime = {
          startTime: this.value1,
          endTime: this.value2,
          pEvaluated: this.value,
          pageSize: this.pageSize,
          pageNum: this.pager,
        };
        _this.util.sendAjax(_this, seachTime, 'person/searchPersonByTime', (res) => {
          console.log(JSON.stringify(res));
          this.lists = res.data.map.persons;

        })
      },
      handleEdit(id) {
        this.$router.push({path: '/detail', query: {id: id}})
      },
      handleSelect(id) {
        this.$router.push({path: '/allPersonInfo', query: {id: id}})
      },
      handleDelete(id) {
        this.$confirm('此操作将永久删除信息 , 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let _this = this;
          let post = {
            pId: id
          };
          _this.util.sendAjax(_this, post, 'person/deletePersonById', (res) => {
            if (res.data.code === 100) {
              this.getadmin()
            }
          });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
  }
</script>

<style scoped>
  .infoRecord-container {
    width: 80%;
    margin: 0 auto;
    min-width: 960px;
    min-height: 100%;
  }

  .iheader .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-indent: 3rem;
    box-shadow: 0px 0px 20px 0 #ccc;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 10px
  }

  .header h3 {
    font-size: 24px;
    line-height: 60px;
    font-weight: normal;
    cursor: pointer;
  }

  .info-search {
    margin-top: 30px;
  }

  .info-list {
    background-color: #fff;
    height: 520px;
    margin-top: 30px
  }

  .info-list table {
    font-size: 18px;
    width: 100%;
    box-shadow: 0 0 30px 0 #ccc;
  }

  .info-list thead tr {
    background-color: #ccc
  }

  .info-list thead th p {
    padding-top: 10px;
    padding-bottom: 10px

  }
  .info-list tbody tr {
    height: 40px;
  }
  .info-list tbody th {
    border-bottom: 1px solid black
  }


                  .tab > > > .el-table td, .tab > > > .el-table th {
    text-align: center;
  }

  > > > .el-date-editor .el-range-separator {
    padding: 6px 33px;
  }

  > > > .el-input--prefix .el-input__inner {
    padding-left: 52px;
  }

  > > > .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 174px;
  }
</style>

