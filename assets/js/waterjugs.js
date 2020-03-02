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




// fill small button
// if < 3 change smCounter to 3 (smalljug)
// else alert jug is full

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
    if (jugs.lgNum < jugs.lgCap) {
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
            // lgNumDisplay = (jugs.smNum + jugs.lgNum);
            // jugs.lgNum = Number(lgNumDisplay);
            // smNumDisplay = (jugs.smNum - smDiff);
            // jugs.smNum = Number(smNumDisplay);
            //todo need to update smNum and lgNum
        }
    } else {
        alert("Large Jug is Already Full");
    }
}

//transfer from large jug
function lgTransfer() {
    let smDiff = Number(jugs.smCap - jugs.smNum);
    if (jugs.smNum < jugs.smCap) {
        if (jugs.lgNum < jugs.smCap) {
            smNumDisplay = (jugs.lgNum - jugs.smNum);
            lgNumDisplay = (jugs.smNum);
            jugs.smNum = parseInt(smNumDisplay.text());
            jugs.lgNum = parseInt(lgNumDisplay.text());
        } else {
            smNumDisplay = smDiff;
            lgNumDisplay = (jugs.lgNum - smDiff);
        }
    } else {
        alert("Small Jug is Already Full");
    }
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

//todo event listeners

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

