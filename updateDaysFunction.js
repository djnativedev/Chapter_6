/* update selection list of days based on selected month and year */
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