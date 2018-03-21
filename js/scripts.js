
$(document).ready(function() {
  $("form#contact").submit(function(event) {

    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var citystateInput = $("input#citystate").val();
    var addressInput = $("input#zipcode").val();
    var emailInput = $("input#email").val();
    var dateInput = $("input#date").val();
    var itemInput = $("input#item").val();
    var priceInput = $("input#price").val();
    var purchaseInput = $("input#input1").val();

    console.log()

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".citystate").text(citystateInput);
    $(".zipcode").text(zipcodeInput);
    $(".email").text(emailInput);
    $(".date").text(dateInput);
    $(".item").text(purchaseInput);
    $(".price").text(priceInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
