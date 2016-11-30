/* validate address fieldsets */
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
