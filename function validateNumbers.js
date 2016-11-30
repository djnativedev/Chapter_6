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
		}	else { //cvv value is a number
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
}