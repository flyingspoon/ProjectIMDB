$(document).ready(function () {
    $(".jk-modal").css("display", "none").addClass("modal-anim");
    $("#openReviewModal").click(function () {
        $(".jk-modal").css("display", "block").removeClass("modal-anim");
    })
    $("#closeReviewModal").click(function (e) {
        e.preventDefault();
        $(".jk-modal").addClass("modal-anim");
    })
    $(".jk-modal .user-rating i").hover(function () {
        $(this).addClass("fas").prevAll().addClass("fas").removeClass("far");
        $(this).nextAll().addClass("far").removeClass("fas");
    })
})