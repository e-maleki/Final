const medications = [];

function addMedication() {
  const name = document.getElementById("medName").value.trim();
  const dosage = document.getElementById("dosage").value.trim();
  const schedule = document.getElementById("schedule").value.trim();

  if (!name || !dosage || !schedule) {
    alert("Please fill in all fields.");
    return;
  }

  const medication = {
    name,
    dosage,
    schedule,
    addedAt: new Date()
  };

  medications.push(medication);
  displayMedications();
  clearInputs();
}

function displayMedications() {
  const list = document.getElementById("medList");
  list.innerHTML = "<h3>Current Medications</h3>";

  medications.forEach((med, index) => {
    const item = document.createElement("div");
    item.className = "medication-item";
    item.innerHTML = `
      <strong>${med.name}</strong> - ${med.dosage}<br>
      <em>Schedule: ${med.schedule}</em>
    `;
    list.appendChild(item);
  });
}

function clearInputs() {
  document.getElementById("medName").value = "";
  document.getElementById("dosage").value = "";
  document.getElementById("schedule").value = "";
}
// “I need three input fields in the HTML: one for the medication name, one for the dosage, and one f
//for the schedule (like ‘daily at 2 PM’ or ‘weekly on Monday’). Each input should have an ID so I can 
//access them in JavaScript: medName, dosage, and schedule. I also need a button with an onclick="addMedication()"
//that runs the JS function. Finally, add a div with the ID medList so I can display the added medications there.”


//Element            Purpose	                      ID
//Input field	       Medication Name	              medName
//Input field	       Dosage	                        dosage
//Input field	       Schedule	                      schedule
//Button	Triggers   JavaScript function	          onclick="addMedication()"
//Div container	     Display list of medications	  medList
