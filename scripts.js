function increment(stat){
  //increment "stat" value
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  if (ID=='goosterhp'){increment=10}
  attribute = Number(document.getElementById(ID).value);
  if (checkgoosterstat() || ID=='goosterlvl'){
    document.getElementById(ID).value = attribute + increment;
  }
}

function decrement(stat) {
  //increment "stat" value
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  if (ID == 'goosterhp' ) { increment = 10 };
  attribute = Number(document.getElementById(ID).value);
  if ((attribute > 10 * increment) || (ID == 'goosterlvl' && attribute>1)){
    document.getElementById(ID).value = attribute - increment;
  }
}

function incrementlevel(stat) {
  //increment "stat" value for levels
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  attribute = Number(document.getElementById(ID).value);
  document.getElementById(ID).value = attribute + increment;
}

function decrementlevel(stat) {
  //increment "stat" value for levels
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  attribute = Number(document.getElementById(ID).value);
  if (attribute > 1) {
    document.getElementById(ID).value = attribute - increment;
  }
  levelinputcheck();
}

function checkgoosterstat(){
  //check if the requested stat exceeds the total allowed by the level
  //returns true if not maxed, false if maxed or above
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var level = Number(document.getElementById('goosterlvl').value);
  if ((hp/10+att+spd+ddg-40+1)<level){
    return true
  } else {
    return false
  }
}

function levelinputcheck(){
  //check and adjust stat according to level
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var level = Number(document.getElementById('goosterlvl').value);
  if (isNaN(level)||level==""){level=1}
  level=Math.ceil(level);
  if ((hp / 10 + att + spd + ddg - 40 + 1) > level){
    while ((hp / 10 + att + spd + ddg - 40 + 1) > level){
      if(spd>10){spd=spd-1} 
        else {if(ddg>10){ddg=ddg-1}
          else{if(att>10){att=att-1}
            else{if(hp>100){hp=hp-10}
            }
          }
        }
    }
  }
document.getElementById('goosterhp').value=hp;
document.getElementById('goosteratt').value=att;
document.getElementById('goosterspd').value=spd;
document.getElementById('goosterddg').value=ddg;
document.getElementById('goosterlvl').value=level;
}
