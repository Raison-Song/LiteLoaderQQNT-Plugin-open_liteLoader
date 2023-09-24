function onLoad() {
    const interval = setInterval(() => {
        const update_btn = document.querySelector("body > div#app > div.kicked-off-dialog > div.q-dialog.vue-component > div.q-dialog-main.vue-component > div.q-dialog-footer > button.q-button.q-button--primary.q-button--default.vue-component > span");

        if (update_btn) {
            clearInterval(interval);

            if (update_btn.textContent === "重新登录") {
                const button = document.querySelector("body > div#app > div.kicked-off-dialog > div.q-dialog.vue-component > div.q-dialog-main.vue-component > div.q-dialog-footer > button.q-button.q-button--primary.q-button--default.vue-component");
                const button_base = document.querySelector("body > div#app > div.kicked-off-dialog > div.q-dialog.vue-component > div.q-dialog-main.vue-component > div.q-dialog-footer")

                button.parentNode.removeChild(button);

                var newButton = document.createElement("button");
                newButton.id = "Raison";

                newButton.innerHTML = "重新登陆";
                newButton.classList.add("q-button", "q-button--primary", "q-button--default", "vue-component");
                newButton.addEventListener("click", function () {
                    //此处依靠bug运行
                    // open_liteLoader_when_logging_back_in.openQQ();
                });
                button_base.appendChild(newButton);
            }
        }
    }, 1000);
}

export {
    onLoad
}
