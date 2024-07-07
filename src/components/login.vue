<template >
    <div class="container" v-if="!isLoggedIn">
        <h1>Login/Register</h1>

        <label for="uname"><b>E-Mail</b></label>
        <label v-if="!isEmailValid" for="email" class="validation_password" >E-Mail must be valid</label>
        <input v-model="email" @change="validateEmail" type="text" placeholder="E-Mail" name="email" required>

        <label for="psw"><b>Password</b></label>
        <label v-if="!isPasswordValid" for="psw" class="validation_password" >Password must be 6 characters or longer</label>
        <input v-model="password" @change="validatePassword" type="password" placeholder="Enter Password" name="psw" required>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <label v-if="!isRepeatPasswordValid" for="psw-repeat" class="validation_password">Password must be the same as above</label>
        <input v-model="repeatPassword" @change="validateRepeatPassword" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required :disabled="!isRegister">

        <form>
            <input type="checkbox" id="register" name="register" value="Register" v-model="isRegister">
            <label for="regsiter"> Register</label><br>
        </form>

        <button @click="clickLogin" type="submit" class="login-button">Login/Register</button>
    </div>
    <div v-if="isLoggedIn">
        <button @click="clickLogout" type="submit" class="login-button">Logout</button>
        <Dashboard/>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Dashboard from "./dashboard.vue"
import LoginHandler from "../helpers/loginHandler";

const loginHandler = new LoginHandler();

const email = ref(null);
const password = ref(null);
const repeatPassword = ref(null);

const isEmailValid = ref(false);
const isPasswordValid = ref(false);
const isRepeatPasswordValid = ref(false);
const isLoggedIn = ref(false);

const isRegister = ref(false);

/**
 * Validates if the input is a valid email
 */
function validateEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isEmailValid.value = re.test(email.value);
}

/**
 * Validates if the input is 6 characters or longer
 */
function validatePassword(){
    isPasswordValid.value = password.value.length >= 6;
}

/**
 * Validates if the repeated password is the same
 */
function validateRepeatPassword(){
    isRepeatPasswordValid.value = repeatPassword.value == password.value;
}

/**
 * Sets login to true when the email and password are correct and the give credentals are valid
 */
async function clickLogin() {
    const isLoginValid = await loginHandler.isCredentialsValid(email.value, password.value);
    if (isEmailValid.value && isPasswordValid.value && isLoginValid) {
        isLoggedIn.value = true;
    }
} 

/**
 * Sets login to false
 */
function clickLogout() {
    isLoggedIn.value = !isLoggedIn.value;
}

</script>

<style scoped >

.header {
    background-color: #1900ff;
    color: white;
    width: 100%;
    padding: 1em 0;
    text-align: center;
}

.main {
    padding: 2em;
}

.validation_password{
    padding: 0;
    margin: 0;
    text-align: left;
    color: red;
}

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;

}

.login-button {
    background-color: rgb(66, 158, 189);
    color: black ;
    font-weight: bold;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.login-button:hover {
    background-color: rgb(40, 150, 187);
}

button:hover {
    opacity: 0.8;
}

    
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
}
    
img.avatar {
    width: 40%;
    border-radius: 50%;
}
    
.container {
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5%;
    background-color: #e6e6e6;
    box-shadow: 5px 5px 15px -1px #6B6B6B;
    border-color: #d1d1d1;
    border-style: solid;
    border-width: 1px;
    padding: 16px;
    border-radius: 25px;
    gap:20px;
}
    
span.psw {
    float: right;
    padding-top: 16px;
}
    
    
@media screen and (max-width: 300px){
    span.psw {
        display: block;
        float: none;
    }
    .cancelbtn {
        width: 100%;
    }
}
    
</style>