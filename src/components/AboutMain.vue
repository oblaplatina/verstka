<template>
    <main class="main-content">
        <section class="about-us-container">
            <div class="about-us-inner">
                <h1 class="about-us-title">About us</h1>
                <div class="about-us-subtitle">
                    <p>Sunt voluptatibus reprehenderit quo non unde quis odio. Quis nobis neque laudantium alias fugiat
                        repellat. Qui ullam quas iusto qui eum et temporibus. <span class="highlight">Veritatis</span>
                        repudiandae perferendis esse
                        repellendus doloribus voluptatem iste autem. Tempore aspernatur est qui sed sed quia.</p>
                    <p>Consequatur sapiente tenetur. Libero totam et vel cupiditate quo quidem. Nobis dolore amet. Sit
                        voluptas ut. Eos quis natus sapiente esse odit sint culpa aut. Mollitia <span
                            class="highlight">qui quam iste</span> assumenda
                        ullam.</p>
                </div>
            </div>
            <img src="@/assets/images/crossed_flags.svg" alt="" class="crossed-flags-img">
        </section>
    </main>
</template>
<script>
export default {
    
}
</script>
<style>
    .about-us-container {
    display: flex;
    justify-content: space-between;
    margin-left: 71px;
    margin-bottom: 157px;
}

.about-us-title {
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.4;
    color: #8CC5F9;
    margin-bottom: 8px;
}

.about-us-subtitle {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.37;
    color: #4F5665;
    margin-bottom: 87px;
}

.about-us-subtitle p {
    margin-bottom: 35px;
}

.about-us-subtitle .highlight {
    color: #8CC5F9;
    font-weight: bold;
}

.crossed-flags-img {
    margin-left: 135px;
}

@media (max-width: 1250px) {
    .about-us-title {
        font-size: 35px;
    }

    .about-us-subtitle {
        font-size: 18px;
    }

    .about-us-subtitle p {
        margin-bottom: 20px;
    }

    .crossed-flags-img {
        width: 50%;
        height: auto;
    }
}

@media (max-width: 1250px) {
    .about-us-container {
        flex-wrap: wrap;
        justify-content: center;
    }

    .about-us-subtitle {
        margin-bottom: 25px;
    }
    
    .crossed-flags-img {
        width: 50%;
        margin-left: 0;
    }
}
</style>