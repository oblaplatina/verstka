<template>
    <section class="stat">
        <div class="stat-container">
            <div class="stat-content">
                <div class="stat-item">
                    <img src="@/assets/images/user.svg" alt="icon">
                    <p>{{ $t('home.stat.customers.value') }}<br><span>{{ $t('home.stat.customers.label') }}</span></p>
                </div>
                <div class="stat-item">
                    <img src="@/assets/images/location.svg" alt="icon">
                    <p>{{ $t('home.stat.countries.value') }}<br><span>{{ $t('home.stat.countries.label') }}</span></p>
                </div>
                <div class="stat-item">
                    <img src="@/assets/images/server.svg" alt="icon">
                    <p>{{ $t('home.stat.servers.value') }}<br><span>{{ $t('home.stat.servers.label') }}</span></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style>
.stat-container {
    position: relative;
    margin-bottom: 137.5px;
}

.stat-content {
    height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-between;
    margin-left: 71px;
    background-color: #ffffff;
    box-shadow: rgba(13, 16, 37, 0.1) 0px 5px 5px -5px;
    border-radius: 10px;
    z-index: 1;
}

.stat-content::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 50px;
    bottom: -25px;
    left: 90px;
    background-color: rgba(13, 16, 37, 1);
    opacity: 0.1;
    filter: blur(57px);
    z-index: -1;
}

.stat-item {
    display: flex;
    position: relative;
    gap: 36px;
    margin-left: 91px;
    margin-right: 24.5px;
}

.stat-item:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    width: 2px;
    height: 160%;
    background-color: #EEEFF2;
}

.stat-item p {
    color: #0B132A;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.4;
}

.stat-item span {
    color: #4F5665;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
}

@media (max-width: 1240px) {
    .stat-content {
        margin: 0;
    }

    .stat-item {
        margin-left: 50px;
    }

    .stat-content::before {
        left: 40px;
    }
}

@media (max-width: 840px) {
    .stat-item {
        gap: 15px;
        margin-right: 0;
    }

    .stat-item p {
        font-size: 16px;
    }

    .stat-item span {
        font-size: 14px;
    }

    .stat-content {
        height: 130px;
    }

    .stat-content::before {
        left: 20px;
    }

    .stat-item:not(:last-child)::after {
        height: 150%;
    }

    .stat-container {
        margin-bottom: 95px;
    }
}

@media (max-width: 630px) {


    .stat-item img {
        width: 35px;
        height: 36px;
    }

    .stat-item {
        margin: 0 auto;
    }
}

@media (max-width: 470px) {
    .stat-item {
        flex-direction: column;
        align-items: flex-start;

    }

    .stat-item:not(:last-child)::after {
        height: 70%;
        right: -20%;
    }
}
</style>