<template >
    <div class="container">
        <h1>Login</h1>
        <label for="uname"><b>E-Mail</b></label>
        <input type="text" placeholder="E-Mail" name="uname" required>
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
        <button type="submit" class="login-button">Login</button>
        <span class="psw">Forgot <a href="#">password?</a></span>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped >
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('Hintergrund2.jpg') repeat;
    background-size: cover;
}

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
    background-color: rgb(152, 219, 241);
    color: white;
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
    background-color: rgb(152, 219, 241);
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
    background-color: white;
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