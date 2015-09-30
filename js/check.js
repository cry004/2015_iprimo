document.getElementById("pic").onchange = function() {
    document.getElementById("filename").textContent = this.value;
};

function checkStep1form() {
    /*check Step1 form data */
    mname = $("#q-text input[name='mname']");
    mnick = $("#q-text input[name='mnick']");
    fname = $("#q-text input[name='fname']");
    fnick = $("#q-text input[name='fnick']");
    date = $("#q-text input[name= 'date']");
    chance = $("#q-text input[name= 'chance']");
    reason = $("#q-text textarea[name= 'reason']");
    pic = $("#pic_form input[name= 'uploadImage']");
    store = $("#store");
    tel = $("#q-text input[name='tel']");
    email = $("#q-text input[name='email']");
    uCity = $("#zone1");
    uArea = $("#zone2");
    uAddr = $("#q-text input[name='address']");

    var pic_name;
    var testmail = /^.+@.+\..{2,3}$/;
    var word = /^[A-Za-z]+$/;
    var num = /^[0-9]+$/;
    var specialChars = /^[a-zA-Z0-9]+$/;
    var Chinese = /^[\u4e00-\u9fa5]+$/;
    var cellphone = /^09[0-9]{8}$/;

    if (mname.val() == "") {
        alert("請填入男方姓名!");
        mname.focus();
        return false;
    } else if (mnick.val() == "") {
        alert("請填入男方親密暱稱!");
        mnick.focus();
        return false;
    }
    if (fname.val() == "") {
        alert("請填入女方姓名!");
        fname.focus();
        return false;
    } else if (fnick.val() == "") {
        alert("請填入女方親密暱稱!");
        fnick.focus();
        return false;
    } else if (date.val() == "") {
        alert("請填入開始交往時間!");
        date.focus();
        return false;
    } else if (chance.val() == "") {
        alert("請填入認識的契機!");
        chance.focus();
        return false;
    } else if (reason.val() == "") {
        alert("請填入理由!");
        reason.focus();
        return false;
    } else if (pic.val() == "") {
        alert("請選擇上傳合照!");
        pic.focus();
        return false;
    } else if (store.val() == null) {
        alert("請選擇購買門市!");
        store.focus();
        return false;
    } else if (tel.val() == "") {
        alert("請填入手機!");
        tel.focus();
        return false;
    } else if (!cellphone.test(tel.val())) {
        alert("請填入正確的手機 !");
        tel.focus();
        return false;
    } else if (email.val() == "") {
        alert("請填入E-mail !");
        email.focus();
        return false;
    } else if (!checkEmail(email.val())) {
        alert(" 請填入正確的E-mail!");
        email.focus();
        return false;
    } else if (uCity.val() == "") {
        alert("請選擇 縣市!");
        uCity.focus();
        return false;
    } else if (uArea.val() == "") {
        alert("請選擇 區域!");
        uArea.focus();
        return false;
    } else if (uAddr.val() == "") {
        alert("請填入完整地址!");
        uAddr.focus();
        return false;
    } else if (!document.getElementById("readRule").checked) {
        alert("請勾選 詳閱個資蒐集聲明 選項");
        document.getElementById("readRule").focus();
        return false;
    }

    sendData();

    return true;
}

function sendData() {
    $("#pic_form").ajaxForm({
        type: "post",
        url: "http://iprimo.campaigns.com.tw/api/?mode=outpic",
        dataType: "json",
        success: function(resp) {
            if (resp.state == 1) {
                pic_name = resp.data;
                $.ajax({
                    url: 'http://iprimo.campaigns.com.tw/api/?mode=savedata',
                    type: 'POST',
                    data: {
                        mname: mname.val(),
                        mnick: mnick.val(),
                        fname: fname.val(),
                        fnick: fnick.val(),
                        date: date.val(),
                        chance: chance.val(),
                        reason: reason.val(),
                        pic: pic_name,
                        store: $('#store option:selected').text(),
                        tel: tel.val(),
                        email: email.val(),
                        addr: uCity.val() + uArea.val() + uAddr.val()
                    },
                    dataType: "json",
                    success: function(resp) {
                        if (resp.state == 1) {
                            showAlert();

                        } else {
                            alert("伺服器忙碌中。請稍後再試 (error)");
                        }
                    },
                    error: function() {
                        alert("伺服器忙碌中。請稍後再試 (error)");
                    }
                });

            } else if (resp.state == 2) {
                alert("圖片格式錯誤！  ");
            } else {
                alert("伺服器忙碌中。請稍後再試 (error)");
            }
        },
        error: function(resp) {
            window.alert("伺服器忙碌中。請稍後再試 (error)");
            console.log("msg: " + resp.msg);
        }
    }).submit();

}

function showAlert() {
    $('.cover').fadeIn().find('.sendDone').show();
    
}
//信箱格式判斷
function checkEmail(email) {
    EmailCheck = new RegExp(/^([a-zA-Z0-9]+)([\.\-\_]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9\_\-]+)+$/)
    if (EmailCheck.test(email)) {
        return true;
    } else {
        return false;
    }
}

function ValidEmail(emailtoCheck) {
    // 規則: 1.只有一個 "@"
    //       2.網址中, 至少要有一個".", 且不能連續出現
    //       3.不能有空白和,

    var regExp = /^[^@^\s^,]+@[^\.@^\s^,]+(\.[^\.@^\s^,]+)+$/;
    if (emailtoCheck.match(regExp))
        return true;
    else
        return false;
}

// function newGuid() {
//     var guid = "";
//     for (var i = 1; i <= 32; i++) {
//         var n = Math.floor(Math.random() * 16.0).toString(16);
//         guid += n;
//         if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
//             guid += "-";
//     }
//     return guid;
// }

// function FBShare() {
//     shareURL = weburl + "fbshare.aspx";
//     GUID = newGuid();

//     var url = "http://www.facebook.com/sharer.php?u=__U__";

//     var bm_url = shareURL + '?g=' + GUID;

//     if (bm_url == '') bm_url = window.location.href.toLowerCase();

//     url = url.replace('__U__', encodeURIComponent(bm_url));

//     window.open(url, '_blank', 'width=800,height=600,status=yes');

// }

function clearForm() {
    $("#q-text input[name='mname']").val('');
    $("#q-text input[name='mnick']").val('');
    $("#q-text input[name='fname']").val('');
    $("#q-text input[name='fnick']").val('');
    $("#q-text input[name= 'date']").val('');
    $("#q-text input[name= 'chance']").val('');
    $("#q-text textarea[name= 'reason']").val('');
    $("#pic_form input[name= 'uploadImage']").val('');
    $("#q-text select[name= 'store']").val('');
    $("#q-text input[name='tel']").val('');
    $("#q-text input[name='email']").val('');
    $("#zone1").val('');
    $("#zone2").val('');
    $("#q-text input[name='address']").val('');
    document.getElementById("readRule").checked = false;
    $('#filename').html('');
}
