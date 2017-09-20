/**
 * Created by lenovo on 2017/7/9.
 */
//获得id为form1的表单
var form=document.forms[0];
console.log(form);

//1.为name为username和pwd的文本框绑定获得焦点事件
function getFocus(){
  //当前文本框加粗
  this.className='txt_focus';
  //清除旁边div的class
  this.parentNode.nextElementSibling.firstElementChild.className='';
}
form.username.onfocus=getFocus;
form.pwd.onfocus=getFocus;

//2.绑定失去焦点事件
function vali(txt,reg){
  //清除当前文本框的class
  txt.className='';
  //获取旁边的div
  var div=txt.parentNode.nextElementSibling.firstElementChild;
  //用reg测试的当前文本框的内容
  if(reg.test(txt.value)){
  //如果通过，就修改div的class为vali_success
    div.className='vali_success';
    return true;
  }else{
  //如果未通过，就修改div的class为vali_fail
    div.className='vali_fail';
    return false;
  }
}
form.username.onblur=function(){
  vali(this,/^\w{1,10}$/);
};
form.pwd.onblur=function(){
  vali(this,/^\d{6}$/);
}


//3.找到提交按钮，绑定单击事件
form.elements[form.length-2].onclick=function(){
  //验证姓名文本框未通过
  if(!vali(form.username,/^\w{1,10}$/)){
    //让姓名文本框获得焦点
    form.username.onfocus();
  }else if(!vali(form.pwd,/^\d{6}$/)){
    //验证密码框未通过，让密码框获得焦点
    form.pwd.onfocus();
  }else{
    form.submit();
  }
}




