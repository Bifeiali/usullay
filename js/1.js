/***1.获取那么为username和pwd的文本框***/
var txtName=document.querySelector("[name='username']");
console.log(txtName);
var txtPwd=document.querySelector("[name=pwd");
console.log(txtPwd);
/***2.获取焦点事件***/
//获取焦点事件通用方法
function getFocus(){
  //给当前文本框加粗
  this.className='txt_focus';
  //让其旁边的div显示
  this.parentNode.nextElementSibling.firstElementChild.className='';
}
txtName.onfocus=getFocus;
txtPwd.onfocus=getFocus;

/***3.失去焦点事件并验证输入***/
//失去焦点并验证输入的通用方法
function vali(txt,reg){
  //清除边框
  txt.className='';
  //找到其旁边的div
  var div=txt.parentNode.nextElementSibling.firstElementChild;
  if(reg.test(txt.value)){
    div.className='vali_success';
  }else{
    div.className='vali_fail';
  }
}
txtName.onblur=function(){
  vali(this,/^\w{1,10}$/);
};
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/);
}
