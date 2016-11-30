/* JavaScript 6th Edition
* Chapter 6
* Chapter case

* Snoot Flowers
* Functions
* Author: 
* Date: 11/30/16

* Filename: snoot.js
*/

/* validate number fields for older browsers */
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
}//function autocheckCustom
/* automatically check Custom message check box if user makes entry in customText box */
function autocheckCustom () {
    var messageBox = document.getElementById("customText");
    if (messageBox.value !== "" && messageBox !== messageBox.placeholder) {
        //if user entry in textarea, check custom check box
        document.getElementById("custom").checked = "checked";
    }
}


//function zeroPlaceholder
/* remove fallback placeholder text */
function zeroPlaceholder() {
    var messageBox = document.getElementById("customText");
    messageBox.style.color = "black";
    if (messageBox.value === messageBox.placeholder) {
        messageBox.value = "";
    }
}

//function checkPlaceholder
function checkPlaceholder() {
    var messageBox = document.getElementById("customText");
    if (messageBox.value === "") {
        messageBox.style.color = "rgb(178,184,183)";
        messageBox.value = messageBox.placeholder;
    }
}

//function validateMessage
/* validate message fieldset */
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

//function setUpPage
/*  run initial form configuration functions */
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


