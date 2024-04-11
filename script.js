$(document).ready(function () {
  
  $('#submitBtn').click(function () {
    
    $('.error-icon').hide();

    let isError = false;

    let grossIncome = parseFloat($('#grossIncome').val()) || 0;
    let extraIncome = parseFloat($('#extraIncome').val()) || 0;
    let deductions = parseFloat($('#deductions').val()) || 0;
    let ageGroup = $('#age').val();

    const numberRegex = /^[0-9]+$/;
      
    if (!numberRegex.test($('#grossIncome').val())) {
      console.error("Invalid input for gross income:", $('#grossIncome').val());
      isError = true;
      $('#grossIncomeError').show(); 
    }
    
    if (!numberRegex.test($('#extraIncome').val())) {
      console.error("Invalid input for extra income:", $('#extraIncome').val());
      isError = true;
      $('#extraIncomeError').show();
    }
    
    if (!numberRegex.test($('#deductions').val())) {
      console.error("Invalid input for deductions:", $('#deductions').val());
      isError = true;
      $('#deductionsError').show();
    }


    
    if (ageGroup === "") {
      isError = true;
      $('#ageError').show(); 
    }

    if (isError) {
      return;
    }

    function getTaxRate(ageGroup) {
      switch (ageGroup) {
        case "1":
          return 0.30;
        case "2":
          return 0.40;
        case "3":
          return 0.10; 
        default:
          return 0; 
      }
    }

    let netIncome = grossIncome + extraIncome - deductions;

    let tax = 0;
    if (netIncome > 800000) {
      tax = (netIncome-800000) * getTaxRate(ageGroup);
    }
    let overall =netIncome -tax
   
    let formattedNetIncome = netIncome.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    let formattedTax = tax.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    let formattedOverall= overall.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    
    $('#resultModal .modal-body').html(`Total Net Income: ${formattedNetIncome}<br>Tax Payable: ${formattedTax}<br>Your Overall Income after tax deductions will be : ${formattedOverall} `);
    $('#resultModal').modal('show');
  });
});