auto.waitFor(); // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation

if(currentPackage()!='com.tencent.mm'){
  launchApp("微信");
	while(currentPackage()!='com.tencent.mm')sleep(500);
}

while(!textContains("发现").exists()){
  back();
  sleep(200);
}

if(id('f2a').exists()){
  var left=id('f2a').findOne().bounds().left+10;
  var top=id('f2a').findOne().bounds().top-10;
  press(left,top,2);
  sleep(200);
}

sleep(200);

swipe(540,500,540,1500,500);

sleep(200);


if(textContains("同济学").find().length>0){
  var left=textContains("同济学").find().pop().bounds().left+90;
  var top=textContains("同济学").find().pop().bounds().top-80;
  press(left,top,2);
  sleep(500);
}

if(textContains("健康上报").find().length>0){
  var left=textContains("健康上报").find().pop().bounds().left+20;
  var top=textContains("健康上报").find().pop().bounds().top-40;
  press(left,top,2);
}else{
  toast("没找到");
}

//点击健康上报
sleep(1500);
press(250,925,2);
sleep(1500);

//健康状态
press(500,1140,2);
sleep(500);
textContains("确定").click();
sleep(500);

//隔离状态
press(500,1260,2);
sleep(500);
textContains("确定").click();
sleep(500);

//今日体温
press(500,1380,2);
sleep(500);
textContains("3").click();
sleep(100);
textContains("6").click();
press(535,1660,2);
sleep(500);

//当前位置

//提交
if(textContains("提交").exists()){
  textContains("提交").click();
  sleep(200);
}

//返回首页
if(textContains("返回首页").exists()){
  textContains("返回首页").click();
  sleep(200);
}

//关闭小程序
press(990,165,2);
