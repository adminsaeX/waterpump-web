<template>
   <div align="center">
        <q-card
            square
            style="width:60%;"
        >
            <q-card-title align="center">
                <q-icon name="opacity" color="primary" size="100pt"></q-icon><br>
                Solar Pump - Register
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
                    <q-input
                        v-model="form.repassword"
                        type="password"
                        placeholder="Re-Password"
                        initial-hide-password
                        clearable
                    />
                    <q-select
                        v-model="form.rule"
                        placeholder="Rule"
                        :options="ruleOption"
                    />
                    <br>
                    <q-checkbox
                        v-model="agree"
                        label="Agree to registration."
                    />
                </div><br>
            </q-card-main>
            <q-card-separator />
            <q-card-actions align="center">
                <q-btn
                    color="negative"
                    icon="close"
                    to="/Login"
                >
                    ยกเลิก
                </q-btn>
                &nbsp;&nbsp;
                <q-btn
                    color="warning"
                    icon="save"
                    text-color="black"
                    @click="registerAction"
                >
                    ลงทะเบียน
                </q-btn>
            </q-card-actions>
        </q-card>
        <br>
        <div style="font-size: 12px;">
            <span>มีบัญชีผู้ใช้แล้วสามารถคลิก&nbsp;
                <q-btn
                    dense
                    color="primary"
                    outline
                    text-color="black"
                    to="/Login"
                    size="12px"
                >
                    เข้าสู่ระบบ
                </q-btn> 
            &nbsp;ได้ทั้นที</span>&nbsp;&nbsp;
            
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            agree: false,
            form: {
                username: '',
                password: '',
                repassword: '',
                rule: 0
            },
            ruleOption: [
                { label: 'User', value: 'user' },
                { label: 'Admin', value: 'admin' },
                { label: 'VIP', value: 'vip' }
            ]
        }
    },
    methods: {
        registerAction () {
            this.checkEmptry() ? this.checkAgreeMent() : ''
            if (this.form.password === this.form.repassword) {
                console.log({
                    username:  this.form.username,
                    password: this.form.password,
                    repassword: this.form.repassword,
                    rule: this.form.rule
                })
                this.$store.dispatch('register', this.form).then((response) => {
                    if (response == true) {
                        this.notifyAction('check', 'Register successful!', 3000, 'positive')
                    } else {
                        this.notifyAction('warning', `Register unsuccess!, ${response}`, 5000, 'negative')
                    }
                })
            } else {
                this.notifyAction('warning', 'Password not match', 5000, 'negative')
            }
        },
        checkEmptry () {
            if (!this.form.username && this.form.username.length < 6) {
                this.notifyAction('warning', 'Username not emptry and more than 6 character!', 5000, 'negative')
                return
            }
            return true
        },
        checkAgreeMent () {
            if (!this.agree) {
                this.notifyAction('warning', 'Please agree to registration.', 5000, 'negative')
                return
            }
            return true
        },
        notifyAction (icon, message, timeout, color) {
            this.$q.notify({
                    message,
                    color,
                    timeout,
                    icon,
                    closeBtn: true
                })
        }
    },
}
</script>
