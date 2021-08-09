var shareBtn = document.getElementById('share-buttons');
var whatsapp = document.getElementById('share-buttons-whatsapp');
var twitter = document.getElementById('share-buttons-twitter');
var facebook = document.getElementById('share-buttons-facebook');

var flag = true;
function hideDisplay(){
    flag = !flag;
    if(flag){
        whatsapp.style.visibility = 'hidden';
        twitter.style.visibility = 'hidden';
        facebook.style.visibility = 'hidden';
    }
    else{
        whatsapp.style.visibility = 'visible';
        twitter.style.visibility = 'visible';
        facebook.style.visibility = 'visible';
    }
}

whatsapptext = "https://princetonhive.com/Index"
function whatsappShare(){
    window.open('https://wa.me/?text='+whatsapptext, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}

var twitterUrl = "http://princetonhive.com/Index";
var twitterText = "Replace this with your text";

function twitterShare(){
    window.open('http://twitter.com/share?url='+encodeURIComponent(twitterUrl)+'&text='+encodeURIComponent(twitterText), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}


var facebookUrl = "https://campk12.com/project/pragunseth23/Translator";
function facebookShare(){
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + facebookUrl,
        'facebook-share-dialog',
        'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    );
    return false;
};