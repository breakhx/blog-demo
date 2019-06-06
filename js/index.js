var vm = new Vue({
    el: "#app",
    data: {
        src: "./sound.html"
    },
    methods: {
        handleClick (e) {
            console.log(e.target)
            let target = $(e.target);
            let src = target.attr("to");
            if (src !== undefined && src !== null && src !== "") {
                this.src = src;
            }
        }
    }
})