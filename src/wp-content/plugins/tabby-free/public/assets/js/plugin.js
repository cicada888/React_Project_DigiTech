"use strict";

// onclick Function for tab style

function wtOpenTb(evt, wtTabsName, post_id, parental) {

    // Variable Delcaration
    let i, wtTbBody, wtBtn, taxBtn;

    if (parental == 'parent') {
        // // Tab Bodies
        wtTbBody = document.getElementsByClassName("wt-single-tab" + post_id);
        for (i = 0; i < wtTbBody.length; i++) {
            wtTbBody[i].style.display = "none";
        }
    }

    if (parental == 'normal') {
        // // Tab Bodies
        wtTbBody = document.getElementsByClassName("wt-single-tab" + post_id);
        for (i = 0; i < wtTbBody.length; i++) {
            wtTbBody[i].style.display = "none";
        }
    }

    //if(parental=='child'){
    // // Tab Bodies
    wtTbBody = document.getElementsByClassName("wt-single-nest-tab" + post_id);
    for (i = 0; i < wtTbBody.length; i++) {
        wtTbBody[i].style.display = "none";
    }
    //}

    //Tab Buttons
    wtBtn = document.getElementsByClassName("wt-btn" + post_id);
    for (i = 0; i < wtBtn.length; i++) {
        wtBtn[i].className = wtBtn[i].className.replace(" active", "");
        //document.getElementsByClassName('.wt-tabs-body').style.display = "block";
    }

    // Taxonomy Tab Buttons
    taxBtn = document.getElementsByClassName("tax-btn" + post_id);
    for (i = 0; i < taxBtn.length; i++) {
        taxBtn[i].className = taxBtn[i].className.replace(" active", "");
    }

    if (parental == 'normal') {
        document.getElementById(wtTabsName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    if (parental == 'parent') {
        document.getElementById(wtTabsName).style.display = "flex";
        evt.currentTarget.className += " active";
    }

    if (parental == 'child') {
        document.getElementById(wtTabsName).style.display = "flex";
        evt.currentTarget.className += " active";
    }

    //document.getElementsByClassName('child-class').style.display = "flex";
    //  if(parental=='side-left'){
    //   document.getElementById(wtTabsName).style.display = "block";
    //   evt.currentTarget.className += " active";
    //     document.getElementById(wtTabsName).style.width = "250px";
    //     document.getElementById(wtTabsName).style.marginLeft = "250px";
    //   }


}



jQuery("a.keno").click(function() {

    var id = '#' + jQuery(this).attr('menu');

    jQuery(id).animate({
        left: '-50px',
        height: '150px',
        width: '150px'
    });
});






// var element = document.getElementById('wtOpen');

// if (element != null) {

//   document.getElementById("wtOpen").click();

// }

// const getFontSize = (textLength) => {
//   const baseSize = 125;
//   if (textLength >= 20) {
//     textLength = baseSize - 80;
//   }
//   const fontSize = baseSize - textLength;
//   return `${fontSize}%`;
// }

// const boxes = document.querySelectorAll('a.wt-btn92 .title_tag');

// boxes.forEach(box => {
//   box.style.fontSize = getFontSize(box.textContent.length);
//   console.log(box.textContent.length);
// })