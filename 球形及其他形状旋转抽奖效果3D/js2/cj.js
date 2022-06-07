var xinm = [
	"帅","美","骚","康","欢","名","财","爱","动","学","梦","傻","旺","玩","买","困","累","稳","胖","瘦","吃","大","赚",
	"富","欣", "吉", "祥", "合", "兴", "旺", "发", "隆", "瑞", "耀", "荣", "华", "盈", "昌", "乐", "善", "腾", "盛",
	"空", "丰", "美", "", "幸", "", "满", "福", "好", "良", "余", "达",
  

];

var fuwen = [
	"𓀀","𓀁","𓀂","𓀃","𓀄",
  

];

var nametxt = $('.name');
//var phonetxt = $('.phone');
var pcount = xinm.length - 1; //字数
var runing = true;
var td = 1; //，共1个字，自己设置啦啦
var num = 0;
var t;
var bbb;

//开始停止
function start() {
	if (runing) {
		runing = false;
		$('#btntxt').removeClass('start').addClass('stop');
		$('#btntxt').html('抽签');

		startNum();
	} else {
		runing = true;
		$('#btntxt').removeClass('stop').addClass('start');
		$('#btntxt').html('上上签');
		stop();
		zd(); //
	}

}
//循环
function startNum() {
	num = Math.floor(Math.random() * pcount);
	nametxt.html("=" + xinm[num] + "="); //显示处
	//	phonetxt.html(phone[num]);
	t = setTimeout(startNum, 0);
}
//停止跳动
function stop() {
	pcount = xinm.length - 1; //总字数
	clearInterval(t);
	t = 0;
}
//打印列表
function zd() {
	if (td == 0) {
		// alert("亲,【 "+bbb+" 】拿稳咯[偷偷笑]");
	} else if (td < 0) {

	} else {
		$('.list').prepend("<span>" + xinm[num] + "     " + "</span>");
		bbb = xinm[num];
		xinm.splice($.inArray(xinm[num], xinm), 1);
	}
	td = td - 1;
}
