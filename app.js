document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let quantity = document.getElementById('quantity').value;
    let productCost = 199.99;

    let shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
    let shippingCost = 0;
    
    switch(shippingMethod) {
        case 'overnight':
            shippingCost = 19.99;
            break;
        case '2day':
            shippingCost = 9.99;
            break;
        default:
            shippingCost = 0;
            break;
    }

    const totalCost = (productCost * quantity) + shippingCost;
    alert(`Total Cost: $${totalCost.toFixed(1)}`)
});

document.getElementById('address').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('address').value = 
        document.getElementById('baddress').value;

        document.getElementById('city').value =
        document.getElementById('bcity').value;

        document.getElementById('state').value =
        document.getElementById('bstate').value;

        document.getElementById('zip').value =
        document.getElementById('bzip').value;
    } else {
        document.getElementById('address').value = '';
        document.getElementById('city').value = '';
        document.getElementById('state').value = '';
        document.getElementById('zip').value = '';
    }
});

document.getElementById('email').addEventListener('input', function (event) {
    let email = event.target.value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(pattern)) {
        document.getElementById('email-error').style.display = 'block';
        document.getElementById('email-error').innerHTML = "<p>Please make sure your email is correct.</p>"

    } else {
        document.getElementById('email-error').style.display = 'none';
        document.getElementById('email-error').innerHTML = "";
    }
});

document.getElementById('paypal').addEventListener('change', function () {
    document.getElementById('credit-card-fields').style.display = 'none';
    document.getElementById('paypal-fields').style.display = 'block';
  });

  document.getElementById('credit-card').addEventListener('change', function () {
    document.getElementById('credit-card-fields').style.display = 'block';
    document.getElementById('paypal-fields').style.display = 'none';
  });