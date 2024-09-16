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
  if (isNaN(level)||level==""||level<1){level=1}
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

function statadjust(stat){
  //check and adjust stat according to level
  //stat should be the ID of the stat being changed
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var level = Number(document.getElementById('goosterlvl').value);
  var statval = Number(document.getElementById(stat).value)
  if (isNaN(statval) || statval == "" || statval < 10) { statval = 10; }
  if (stat=='goosterhp') {
    if (statval<100){hp=100;statval=100;};
    statval = (Math.floor(statval / 10)*10); hp=statval; 
  }
  statval = Math.ceil(statval);
  if ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
    while ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
      if (stat == 'goosterhp') {statval=statval-10} else {
        statval = statval - 1;
      }
      if (stat == 'goosterhp') { hp = statval }
      if (stat == 'goosteratt') { att = statval }
      if (stat == 'goosterspd') { spd = statval }
      if (stat == 'goosterddg') { ddg = statval }
    }
  }
  if (stat == 'goosterhp') { hp = statval }
  if (stat == 'goosteratt') { att = statval }
  if (stat == 'goosterspd') { spd = statval }
  if (stat == 'goosterddg') { ddg = statval }
  document.getElementById('goosterhp').value = hp;
  document.getElementById('goosteratt').value = att;
  document.getElementById('goosterspd').value = spd;
  document.getElementById('goosterddg').value = ddg;
  document.getElementById('goosterlvl').value = level;  
}

function goosterstatcheck(){
  //return true if the stat are maxed out for the level, false if not compatible with the level
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var level = Number(document.getElementById('goosterlvl').value);
  if (((hp / 10 + att + spd + ddg - 40 + 1) > level) || ((hp / 10 + att + spd + ddg - 40 + 1) < level) ) {
    return false;
  } else {
    return true;
  }   
}

function Battle(gooster, enemy) {
  // simulate a gooster battle between gooster and enemy
  //return 1 if gooster wins, 0 if enemy wins
  //gooster and enemy are list of stats [hp, att, spd, ddg]
  var battle, dbstrike, fighter1, fighter2, hit, starter;
  starter = 0;

  if (gooster[2] > enemy[2]) {
    starter = 1;
  } else {
    if (gooster[2] < enemy[2]) {
      starter = 2;
    } else {
      starter = Math.floor(Math.random() * 2 + 1);
    }
  }

  if (starter == 1) {
    fighter1 = gooster;
    fighter2 = enemy;
  } else {
    fighter1 = enemy;
    fighter2 = gooster;
  }

  battle = true;
  winner = 0;
  fighter2[0] = fighter2[0] - fighter1[1];

  if (fighter2[0] < 1) {
    battle = false;
    winner = 1;
  }

  while (battle) {
    dbstrike = Math.random();

    if (dbstrike < (fighter2[2] - fighter1[3]) * 0.05) {
      fighter1[0] = fighter1[0] - 2 * fighter2[1];
    } else {
      hit = Math.random();

      if (hit > fighter1[3] * 0.02) {
        fighter1[0] = fighter1[0] - fighter2[1];
      }
    }

    if (fighter1[0] < 1) {
      battle = false;
      winner = 2;
    }

    if (battle) {
      dbstrike = Math.random();

      if (dbstrike < (fighter1[2] - fighter2[3]) * 0.05) {
        fighter2[0] = fighter2[0] - 2 * fighter1[1];
      } else {
        hit = Math.random();

        if (hit > fighter2[3] * 0.02) {
          fighter2[0] = fighter2[0] - fighter1[1];
        }
      }

      if (fighter2[0] < 1) {
        battle = false;
        winner = 1;
      }
    }
  }
  if ((starter == 1) && (winner == 1) || (starter == 2) && (winner == 2)) {
    return 1;
  } else {
    return 0;
  }
}

function StatFill(level) {
  //create a list of all possible stat combination for a defined level
  stats = [];
  //level = level+1;

  for (var hp = 0, _pj_a = level; hp < _pj_a; hp += 1) {
    for (var att = 0, _pj_b = level - hp; att < _pj_b; att += 1) {
      for (var spd = 0, _pj_c = level - hp - att; spd < _pj_c; spd += 1) {
        stats.push([hp * 10 + 100, att + 10, spd + 10, level - hp - att - spd - 1 + 10]);
      }
    }
  }
  return stats;
}

function CalcWinRate(){
  //simulate a number of battles (b) against any (random) of the possible enemy stat of the level class selected
  //number of battles to be fought

  if (!(goosterstatcheck())){
    document.getElementById('wintext').style.display = "none";
    document.getElementById('winrate').style.display = "none";
    alert("Gooster stats does not match level");
    return false;
  }

  b = 100000;
  //assign gooster attributes
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var gooster=[hp,att,spd,ddg];
  //get enemy level class
  var enemylvl = Number(document.getElementById('enemylevel').value);  
  //create list of all possible stat combination at that level
  enemystats = new StatFill(enemylvl);
  //set progress bar parameter
  progress_counter = 0.1;
  timestamp = Date.now();
  //initiate number of wins
  wins = 0;
  //main loop simulating b battles against enemy stats
  for (var j = 0; j <b; j ++) {
    //random number to determine enemy stat for the battle
    x = Math.round(Math.random() * (stats.length - 1));
    //initialise gooster hp
    gooster[0]=hp;
    //initialise enemy stats
    health = enemystats[x][0];
    attack = enemystats[x][1];
    speed = enemystats[x][2];
    dodge = enemystats[x][3];
    enemy = [health, attack, speed, dodge];
    //console.log('enemy: ' + enemy[0] + ';' + enemy[1] + ';' + enemy[2] + ';' +enemy[3]);
    //initialise winner indicator
    winner = -1;
    //battle win outcome 
    winner = Battle(gooster, enemy);
    if (winner === 1) {
      wins = wins + 1;
    }
    //progress bar update
    if (j / b > progress_counter) {
      timenow = Date.now();
      //console.log(Math.round(progress_counter * 100) + "%; est. time: " + Math.round(((timenow - timestamp) / progress_counter - (timenow - timestamp)) / 1000) + "s");
      progress_counter = progress_counter + 0.1;
    }
  }
  
  //winner outcome
  document.getElementById('wintext').innerHTML = ('Average chance of winning against enemy of level ' + enemylvl + ':');
  document.getElementById('winrate').innerHTML = (Math.round((wins / b * 1000)) / 10 + "%");
  document.getElementById('wintext').style.display = "inline";
  document.getElementById('winrate').style.display = "inline";
  console.log("win rate: " + Math.round((wins / b * 1000)) / 10 +"%");

}
