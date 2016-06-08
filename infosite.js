//*each variable below either represents either the the button that is incorperated into the name of each group or is the picture of the logo which will change into the information of the group when the name of the group is clicked.

var shinee = document.getElementById("shinee");
var bts = document.getElementById("bts");
var shineeInfo = document.getElementById("shineeinfo");
var btsInfo = document.getElementById("btsinfo");
var exo = document.getElementById("exo");
var exoInfo = document.getElementById("exoinfo");

//*each function below does what the above comment says. When the text in the div labled with the group's name gets clicked, the logo of that group will be changed into the text that holds information about the group.

shinee.addEventListener("click", function(){
    shineeInfo.innerHTML = "Debuting on May 25, 2008, SHINee has gained popularity throughout the kpop community. Consisting of 5 members, Onew, Jonghyun, Key, Minho and Taemin all went through SM Entertainment for training to become the K-idols they are today. SHINee is known for their strong vocals, powerfully in-sync choreography and their fashion sense. With nine albums, four live albums, and numerous Japanese singles, they have been successful in with sold-out concerts and fanmeetings. Today, Jonghyun and Taemin have been both come out with a mini album and a full album. When SHINee isn't promoting, Minho has participated in numerous K-Dramas, Onew has been in a few k-dramas as well as variety shows and  Key has participated in numerous musicals and variety shows.";
});
                       
bts.addEventListener("click", function(){
    btsInfo.innerHTML = "Also known as 'Bangtan Boys,' BTS has gained massive popularity in the 3 years they have been active. Big Hit Entertainment took in Jin, Suga, Jhope, Rap Monster, Jimin, V, Jungkook and debuted them on June 13, 2013. With one full-length album, five mini albums, and a special album, BTS is a well known group in the kpop community. From Korea to Japan, Europe to the United States, the seven guys have topped numerous music charts all over the world, having successful concerts and fanmeeting as well. ";
});

exo.addEventListener("click", function(){
    exoInfo.innerHTML = "As of April 8, 2012, EXO has gained massive popularity with its two sub-groups, EXO-K and EXO-M. Each sub-group originally consisted of 6 members each, with EXO-K mainly promoting in Korea and EXO-M in China. The 12 original members of EXO are Xiumin, Kris, Luhan, Suho, Lay, Baekhyun, Chen, Chanyeol, D.O, Tao, Kai, and Sehun. With three full-albums, four mini albums, one live album, all recorded in both Korean and Mandarin (Chinese), the group has gained popularity all over the world with successful concerts in Asia, Europe, and the United States. Due to lawsuits over contracts with their company, SM Entertainment, Chinese members Kris, Luhan and Tao left EXO and are currently promoting on their own in China.";
});