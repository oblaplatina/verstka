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
<script>
export default {

}
</script>

<style lang="scss" scoped>
.quote-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 1;
    margin-bottom: 185px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        width: 100vw;
        height: 100%;
        background: $color-bg-light;
        z-index: -1;
    }

    .quote-content {
        text-align: center;
        position: relative;

        .quote-icon {
            margin: 80px auto 43px;

            img {
                display: block;
            }
        }

        .quote-text {
            font-size: 33px;
            font-style: italic;
            font-weight: 400;
            line-height: 1.2;
            text-align: center;
            color: $color-text;
            margin: 0 auto 45px;
            max-width: 800px;
        }

        .quote-author {
            display: block;
            font-size: 18px;
            font-weight: 400;
            line-height: normal;
            text-align: right;
            color: $color-footer-description;
            margin-bottom: 80px;
        }
    }

    @media (max-width: $bp-1260) {
        margin-bottom: 70px;

        .quote-content {
            .quote-text {
                font-size: 26px;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
}
</style>