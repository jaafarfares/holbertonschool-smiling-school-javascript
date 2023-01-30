$(document).ready(function(){
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/quotes',
      type: "get",
      beforeSend: function() {
        $("#loaderDiv").show();
      },
      success: function(response) {
        $("#loaderDiv").hide();
        for (let i = 0; i < response.length; i++) {
          let $html = $(`
            <div class="carousel-item carousel-item-content ${i === 0 ? 'active' : ''}">
              <div class="row">
                <div class="col">
                  <img class="rounded-circle ml-5 mb-5" src=${response[i].pic_url} class="d-block" alt="">
                </div>
                <div class="col ml-3 d-flex flex-column mr-5">
                  <div>&lt;&lt; ${response[i].text} &gt;&gt;</div>
                  <div class="font-weight-bold mt-3 mr-5 mt-5">${response[i].name}</div>
                  <div>${response[i].title}</div>
                </div>
              </div>
            </div>`);
          $("#mycarousel").append($html);
        }
      },
    });
  });


  $.ajax({
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    type: "get",
    beforeSend: function() {
      $("#myloader").show(); // Show the loader before making the request
    },
    success: function(response) {
      $("#myloader").hide();
      for (let i = 0; i < response.length; i++) {
        let $card_stars = '';
        let $play_button = '<img src="images/images/play.png" class="play-btn1" alt="...">';
        for (let j = 0; j < response[i].star; j++) {
          $card_stars += '<img src="images/images/star_on.png" class=" star-size mr-1" alt="...">';
        }
        for (let j = 0; j < 5 - response[i].star; j++) {
          $card_stars += '<img src="images/images/star_off.png" class=" star-size" alt="...">';
        }
        let $html = $(`
          <div class="text-center col-12 col-sm-6 col-md-3">
            <div class="carousel-item active">
              <img class="w-100" src="${response[i].thumb_url}" alt="">
              <div class="mx-3">
                <div class="font-weight-bold text-dark text-left mt-3">
                  ${response[i].title}
                </div>
                <div class="text-secondary text-left mt-3 mb-3">
                  ${response[i]["sub-title"]}
                </div>
                <div class="">
                  ${$play_button}
                  <img src="${response[i].author_pic_url}" class="carousel-img rounded-circle mr-3" alt="...">
                  <div class="pink-text font-weight-bold">${response[i].author}</div>
                </div>
                <div class="d-flex justify-content-between mb-5">
                  <div class="d-flex pt-1">
                    ${$card_stars}
                  </div>
                  <div class="purple-text font-weight-bold">
                    ${response[i].duration}
                  </div>
                </div>
              </div>
            </div>
          </div>`);
        $("#tutorialvideos").append($html);
      }
    }
  });
  
  $.ajax({
    url: 'https://smileschool-api.hbtn.info/latest-videos',
    type: "get",
    beforeSend: function() {
      $("#myloader").show(); // Show the loader before making the request
    },
    success: function(response) {
      $("#myloader").hide();
      for (let i = 0; i < response.length; i++) {
        let $card_stars = '';
        let $play_button = '<img src="images/images/play.png" class="play-btn1" alt="...">';
        for (let j = 0; j < response[i].star; j++) {
          $card_stars += '<img src="images/images/star_on.png" class=" star-size mr-1" alt="...">';
        }
        for (let j = 0; j < 5 - response[i].star; j++) {
          $card_stars += '<img src="images/images/star_off.png" class=" star-size" alt="...">';
        }
        let $html = $(`
          <div class="text-center col-12 col-sm-6 col-md-3">
            <div class="carousel-item active">
              <img class="w-100" src="${response[i].thumb_url}" alt="">
              <div class="mx-3">
                <div class="font-weight-bold text-dark text-left mt-3">
                  ${response[i].title}
                </div>
                <div class="text-secondary text-left mt-3 mb-3">
                  ${response[i]["sub-title"]}
                </div>
                <div class="">
                  ${$play_button}
                  <img src="${response[i].author_pic_url}" class="carousel-img rounded-circle mr-3" alt="...">
                  <div class="pink-text font-weight-bold">${response[i].author}</div>
                </div>
                <div class="d-flex justify-content-between mb-5">
                  <div class="d-flex pt-1">
                    ${$card_stars}
                  </div>
                  <div class="purple-text font-weight-bold">
                    ${response[i].duration}
                  </div>
                </div>
              </div>
            </div>
          </div>`);
        $("#latestvideos").append($html);
      }
    }
  });


