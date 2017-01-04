require([
	"jquery"
], function ($) {

	$(document).ready(function () {

		var popup = `
  <div class="modal fade" id="popup" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
  <div class="modal-content" id="popup-resize" style="width=790px; margin-top: 30%; margin-left: -95px;width: 790px; border: none; border-radius: 0;">

  <div class="container">
  <div class="row popup-main">
    <div class="col-sm-12 x">
      <button type="button" style="background: white; padding-right: 10px;" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></a></button>
    </div>
    <div class="col-sm-12 popup-content">

      <div class="col-sm-6 popup-no-border">

        <div class="pop-title">
          <span>Checkout out as a new customer</span>
        </div>

        <div id="create-acc">
          <div id="ul-title">Cheate an account has many benefits:</div>

          <div id="list">
            <span>See order and shipping status</span>
            <span>Track order history</span>
            <span id="last">Check out faster</span>
          </div>

          <div class="sign-in"><a class="green-button" href="#"><span>Create Account</span></a></div>
        </div>
      </div>

      <div class="col-sm-6 popup-border">

        <div class="pop-title">
          <span>Checkout out using your account</span>
        </div>

        <label class="popup-label">Email Address<span style="color:red">*</span>:</label>
        <div class="popup-control">
          <input type="text" class="popup-select" name="email" value="">
        </div>

        <label class="popup-label">Password<span style="color:red">*</span>: </label>
        <div class="popup-control">
          <input type="password" class="popup-select" name="pass" value="">
        </div>

        <div id="fogot">
          <span class="green">Fogot your password?</span>
        </div>
        <div class="sign-in"><a class="green-button" href="#"><span>Sign In</span></a></div>
      </div>

    </div>
  </div>
  </div>

  </div>
</div>
</div>

  `;

		$('body.checkout-cart-index.page-layout-1column').append(popup);

		var dialog = $('#popup');
		dialog.hide();

		$('button.action.apply.primary').attr('data-toggle', 'modal');
		$('button.action.apply.primary').attr('data-target', '#popup');

	});
});
