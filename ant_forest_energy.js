auto.waitFor(); // 文档地址：https://docs.hamibot.com/reference/widgetsBasedAutomation

// console.show();

const { fuhuo } = hamibot.env;

while(currentActivity()!="com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main"){
  //启动蚂蚁森林
  app.startActivity({ 
     action: "android.intent.action.VIEW", 
     data:"alipays://platformapi/startapp?appId=60000002", 
     packageName: "com.eg.android.AlipayGphone", 
  });
  sleep(2000);
}

//领取过期能量
if(text("领取").find().length==1){
  toast("领取过期能量");
  click("领取");
}

//今日抽卡
if(textContains("抽取今日").exists()){
  toast("抽取今日物种卡片");
  click("抽取今日");
  sleep(4000);
  if(textContains("收下").exists())click("收下");
  sleep(500);
  back();
  sleep(500);
}

//今日抽卡
if(textContains("点击开启").exists()){
  toast("抽取今日物种卡片");
  click("点击开启");
  sleep(4000);
  if(textContains("收下").exists())click("收下");
  sleep(500);
  back();
  sleep(500);
}

while(!textContains("返回我的森林").exists()){
	getEnergy();
  //找能量
  press(975,1575,2);
  sleep(1000);
}

toast("能量收取完毕");

hamibot.exit();

function getEnergy(){
  let titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOne(5000);
  let username = titleobj.text().replace("蚂蚁森林","");
  if(username=="")username="我";
  toast("正在收取"+username+"的能量");
  
	let X=[220,870,265,805,370,730,470,560,620];
	let Y=[760,760,715,715,670,670,630,630,630];
  
  for (let i = 0; i < X.length; i++){
    press(X[i], Y[i], 2);
    sleep(50);
    helpSave(fuhuo);
    closeSkin();
  }
  
  if(textContains("拆开森林赠礼").exists()){
     press(725,1250,2);
    sleep(50);
  }
  
  sleep(500);
}

function helpSave(flag){
  log(textContains("对方收取后你可得一半").find().length);
  if(textContains("对方收取后你可得一半").exists()){
    //帮助收取
    if(flag){
      press(540,1315,2);
      sleep(500);
    //不帮助收取
    }else{
      press(540,1780,2);
      sleep(500);
    }
    sleep(100);
  }
}

function closeSkin(){
  log(textContains("皮肤").find().length);
  if(textContains("皮肤").exists()){
    press(540,1945,2);
    sleep(500);
  }
  sleep(100);
}
