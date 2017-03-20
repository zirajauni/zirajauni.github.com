window.onload = function () {
};


var quote = [];
quote[0] = "We go hard. In everything we do, we’re going to accomplish our victory and our goal. If it takes a day, a year, "+
            "or 20 years, we’re going to win. I haven’t taken a loss because everything I’ve done has been a working process to win"+
            "Always have Faith. Always have Hope";

quote[1] = "God is the greatest. So at the end of the day and beginning of the day, I thank God. " +
            "Key to more success is a clean heart and a clean face. ";

quote[2] = "If you think of something negative and you keep it in your head, you are going to actually live that. Now, if you think of something "+
            "great and positive and joyful, you're going to actually live that.You've got to be careful what you put in your head. "+
            "Basically, I'll call that: Don not ever play yourself. There will be roadblocks but we will overcome them";

quote[3] = "I know that I’ve been put on this Earth to make people happy, to inspire people, and to uplift people. That’s a beautiful thing." +
            "The key to more success is coco butter. Don't fall for the trap. Stay focused. It's about staying focused but at the same time ";
           

quote[4] = "God is the greatest, pray it up. Another one. No, another two.";

quote[5] = " One of my keys to success is a lot of pillows. I feel like a lot of pillows is important to relax each piece of your body.";

quote[6] = "They'll try to close the door on you... Just open it. ";





function djkhaled(id) {
    document.getElementById(id).innerHTML = "";
    var howmany= document.getElementById('amount').value,
        //colored = _('colorizeSelect').checked,
        random = 0,
        //randColor,
        copyquote,
       quoteText = "";

    for (var i = 0; i < howmany; i++) {
        random = randomize(quote.length);
      //  if (colored) {
        // randColor = color[randomize(color.length)];
      //     quoteText += '<span style="color:' + randColor + '">';
       // }
        quoteText += quote[random] + "<br><br>";
        //if (colored) quoteText+= "</span>";
        document.getElementById(id).innerHTML = quoteText;

    }
    _('copy-button').style.display = "inline";


}



function copyMsg(id) {
    copyquote = document.getElementById(id).innerHTML;
    var mess = prompt("Press Contrl + C on keyboard to copy", compquote);
}


// Helper functions

function randomize (length) {
    return Math.floor(Math.random() * length);
}