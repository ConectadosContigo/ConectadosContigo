const chatButton = document.getElementById("open-chat");

if (chatButton) {
    chatButton.addEventListener("click", function () {

        /*
         * Tawk.to se conectará aquí.
         *
         * Cuando tengamos nuestro widget,
         * esta función abrirá el chat.
         */

        if (
            typeof Tawk_API !== "undefined" &&
            typeof Tawk_API.maximize === "function"
        ) {
            Tawk_API.maximize();
        } else {
            alert(
                "El chat estará disponible próximamente."
            );
        }
    });
}
