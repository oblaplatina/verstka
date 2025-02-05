<template>
    <section class="quote-section">
        <div class="quote-content">
            <div class="quote-icon">
                <img src="@/assets/images/quote-icon.svg" alt="Quote Icon">
            </div>
            <blockquote class="quote-text">{{ $t('about.quoteSection.text') }}</blockquote>
            <cite class="quote-author">{{ $t('about.quoteSection.caption') }}</cite>
        </div>
    </section>
</template>
<script setup>

</script>
<style>
.quote-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 1;
    margin-bottom: 185px;
}

.quote-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100vw;
    height: 100%;
    z-index: -1;
    background: #FBFBFB;
    z-index: -1;
}

.quote-content {
    text-align: center;
    position: relative;
}

.quote-icon {
    margin-top: 80px;
    margin-bottom: 43px;
}

.quote-text {

    font-size: 33px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.2;
    text-align: left;
    color: #4F4F4F;
    margin-bottom: 45px;
}

.quote-author {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: auto;
    text-align: right;
    color: #BDBDBD;
    margin-bottom: 80px;
}

@media (max-width: 1260px) {
    .quote-text {
        font-size: 26px;
        margin-left: 10px;
    }

    .quote-section {
        margin-bottom: 70px;
    }
}
</style>