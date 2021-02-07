const Discord = require('discord.js');
const client = new Discord.Client();
const preFix = 'porpla';

client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	  switch(msg.content){
		  case preFix+" พรุ้งนี้เรียนอะไรบ้าง":
			  msg.reply(classroom("cfnd"));

	  }
});

let classroom = (str) =>{
	var date = new Date();
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var days = ["อาทิตย์", "จันทร์", "อังคาร", "พุทธ", "พฤหัสบดี", "วันศุกร์", "วันเสาร์"]
	var nextDays = days[date.getDay()+1];

	switch(str){
		case "cfnd":
			return("พรุ้งนี้วัน " + nextDays )
	}
}
client.login('ODA3OTYxOTUxNjU2NDc2NzMy.YB_nNA.MT6qew0ItmL2TBL7Sp6y-jcwuCs');
