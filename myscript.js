var nameV, mobileV, genderV, emailV, card_typeV, card_numberV, exp_dateV, cvvV, name_on_cardV;

function readForm() {
    // alert("readForm called")
    nameV = document.getElementById("name").value;
    mobileV = document.getElementById("mobile").value;
    genderV = document.getElementById("gender").value;
    emailV = document.getElementById("email").value;
    card_typeV = document.getElementById("card_type").value;
    card_numberV = document.getElementById("card_number").value;
    exp_dateV = document.getElementById("exp_date").value;
    cvvV = document.getElementById("cvv").value;
    name_on_cardV = document.getElementById("name_on_card").value;
}

// Insert Data in FireBase

document.getElementById("insert").onclick = function() {
    // alert("Hello insert called")
    readForm();
    firebase
        .database()
        .ref("student/" + nameV)
        .set({
            name: nameV,
            mobile: mobileV,
            gender: genderV,
            email: emailV,
            card_type: card_typeV,
            card_number: card_numberV,
            exp_date: exp_dateV,
            cvv: cvvV,
            name_on_card: name_on_cardV,
        });
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("email").value = "";
    document.getElementById("card_type").value = "";
    document.getElementById("card_number").value = "";
    document.getElementById("exp_date").value = "";
    document.getElementById("cvv").value = "";
    document.getElementById("name_on_card").value = "";
    console.log("Data Inserted");
    alert("Data Inserted");
};