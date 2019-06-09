<template>
    <div align="center">
        <q-card
            square
            style="width:50%;"
        >
            <q-card-title align="center">
                <q-icon name="opacity" color="primary" size="130pt"></q-icon><br>
                Solar Pump - System signin
            </q-card-title>
            <q-card-separator />
            <q-card-main>
                <div align="left">
                    <q-input
                        v-model="form.username"
                        type="text"
                        placeholder="Username"
                        clearable
                    />
                    <q-input
                        v-model="form.password"
                        type="password"
                        placeholder="Password"
                        initial-hide-password
                        clearable
                    />
                </div>
            </q-card-main>
            <q-card-separator />
            <q-card-actions align="center">
                <q-btn
                    color="primary"
                    icon="fingerprint"
                    text-color="black"
                    @click="loginAction"
                >
                    เข้าสู่ระบบ
                </q-btn>
                &nbsp;&nbsp;
                <q-btn
                    color="warning"
                    icon="add"
                    text-color="black"
                    to="/Register"
                >
                    สมัครสมาชิก
                </q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>
<script>
export default {
    data () {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    mounted() {
        this.$store.dispatch('logout')
    },
    methods: {
        loginAction () {
            if (this.form.username && this.form.password) {
                this.$store.dispatch('login', this.form).then(response => {
                    if (response === true) {
                        this.$router.push('/')
                    } else {
                        this.$q.notify({
                            message: response,
                            timeout: 5000,
                            icon: 'warning',
                            closeBtn: true
                        })
                    }
                })
            } else {
                this.$q.notify({
                    message: 'Username or Password incorrect!',
                    timeout: 5000,
                    icon: 'warning',
                    closeBtn: true
                })
            }
        }
    }
}
</script>