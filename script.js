$(document).ready(function () {

    // INICIAR AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // NAVBAR SCROLL
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $("#navbar").addClass("scrolled");
        } else {
            $("#navbar").removeClass("scrolled");
        }
    });

    // MODO OSCURO
    $("#themeToggle").click(function () {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $(this).text("☀️");
        } else {
            $(this).text("🌙");
        }
    });

    // CAMBIO DE COLORES (habilidades)
    $("#colorBtn").click(function () {
        $(".progress-bar").toggleClass("bg-warning bg-success");
    });

    // SCROLL SUAVE
    $(".nav-link").click(function (e) {
        e.preventDefault();

        let target = $(this.hash);

        $("html, body").animate({
            scrollTop: target.offset().top - 70
        }, 600);
    });

    // VALIDACIÓN FORMULARIO PRO
    $("#contactForm input, #contactForm textarea").on("input", function () {

        let name = $("#name");
        let email = $("#email");
        let message = $("#message");

        // Nombre
        if (name.val().length >= 3) {
            name.addClass("valid").removeClass("invalid");
        } else {
            name.addClass("invalid").removeClass("valid");
        }

        // Email
        if (email.val().includes("@")) {
            email.addClass("valid").removeClass("invalid");
        } else {
            email.addClass("invalid").removeClass("valid");
        }

        // Mensaje
        if (message.val().length >= 5) {
            message.addClass("valid").removeClass("invalid");
        } else {
            message.addClass("invalid").removeClass("valid");
        }

        // Estado general
        if ($(".invalid").length === 0) {
            $("#formMsg").text("Formulario listo para enviar ✅");
        } else {
            $("#formMsg").text("Completa correctamente los campos ❌");
        }
    });

});