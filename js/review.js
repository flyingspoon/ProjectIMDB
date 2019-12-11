$(document).ready(function () {
    let isModalActive = true;
    $("#openReviewModal").click(function () {
        $(".jk-modal").removeClass("modal-anim");
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