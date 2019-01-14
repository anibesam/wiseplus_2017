/* 
Anibe Custom Javascript
Developer: Peter Samuel Anibe
CopyRight 2017 Wiseplus Inventions Limited


          DDDDDDDDDD     EEEEEE   VV        VV EEEEEE LL    OOOOOO PPPPPPP  EEEEEE  DDDDDD 
          DD       DD    EE        VV      VV  EE     LL    O    O PPP  PP  EE      DD    D
          DD        DD   EEEEEE     VV    VV   EEEEEE LL    O    O PPPPPPP  EEEEEE  DD    D
          DD       DD    EE          VV  VV    EE     LL    O    O PPP      EE      DD   D
          DDDDDDDDD      EEEEEE       VVV      EEEEEE LLLLL 000000 PPP      EEEEEE  DD DD



                           BBBBBBBB    YYYY        YYYY
                           BB      B     YYYY    YYYY
                           BB     B       YYYY  YYYY
                           BBBBBBBB         YYYYYY
                           BB      B          YYY
                           BB     B           YYY
                           BBBBBBB            YYY


 
     SSSSS   AAAAAAAAA      MMM        MMM       AAAAAA       NNN       NN III  BBBBBB EEEEEEE
    SS       AA      AA     MM   M    M MM      AA     AA     NN  NN    NN III  BB   B EE
      SS     AA AAAAA AA    MM     M    MM     AAAAAAAAAAA    NN    NN  NN III  BBBBB  EEEEEEE
       SS    AA       AA    MM          MM     AA         AA  NN     NN NN III  BB   B EE
   SSSS       AA       AA   MM          MM    AA           AA NN       NN  III  BBBBB  EEEEEEE


*/

(function(){
  $(window).scroll(function () {
      var top = $(document).scrollTop();
      $('.splash').css({
        'background-position': '0px -'+(top/3).toFixed(2)+'px'
      });
      if(top > 50)
        $('#home > .navbar').removeClass('navbar-transparent');
      else
        $('#home > .navbar').addClass('navbar-transparent');
  });

  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });

  var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
    var html = $(this).parent().html();
    html = cleanSource(html);
    $("#source-modal pre").text(html);
    $("#source-modal").modal();
  });

  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  $(".bs-component").hover(function(){
    $(this).append($button);
    $button.show();
  }, function(){
    $button.hide();
  });

  function cleanSource(html) {
    html = html.replace(/×/g, "&times;")
               .replace(/«/g, "&laquo;")
               .replace(/»/g, "&raquo;")
               .replace(/←/g, "&larr;")
               .replace(/→/g, "&rarr;");

    var lines = html.split(/\n/);

    lines.shift();
    lines.splice(-1, 1);

    var indentSize = lines[0].length - lines[0].trim().length,
        re = new RegExp(" {" + indentSize + "}");

    lines = lines.map(function(line){
      if (line.match(re)) {
        line = line.substring(indentSize);
      }

      return line;
    });

    lines = lines.join("\n");

    return lines;
  }

})();
