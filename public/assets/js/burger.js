$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        });
    });
    $(".devour-burger").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        let isdevoured = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isdevoured
        }).then(() => {
            location.reload();
        });
    });
    $(".delete-burger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
            location.reload();
        }
        );
    });
});