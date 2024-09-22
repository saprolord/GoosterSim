function increment(stat) {
  //increment "stat" value
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  if (ID == 'goosterhp') { increment = 10 }
  attribute = Number(document.getElementById(ID).value);
  if (checkgoosterstat() || ID == 'goosterlvl') {
    document.getElementById(ID).value = attribute + increment;
  }
}

function decrement(stat) {
  //increment "stat" value
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  if (ID == 'goosterhp') { increment = 10 };
  attribute = Number(document.getElementById(ID).value);
  if ((attribute > 10 * increment) || (ID == 'goosterlvl' && attribute > 1)) {
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

function decrementenemylevel(stat) {
  //increment "stat" value for levels
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  attribute = Number(document.getElementById(ID).value);
  if (attribute > 1) {
    document.getElementById(ID).value = attribute - increment;
  }
  enemylevelinputcheck();
}

function checkgoosterstat() {
  //check if the requested stat exceeds the total allowed by the level
  //returns true if not maxed, false if maxed or above
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var level = Number(document.getElementById('goosterlvl').value);
  if ((hp / 10 + att + spd + ddg - 40 + 1) < level) {
    return true
  } else {
    return false
  }
}

function levelinputcheck() {
  //check and adjust stat according to level
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var level = Number(document.getElementById('goosterlvl').value);
  if (isNaN(level) || level == "" || level < 1) { level = 1 }
  level = Math.ceil(level);
  if ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
    while ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
      if (spd > 10) { spd = spd - 1 }
      else {
        if (ddg > 10) { ddg = ddg - 1 }
        else {
          if (att > 10) { att = att - 1 }
          else {
            if (hp > 100) { hp = hp - 10 }
          }
        }
      }
    }
  }
  document.getElementById('goosterhp').value = hp;
  document.getElementById('goosteratt').value = att;
  document.getElementById('goosterspd').value = spd;
  document.getElementById('goosterddg').value = ddg;
  document.getElementById('goosterlvl').value = level;
}

function statadjust(stat) {
  //check and adjust stat according to level
  //stat should be the ID of the stat being changed
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var level = Number(document.getElementById('goosterlvl').value);
  var statval = Number(document.getElementById(stat).value)
  if (isNaN(statval) || statval == "" || statval < 10) { statval = 10; }
  if (stat == 'goosterhp') {
    if (statval < 100) { hp = 100; statval = 100; };
    statval = (Math.floor(statval / 10) * 10); hp = statval;
  }
  statval = Math.ceil(statval);
  if ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
    while ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
      if (stat == 'goosterhp') { statval = statval - 10 } else {
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

function goosterstatcheck() {
  //return true if the stat are maxed out for the level, false if not compatible with the level
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var level = Number(document.getElementById('goosterlvl').value);
  if (((hp / 10 + att + spd + ddg - 40 + 1) > level) || ((hp / 10 + att + spd + ddg - 40 + 1) < level)) {
    return false;
  } else {
    return true;
  }
}

function incrementenemy(stat) {
  //increment "stat" value
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  if (ID == 'enemyhp') { increment = 10 }
  attribute = Number(document.getElementById(ID).value);
  if (checkenemystat() || ID == 'enemylvl') {
    document.getElementById(ID).value = attribute + increment;
  }
}

function decrementenemy(stat) {
  //increment "stat" value
  var ID = stat;
  var attribute = 0;
  var increment = 1;
  if (ID == 'enemyhp') { increment = 10 };
  attribute = Number(document.getElementById(ID).value);
  if ((attribute > 10 * increment) || (ID == 'enemylvl' && attribute > 1)) {
    document.getElementById(ID).value = attribute - increment;
  }
}


function checkenemystat() {
  //check if the requested stat exceeds the total allowed by the level
  //returns true if not maxed, false if maxed or above
  var hp = Number(document.getElementById('enemyhp').value);
  var att = Number(document.getElementById('enemyatt').value);
  var spd = Number(document.getElementById('enemyspd').value);
  var ddg = Number(document.getElementById('enemyddg').value);
  var level = Number(document.getElementById('enemylvl').value);
  if ((hp / 10 + att + spd + ddg - 40 + 1) < level) {
    return true
  } else {
    return false
  }
}

function enemylevelinputcheck() {
  //check and adjust stat according to level
  var hp = Number(document.getElementById('enemyhp').value);
  var att = Number(document.getElementById('enemyatt').value);
  var spd = Number(document.getElementById('enemyspd').value);
  var ddg = Number(document.getElementById('enemyddg').value);
  var level = Number(document.getElementById('enemylvl').value);
  if (isNaN(level) || level == "" || level < 1) { level = 1 }
  level = Math.ceil(level);
  if ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
    while ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
      if (spd > 10) { spd = spd - 1 }
      else {
        if (ddg > 10) { ddg = ddg - 1 }
        else {
          if (att > 10) { att = att - 1 }
          else {
            if (hp > 100) { hp = hp - 10 }
          }
        }
      }
    }
  }
  document.getElementById('enemyhp').value = hp;
  document.getElementById('enemyatt').value = att;
  document.getElementById('enemyspd').value = spd;
  document.getElementById('enemyddg').value = ddg;
  document.getElementById('enemylvl').value = level;
}

function enemystatadjust(stat) {
  //check and adjust stat according to level
  //stat should be the ID of the stat being changed
  var hp = Number(document.getElementById('enemyhp').value);
  var att = Number(document.getElementById('enemyatt').value);
  var spd = Number(document.getElementById('enemyspd').value);
  var ddg = Number(document.getElementById('enemyddg').value);
  var level = Number(document.getElementById('enemylvl').value);
  var statval = Number(document.getElementById(stat).value)
  if (isNaN(statval) || statval == "" || statval < 10) { statval = 10; }
  if (stat == 'enemyhp') {
    if (statval < 100) { hp = 100; statval = 100; };
    statval = (Math.floor(statval / 10) * 10); hp = statval;
  }
  statval = Math.ceil(statval);
  if ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
    while ((hp / 10 + att + spd + ddg - 40 + 1) > level) {
      if (stat == 'enemyhp') { statval = statval - 10 } else {
        statval = statval - 1;
      }
      if (stat == 'enemyhp') { hp = statval }
      if (stat == 'enemyatt') { att = statval }
      if (stat == 'enemyspd') { spd = statval }
      if (stat == 'enemyddg') { ddg = statval }
    }
  }
  if (stat == 'enemyhp') { hp = statval }
  if (stat == 'enemyatt') { att = statval }
  if (stat == 'enemyspd') { spd = statval }
  if (stat == 'enemyddg') { ddg = statval }
  document.getElementById('enemyhp').value = hp;
  document.getElementById('enemyatt').value = att;
  document.getElementById('enemyspd').value = spd;
  document.getElementById('enemyddg').value = ddg;
  document.getElementById('enemylvl').value = level;
}

function enemystatcheck() {
  //return true if the stat are maxed out for the level, false if not compatible with the level
  var hp = Number(document.getElementById('enemyhp').value);
  var att = Number(document.getElementById('enemyatt').value);
  var spd = Number(document.getElementById('enemyspd').value);
  var ddg = Number(document.getElementById('enemyddg').value);
  var level = Number(document.getElementById('enemylvl').value);
  if (((hp / 10 + att + spd + ddg - 40 + 1) > level) || ((hp / 10 + att + spd + ddg - 40 + 1) < level)) {
    return false;
  } else {
    return true;
  }
}

function Battle(gooster, enemy, log = false) {
  // simulate a gooster battle between gooster and enemy
  //if log is false, no details logged in BattleLog box
  //return 1 if gooster wins, 0 if enemy wins
  //gooster and enemy are list of stats [hp, att, spd, ddg]
  var battle, dbstrike, fighter1, fighter2, hit, starter;
  starter = 0;
  var battlelogwindow = document.getElementById('battlelog');
  if(log){
    battlelogwindow.style.display = "inline";
    //battlelogwindow.scrollIntoView({behaviour:"smooth"});
  }
  const battlelog = []; 
  //determine who goes first
  if (gooster[2] > enemy[2]) {
    starter = 1;
  } else {
    if (gooster[2] < enemy[2]) {
      starter = 2;
    } else {
      var init = Math.random()
      starter = Math.floor(init * 2 + 1);
      battlelog.push('Initiative roll: ' + (Math.round(init * 100) / 100) + '(if <0.5, your gooster starts)');
    }
  }
  //assigne identity to each fighter
  var fight1;
  var fight2;
  if (starter == 1) {
    fighter1 = gooster;
    fight1 = 'Your gooster'
    fighter2 = enemy;
    fight2 = 'Enemy'
    battlelog.push('<b> Your Gooster starts </b>');
  } else {
    fighter1 = enemy;
    fight1 = 'Enemy'
    fighter2 = gooster;
    fight2 = 'Your gooster'
    battlelog.push('<b>Enemy starts</b> </br>');
  }
  //setting up the battle
  battle = true;
  winner = 0;
  //first "free" attack
  fighter2[0] = fighter2[0] - fighter1[1];
  battlelog.push('<i>'+fight2 + ' takes ' + fighter1[1] + ' damages </i>');
  //check if opponent dies after the first hit (unlikely)
  if (fighter2[0] < 1) {
    battle = false;
    winner = 1;
  }
  //main battle loop
  while (battle) {
    battlelog.push('<br/><b>' + fight2 + "'s turn.</b>")
    //double strike throw and check
    dbstrike = Math.random();
    if (dbstrike < (fighter2[2] - fighter1[3]) * 0.05) {
      //succesful double strike
      battlelog.push('<b> Double Strike!</b> <i>(Double strike throw: ' + Math.round(dbstrike * 100, 0) + '[Speed-dodge]x5%=' + ((fighter2[2] - fighter1[3]) * 5) + ')</i>');
      fighter1[0] = fighter1[0] - 2 * fighter2[1];
      battlelog.push('<i>'+fight1 + ' takes ' + 2 * fighter2[1] + ' damages. ' + fight1 + ' </i><b>hp: ' + fighter1[0]+'</b>');
    } else {
      battlelog.push('<i> Normal strike. (Double strike throw: ' + Math.round(dbstrike * 100, 0)+' &gt [Speed-dodge]x5%=' + ((fighter2[2] - fighter1[3]) * 5) + ')</i>');
      //check if hit is dodged
      hit = Math.random();
      if (hit > fighter1[3] * 0.02) {
        //hit landed
        fighter1[0] = fighter1[0] - fighter2[1];
        battlelog.push('<b>Hit!</b> <i>(Dodge throw: ' + Math.round(hit * 100, 0) + '% >' + fight1 + ' dodge x 2%=' + fighter1[3] * 2 + '%)</i>');
        battlelog.push('<i>'+fight1 + ' takes ' + fighter2[1] + ' damages.</i> <b>' + fight1 + ' hp: ' + fighter1[0]+'<b>');
      } else {
        //hit missed / dodged
        battlelog.push('<b>Dodged!</b> <i>(Dodge throw: ' + Math.round(hit * 100, 0) + ' &lt ' + fight1 + ' dodge x 2%=' + fighter1[3] * 2 + '%)</i>');
      }
    }
    //check if hp is below zero
    if (fighter1[0] < 1) {
      battle = false;
      winner = 2;
    }
    //fighter 1 against fighter 2
    if (battle) {
      battlelog.push('<br/><b>'+fight1 + "'s turn.</b>")
      dbstrike = Math.random();
      if (dbstrike < (fighter1[2] - fighter2[3]) * 0.05) {
        battlelog.push('<b>Double Strike!</b> <i>([Speed-dodge]x5%=' + ((fighter1[2] - fighter2[3]) * 5) + '% ; Double strike throw: ' + Math.round(dbstrike * 100, 0) + '%)</i>');
        fighter2[0] = fighter2[0] - 2 * fighter1[1];
        battlelog.push(fight2 + ' takes ' + 2 * fighter1[1] + ' damages. <b>' + fight2 + ' hp: ' + fighter2[0]+'</b>');
      } else {
        battlelog.push('<i> Normal strike. (Double strike throw: ' + Math.round(dbstrike * 100, 0) + ' &gt [Speed-dodge]x5%=' + ((fighter1[2] - fighter2[3]) * 5) + ')</i>');
        console.log(fighter1[2]+'; '+fighter2[3]);
        hit = Math.random();
        if (hit > fighter2[3] * 0.02) {
          fighter2[0] = fighter2[0] - fighter1[1];
          battlelog.push('<b>Hit!</b> <i> (Dodge throw: ' + Math.round(hit * 100, 0) + '% >' + fight2 + ' dodge x 2%=' + fighter2[3] * 2 + '%)</i>');
          battlelog.push(fight2 + ' takes ' + fighter1[1] + ' damages. <b>' + fight2 + ' hp: ' + fighter2[0]+'</b>');
        } else {
          //hit missed / dodged
          battlelog.push('<b>Dodged!</b> <i> (Dodge throw: ' + Math.round(hit * 100, 0) + ' &lt ' + fight2 + ' dodge x 2%=' + fighter2[3] * 2 + '%)</i>');
        }
      }

      if (fighter2[0] < 1) {
        battle = false;
        winner = 1;
      }
    }
  }
  if ((starter == 1) && (winner == 1) || (starter == 2) && (winner == 2)) {
    battlelog.push('<b>Your gooster won!</b>');
    if (log) {
      console.log(battlelog[battlelog.length - 1]);
      let index = 0;
      const intervalld = setInterval(() => {
        if (index < battlelog.length) {
          battlelogwindow.innerHTML += (battlelog[index]);
          battlelogwindow.innerHTML += '<br/>';
          battlelogwindow.scrollTop = battlelogwindow.scrollHeight + 10;
          index++;
        } else {
          clearInterval(intervalld);
        }
      }, 50);
    };
    return 1;
  } else {
    battlelog.push('<b>Your gooster lost</b>');
    if (log) {
      console.log(battlelog[battlelog.length - 1]);
      let index = 0;
      const intervalld = setInterval(() => {
        if (index < battlelog.length) {
          battlelogwindow.innerHTML += (battlelog[index]);
          battlelogwindow.innerHTML += '<br/>';
          battlelogwindow.scrollTop = battlelogwindow.scrollHeight + 10;
          index++;
        } else {
          clearInterval(intervalld);
        }
      }, 50);
    };
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

function CalcWinRate() {
  //simulate a number of battles (b) against any (random) of the possible enemy stat of the level class selected
  //number of battles to be fought

  if (!(goosterstatcheck())) {
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
  var gooster = [hp, att, spd, ddg];
  //get enemy level class
  var enemylvl = Number(document.getElementById('enemylvl').value);
  //create list of all possible stat combination at that level
  enemystats = new StatFill(enemylvl);
  //set progress bar parameter
  progress_counter = 0.1;
  timestamp = Date.now();
  //initiate number of wins
  wins = 0;
  //main loop simulating b battles against enemy stats
  for (var j = 0; j < b; j++) {
    //random number to determine enemy stat for the battle
    x = Math.round(Math.random() * (stats.length - 1));
    //initialise gooster hp
    gooster[0] = hp;
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
  console.log("win rate: " + Math.round((wins / b * 1000)) / 10 + "%");

}

function BattleSim() {
  var i;
  if (!(goosterstatcheck())) {
    alert("Gooster stats does not match level");
    return false;
  }
  document.getElementById("battlelog").innerHTML = " ";
  var hp = Number(document.getElementById('goosterhp').value);
  var att = Number(document.getElementById('goosteratt').value);
  var spd = Number(document.getElementById('goosterspd').value);
  var ddg = Number(document.getElementById('goosterddg').value);
  var gooster = [hp, att, spd, ddg];
  hp = Number(document.getElementById('enemyhp').value);
  att = Number(document.getElementById('enemyatt').value);
  spd = Number(document.getElementById('enemyspd').value);
  ddg = Number(document.getElementById('enemyddg').value);
  enemy = [hp, att, spd, ddg];
  console.log("Start");
  i = Battle(gooster,enemy, true);
  console.log(i);
}

function openTab1() {

  //specifically show all blcoks relevant to Tab1
  document.getElementById("tab1").style.background = "#1053a0";
  document.getElementById("tab1").style.transform = "translatey(0px)";

  document.getElementById("tab2").style.background = "#8b9eb4";
  document.getElementById("tab2").style.transform = "translatey(+1px)";

  document.getElementById("calculate1").style.display = "inline";

  document.getElementById("enemystat").style.display = "none";
  document.getElementById("battlebox").style.display = "none";
  document.getElementById("battlelog").style.display = "none";
  document.getElementById("battle").style.display = "none";

}

function openTab2() {
  //specifically show all blooks relevant to Tab2
  document.getElementById("tab1").style.background = "#8b9eb4";
  document.getElementById("tab1").style.transform = "translatey(+1px)";

  document.getElementById("tab2").style.background = "#1053a0";
  document.getElementById("tab2").style.transform = "translatey(0px)";

  document.getElementById("enemystat").style.display = "flex";
  document.getElementById("battlebox").style.display = "flex";
  //document.getElementById("battlelog").style.display = "flex";
  document.getElementById("battle").style.display = "inline";

  document.getElementById("calculate1").style.display = "none";
  document.getElementById("wintext").style.display = "none";
  document.getElementById("winrate").style.display = "none";


}

function test() {
  console.log("Hello");
  wait(2000).then(() => { console.log('Wake UP'); });
}

function wait(duration) {
  //wait for "duration" ms
  return new Promise(resolve => setTimeout(resolve, duration));
}

function round(number, decimal) {
  // round number to x decimal
  return Math.round(number * 10 * decimal) / (10 * decimal);
}
