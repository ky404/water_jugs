// jugs obj
var jugs = {
    smCap: 3,
    lgCap: 5,
    smNum: 0,
    lgNum: 0,
    targetNum: 4,
};

var smNum = 0;
var lgNum = 0;


// jQuery selectors
var smNumDisplay = $("#sm-count");
var lgNumDisplay = $("#lg-count");
var smFillButton = $(".sm-fill");
var lgFillButton = $(".lg-fill");
var smTransButton = $(".sm-trans");
var lgTransButton = $(".lg-trans");
var smEmptyButton = $(".sm-empty");
var lgEmptyButton = $(".lg-empty");
var resetButton = $(".reset");


function smFill() {
    if (jugs.smNum < jugs.smCap) {
        jugs.smNum = jugs.smCap;
        smNumDisplay.text(jugs.smNum);
        console.log("small jug = " + jugs.smNum);
    } else alert("Jug is already full");
}

//transfer from small jug
function smTransfer() {
    let lgDiff = Number(jugs.lgCap - jugs.lgNum);
    if (jugs.smNum === 0) {
        alert("Nothing to transfer");
    } else if (jugs.lgNum < jugs.lgCap) {
        if (jugs.lgNum >= jugs.smCap) {
            jugs.lgNum = (jugs.smNum + lgDiff);
            jugs.smNum = (jugs.smNum - lgDiff);
            lgNumDisplay.text(jugs.lgNum);
            smNumDisplay.text(jugs.smNum);
        } else {
            jugs.lgNum = (jugs.smNum + jugs.lgNum);
            jugs.smNum = 0;
            smNumDisplay.text(jugs.smNum);
            lgNumDisplay.text(jugs.lgNum);
        }
    } else {
        alert("Large Jug is Already Full");
    }
    win()
}

//transfer from large jug
function lgTransfer() {
    let smDiff = Number(jugs.smCap - jugs.smNum);
    if (jugs.lgNum === 0) {
        alert("Nothing to transfer");
    } else if (jugs.smNum < jugs.smCap) {
        if (jugs.lgNum < jugs.smCap) {
            smNumDisplay.text(jugs.lgNum - jugs.smNum);
            jugs.lgNum = jugs.smNum;
            jugs.smNum = Number(smNumDisplay.text());
            lgNumDisplay.text(jugs.lgNum);
        } else {
            jugs.smNum = smDiff;
            smNumDisplay.text(smDiff);
            jugs.lgNum = (jugs.lgNum - smDiff);
            lgNumDisplay.text(jugs.lgNum);
        }
    } else {
        alert("Small Jug is Already Full");
    }
    win()
}

function lgFill() {
    if (jugs.lgNum < jugs.lgCap) {
        jugs.lgNum = jugs.lgCap;
        lgNumDisplay.text(jugs.lgNum);
        console.log("large jug = " + jugs.lgNum);
    } else alert("Jug is already full");
}


function smEmpty() {
    jugs.smNum = 0;
    smNumDisplay.text(0);
}

function lgEmpty() {
    jugs.lgNum = 0;
    lgNumDisplay.text(0);
}

function win() {
    if (jugs.lgNum === 4) {
        $('h1').text("You Did It!").css({
            color: 'green',
            fontSize: '50px',
        });
            $('p').toggle('hidden');
            $('.reset').toggleClass('reset');
        hideButtons()
    }
    }

    function hideButtons() {
    $('.btn-group-sm').toggleClass('hidden');
    }

    function unhideButtons(){
        $('.btn-group-sm').toggleClass('hidden');
    }

    function reset() {
        jugs.smNum = 0;
        jugs.lgNum = 0;
        smNumDisplay.text(smNum);
        lgNumDisplay.text(lgNum);
        $('p').toggle('visible');
        $('h1').text('Water Jug Riddle').css({
            color: 'lightblue',
            textShadow: '2px 2px gray'
        });
        unhideButtons();
    }

//event listeners

    smFillButton.on("click", function () {
        smFill()
    });

    lgFillButton.on("click", function () {
        lgFill()
    });

    smTransButton.on("click", function () {
        smTransfer()
    });

    lgTransButton.on("click", function () {
        lgTransfer()
    });

    smEmptyButton.on("click", function () {
        smEmpty()
    });

    lgEmptyButton.on("click", function () {
        lgEmpty()
    });

    resetButton.on("click", function() {
        reset();
        $(this).toggleClass('reset');
    });

