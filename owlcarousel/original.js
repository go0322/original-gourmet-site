$(function() {
  $("#sp_navi_btn").click(function() {
    $(this).next().slideToggle();
  });
});

// ページの読み込みが完了してから実行
$(function() {
  // スクロールしたときに実行
  $(window).scroll(function() {
    // 目的のスクロール量を設定(px)
    var TargetPos = 350;
    // 現在のスクロール位置を取得
    var ScrollPos = $(window).scrollTop();
    // 現在位置が目的のスクロール量に達しているかどうかを判断
    if (ScrollPos >= TargetPos) {
      // 達していれば表示
      $("#page_top").fadeIn();
    }
    else {
      // 達していなければ非表示
      $("#page_top").fadeOut();
    }
  });
});

$(function() {
  $("#page_top a").click(function() {
    $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow', 'swing');
    return false;
  });
});

// $(function() {
//   $("#area_option").multipleSelect();
// });

//Clipboard
$(function() {
  /* URLコピー機能を実装するDOM要素をCSSクラスで指定 */
  var clipboard = new Clipboard('#share_btn');
  clipboard.on('success', function(e) {
    /* URLコピー完了時のメッセージを対象のURLコピーボタン内に表示 */
    $(e.trigger.nextElementSibling).fadeIn().delay(1000).fadeOut();
  });
});

//pulldown
$(function() {
  $(".send_box p").on("click", function() {
    $(this).next().slideToggle();
  });
});

//slide
$(window).load(function() {
  $(".list_img img").click(function() {
    var img_src = $(this).attr("src");
    $(this).parents('.food_img').find(".display_img").attr("src", img_src);
  });
});

$(document).ready(function() {
  $('.selectAll')
    .focus(function() {
      $(this).select();
    })
    .click(function() {
      $(this).select();
      return false;
    });
});

//ページ切り替え表示
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var page = getParam('page'); // '';
$("#pager_pc .page_pc_number").removeClass("active");
$("#pager_pc .page" + page).addClass("active");


//Luminous 画像拡大表示
var options = {
  caption: function(trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  },
};
var luminousTrigger = document.querySelectorAll('.luminous');

//LuminousGalleryで第二引数galleryOptsを特に指定しない場合は {} でOK。
new LuminousGallery(luminousTrigger, {}, options);

//印刷ボタン設置
$(function() {
  $('.print').click(function() {
    window.print();
  });
});

//モーダル
$(function() {
  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
  $('.modal_open').click(function() {
    // 黒い背景をbody内に追加
    $('body').append('<div class="modal_bg"></div>');
    $('.modal_bg').fadeIn();

    // data-targetの内容をIDにしてmodalに代入
    var modal = '#' + $(this).attr('data-target');

    // モーダルをウィンドウの中央に配置する
    function modalResize() {
      var w = $(window).width();
      var h = $(window).height();

      var x = (w - $(modal).outerWidth(true)) / 2;
      var y = (h - $(modal).outerHeight(true)) / 2;

      $(modal).css({ 'left': x + 'px', 'top': y + 'px' });
    }

    // modalResizeを実行
    modalResize();

    // modalをフェードインで表示
    $(modal).fadeIn();

    // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
    $('.modal_bg, .modal_close').off().click(function() {
      $('.modal_box').fadeOut();
      $('.modal_bg').fadeOut('slow', function() {
        $('.modal_bg').remove();
      });
    });

    // ウィンドウがリサイズされたらモーダルの位置を再計算する
    $(window).on('resize', function() {
      modalResize();
    });
  });
});

function CheckEmail(input) {
  //IE対応の為変更
  //var mail = email_2.value; //メールフォームの値を取得
  var mail = document.getElementById("email").value; //メールフォームの値を取得
  var mailConfirm = input.value; //メール確認用フォームの値を取得(引数input)

  // パスワードの一致確認
  if (mail != mailConfirm) {
    input.setCustomValidity('メールアドレスが一致しません'); // エラーメッセージのセット
  }
  else {
    input.setCustomValidity(''); // エラーメッセージのクリア
  }
}
