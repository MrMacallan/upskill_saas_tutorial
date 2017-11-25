/* global $, Stripe */
//Document Ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var signupBtn = $('#form-signup-btn')
  
  //Set Stripe public key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  //When user clicks form submit btn,
  signupBtn.click(function(event){
    //prevent default submission behavior.
    event.preventDefault();
    
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
        
    //Send card information to Stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });

  
 
  //Stripe will return back a card token.
  //Inject card token as hidden field into form.
  //Submit form into rails app.
});
