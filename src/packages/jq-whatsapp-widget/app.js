// Floating Whatsapp JS
(function ($) {
  $(function () {
    $("#wassengerButton").floatingWhatsApp({
      phone: "@Model.PhoneNumber", //WhatsApp Business phone number International format-
      headerTitle: "Sable International", //Popup Title
      message: "",
      headerText: "Typically replies within a day",
      popupMessage: "Hi there 👋,", //Popup Message
      popupMessage2: "How can we help you?",
      showPopup: true, //Enables popup display
      buttonImage:
        '<svg width="20" height="20" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="WhatsappButton__Icon-sc-7zv9k4-0 gaaZOM"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg>', //Button Image
      //headerColor: 'orange', //Custom header color
      //backgroundColor: 'orange', //Custom background button color
      position: "right",
      profilePicture:
        '<img src="https://www.sableinternational.com/images/default-source/mailer-images/staff-portraits/ashley-qhimngqoshe-pp.jpg"/>',
    });
  });

  $.fn.floatingWhatsApp = function (options) {
    var settings = $.extend(
      {
        phone: "",
        message: "",
        size: "75px",
        backgroundColor: "#25D366",
        position: "left",
        popupMessage: "",
        popupMessage2: "",
        showPopup: false,
        showOnIE: true,
        autoOpenTimeout: 0,
        headerColor: "#128C7E",
        headerTitle: "WhatsApp Chat",
        headerText: "Typically replies within a day",
        zIndex: 0,
        buttonImage:
          '<svg width="20" height="20" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="WhatsappButton__Icon-sc-7zv9k4-0 gaaZOM"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg>', //Button Image
        profilePicture: "",
      },
      options
    );

    var isMobile = mobilecheck();

    //set the .floating-wpp default class
    this.addClass("floating-wpp");

    //#region jQuery Elements
    var $button = $(document.createElement("div"));
    var $buttonImageContainer = $(document.createElement("div"));
    var $popup = $(document.createElement("div"));
    var $header = $(document.createElement("div"));
    var $popupMessage = $(document.createElement("div"));
    var $btnSend = $(document.createElement("div"));
    var $inputMessage = $(document.createElement("div"));
    //#endregion

    //#region Main Button
    $buttonImageContainer.addClass("floating-wpp-button-image");

    $button
      .addClass("floating-wpp-button")
      .append($(settings.buttonImage))
      .css({
        width: settings.size,
        height: settings.size,
        "background-color": settings.backgroundColor,
      });

    if (!isInternetExplorer() || settings.showOnIE) {
      $button.append($buttonImageContainer).appendTo(this);
    }

    $button.on("click", function () {
      if (isMobile && settings.showPopup) {
        openPopup();
      } else {
        $(".floating-wpp-popup").addClass("active");
      }
    });

    fetch("https://dev-webservices.1stcontact.com/apis/wassenger/api/status")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        var profileHeading = response.profile.name;

        $header
          .append(
            "<span>" +
              profileHeading.split(" ").slice(0, 2).join(" ") +
              '<br/><div class="headertext">' +
              settings.headerText +
              "</div></span><span id='logo'><img src=" +
              response.profile.image +
              "></span>",
            $closeBtn
          )
          .css("background-color", settings.headerColor);

        const profileStatus = response.session.status;
        var element = document.getElementById("logo");

        element.classList.remove("offline", "online", "away");

        if (profileStatus == "online") element.classList.add("online");
        if (profileStatus == "away") element.classList.add("away");
        if (profileStatus == "offline") element.classList.add("offline");
      })
      .catch((err) => console.error(err));
    // endregion

    // Current Time
    let currentDate = new Date();
    let time =
      currentDate.getHours() +
      ":" +
      (currentDate.getMinutes() < 10 ? "0" : "") +
      currentDate.getMinutes();

    function sendWhatsappMessage() {
      var apilink = "https://";
      apilink += isMobile ? "api" : "web";
      apilink +=
        ".whatsapp.com/send?phone=" +
        settings.phone +
        "&text=" +
        encodeURI(settings.message) +
        " ";
      window.open(apilink);
    }

    // Fake Chat Pop-up
    if (settings.showPopup) {
      var $textarea = $(document.createElement("textarea"));
      var $closeBtn = $(document.createElement("strong"));

      $popup.addClass("floating-wpp-popup");
      $header.addClass("floating-wpp-head");
      $popupMessage.addClass("floating-wpp-message");
      $inputMessage.addClass("floating-wpp-input-message");
      $btnSend.addClass("floating-wpp-btn-send");
      $closeBtn.addClass("close");

      $popupMessage.append(
        "<br/>" +
          settings.popupMessage +
          "<br/><br/>" +
          settings.popupMessage2 +
          '<br/><br/><span class="currentTime">' +
          time +
          "</span>"
      );
      $textarea.attr("rows", "3");
      $textarea.val(settings.message);

      if (!settings.popupMessage) {
        $popupMessage.hide();
      }

      $inputMessage.append($textarea, $btnSend);

      $btnSend.click(function () {
        settings.message = $textarea.val();
        sendWhatsappMessage();
      });

      $popup.append($header, $popupMessage, $inputMessage).appendTo(this);

      $closeBtn.click(function () {
        $popup.removeClass("active");
      });

      $textarea.keypress(function (event) {
        settings.message = $(this).val();

        if (event.keyCode == 13 && !event.shiftKey && !isMobile) {
          event.preventDefault();
          $btnSend.click();
        }
      });

      if (settings.autoOpenTimeout > 0) {
        setTimeout(function () {
          openPopup();
        }, settings.autoOpenTimeout);
      }

      function openPopup() {
        if (!$popup.hasClass("active")) {
          $popup.addClass("active");
          $textarea.focus();
        }
      }
    }

    if (settings.zIndex) {
      $(this).css("z-index", settings.zIndex);
    }

    if (settings.position === "right") {
      this.css({
        left: "auto",
        right: "15px",
      });
      $popup.css("right", "0");
    }
    //#endregion

    $btnSend.append(
      '<a href="" class="sendChat"><svg width="20" height="20" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="WhatsappButton__Icon-sc-7zv9k4-0 gaaZOM"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg><span class="DefaultButton__DefaultButtonText">Start Chat</span></a>'
    );
  };

  function isInternetExplorer() {
    var userAgent = window.navigator.userAgent;
    return (
      userAgent.indexOf("MSIE") >= 0 || userAgent.match(/Trident.*rv\:11\./)
    );
  }

  function mobilecheck() {
    var check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }
})(jQuery);
