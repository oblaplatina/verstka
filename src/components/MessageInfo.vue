<template>
    <section class="message-info">
        <div class="message-info-container">
            <img src="@/assets/images/message-info.svg" alt="Network Image" class="message-info-img">
            <div class="message-info-inner">
                <h2 class="message-info-title">{{ $t('home.messageInfo.title') }}</h2>
                <div class="message-info-subtitle">
                    <p>{{ $t('home.messageInfo.subtitle') }}</p>
                </div>
            </div>
            <div class="message-button-shadow">
                <a href="#" class="message-contact-btn">{{ $t('home.messageInfo.button') }}</a>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style>
.message-info {
    margin-bottom: -100px;
    z-index: 2;
    position: relative;
}

.message-info-container {
    display: flex;
    position: relative;
    background-color: white;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(13, 16, 37, 0.1) 5px 5px 5px -5px;
    border-radius: 10px;
    max-width: 1140px;
}

.message-info-container::before {
    content: "";
    position: absolute;
    top: 16px;
    left: 31px;
    right: 31px;
    bottom: -33px;
    background-color: rgba(13, 16, 37, 1);
    filter: blur(50px);
    border-radius: 10px;
    z-index: -1;
    opacity: 0.1;
    pointer-events: none;
}

.message-info-inner {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.message-info-title {
    font-size: 35px;
    font-weight: 500;
    line-height: 1.3;
    color: #0B132A;
    margin-bottom: 20px;
    margin-top: 47px;
    margin-right: 148px;
}

.message-info-subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: #4F5665;
    margin-bottom: 47px;
}

.message-info-img {
    margin-left: 67px;
    margin-right: 62px;
}

.message-button-shadow {
    position: relative;
    display: inline-block;
}

.message-contact-btn {
    display: inline-block;
    background-color: #8CC5F9;
    position: relative;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1.4;
    padding: 17px 80px;
    border-radius: 10px;
    margin-right: 70px;
    text-align: center;
    z-index: 2;
}

.message-contact-btn:hover {
    background-color: #878ABC;
}

.message-contact-btn::before {
    content: "";
    position: absolute;
    height: 100%;
    top: 25.3px;
    left: 19.09px;
    right: 19.09px;
    bottom: -25.3px;
    background-color: #5F7A7E;
    opacity: 0.22;
    border-radius: 10px;
    filter: blur(22px);
    z-index: -1;
}

@media (max-width: 1186px) {
    .message-info-inner {
        flex: -1;
    }

    .message-info-title {
        font-size: 25px;
        margin-right: 0;
        max-width: 400px;
    }

    .message-info-subtitle {
        font-size: 14px;
    }
}

@media (max-width: 900px) {
    .message-info-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .message-info-img {
        flex: 0 0 auto;
        margin-right: 20px;
        margin-left: 0;
    }

    .message-info-inner {
        flex: 0 0 auto;
        text-align: left;
        max-width: 250px;
    }

    .message-info-title {
        font-size: 20px;

    }

    .message-info-subtitle {
        font-size: 12px;
        margin-bottom: 25px;
    }

    .message-contact-btn {
        font-size: 14px;
        padding: 11px 50px;
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 20px;
    }
}

@media (max-width: 438px) {
    .message-info-inner {
        text-align: center;
    }

    .message-info-title {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .message-info-img {
        margin-top: 20px;
    }
}
</style>