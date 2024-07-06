<template >
    <div class="main-content">
        <div class="header">
            <h2>DASHBOARD</h2>
            <div class="user-actions">
                <i class="notification-icon">🔔</i>
                <i class="profile-icon">👤</i>
            </div>
        </div>
        <div class="stats">
            <div class="stat-card red">
                <h3>LIKES</h3>
                <p>{{ subscriberCount }}</p>
            </div>
            <div class="stat-card green">
                <h3>SUBSCRIBERS</h3>
                <div id="subscriberCount"></div>
            </div>
            <div class="stat-card orange">
                <h3>FOLLOWERS</h3>
                <p>3,841</p>
            </div>
            <div class="stat-card blue">
                <h3>MESSAGES</h3>
                <p>1,962</p>
            </div>
        </div>
        
        <div class="social-stats">
            <div class="social-stat twitter">
                <p>+274</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="social-stat facebook">
                <p>-126</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="social-stat instagram">
                <p>+352</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="social-stat linkedin">
                <p>+102</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
</template>
<script>
        const APIKey = 'AIzaSyBKttcolANo2FUK6qB6Mbw3JoO33T76Gs0';
        const Userid = 'UC3d8fjUSRSsMfmyltyz33Vw';
        const subscriberCount= document.getElementById('subscriberCount');
        const viewCount = document.getElementById('viewCount');
        let getdata = () => {
            fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                subscriberCount.innerHTML = data.items[0].statistics.subscriberCount;
                viewCount.innerHTML = data.items[0].statistics.viewCount;
            });
        };
        getdata();
</script>
<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    background: url('Hintergrund2.jpg') repeat;
    background-size: cover;
}

.sidebar {
    background-color: #1900ff;
    color: white;
    width: 20%;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sidebar .logo {
    margin-bottom: 20px;
}

.sidebar nav ul {
    list-style: none;
    padding: 0;
    width: 100%;
}

.sidebar nav ul li {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.sidebar nav ul li:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.main-content {
    width: 80%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.header h2 {
    margin: 0;
}

.user-actions {
    display: flex;
    gap: 20px;
    font-size: 1.5em;
}

.stats {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.stat-card {
    flex: 1;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.stat-card.red {
    border-left: 5px solid red;
}

.stat-card.green {
    border-left: 5px solid green;
}

.stat-card.orange {
    border-left: 5px solid orange;
}

.stat-card.blue {
    border-left: 5px solid blue;
}

.social-stats {
    display: flex;
    gap: 20px;
}

.social-stat {
    flex: 1;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.social-stat.twitter {
    border-left: 5px solid #1DA1F2;
}

.social-stat.facebook {
    border-left: 5px solid #3b5998;
}

.social-stat.instagram {
    border-left: 5px solid #E1306C;
}

.social-stat.linkedin {
    border-left: 5px solid #0077B5;
}

    
</style>