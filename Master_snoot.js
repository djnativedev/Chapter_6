/* JavaScript 6th Edition
* Chapter 6
* Chapter case

* Snoot Flowers
* Functions
* Author: 
* Date: 11/30/16

* Filename: snoot.js
*/

/* 2 update selection list of days based on selected month and year */
function updateDays () 
	{
	var deliveryDay = document.getElementById("delivDy");
	var dates = deliveryDay.getElementsByTagName("option");
	var deliveryMonth = document.getElementById("delivMo");
	var deliveryYear = document.getElementById("delivYr");
	var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;

		while (dates[28]) 
		{
			//remove child with index of 28 until this index is empty
			deliveryDay.removeChild(dates[28]);
		}
		
		if (deliveryYear.selectedIndex === -1)
		{
			// if no year is selected, choose the default year so length of Feb can be determined
			deliveryYear.selectedIndex = 0;
		}
		
		if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2018")
		{
			// if leap year, Feb has 29 days
			deliveryDay.appendChild(twentyNine.cloneNode(true));
		}
		
		else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11")
		{
			// these months have 30 days
			deliveryDay.appendChild(thirty.cloneNode(true));
		}
		
		else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" ||
		selectedMonth === "8" ||  selectedMonth === "10" || selectedMonth === "12") 
		
		{
		//these months have 31 days
		deliveryDay.appendChild(thirtyOne.cloneNode(true));
		}
	}
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

/* 9 validate address fieldsets */
function validateAddress(fieldsetId){
	var inputElements = document.querySelectorAll("#" + fieldsetId + "input");
	var errorDiv = document.querySelectorAll("#" + fieldsetId + ".errorMessage")[0];
	var fieldsetValidity = true;
	var elementCount = inputElements.length;
	var currentElement;
	try{
		for (var i = 0; i < elementCount; i++){
			//validate all input elements in fieldset
			currentElement = inputElements[i];
			if (currentElement.value ===""){
				currentElement.style.background = "rgb(255,233,233)";
				fieldsetValidity = false;
			} else {
				currentElement.style.background = "white";
			}
		}
		currentElement = document.querySelectorAll ("#" + fieldsetId + " select");
		//validate state select element
		if (currentElement.selectedIndex === -1){
			currentElement.style.border = "1px solid red";
			fieldsetValidity = false;
		} else {
			currentElement.style.border = "";
		}
		if (fieldsetValidity === false){
			//throw appropriate message based on current fieldset
			if (fieldsetId === "billingAddress"){
				throw "Please complete all Billing Address information.";
			} else {
				throw "Please complete all Delivery Address information.";
			}
		} else {
			errorDiv.style.display = "none";
			errorDiv.innerHTML = "";
		}
		catch(msg){
			errorDiv.style.display = "block";
			errorDiv.innerHTML = msg;
			formValidity = false;
		}
	}//end try
}//end validatAddress

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

/* 11 validate paymnt field set*/

function validatePayment(){
    var errorDiv = document.querySelector("#paymentInfo .errorMessage");
    var fieldsetValidity = true;
    var ccNumElement = document.getElementById("ccNum");
    var selectElements = document.querySelectorAll("#paymentInfo select");
    var elementCount = selectElements.length;
    var ccvElement = document.getElementById("ccv");
    var cards = document.getElementsByName("PaymentType");
    var currentElement;
        
        try{
            if (!cards[0].checked && !cards[1].checked && !cards[2].checked && !cards[3].checked){        
            //verify that a card is slelcted
            for (i = 0; i < 4; i++){
                cards[i].style.outline = "1px solid red";
                }
                filedsetValidity = false;
                } else {
                    for (i = 0; i < 4; i++){
                        cards[i].style.outline = "";
                    }
                }

        if (ccNumElement.value === ""){
            //verify that a card number has been entered
            ccNumElement.style.background = "rgb(255,233,233)";
            fieldsetValidity = false;
        } else {
            ccNumElement.style.background = "white";
        }

        for (var i = 0; i < elementCount; i++){
            //verify that a month and year have been selected
            currentElement = selectElements[i];
            if (currentElement.selectedIndex === -1){
                currentElement.style.border = "1px solid red";
                filedsetValidity = false;
                } else {
                    currentElement.style.border = "";
                }
        }

        if (ccvElement.value === ""){
            //verify that a ccv value has been entered
            ccvElement.style.background = "rgb(255,233,233)";
            fieldsetValidity = false;
        } else {
            ccvElement.style.background = "white";
        }

        if (!fieldsetValidity){ //check if any field is blank
            throw "Please complete all payment information.";
        } else {
            errorDiv.style.display = "none";
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
    
/* 13 Validate create account */
function validateCreateAccount() {
    var errorDiv = document.querySelector("#createAccount . errorMessage");
    var usernameElement = document.getElementById("username");
    var pass1Element = document.getElementById("pass1");
    var pass2Element = document.getElementById("pass2");
    var passwordMismatch = false;
    var invColor = "rgb(255,233,233)";
    try {
        // reset styles to valid state
        usernameElement.style.background = " ";
        pass1Element.style.background = " ";
        pass2Element.style.background = " ";
        errorDiv.style.display = "none";
        if ((usernameElement.value !== " " && pass1Element.value !== " " && pass2Element.value !== " ")) {
            // all fields are filled
            if (pass1Element.value !== pass2Element.value) {
                //passwords dont match
                passwordMismatch = true;
                throw "Passwords you entered do not match; please re-enter.";
            }
        }
        /* else added to the start of the following line of code, as the code does not work correctly without it.
        (p. 426, Step 2, line 16) */
        else if (!(usernameElement.value === " " && pass1Element.value === " " && pass2Element.value === " ")) {
            // not all fields are blank
            throw "Please complete all fields to create an account.";
        }
    }
    catch(msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        if (passwordMismatch) {
            usernameElement.style.background = "";
            pass1Element.style.background = invColor;
            pass2Element.style.background = invColor;
        } else {
            if (usernameElement.value === " ") {
                usernameElement.style.background = invColor;
            }
            if (pass1Element === " ") {
                pass1Element.style.background = invColor;
            }
            if (pass2Element.value === " ") {
                pass2Element.style.background = invColor;
            }
        }
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
/* 15 Function to Validate Forms */
function validateForm(evt){
 if (evt.preventDefault)
 {
 evt.preventDefault(); //Prevent form form submitting
 }
 else
 {
 evt.returnValue = false; //Prevent form from submitting in IE8
 }

 formValidity = true; //reset vale for revalidation
 validateAddress("billingAddress");
 validateAddress("deliveryAddress");
 validateDeliveryDate();
 validatePayment();
 validateMessage();
 validateCreateAccount();
 validateNumbers();
 if (formValidity === true) 
 {
 document.getElementById("errorText").innerHTML = "";
 document.getElementById("deliveryAddress");
 document.getElementsByTagName("form")[0].submit();
 }
 else
 {
 document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order. ";
 document.getElementById("errorText").style.display = "block";
 scroll (0,0);
 }
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


