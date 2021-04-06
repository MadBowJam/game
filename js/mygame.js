//! get element by id + style
function gid(id, style) {
    if (style == "st") {return document.getElementById(id).style;}
    else {return document.getElementById(id);}
};

//! variables
forestBackButton = gid("forest_back");
forestForwardButton = gid("forest_forward");
heroSelectFace = gid("hero_select_face");
heroFace = gid("hero_face");
heroNameButton = gid("hero_name_button");
nameInput = gid("input");
heroName = gid("hero_name", "st");
additionalStatistics = gid("additional_stat", "st");
heroSelectWrapper = gid("wrapper", "st");
bottomBar= gid("bottom_bar", "st");
heroSelect = gid("hero_select", "st");
heroLore = gid("hero_lore", "st");
heroSkills = gid("hero_skills", "st");
forestDialogWindow = gid("forest", "st");
enemyFace = gid("enemy_face");
enemyConfirmWindow = gid("enemy", "st");
enemyButton = gid("enemy_buttons", "st");
fightButtons = gid("fight_buttons", "st");
heroNameSuggestion = gid("hero_name_suggestion", "st");
contact = gid("contact", "st");
checkbox = gid("checkbox");
label = gid("label", "st");
restart = gid("restart");
shopWindow = gid("shop", "st");
girlInForest = gid("girl", "st");
alertTemplate = gid("alert", "st");
gameSave = ()=>{localStorage.character = JSON.stringify(hero)};
classSelectButtonKnight = gid("class_select_button1");
classSelectButtonArcher = gid("class_select_button2");
classSelectButtonMage = gid("class_select_button3");
classSelectButtonNina = gid("class_select_button4");
girlBackButton = gid("girl_back");
girlForwardButton = gid("girl_forward");
shopButton = gid("shop_button");
shopItem1 = gid("shop_item1");
shopItem2 = gid("shop_item2");
shopItem3 = gid("shop_item3");
shopItem4 = gid("shop_item4");
enemyBackButton = gid("enemy_back_button");
enemySelectButton = gid("enemy_select_button");
heroBackButton = gid("hero_back_button");
heroSelectButton = gid("hero_select_button");
defaultPunchButton = gid("default_punch_button");
strongPunchButton = gid("strong_punch_button");
inputCheck = /[A-Za-z0-9_]/;
inputCheck2 = /.{3,15}/;

window.onload = function(){
    classSelectButtonKnight.onclick = ()=>{classSelect.knight()};
    classSelectButtonArcher.onclick = ()=>{classSelect.archer()};
    classSelectButtonMage.onclick = ()=>{classSelect.mage()};
    classSelectButtonNina.onclick = ()=>{classSelect.nina()};
    girlBackButton.onclick = game.moveEnd;
    girlForwardButton.onclick = girl.continue;
    checkbox.onclick = globalFunctions.checkboxCheck;
    restart.onclick = globalFunctions.restartGame;
    shopItem1.onclick = ()=>{shop.createItem("Damage", 10, "+", 1)};
    shopItem2.onclick = ()=>{shop.createItem("MaxHp", 20, "+", globalFunctions.integer(10, 30))};
    // shopItem3.onclick = ()=>{shopCreateItem(30, "HP", "+", 100);};
    shopItem4.onclick = ()=>{shopCreateItem("HP", 100, "=", hero.character1.MaxHp)};
    shopButton.onclick = ()=>{globalFunctions.hiddenContent(shopWindow); globalFunctions.visibleContent(enemyConfirmWindow);}
    enemyBackButton.onclick = globalFunctions.run;
    enemySelectButton.onclick = globalFunctions.forward;
    heroBackButton.onclick = classSelect.back;
    heroSelectButton.onclick = classSelect.begin;
    defaultPunchButton.onclick = globalFunctions.defaultPunch;
    strongPunchButton.onclick = globalFunctions.strongPunch;
    forestBackButton.onclick = globalFunctions.forestBack;
    forestForwardButton.onclick = globalFunctions.forestForward;
    heroNameButton.onclick = function(e) {
        if (inputCheck2.test(nameInput.value) != true && inputCheck2.test(nameInput.value) != true) {
            e.preventDefault();
            heroNameSuggestion.opacity = "1";
            heroNameButton.style.background = "rgb(172, 68, 132)";
        }
        else {
            hero.character1.nickname = nameInput.value;
            heroNameButton.style.background = "rgba(255, 255, 255, 0.2)";
            globalFunctions.hiddenContent(heroName,heroNameSuggestion);
            gameSave();
            nameInput.value = "";
            globalFunctions.visibleContent(forestDialogWindow, label);
            globalFunctions.alertWrite("Do you really think that someone cares about your name ? You so naive. Douchebag.",3000);
        }
    };
    nameInput.addEventListener("beforeinput", e => {
        if (!inputCheck.test(e.data)) {
            e.preventDefault();
        };
    });

    if (localStorage.getItem("character") !== null) {
        var savedGame = JSON.parse(localStorage.character);
        load("Agility", "Armor", "Class", "Coins", "Damage", "Experience", "HP", "HPregen", "Intelligence", "KillCount", "Level", "Mana", "ManaRegen", "MaxExperience", "MaxHp", "MaxMana", "MaxStamina", "Morality", "Stamina", "StaminaRegen", "Strength", "Wife", "gameLevel")
        function load() {
            for(var i = 0; i < arguments.length; i++) {
                hero.character1[arguments[i]] = savedGame.character1[arguments[i]];
            }
        }
        lowerCase = hero.character1.Class.toLowerCase();
        heroFace.src = `img/${lowerCase}.svg`;
        globalFunctions.hiddenContent(heroSelectWrapper, girlInForest, shopWindow);
        globalFunctions.visibleContent(forestDialogWindow, additionalStatistics, bottomBar, label);
        globalFunctions.bottomStats();
    }
    else {
        globalFunctions.visibleContent(heroSelectWrapper);
    };

    setInterval(globalFunctions.resize, 1000);
}
//! main functions
globalFunctions = {
    //! unclicable button
    blockButton: function () {
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].disabled = true;
        }
    },
    //! clicable button
    unblockButton: function () {
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].disabled = false;
        }
    },
    //! make block visible
    visibleContent: function () {
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].visibility = "visible";
            arguments[i].opacity = "1";
        }
    },
    //! make block hidden
    hiddenContent: function () {
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].visibility = "hidden";
            arguments[i].opacity = "0"
        }
    },
    //! delete save and go to start page
    restartGame: () => {
        localStorage.clear();
        game.over();
        globalFunctions.visibleContent(heroSelectWrapper);
        globalFunctions.hiddenContent(heroSelect);
        globalFunctions.unblockButton(classSelectButtonKnight,classSelectButtonArcher,classSelectButtonMage, forestForwardButton);
        globalFunctions.blockButton(enemyBackButton,enemySelectButton,heroBackButton,heroSelectButton,defaultPunchButton,strongPunchButton);
    },
    //! input rules for mobile
    changeInput: (letters) => {
        nameInput.value = letters.replace(/[^A-Za-z0-9_]/g, "");
        if(nameInput.value.length > 15) {
            nameInput.value = nameInput.value.substring(0, 15);
        };
    },
    //! turning on and off autofight button
    checkboxCheck: () => {(checkbox.checked) ? enemySelectButton.onclick = () => {while (enemy.creep.HP > 0 && hero.character1.HP > 0) {globalFunctions.strongPunch();};} : enemySelectButton.onclick = forward;},
    //! hide contact block on resize
    resize: function() {(document.body.scrollWidth <= 500 && document.body.scrollHeight <= 670 || document.body.scrollWidth <= 500 || heroSelectWrapper.visibility == "visible") ? globalFunctions.hiddenContent(contact) : globalFunctions.visibleContent(contact);},
    //! random number generator
    integer: function(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    },
    //! change text (elemtnt id, text)
    innerHTML: function() {
        for (var i = 0; i < arguments.length; i += 2) {
            gid(arguments[i]).innerHTML = arguments[i+1];
        }
    },
    //! whole screen notification
    alertWrite: function(text, time) {
        globalFunctions.visibleContent(alertTemplate);
        globalFunctions.innerHTML("alert", text);
        setTimeout(hide, time);
        function hide() {
            globalFunctions.hiddenContent(alertTemplate);
        }
    },
    //! width of health stamina and mana in % (id, stat, maxStat)
    barsWidth: function() {
        for (var i = 0; i < arguments.length; i += 3) {
            gid(arguments[i], "st").width = ((arguments[i+1] * 100) / arguments[i+2]) + "%";
        }
    },
    //! updating info in main and additional statistics
    bottomStats: function() {
        this.innerHTML("kill_stat", hero.character1.KillCount, "coins_stat", hero.character1.Coins, "exp_stat", `${hero.character1.Experience}<br>━<br>${hero.character1.MaxExperience}`, "lvl_stat", hero.character1.Level, "hero_item_damage", hero.character1.Damage, "hero_item_armor", hero.character1.Armor, "hero_item_morality", hero.character1.Morality, "hero_item_strength", hero.character1.Strength, "hero_item_agility", hero.character1.Agility, "hero_item_intelligence", hero.character1.Intelligence, "stamina_currentMax", `${hero.character1.Stamina} / ${hero.character1.MaxStamina}`, "health_currentMax", `${hero.character1.HP} / ${hero.character1.MaxHp}`, "mana_currentMax", `${hero.character1.Mana} / ${hero.character1.MaxMana}`, "stamina_regen", `+ ${hero.character1.StaminaRegen}`, "health_regen", `+ ${hero.character1.HPregen}`, "mana_regen", `+ ${hero.character1.ManaRegen}`);
        this.barsWidth("stamina_bar", hero.character1.Stamina, hero.character1.MaxStamina, "health_bar", hero.character1.HP, hero.character1.MaxHp, "mana_bar", hero.character1.Mana, hero.character1.MaxMana);
    },
    //! updating enemy statistics
    enemyStat: function() {
        this.innerHTML("enemy_item_class", `Class: ${enemy.creep.Class}`, "enemy_item_hp", `HP: ${enemy.creep.HP}`, "enemy_item_damage", `Damage: ${enemy.creep.Damage}`, "enemy_item_name", enemy.nickname);
    },
    //! default punch (10 stamina)
    defaultPunch: function() {
        punch = false;
        fight.randomEvent();
        fight.fistFight();
    },
    //! strong punch (30 stamina)
    strongPunch: function() {
        punch = true;
        fight.randomEvent();
        fight.fistFight();
    },
    //! forest block go button
    forestForward: function() {
        forestForwardButton.disabled = true;
        forest_dialog = true;
        globalFunctions.hiddenContent(forestDialogWindow, fightButtons);
        globalFunctions.visibleContent(enemyButton, enemyConfirmWindow);
        globalFunctions.blockButton(forestBackButton, forestForwardButton );
        globalFunctions.unblockButton(enemyBackButton, enemySelectButton);
        fight.begin();
    },
    //! forest block back button
    forestBack: function() {
        forest_dialog = false;
        fight.begin();
    },
    //! enemy run button
    run: function() {
        confirmWindow = false;
        globalFunctions.blockButton(enemyBackButton, enemySelectButton);
        fight.action();
    },
    //! enemy fight button
    forward: function() {
        confirmWindow = true;
        globalFunctions.blockButton(enemyBackButton, enemySelectButton);
        globalFunctions.unblockButton(defaultPunchButton, strongPunchButton);
        fight.action();
    },
    //! hero reward of level up
    heroEXP: function(str, agl, int) {
        hero.character1.Strength += str;
        hero.character1.Agility += agl;
        hero.character1.Intelligence += int;
        hero.character1.MaxHp += (str * 10);
        hero.character1.Damage += agl;
        hero.character1.MaxMana += (int * 10);
        hero.character1.HPregen += (str / 2);
        hero.character1.Armor += (agl / 2);
        hero.character1.ManaRegen += (int / 2);
    },
}
//! constructor for hero and enemy
constructor = {
    Villain: function (clas, damage, hp) {
        this.Class = clas;
        this.Damage = damage;
        this.HP = hp;
    },
    Character: function (a, b, c, d, e, f, g) {
        this.Class = a;
        this.Damage = b;
        this.HP = c;
        this.MaxHp = this.HP;
        this.HPregen = e / 2;
        this.Morality = d;
        this.Strength = e;
        this.Agility = f;
        this.Intelligence = g;
        this.Level = 1;
        this.Experience = 0;
        this.MaxExperience = 100;
        this.Mana = 100;
        this.MaxMana = this.Mana;
        this.ManaRegen = g / 2;
        this.Stamina = 100;
        this.MaxStamina = this.Stamina;
        this.StaminaRegen = 15;
        this.Armor = f / 2;
        this.Coins = 0;
        this.Wife = 0;
        this.KillCount = 0;
        this.gameLevel = 0;
        // this.Skill_1 = {};
        // this.Skill_2 = {};
        // this.Skill_3 = {};
        // this.Skill_4 = {};
    }
}
//! hero default stat
hero = {
    Name: "Douchebag",
    character: function(heroClass) {
        if (heroClass == "knight") {
            this.character1 = new constructor.Character ("Knight", 5, 500, 5, 5, 1, 1);
        }
        else if (heroClass == "archer") {
            this.character1 = new constructor.Character ("Archer", 8, 400, 8, 1, 5, 1);
        }
        else if (heroClass == "mage") {
            this.character1 = new constructor.Character ("Mage", 7, 300, 10, 1, 1, 5);
        }
        else if (heroClass == "nina") {
            this.character1 = new constructor.Character ("Nina", 9999, 9999, 9999, 9999, 9999, 9999);
        }
    },
    character1:{},
};
//! enemy default stat
enemy = {
    ogre: function() {
        this.creep = new constructor.Villain ("Ogre", globalFunctions.integer(5, 10), globalFunctions.integer(30, 50));
    },
    troll: function() {
        this.creep = new constructor.Villain ("Troll", globalFunctions.integer(1, 5), globalFunctions.integer(15, 30));
    },
    mom: function() {
        this.creep = new constructor.Villain ("BroodMother", 12, 60);
    },
    boss: function() {
        this.creep = new constructor.Villain ("BOSS", 15, 200);
    },
    creator: function() {
        this.creep = new constructor.Villain ("CREATOR", Infinity, Infinity);
    },
    name: function() {
        var number = globalFunctions.integer(0, 9);
        for (var i = 0; i < arguments.length; i++) {
            if (number == i) {
                enemy.nickname = arguments[i];
                break;
            }
        }
    },
};
//! functions for game begining
classSelect = {
    //! load hero stat
    knight: function() {
        this.classInfoLoad("knight");
    },
    archer: function() {
        this.classInfoLoad("archer");
    },
    mage: function() {
        this.classInfoLoad("mage");
    },
    nina: function() {
        this.classInfoLoad("nina");
    },
    classInfoLoad: function(heroClass) {
        globalFunctions.blockButton(classSelectButtonKnight, classSelectButtonArcher, classSelectButtonMage);
        globalFunctions.unblockButton(heroBackButton, heroSelectButton);
        heroSelectFace.src = `img/${heroClass}.svg`;
        heroFace.src = `img/${heroClass}.svg`;
        this.start(heroClass);
    },
    //! select button in class select
    start: function (heroClass) {
        hero.character(heroClass);
        globalFunctions.innerHTML("hero_select_item_class", `Class: ${hero.character1.Class}`, "hero_select_item_hp", `Health: ${hero.character1.HP}`, "hero_select_item_damage", `Damage: ${hero.character1.Damage}`, "hero_select_item_morality", `Morality: ${hero.character1.Morality}`, "hero_select_item_strength", `Strength: ${hero.character1.Strength}`, "hero_select_item_agility", `Agility:  ${hero.character1.Agility}`, "hero_select_item_intelligence", `Intelligence: ${hero.character1.Intelligence}`);
        globalFunctions.visibleContent(additionalStatistics, contact, bottomBar, heroSelect);
        globalFunctions.hiddenContent(heroSelectWrapper);
        globalFunctions.bottomStats();
    },
    //! back button in class select
    back: function() {
        globalFunctions.blockButton(heroBackButton,heroSelectButton);
        globalFunctions.unblockButton(classSelectButtonMage,classSelectButtonArcher,classSelectButtonKnight);
        globalFunctions.hiddenContent(additionalStatistics,contact,bottomBar,heroSelect);
        globalFunctions.visibleContent(heroSelectWrapper);
    },
    //! name input
    begin: function() {
        globalFunctions.blockButton(heroSelectButton,heroBackButton);
        globalFunctions.hiddenContent(heroSelect);
        globalFunctions.visibleContent(heroName);
        enemyConfirmWindow.display = "block";
    },
}
//! shop block
shop = {
    //! visible shop + working button
    main: function() {
        globalFunctions.hiddenContent(enemyConfirmWindow);
        globalFunctions.visibleContent(shopWindow);
        globalFunctions.alertWrite("You're about to face really big and strong guy. I can help you win.", 3000);
    },
    //! create shop item
    createItem: function(stat, checkMoney, sign, number) {
        if (hero.character1.Coins >= checkMoney) {
            hero.character1.Coins -= checkMoney;
            if (sign == "+") {
                hero.character1[stat] += number;
            }
            else {
                (hero.character1.HP >= hero.character1.MaxHp) ? globalFunctions.alertWrite(`You have max ${stat}, no need to spend money`, 2000) : hero.character1[stat] = number;
            }
            globalFunctions.bottomStats();
        }
        else {
            globalFunctions.alertWrite("You don't have enough money", 1500);;
        }
    }
}
//! game secondary functions
game = {
    //! game over
    over: function() {
        globalFunctions.hiddenContent(forestDialogWindow, additionalStatistics, contact, bottomBar, enemyConfirmWindow, label, shopWindow, girlInForest, heroName);
        enemyConfirmWindow.display = "none";
    },
    //! second life
    secondChance: function() {
        if (hero.character1.Wife == 1) {
            globalFunctions.visibleContent(heroSelectWrapper);
            globalFunctions.unblockButton(classSelectButtonKnight,classSelectButtonArcher,classSelectButtonMage, forestForwardButton);
            globalFunctions.blockButton(enemyBackButton,enemySelectButton,heroBackButton,heroSelectButton,defaultPunchButton,strongPunchButton);
            enemyConfirmWindow.display = "none";
            globalFunctions.alertWrite("Your wife just born a boy<br>18 years later<br>Your son become as good as you, and decided to continue your journey", 6000);
        }
    },
    //! lost by enemy
    defeatByEnemy: function(text, time) {
        globalFunctions.alertWrite(text, time);
        game.over();
        game.secondChance();
    },
    //! + enemy pregression
    levelProgression: function() {
        if (hero.character1.gameLevel > 10) {
            var enemyProgression = 0;
            for (var i = 10; i <= hero.character1.gameLevel; i+=10) {
                if (i % 10 == 0) {
                    enemyProgression += 1;
                };
            };
            enemy.creep.HP += (enemyProgression * 50);
            enemy.creep.Damage += (enemyProgression * 5);
        };
    },
    //! check if hero exceed maxhp
    checkForMaxHp: function() {
        if (hero.character1.HP > hero.character1.MaxHp) {
            hero.character1.HP = hero.character1.MaxHp;
            globalFunctions.alertWrite("You can't exceed max HP", 2000);
        }
    },
    //! experiense and coind reward after level
    reward: function() {
        function rewardRandom(experience, coins) {
            hero.character1.Coins += coins;
            hero.character1.Experience += experience * (hero.character1.Level / 2);
            if (hero.character1.Experience > hero.character1.MaxExperience) {
                hero.character1.Experience = hero.character1.MaxExperience;
            }
            hero.character1.KillCount += 1;
        }
        if (enemy.creep.Class == "Ogre") {
            rewardRandom(20, globalFunctions.integer(5, 10));
        };
        if (enemy.creep.Class == "Troll") {
            rewardRandom(10, globalFunctions.integer(3, 7));
        };
        if (enemy.creep.Class == "BOSS") {
            rewardRandom(50, 20);
        };
        if (enemy.creep.Class == "BroodMother") {
            rewardRandom(30, 10);
        };
    },
    //! level up on reaching max experience
    levelUp: function() {
        if (hero.character1.Experience >= hero.character1.MaxExperience && hero.character1.Level < 30) {
            hero.character1.Level += 1;
            if (hero.character1.Level != 30) {
                hero.character1.MaxExperience += (100 * hero.character1.Level);
            };
            if (hero.character1.Class == "Knight") {
                globalFunctions.heroEXP(3, 1, 1);
            }
            else if (hero.character1.Class == "Archer") {
                globalFunctions.heroEXP(1, 3, 1);
            }
            else if (hero.character1.Class == "Mage") {
                globalFunctions.heroEXP(1, 1, 3);
            };
        };
    },
    //! move to next level + save
    moveEnd: function() {
        globalFunctions.hiddenContent(enemyConfirmWindow,fightButtons, girlInForest);
        globalFunctions.visibleContent(forestDialogWindow,enemyButton);
        globalFunctions.blockButton(defaultPunchButton,strongPunchButton);
        globalFunctions.unblockButton(forestBackButton, forestForwardButton);
        globalFunctions.bottomStats();
        setTimeout(save, 500);
        function save() {
            gameSave();
        }
    },
    //! restore main stat (stat, statRegen, maxStat)
    regen: function() {
        for (var i = 0; i < arguments.length; i += 3) {
            hero.character1[arguments[i]] += hero.character1[arguments[i+1]];
            if (hero.character1[arguments[i]] > hero.character1[arguments[i+2]]) {
                hero.character1[arguments[i]] = hero.character1[arguments[i+2]]
            }
        }
    }
}
//! event with girl
girl = {
    //! wife check and end turn
    start: () => {
        if ((globalFunctions.integer(1, 100)) == 33) {
            if (hero.character1.Wife == 0) {
                hero.character1.Wife = 1;
                globalFunctions.alertWrite("Holy moly, you found such a beautifull girl, that u can't stand for her and offered her marriage<br>She said YES", 4000);
                game.moveEnd();
            };
        }
        else {
            globalFunctions.alertWrite("Holy moly, you found girl in forest", 2000);
            globalFunctions.hiddenContent(forest_dialog, enemyConfirmWindow);
            globalFunctions.visibleContent(girlInForest);
        };
    },
    //! girl main event
    continue: () => {
        if (hero.character1.Coins < 10) {
            globalFunctions.alertWrite("You don't have enough money, move on", 2000);
        }
        else {
            var chance = globalFunctions.integer(1, 10);
            hero.character1.Coins -= 10;
            if (chance == 1) {
                var injury = globalFunctions.integer(1, 3);
                if (injury == 1) {
                    hero.character1.HP /= 2;
                    globalFunctions.alertWrite("This scam girl tried to kill you, and stole all your coins<br>You lost half health", 4000);
                };
                if (injury == 2) {
                    hero.character1.Damage /= 2;
                    globalFunctions.alertWrite("This scam girl broke your weapon, and stole all your coins<br>You lost half damage", 4000);
                };
                if (injury == 3) {
                    globalFunctions.alertWrite("This scam girl stole all your coins", 3000);
                };
                hero.character1.Coins = 0;
            }
            else {
                if (chance == 7) {
                    hero.character1.Morality /= 2;
                    globalFunctions.alertWrite("It was worst 10 minutes of her life<br>You lost half of morality", 4000);
                }
                else {
                    hero.character1.Morality += 1;
                    globalFunctions.alertWrite("You was really good<br>+1 morality", 2000);
                };
            };
        }
        if (hero.character1.Wife == 1) {
            if (chance == 5) {
                hero.character1.Wife = 0;
                hero.character1.Morality /= 2;
                globalFunctions.alertWrite("Your wife decided to check you for loyalty.<br>She saw everything<br>Your marriage is over<br>You lost half of morality", 5000);
            };
        };
        game.moveEnd();
    },
}
//! fight event
fight = {
    //! fight start / run away
    begin: function() {
        hero.character1.gameLevel++;
        if (forest_dialog == true) {
            this.enemyLoad();
        }
        else {
            hero.character1.Morality -= 1;
            globalFunctions.bottomStats();
            if (hero.character1.Morality <= 0) {
                defeatByEnemy(`${hero.Name} cant accept his cowardness and committed suiside`, 3000);
            }
            else {
                globalFunctions.alertWrite("You little pu**y who afraid of monsters. But CREATOR doesn't want you to leave. Fight up until death.", 3500);
                gameSave();
            }
        };
    },
    //! lose events
    action: function() {
        if (confirmWindow == true) {
            globalFunctions.hiddenContent(enemyButton);
            globalFunctions.visibleContent(fightButtons);
        }
        else {
            hero.character1.Morality -= 1;
            globalFunctions.bottomStats();
            if (enemy.creep.Class == "BOSS") {
                game.defeatByEnemy("Yaroslav chased you and killed you", 3000);
            }
            else if (enemy.creep.Class == "CREATOR") {
                game.defeatByEnemy("You can't escape CREATOR's wrath<br>DIE", 3000);
            }
            else {
                game.moveEnd();
            }
        };
        if (hero.character1.Morality <= 0) {
            game.defeatByEnemy(`${hero.Name} cant accept his cowardness and committed suiside`, 3000);
        };
    },
    //! load enemy stat
    enemyLoad: function() {
        globalFunctions.hiddenContent(forestDialogWindow);
        globalFunctions.visibleContent(enemyConfirmWindow);
        number = globalFunctions.integer(1, 10);
        enemy.name("Artem","Ihor","Danila","Denys","Nastya","Katya","Roma","Serega","Diana","Roma P.");
    
        if (hero.character1.gameLevel % 10 == 0) {
            enemyFace.src="img/man.svg";
            enemy.nickname = "Yaroslav";
            enemy.boss();
            game.levelProgression();
            shop.main();
            globalFunctions.enemyStat();
        }
        else if (hero.character1.gameLevel % 5 == 0 && hero.character1.gameLevel % 10 != 0) {
            girl.start();
        }
        else {
            if ((globalFunctions.integer(1, 100)) == 33 && enemy.nickname == "Ihor") {
                enemyFace.src="img/man.svg";
                enemy.creator();
            }
            else if (number == 5 && enemy.nickname == "Artem") {
                enemyFace.src="img/spider.svg";
                enemy.mom();
            }
            else if (number == 1 || number == 5 || number == 7) {
                enemyFace.src="img/troll.svg";
                enemy.troll();
            }
            else {
                enemyFace.src="img/ogre.svg";
                enemy.ogre();
            };
            game.levelProgression();
            globalFunctions.enemyStat();
        };
    },
    //! random events with some enemy
    randomEvent: function() {
        var event = globalFunctions.integer(1, 4);
        if (enemy.creep.Class == "Ogre" && enemy.nickname == "Diana") {
            if (event == 4) {
                hero.character1.Morality += 1;
                globalFunctions.alertWrite("Diana flexed in front of you<br>+1 morality", 2000);
            };
        };
        if (enemy.creep.Class == "Ogre" && enemy.nickname == "Nastya") {
            if (event == 3) {
                hero.character1.HP -= 25;
                globalFunctions.alertWrite("Nastya threw thermometer into your face<br>-25 health", 2000);
            };
        };
        if (enemy.creep.Class == "Ogre" && enemy.nickname == "Roma P.") {
            if (event == 2) {
                if ((globalFunctions.integer(1, 2)) == 1) {
                    hero.character1.HP += 25;
                    game.checkForMaxHp();
                    globalFunctions.alertWrite("Roma P. coocked muffin for you, it was tasty<br>+25 health", 1500);
                }
                else {
                    hero.character1.HP -= 25;
                    globalFunctions.alertWrite("Roma P. coocked muffin for you, it was poisoned, while you was vomiting Roma P. hit you in a head with stick<br>-25 health", 4000);
                };
            };
        };
        if (enemy.creep.Class == "BroodMother") {
            if (event == 1) {
                hero.character1.HP -= 50;
                globalFunctions.alertWrite("Artem can't stop talking during this fight, he disorient and hit you<br>-50 health", 3000);
            };
        };
    },
    //! fight with enemy
    fistFight: function() {
        punchDamage = hero.character1.Damage / 2;
        if (punch == true) {
            if (hero.character1.Stamina >= 30) {
                hero.character1.Stamina -= 30;
                hero.character1.Damage += punchDamage;
                enemy.creep.HP -= hero.character1.Damage;
                hero.character1.Damage -= punchDamage;
            }
            else {
                defPunch();
            };
        }
        else {
            defPunch();
        };

        function defPunch() {
            hero.character1.Stamina -= 10;
            enemy.creep.HP -= hero.character1.Damage;
        }

        globalFunctions.bottomStats();
        globalFunctions.enemyStat();
        if (enemy.creep.HP <= 0) {
            game.reward();
            game.levelUp();
            globalFunctions.bottomStats();
            game.moveEnd();
        };

        var armor = enemy.creep.Damage - hero.character1.Armor;
        if (armor < 0) {
            armor = 0;
        }

        hero.character1.HP -= armor;
        game.regen("Mana", "ManaRegen", "MaxMana", "HP", "HPregen", "MaxHp", "Stamina", "StaminaRegen", "MaxStamina");
        globalFunctions.bottomStats();

        if (hero.character1.HP <= 0) {
            game.defeatByEnemy("You die in a battle, like a hero",3000);
        };
    },
}
