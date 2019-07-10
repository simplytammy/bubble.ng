function changeAppearance(e) {
    if (e.matches) {
        // If media query matches
        document.getElementById("tools-holder").innerHTML = `
    <div class="row">
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/laravel.png" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/nodejs.svg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/aws.svg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/vuejs.svg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/mysql.svg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/ubuntu.svg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/wordpress.svg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/android.svg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/flutter.svg" class="img-fluid" alt="">
                </div>
              </div>
              <div class="col-md-3">
                <div class="tool">
                  <img src="/img/trello.svg" class="img-fluid" alt="">
                </div>
              </div>
            </div>
					`;
    } else {
        document.getElementById("tools-holder").innerHTML = `
<div id="indicators" class="carousel slide" data-ride="carousel">
  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="carousel-item active">
					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/laravel.png" class="img-fluid" alt="">
                </div>
					</div>
    </div>
    <div class="carousel-item">
      					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/nodejs.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>
    <div class="carousel-item">
					<div class="tool">
                  <img src="/img/aws.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>
     <div class="carousel-item">
      					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/vuejs.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>
     <div class="carousel-item">
      					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/mysql.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>
     <div class="carousel-item">
      					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/ubuntu.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>
     <div class="carousel-item">
      					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/wordpress.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>
     <div class="carousel-item">
      					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/android.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>
     <div class="carousel-item">
      					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/flutter.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>
     <div class="carousel-item">
      					<div class="col-md-12 item clear">
						 <div class="tool">
                  <img src="/img/trello.svg" class="img-fluid" alt="">
                </div>
					</div>
    </div>	

  </div>
  <!-- Controls -->
  <a class="carousel-control-prev" href="#indicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
  <a class="carousel-control-next" href="#indicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>
</div>
   `;
    }
}

var e = window.matchMedia("(min-width: 744px)");
changeAppearance(e);
e.addListener(changeAppearance);