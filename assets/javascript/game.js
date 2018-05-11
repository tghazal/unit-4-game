
var wins = 0;
var loses = 0;

var crystals = {
    randomNumber: 0,
    score: 0,
    imgsrc: ["assets/images/crystal.png", "assets/images/blue.png", "assets/images/green.png", "assets/images/purple.png"],

    createRandomNumber: function () {

        this.randomNumber = Math.floor(Math.random() * 102) + 19;
    },

    createImagesWithRandomValues: function () {
        for (var i = 0; i < 4; i++) {
            
            var crystalRandom = Math.floor(Math.random() * 12) + 1;
            console.log(crystalRandom);
            var crystalImage = $("<img>");
            varimgsrc = this.imgsrc[i];
            crystalImage.attr("src", varimgsrc);
            crystalImage.attr("class", "myCrysal");
            crystalImage.attr("value", crystalRandom);
            crystalImage.css("hieght", "120");
            crystalImage.css("width", "130");

            $("#images").append(crystalImage);
        }


    },

    changeRandomValue()
    {
        $( '.myCrysal' ).each( function ( index ) {
            var crystalRandom = Math.floor(Math.random() * 12) + 1;
            $( this ).attr("value", crystalRandom);
        });

    },
    addCrystalValueToScore: function (crystalValue) {

        this.score = this.score + crystalValue;

    },

    checkScore: function () {
        if (this.score === this.randomNumber) {
            wins++;
            $("#status").text("you won !! ");
            $("#wins").text("wins="+wins);
            this.init();
        }
        else if (this.score > this.randomNumber) {
            loses++;
            $("#status").text("you lost !! ");
            $("#loses").text("loses="+loses);
            this.init();
        }

    },

    init() {
        this.score = 0;
        this.createRandomNumber();
        console.log(this.randomNumber);
        $("random").empty();
        $("#score").text(this.score);
        $("#random").text(this.randomNumber);
        this.changeRandomValue();



    }


}


$(document).ready(function () {

    crystals.createRandomNumber();
    $("#random").text(crystals.randomNumber);
    crystals.createImagesWithRandomValues();


    $(".myCrysal").on("click", function () {
       
       
        var crystalValue = $(this).attr("value");
       
        crystalNumber = Number(crystalValue);
        console.log(crystalNumber);
        crystals.addCrystalValueToScore(crystalNumber);
        $("#score").text(crystals.score);
        crystals.checkScore();

    });


});