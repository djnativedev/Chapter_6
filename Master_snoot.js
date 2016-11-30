/* JavaScript 6th Edition
* Chapter 6
* Chapter case

* Snoot Flowers
* Functions
* Author: 
* Date: 11/30/16

* Filename: snoot.js
*/


}//function autocheckCustom
/* 5 automatically check Custom message check box if user makes entry in customText box */
function autocheckCustom () {
    var messageBox = document.getElementById("customText");
    if (messageBox.value !== "" && messageBox !== messageBox.placeholder) {
        //if user entry in textarea, check custom check box
        document.getElementById("custom").checked = "checked";
    }
}


//function zeroPlaceholder
/* 6 remove fallback placeholder text */
function zeroPlaceholder() {
    var messageBox = document.getElementById("customText");
    messageBox.style.color = "black";
    if (messageBox.value === messageBox.placeholder) {
        messageBox.value = "";
    }
}

// 7 function checkPlaceholder
function checkPlaceholder() {
    var messageBox = document.getElementById("customText");
    if (messageBox.value === "") {
        messageBox.style.color = "rgb(178,184,183)";
        messageBox.value = messageBox.placeholder;
    }
}
/* 10 validate delivery date fieldset */
function validateDeliveryDate() {
var selectElements = document.querySelectorAll("#deliveryDate select");
var errorDiv = document.querySelector("#deliveryDate .errorMessage");
var fieldsetValidity = true;
var elementCount = selectElements.length;
var currentElement;
try {
     for (var i = 0; i < elementCount; i++) {
     currentElement = selectElements [i];
     if (currentElement.selectedIndex === -1) {
     currentElement.style.border = "1px solid red";
     fieldsetValidity = false;
     } else {
     currentElement.style.border = "";
     }
     }
     if (fieldsetValidity === false) {
     throw "Please specify a delivery date.";
     } else { errorDiv.style.display = "none";
     errorDiv.innerHTML = "";
     }
     }
     catch(msg) {
     errorDiv.style.display = "block";
     errorDiv.innerHTML = msg;
     formValidity = false;
     }
     }

//function validateMessage
/* 12 validate message fieldset */
function validateMessage() {
    var errorDiv = document.querySelector("#message .errorMessage");
    var msgBox = document.getElementById("customText");
    try {
        if (document.getElementById("custom").checked && ((msgBox.value === "") || (msgBox.placeholder))) {
            //custom checked but message box empty
            throw "Please enter your message text.";
        } else {
            errorDiv.style.display = "none";
            msgBox.style.background = "white";
            }
        }
        catch (msg) {
            errorDiv.style.display = "block";
            errorDiv.innerHTML - msg;
            msgBox.style.background = "rgb(255,223,233)";
            formValidity = false;
        }
    }
/* 14 validate number fields for older browsers */
function validateNumbers() {
    var ccNotNum;
    var cvvNotNum;
    var ccNumElement = document.getElementById("ccNum");
    var cvvElement = document.getElementById("cvv");
    var ccNumErrMsg = document.getElementById("ccNumErrorMessage");
    var cvvErrMsg = document.getElementById("cvvErrorMessage");
    try {
        if (isNaN(ccNumElement.value) || ccNumElement.value === "") {
            ccNotNum = true;
        } else { ..ccNum value is a number
            ccNumElement.Style.background = "";
            ccNumErrMsg.style.display = "none":
            }
        if (isNaN(cvvElement.value) || cvvElement.value === "") {
            cvvNutNum = true;
        }   else { //cvv value is a number
                cvvElement.style.background = "";
                cvvErrMsg.style.display = "none";   
            }
            if (ccNotNum || cvvNotNum) {
                throw "must contain numbers only.";
            }
        }   
    catch(msg) {
        if (ccNotNum) {
            ccNumElement.style.background = "rgb(255,233,233)";
            ccNumErrMsg.style.display = "block";
            ccNumErrMsg.innerHTML = "The card number  " + msg;
        }
        if (cvvNotNum) {
            cvvNumElement.style.background = "rgb(255,233,233)";
            cvvNumErrMsg.style.display = "block";
            cvvNumErrMsg.innerHTML = "The cvv number  " + msg;
        }
        formValidity = false;
    }
/* 16 create event listeners */
function createEventListeners() {
   var deliveryMonth = document.getElementById("delivMo");
   if (deliveryMonth.addEventListener) {
     deliveryMonth.addEventListener("change", updateDays, false);
   } else if (deliveryMonth.attachEvent)  {
     deliveryMonth.attachEvent("onchange", updateDays);
   }

   var deliveryYear = document.getElementById("delivYr");
   if (deliveryYear.addEventListener) {
     deliveryYear.addEventListener("change", updateDays, false);
   } else if (deliveryYear.attachEvent)  {
     deliveryYear.attachEvent("onchange", updateDays);
   }

   var same = document.getElementById("sameAddr");
   if (same.addEventListener) {
     same.addEventListener("click", copyBillingAddress, false);
   } else if (same.attachEvent)  {
     same.attachEvent("onclick", copyBillingAddress);
   }

   var messageBox = document.getElementById("customText");
   if (messageBox.addEventListener) {
     messageBox.addEventListener("blur", autocheckCustom, false);
   } else if (messageBox.attachEvent)  {
     messageBox.attachEvent("onblur", autocheckCustom);
   }

   var form = document.getElementsByTagName("form")[0];
   if (form.addEventListener) {
      form.addEventListener("submit", validateForm, false);
   } else if (form.attachEvent) {
      form.attachEvent("onsubmit", validateForm);
   }
}
//function setUpPage
/*  17 run initial form configuration functions */
function setUpPage() {
    removeSelectDefaults();
    setupDays();
    createEventListeners();
    generatePlaceholder();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
    }
}


