$(function() {

    //$( "#_myModalVR" ).dialog();
    var modal = $("#_myModalVR");
    //$("#_myModalVR").dialog();

    function modalDialog(modalText) {
        $("#error-id").text(modalText);
        $("#_myModalVR").dialog({
            modal: true,
            buttons: {
                Ok: function() {
                    $(this).dialog("close");
                }
            }
        });
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            $("#top-header").addClass("scroll-class");
            $("#top-header").removeClass("border-class-top");
            
        } else {
            $("#top-header").removeClass("scroll-class");
            $("#top-header").addClass("border-class-top");
        }
    });
    var selectedEffect = "bounce";

    var myInterval = setInterval(function() {
        //$('.overlay-txt > .blinking-div').toggle(selectedEffect, null, 500);
    }, 2000);

    //=================================================================================
    //=========== This is for toggle top banner ======================================

    var counter = 0,
        divs = $('#h-domain, #i-domain');

    function showDiv () {
        divs.hide() // hide all divs
            .filter(function (index) { return index == counter % 3; }) // figure out correct div to show
            .show('slow'); // and show it

        counter++;
    } // function to loop through divs and show correct div

    showDiv(); // show first div    

    setInterval(function () {
        showDiv(); // show next div
    }, 3 * 1000); // do this every 10 seconds    

    //===================================================================================

    console.log("On page lopad");
    $('.slider-class-amazon').slick({

        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000

    });

    var obj = {
        "video": {
            "value": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='https://www.youtube.com/embed/TTOKvj9sQZg' frameborder='0' allowFullScreen></iframe>"
        }
    };

    $("#video-container").html(obj.video.value);

    function validateName(name) {
        var regexValidName = new RegExp("^[a-zA-Z ]*$");

        if (regexValidName.test(name)) {
            console.log("correct NAme");
            return true;
        } else {
            console.log("Incorrect NAme");
        }
    }



    function validateemail(email) {
        var regexValidEmail = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

        if (regexValidEmail.test(email)) {
            console.log("correct email");
            return true;
        } else {
            console.log("Incorrect email");
        }
    }


    function validatephone(phone) {
        var regexValidphone = new RegExp("^[0-9]*$");

        if (regexValidphone.test(phone)) {
            console.log("correct phone");
            return true;
        } else {
            console.log("Incorrect phone");
        }
    }


    $(document).on('blur', "#usrname", function() {
        console.log($(this).val());
        checkValidation($(this));
        /*
        if ($(this).val() && $(this).val() != 'undefined') {
            if (validateName($(this).val())) {
                $(this).removeClass("inputErrClass");
            } else {
                $(this).addClass("inputErrClass");
            }
        } else {
            $(this).addClass("inputErrClass");
        }
        */

    });
    $(document).on('blur', "#phone", function() {
        console.log($(this).val());
        checkValidation($(this));
        /*
        if ($(this).val() && $(this).val() != 'undefined') {
            if (validatephone($(this).val())) {
                $(this).removeClass("inputErrClass");
            } else {
                $(this).addClass("inputErrClass");
            }
        }
        */

    });
    $(document).on('blur', "#mail", function() {

        checkValidation($(this));
        console.log($(this).val());
        /*
        if ($(this).val() && $(this).val() != 'undefined') {
            if (validateemail($(this).val())) {
                $(this).removeClass("inputErrClass");
            } else {
                $(this).addClass("inputErrClass");
            }
        } else {
            $(this).addClass("inputErrClass");
        }
        */

    });

    function checkValidation($input) {
        var skipPhone = $input.attr("id");
        if (skipPhone == "mail") {
            if ($input.val() && $input.val() != 'undefined') {
                if (validateemail($input.val())) {
                    $input.removeClass("inputErrClass");
                } else {
                    $input.addClass("inputErrClass");
                    modalDialog("Email format is not correct.");
                }
            } else {
                $input.addClass("inputErrClass");
                modalDialog("Email format is not correct.");
            }
        } else if (skipPhone == "usrname") {
            if ($input.val() && $input.val() != 'undefined') {
                if ($input.val().length > 2) {
                    if (validateName($input.val())) {
                        $input.removeClass("inputErrClass");
                    } else {
                        $input.addClass("inputErrClass");
                        modalDialog("UserName format is not correct.");
                    }
                } else {
                    $input.addClass("inputErrClass");
                    modalDialog("UserName format is not correct.");
                }

            } else {
                $input.addClass("inputErrClass");
                modalDialog("UserName format is not correct.");
            }
        } else if (skipPhone == "phone") {
            if ($input.val() && $input.val() != 'undefined') {
                if ($input.val().length == 10) {
                    if (validatephone($input.val())) {
                        $input.removeClass("inputErrClass");
                    } else {
                        $input.addClass("inputErrClass");
                        modalDialog("Phone number format is not correct.");
                    }
                } else {
                    $input.addClass("inputErrClass");
                    modalDialog("Phone number format is not correct.");
                }

            } else {
                $input.removeClass("inputErrClass");
            }
        }

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };  

     $(document).on("click", "#contact-button", function() {
        $('html,body').animate({
        scrollTop: $("#contact-us").offset().top},
        'slow');
     });

    $(document).on("click", "#send-button", function() {
        console.log("Make a call to store data");

        $(".contact-form").find("input").each(function() {
            checkValidation($(this));
        });

        if ($("input.inputErrClass").length == 0) {

            var rand = Math.floor(Math.random() * 1000) * 3 * 2 + 5;

            var usrObj = {};
            usrObj.id = 'NA';
            usrObj.username = 'NA';
            usrObj.phone = 'NA';
            usrObj.email = 'NA';
            usrObj.comments = 'NA';

            var user_key = 'NA';

            var currentdate = new Date();
            var datetime = currentdate.getDate() + "/" +
                (currentdate.getMonth() + 1) + "/" +
                currentdate.getFullYear() + "-" +
                currentdate.getHours() + ":" +
                currentdate.getMinutes() + ":" +
                currentdate.getSeconds();

            console.log(datetime);

            $(".contact-form").find("input").each(function() {
                var skipPhone = $(this).attr("id");
                if (skipPhone == "mail") {
                    usrObj.email = $(this).val();
                } else if (skipPhone == "usrname") {
                    usrObj.username = $(this).val();
                    user_key = $(this).val() + "--" + datetime;
                    usrObj.id = $(this).val().substr(0, 2) + "-" + rand;
                } else if (skipPhone == "phone") {
                    usrObj.phone = $(this).val();
                }
            });

            usrObj.comments = $("#comment").val();


            var Dbdata = { "usrkey": user_key, "usrData": usrObj };
            Dbdata = JSON.stringify(Dbdata);
            console.log(Dbdata);
            //https://pvr-virtual-assistant.herokuapp.com/

            $.ajax({
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                //url: 'http://localhost:3000/storeNewdata',
                url: 'https://pvr-virtual-assistant.herokuapp.com/storeNewdata',
                data: Dbdata,
                dataType: "json",
                crossDomain: true,
                complete: function() {
                    //called when complete
                    console.log('SAve new guest api campleed');

                },
                success: function(res) {
                    console.log(res);
                    modalDialog("Thank you very much for your interest. We will connect with you soon.");

                },
                error: function() {
                    // Data not found in json want to offer for new user.
                     modalDialog("Thank you very much for your interest. Something wrong with the network. Please submit one more time.");
                },
            });

        } else {
            alert("Something wrong with form input.Please correct it and submit again.");
        }


    });

});