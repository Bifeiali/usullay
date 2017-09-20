/**
 * Created by lenovo on 2017/7/9.
 */
//1.为name为username和pwd的文本框获得焦点事件
var form=document.forms[0];
var txtName=form.username;
var txtPwd=form.pwd;
function getFocus(){
  //当前文本框加粗
  this.className='txt_focus';
  //清除旁边div的class
  var div=this.parentNode.nextElementSibling.firstElementChild;
  div.className='';
}
txtName.onfocus=getFocus;
txtPwd.onfocus=getFocus;

//失去焦点并验证输入
function vali(txt,reg){
  //清除文本框加粗
  txt.className='';
  //找到旁边的div
  var div=txt.parentNode.nextElementSibling.firstElementChild;
  if(reg.test(txt.value)){
    div.className='vali_success';
  }else{
    div.className='vali_fail';
  }
}
txtName.onblur=function(){
  vali(this,/^\w{1,10}$/)
};
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/)
}

//为form绑定提交事件
form.onsubmit=function(e){
  if(!vali(txtName,/^\w{1,10}$/)||!vali(txtPwd,/^\d{6}$/)){
    e.preventDefault();
  }
}