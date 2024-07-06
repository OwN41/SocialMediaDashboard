<template >
    <div class="container">
        <h1>Login/Register</h1>
        <label for="uname"><b>E-Mail</b></label>
        <input type="text" placeholder="E-Mail" name="uname" required>
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
        
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
        
        <button type="submit" class="login-button">Login/Regsiter</button>
        
        <form>
            <input type="checkbox" id="register1" name="register" value="Register">
            <label for="regsiter1"> Registrieren</label><br>
        </form>

    </div>
</template>

<script setup>
    

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