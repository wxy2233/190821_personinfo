import Vue from 'vue'
import axios from 'axios'
import Vuecookie from 'vue-cookie'
import CryptoJS from 'crypto-js'

Vue.use(Vuecookie);

Vue.prototype.$http = axios;

let params = {
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://192.168.0.165:8099/' : 'http://192.168.0.165:8099/',
  // imgUrl: process.env.NODE_ENV === 'development' ? 'https://huntuo.oss-cn-beijing.aliyuncs.com' : 'https://dtfiles.oss-cn-shanghai.aliyuncs.com/',
  // ueUrl: process.env.NODE_ENV === 'development' ? 'http://huntuo.kaituo.local' : 'http://huntuo.kaituo.local',
};
Vue.prototype.config = {
  api: params.baseUrl,
  imgUrl: params.imgUrl,
  ueUrl: params.ueUrl
};

export default {

  sendAjax(_this, post, url,callback) {
    let headers = {
      "Content-Type": "application/json",
    };
    let p = new Promise((resolve, reject) => {
      _this.$http({
        method: 'post',
        url: Vue.prototype.config.api + url,
        headers: headers,
        data: JSON.stringify(post),
      }).then((res) => {
        callback(res)
        switch (Number(res.data.code)) {
        }
      },(err) => {
        reject(err);
        _this.util.toast('网络超时');
      },)
    });
    return p;
  },

  getImgUrl(url) {
    if (url) {
      if (url.indexOf('http') > -1) {
        return url;
      } else {
        return Vue.prototype.config.imgUrl + url;
      }
    }
  },

  toast(msg){
    console.log(msg)
  },

  //截取时间
  timeSubtring(num, n, m) {
    if (num) {
      num = num.substring(n, m);
      return num
    }
  },
//  获取当前时间
  getDay() {
    let date = new Date(),
      YY = date.getFullYear(),
      MM = date.getMonth() + 1,
      DD = date.getDate(),
      hh = date.getHours(),
      mm = date.getMinutes();
    return YY + '-' + this.getZero(MM) + '-' + this.getZero(DD) + '  ' + this.getZero(hh) + ':' + this.getZero(mm)
  },
//  判断时间是单数还是双数
  getZero(obj){
    return obj >= 10 ? obj : '0' + obj;
  },

  dw_local_path(_this, url, callback) {
    var test=false
    if(test){
      var headers = {
        'device-id': 1,
        token: 'abc',
        mobile:'13661356570'
      }
    }else {
      var headers = {
        'device-id': 'h5',
      }

      if(_this.$cookie.get('token')){
        headers.token= _this.$cookie.get('token');
      }
      if(_this.$cookie.get('tel')){
        headers.mobile=_this.$cookie.get('tel')
      }
    }
    if (!Array.isArray(url)) {
      //单图
      if(url){
        var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        var objExp=new RegExp(Expression);
        //单图网络地址直接返回
        if(objExp.test(url)==true){
          callback(oss_header_subtract(url))
        }else {
          let p = new Promise((resolve, reject) => {
            _this.$http({
              method: 'post',
              url: Vue.prototype.config.api + 'Aliyun/upload',
              headers: headers,
              data: data,
            }).then((ret) => {
              if (ret.code == 1) {
                callback(ret.data.fileInfo.avatar.fileNames)
              }
            }, (err) => {
              console.log('请求地址-----------------------------------------------------------------------------');
              console.log(baseUrl + 'Aliyun/upload');
              console.log(JSON.stringify(err));
            });
          })
        }
      }
    } else {
      //多图

      var length = url.length
      if (length) {
        var filejson = {}
        var keyarr=[]
        for (var i = 0; i < length; i++) {
          keyarr.push('pic' + i)
          filejson['pic' + i] = url[i]
        }
        var data={
          values: {
            time: Math.floor(new Date().getTime() / 1000)
          },
          files: filejson
        }

        _this.$http({
          method: 'post',
          url: Vue.prototype.config.api + 'Aliyun/upload',
          headers: headers,
          data: data,
        }).then((ret)=>{
          if (ret) {
            if (ret.code == 1) {
              var key = keyarr;
              var string = '';
              var glue = '';
              var picarr = []
              for (var i in key) {
                if(ret.data.fileInfo[key[i]]){
                  string += glue + ret.data.fileInfo[key[i]].fileNames;
                  glue = ',';
                  picarr.push(ret.data.fileInfo[key[i]].fileNames)
                }else {
                  if(!filejson[key[i]]){
                    string += glue + 'null'
                    glue = ',';
                    picarr.push('null')
                  }else {
                    string += glue + oss_header_subtract(filejson[key[i]])
                    glue = ',';
                    picarr.push(oss_header_subtract(filejson[key[i]]))
                  }
                }
              }
              var returnarr = [string, picarr]
              callback(returnarr)
            }
          } else {
          }
        }, (err) => {

        });
      }else{
        var returnarr = ['', []]
        callback(returnarr)
      }
    }
  }

}

function headUpdata(_this, post, addUrl) {
  let formData = new FormData()
  for (let i in post) {
    if (post[i].value) {
      formData.append('file' + i, post[i].value)
    }
  }
  formData.append('time', this.util.getTime())
  let p = new Promise((resolve, reject) => {
    _this.$http.post(Vue.prototype.config + addUrl, post).then((res) => {
        switch (res.data.code) {
          case 1:
            let arr = []
            for (let i in post) {
              if (post[i].value) {
                let img1 = res.data.fileInfo['file'+i].fileNames;
                arr.push(img1)
              }
            }
            _this.$nextTick(() => {
              resolve(arr)
            })
            break;
          default:
            _this.$nextTick(() => {
              _this.$message.error(res.data.message);
            });
            break;
        }
      },
      err => {
        reject(err)
      }
    )
  })
  return p
}

function oss_header_subtract(url) {
  return url.replace(/https:\/\/huntuo.oss-cn-beijing.aliyuncs.com\//, "")
}

function pirceFormat(num) {
  num = Number(num)
  if (num > 0) {
    if (num % 1 == 0) {
      return num + '.00'
    } else {
      return num.toFixed(2)
    }
  } else {
    return '0.00'
  }
};

function toEnter(_this){
  _this.$router.push('/')
}

function createSign(data, seckey) {
  var arr = []
  for (var i in data) {
    arr.push(i)
  }
  // console.log('签名参数1' + JSON.stringify(arr));

  var key = arr.sort();
  // console.log(key);
  var string = '';
  var glue = '';
  for (var i in key) {

    if (data[key[i]] === null || data[key[i]] === undefined || data[key[i]] === '') {
      continue;
    }
    if (Array.isArray(data[key[i]]) && data[key[i]].length == 0) {
      continue;
    }
    string += glue + key[i] + '=' + data[key[i]];
    glue = '&';
  }
  // console.log('签名参数' + JSON.stringify(string));
  var hash2 = CryptoJS.HmacSHA256(string, seckey).toString();
  return hash2;
}





