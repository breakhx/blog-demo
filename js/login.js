var vm = new Vue({
    el: "#login",
    data: {
        user: "",
        password: "",
        flag: false,
        flagP: false
    },
    methods: {
        login () {
            if (this.user == "" || this.user == undefined || this.password == "" || this.password == undefined) {
                this.flag = true;
                return;
            }
            user.forEach(item => {
                if (item.user == this.user) {
                    if (item.passw == this.password) {
                        location.href = "../Html/姓名index.html"
                    }
                    if (item.passw !== this.password) {
                        this.flagP = true
                    }
                }
            })
        }
    }
})