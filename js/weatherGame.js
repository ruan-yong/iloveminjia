var imgOrigArr = [];  //图片的正确顺序
var imgRandArr = [];  //图片打乱后的顺序
var width;           //整张图片的宽度
var height;          //整张图片的高度
var cellWidth;       //每一碎块的宽度
var cellHeight;      //每一碎块的高度
var moveTime = 400;  //记录animate动画的运动时间，默认400毫秒

var imgCells = '';    //记录碎片节点

var lever = 3;      //难度 3x3

var isInGame = false;       //标记是否在游戏中
var scroe = 0;        //游戏步数

var presentImg;          //当前图片
var passImg = [];        //已经通关的图片
var passKnowledge = {};  //已经获取到的气象知识点
var img2txt = new Array();

var content = ["我喜欢的样子，你都有。","年年月月逝去越是觉得深爱你。","后海有树的院子，夏代有工的玉。此时此刻的云，二十来岁的你。","过去有人曾对我说，“一个人爱上小溪，是因为没有见过大海。”而如今我终于可以说，“我已见过银河，但我仍只爱你一颗星。”","春风再美也比不上你的笑，没见过你的人不会明了。","在遇到你之前，我的悲喜没那么多层次。","他问我喜欢你哪里，我想了想说，我喜欢你走路的样子。","你最可爱，我说时来不及思索，但思索之后还是这样说。","在遇到她以前，我不怕死，不惧远行，也不曾忧虑悠长岁月，现在却从未如此真切地思虑起将来。","如果我爱上了你的笑容，要怎么收藏怎么拥有？","心甘情愿感染你的气息。","如果伤感比快乐更深，但愿我一样伴你行。当抬头迎面总有密云，只要认得你再没有遗憾。","如果苦笑比眼泪更真，但愿笑声像一滴滴吻。如明日好景忽远忽近，仍愿抱着这份情没疑问。","任面前时代再低气温，多么的庆幸，长夜无需一个人。任未来存在哪个可能，和你亦是，最后那对变更。","唯愿在剩余光线面前，留下两眼为见你一面。仍然能相拥，不怕骤变，但怕思念。","唯愿会及时拥抱入眠，留住这世上最暖一面。茫茫人海取暖渡过，最冷一天。","你站在桥上看风景，看风景的人在楼上看你。","愿有岁月可回首，且以深情共白头。","现在你终于来到我眼前了，我本想告诉你在没有你的这段漫长的岁月里，我遇到的所有的糟糕透顶甚至难熬的事情，但当我真的看到你时，我却只想告诉你，我很想你。","陌上人如玉，公子世无双。","陌上花开，可缓缓归矣。","山有木兮木有枝，心悦君兮君不知。","不爱那么多，只爱一点点，别人眉来眼去，我只偷看你一眼。","情不知所起一往而深。","今夜我不关心人类，我只想你。","我一直在这里，等风也等你。","如果人类有尾巴的话，说起来有点不好意思，只要和你在一起，一定会止不住摇起来的。","今夕何夕，见此良人，子兮子兮，如此良人何。","说好的一辈子，差一年一个月一天一个时辰，都不算一辈子。","与君初相识，犹如故人归。","任凭弱水三千，我只取一瓢饮。","我一见你就笑。","在所有物是人非的风景里，我最喜欢你。","我还是相信，星星会说话，石头会开花，穿过夏天的木栅栏和冬天的风雪之后，你终会抵达。","你是我温暖的手套，冰冷的啤酒，带着阳光味道的衬衫，日复一日的梦想。","桃之夭夭，灼灼其华。之子于归，宜其室家。","故事很长，我长话短说，我喜欢你，很久了。","情话情意情路情尽都经过也是因你，我多想你。","我遇见你，我记得你，这座城市天生就适合谈恋爱，你天生就适合我的灵魂。","i want to be what you are . see what you see ,love what you love .","为了让她爱上我，人们对我说：“要让她笑。”可是每次她一笑啊，明明是我又爱上了她。","曾经我问个不休，你何时跟我走。","做的梦与你无关，在我看来就算失眠。","你笑起来真像好天气。","从不管远或近，亦不想贪一吻，只想到某日当你寒冷，做你热能。","听着，请借我你的耳朵，我心里有话想说，我有的只是一双拥抱着你的双手，现在到以后。","你是我这一生等了半世未拆的礼物。","我爱你不是因为你是谁，而是我在你面前可以是谁。","感谢我不可以住进你的眼睛，所以才能拥抱你的背影。","有生之年遇到你，竟花光我所有运气。","有很多话想跟你说，但一直没有机会。我携带它们穿越季节，掠过高架，铺在山与海之间。花盛开就是一句，夜漫过就是一篇。黄昏开始书写，黎明是无数的扉页。全世界拼成诗，我爱你当作最后一行。","I love three things. the sun, the moon and you. the sun for the day .the moon for the night and you forever.","春风初生，春林初盛，春风十里，不如你。","我转头，看见你走来，在阳光里，于是笑容从我心里溢出。","我最爱你与我这生一起，哪怕明天风高路斜。","Flowers are so contradictory. But I was too young to know how to love her.","告诉你，一想到你，我这张丑脸上就泛起微笑 。","要是爱你爱的少些，话就可以说的多些了。","该死，我记不起其他没有你的地方。","你微微地笑着，不同我说什么话。而我觉得，为了这个，我已等待很久了。","因为你太美好了，我等你等了这么久，才能跟你在一起，我害怕得不得了，生怕自己搞砸了。"]


var s = 0;

//得到照片对应文本（新加）
function get_img2txt() {
    var puzzle = Bmob.Object.extend("p");
    var query = new Bmob.Query(puzzle);
    query.skip(count);
    query.limit(limit);
    query.find({
        success:function (result) {
            if (result.length != 0){
                for (var i = 0; i < result.length; i++){
                    console.log(result[i].get("sentence"))
                    img2txt[result[i].get("img")]=result[i].get("sentence")
                }
                for(var key in img2txt){
                    console.log(key)
                    console.log(img2txt[key])
                }
            }
        },
        error:function (error) {
            console.log("query fail");
            $("#loading").hide();
        }
    });
}

function initGame(img, clicktarger) {
    presentImg = img;
    $("#btn").unbind();    //移除所有的事件绑定
    $("#level").unbind();
    $("#game_result span").unbind();
    lever = 3;
    $("#level").text("level: " + lever + "x" + lever);

    $("#imgArea").fadeIn();
    $("#game_reward").fadeOut();

    $("#game_result span").text("show");
    s = 0;

    if ($.inArray(img, passImg) != -1){
        //$("#gameAnswer").text(passKnowledge[img]);
        console.log(passKnowledge)
        console.log(img)
        
        //console.log(img2txt)
        //$("#gameAnswer").text("ssssssssssssss");

        $("#game_result span").css('background', '#62baa0');
        $("#game_result span").click(function () {
            if (s == 0){
                showReward(img);
            }else {
                showback();
            }
        });
    }else {
        $("#game_result span").css('background', '#5E5E5E');
    }

    if (isInGame){
        alertBox("切换图片", "游戏正在进行，确定要切换图片重新开始吗？", function () {
            removeSclection();
            changeState(clicktarger);

            imgSplit(img);
            $("#btn").text("开始");
            isInGame = false;
            scroe = 0;
            $("#scroe").text("步数：0");
        })
    }else {
        if (clicktarger != undefined){
            removeSclection();
            changeState(clicktarger);
        }
        imgSplit(img);
    }

    bindbtn();
    bindlevel();
}

//绑定开始按钮
function bindbtn() {
    //开始/复原游戏
    $("#btn").click(function () {
        $("#imgArea").fadeIn();
        $("#game_reward").fadeOut();
        if (isInGame){
            alertBox("复原游戏", "游戏正在进行，确定要复原吗？", function () {
                imgSplit(presentImg);
                rebackGame();
            })
        }else {
            imgSplit(presentImg);
            randomArr();
            cellOrder(imgRandArr);
            beginGamePc();
            beginGamePhone();
            $("#btn").text("复原");
            isInGame = true;
            scroe = 0;
            $("#scroe").text("步数：0");
        }
    });
}

//绑定选择难度按钮
function bindlevel() {
    //切换难度
    $("#level").click(function () {
        if (isInGame){
            alertBox("重新开始", "游戏尚未结束，确定要切换难度重新开始吗？", function () {
                if (lever < 6){
                    lever += 1;
                }else {
                    lever = 3;
                }
                imgSplit(presentImg);
                rebackGame();
                $("#level").text("level: " + lever + "x" + lever);
            })
        }else {
            if (lever < 6){
                lever += 1;
            }else {
                lever = 3;
            }
            imgSplit(presentImg);
            $("#level").text("level: " + lever + "x" + lever);
        }
    });
}

//复原游戏
function rebackGame() {
    imgCells.unbind("mouseover");
    imgCells.unbind("mouseout");
    imgCells.unbind("mousedown");
    imgCells.off("touchstart");
    $("#btn").text("开始");
    isInGame = false;
    scroe = 0;
    $("#scroe").text("步数：0");
}

//切割图片
function imgSplit(img) {
    //add
    get_img2txt()
    console.log(img2txt)

    width = $("#imgArea").width();
    height = $("#imgArea").height();
    cellWidth = width/lever;
    cellHeight = height/lever;

    imgOrigArr = [];
    imgRandArr = [];
    var cell = '';   //记录单个图片碎片的变量
    $("#imgArea").html("");
    for (var i = 0; i < lever; i++){
        for (var j = 0; j < lever; j++){
            imgOrigArr.push(i*lever+j);
            cell = document.createElement("div");
            cell.className = "imgCell";
            $(cell).css({width: cellWidth - 2, height: cellHeight - 2, left: j * cellWidth, top: i * cellHeight, background: "url('"+ img +"')", backgroundPosition: (-j)*cellWidth + 'px ' + (-i)*cellHeight + 'px'});
            $("#imgArea").append(cell);
        }
    }
    imgCells = $(".imgCell");
    imgCells.css('cursor', 'pointer');
}

//开始游戏(pc)
function beginGamePc() {

    imgCells.bind("mouseover", function () {
        $(this).addClass("hover");
    });

    imgCells.bind("mouseout", function () {
        $(this).removeClass("hover");
    });

    imgCells.bind("mousedown", function (e) {
        /*此处是图片移动*/
        $(this).css('cursor','move');

        //所选图片碎片的下标以及鼠标相对该碎片的位置
        var cellIndex_1 = $(this).index();
        var cell_mouse_x = e.pageX - $(this).offset().left;
        var cell_mouse_y = e.pageY - $(this).offset().top;

        //拖动碎片
        $(document).bind("mousemove", function (e2) {
            imgCells.eq(cellIndex_1).css({
                zIndex: '40',
                left: e2.pageX - cell_mouse_x - $("#imgArea").offset().left,
                top: e2.pageY - cell_mouse_y - $("#imgArea").offset().top
            });
        });

        $(document).bind("mouseup", function (e3) {
            var cellIndex_2 = cellChangeIndex(e3.pageX - $("#imgArea").offset().left, e3.pageY - $("#imgArea").offset().top, cellIndex_1);
            //console.log(cellIndex_2);
            if (cellIndex_1 == cellIndex_2){
                cellReturn(cellIndex_1);
            }else {
                cellExchange(cellIndex_1, cellIndex_2);
            }
            //移除绑定
            $(document).unbind('mousemove').unbind('mouseup');
        })
    });

    imgCells.bind("mouseup", function () {
        $(this).css('cursor','pointer');
    })
}

//开始游戏(phone)
function beginGamePhone() {
    imgCells.on('touchstart', function (e) {
        //所选图片碎片的下标以及鼠标相对该碎片的位置
        var cellIndex_1 = $(this).index();
        var cell_mouse_x = e.touches[0].pageX - $(this).offset().left;
        var cell_mouse_y = e.touches[0].pageY - $(this).offset().top;
        $(document).on('touchmove', function (e2) {
            imgCells.eq(cellIndex_1).css({
                zIndex: '40',
                left: e2.touches[0].pageX - cell_mouse_x - $("#imgArea").offset().left,
                top: e2.touches[0].pageY - cell_mouse_y - $("#imgArea").offset().top
            });
        });

        $(document).on('touchend', function (e3) {
            var cellIndex_2 = cellChangeIndex(e3.changedTouches[0].pageX - $("#imgArea").offset().left, e3.changedTouches[0].pageY - $("#imgArea").offset().top, cellIndex_1);
            //console.log(cellIndex_2);
            if (cellIndex_1 == cellIndex_2){
                cellReturn(cellIndex_1);
            }else {
                cellExchange(cellIndex_1, cellIndex_2);
            }
            //移除绑定
            $(document).off('touchmove').off('touchend');
        })
    });
}

//打乱数组顺序
function randomArr() {
    imgRandArr = [].concat(imgOrigArr);   //将顺序的数组值赋给新数组之后打乱顺序
    for (var i = 0; i < imgOrigArr.length; i++){
        imgRandArr.sort(function () {
            return 0.5 - Math.random();
        });
    }
    /*console.log("before:"+imgOrigArr);
    console.log("after:"+imgRandArr);*/
}

//根据打乱的数组给图片排序
function cellOrder(arr) {
    for (var i = 0; i < arr.length; i++){
        imgCells.eq(i).animate({
            left: arr[i] % lever * cellWidth,
            top: Math.floor(arr[i] / lever) * cellHeight     //Math.floor向下取值（1.6为1）
        }, moveTime);
    }
}

//计算被交换碎片的下标
function cellChangeIndex(x, y, index1) {
    //鼠标拖动碎片移至大图片外
    if (x < 0 || x > width || y < 0 || y > height){
        return index1;
    }
    //鼠标拖动碎片在大图范围内移动
    var row = Math.floor(y / cellHeight);
    var col = Math.floor(x / cellWidth);
    var position = row * lever + col;
    
    var i = 0;
    while ((i < imgRandArr.length) && (imgRandArr[i] != position)){
        i++;
    }
    return i;
}

//被拖动的图片返回原位置
function cellReturn(index) {
    var row = Math.floor(imgRandArr[index]/lever);
    var col = imgRandArr[index] % lever;

    imgCells.eq(index).animate({
        left: col * cellWidth,
        top: row * cellHeight
    }, moveTime, function () {
        imgCells.eq(index).css('z-index','10');
    })
}

//交换图片位置
function cellExchange(indexfrom, indexto) {
    var rowform = Math.floor(imgRandArr[indexfrom] / lever);
    var colform = imgRandArr[indexfrom] % lever;
    var rowto = Math.floor(imgRandArr[indexto] / lever);
    var colto = imgRandArr[indexto] % lever;

    //交换图片的位置
    imgCells.eq(indexfrom).animate({
        left: colto * cellWidth,
        top: rowto * cellHeight
    }, moveTime, function () {
        imgCells.eq(indexfrom).css('z-index','10');
    });

    imgCells.eq(indexto).css('z-index','30').animate({
        left: colform * cellWidth,
        top: rowform * cellHeight
    }, moveTime, function () {
        imgCells.eq(indexto).css('z-index','10');

        //交换存储的数据
        var temp = imgRandArr[indexfrom];
        imgRandArr[indexfrom] = imgRandArr[indexto];
        imgRandArr[indexto] = temp;

        $("#scroe").text("步数：" + (scroe+=1));

        //判断是否完成全部移动，可以结束游戏
        if (checkPass(imgOrigArr, imgRandArr)){
            passGame();
        }
    })
}

//判断是否完成全部移动，可以结束游戏
function checkPass(rightArr, puzzleArr) {
    if (rightArr.toString() == puzzleArr.toString()){
        return true;
    }
    return false;
    //return true;
}

//成功完成游戏之后的处理
function passGame() {
    if ($.inArray(presentImg, passImg) == -1){//判断图片是否出现过
        passImg.push(presentImg);
        rebackGame();
        queryKnowledge("gameAnswer", function (txt) {
            passKnowledge[presentImg] = txt;
        });
        console.log("info:"+passKnowledge[presentImg]);
        //add
        $("#gameAnswer").text(content[Math.floor(Math.random()*61)]);
        //$("#game_result span").css('background', '#62baa0');
        $("#game_result span").click(function () {
            if (s == 0){
                showReward(presentImg);
            }else {
                showback();
            }
        });
    }else {
        rebackGame();
        queryKnowledge("gameAnswer", function (txt) {
            passKnowledge[presentImg] = txt;
        });
        passKnowledge[presentImg] = $("#gameAnswer").text();
        console.log("info:"+passKnowledge[presentImg]);
        showReward(presentImg);
        //add
        $("#gameAnswer").text(img2txt[presentImg]);
    }
}

//展示游戏成功之后的界面
function showReward(img) {
    $("#imgArea").fadeOut();
    $("#game_reward").fadeIn();
    $("#btn").unbind();
    $("#level").unbind();
    $("#game_result span").text("back");
    $("#game_reward").css('background', 'url('+ img +')');
    s = 1;
}

//返回游戏界面
function showback() {
    $("#imgArea").fadeIn();
    $("#game_reward").fadeOut();
    bindbtn();
    bindlevel();
    $("#game_result span").text("show");
    s = 0;
}
