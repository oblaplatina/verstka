<template>
    <section class="values-section">
        <h2 class="values-title">{{ $t('about.valueSection.title') }}</h2>

        <div class="value-item">
            <div class="value-inner">
                <div class="value-number">
                    <img src="@/assets/images/one-vector.svg" alt="Number 1" class="value-number-img">
                </div>
                <div class="value-content">
                    <h3 class="value-heading">{{ $t('about.valueSection.items.heading1') }}</h3>
                    <p class="value-description">{{ $t('about.valueSection.items.description1') }}</p>
                </div>
            </div>
        </div>

        <div class="value-item">
            <div class="value-inner">
                <div class="value-number">
                    <img src="@/assets/images/two-vector.svg" alt="Number 2" class="value-number-img">
                </div>
                <div class="value-content">
                    <h3 class="value-heading">{{ $t('about.valueSection.items.heading2') }}</h3>
                    <p class="value-description">{{ $t('about.valueSection.items.description2') }}</p>
                </div>
            </div>
        </div>

        <div class="value-item">
            <div class="value-inner">
                <div class="value-number">
                    <img src="@/assets/images/three-vector.svg" alt="Number 3" class="value-number-img">
                </div>
                <div class="value-content">
                    <h3 class="value-heading">{{ $t('about.valueSection.items.heading3') }}</h3>
                    <p class="value-description">{{ $t('about.valueSection.items.description3') }}</p>
                </div>
            </div>
        </div>

        <div class="value-item">
            <div class="value-inner">
                <div class="value-number">
                    <img src="@/assets/images/four-vector.svg" alt="Number 4" class="value-number-img">
                </div>
                <div class="value-content">
                    <h3 class="value-heading">{{ $t('about.valueSection.items.heading4') }}</h3>
                    <p class="value-description">{{ $t('about.valueSection.items.description4') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.values-section {
    background-color: $color-white;
    margin: 0 auto;
    max-width: 1170px;
    margin-bottom: 211px;

    .values-title {
        font-size: 35px;
        font-weight: 500;
        text-align: center;
        color: $color-text;
        margin-bottom: 121px;

        @media (max-width: 1005px) {
            font-size: 30px;
        }

        @media (max-width: 645px) {
            font-size: 24px;
            margin-bottom: 55px;
        }
    }

    .value-item {
        display: flex;
        margin-bottom: 144px;

        @media (max-width: 645px) {
            margin-bottom: 25px;
            margin-left: -50px;
        }

        .value-inner {
            display: flex;
            gap: 60px;
            align-items: flex-start;
            width: 100%;

            @media (max-width: 645px) {
                gap: 30px;
            }

            .value-number {
                display: flex;
                justify-content: flex-end;
                min-width: 100px;
                text-align: right;

                img {
                    @media (max-width: 645px) {
                        max-width: 40px;
                    }
                }
            }

            .value-content {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                flex-grow: 1;
                text-align: left;

                .value-heading {
                    font-size: 55px;
                    font-weight: 500;
                    color: $color-primary;
                    margin-bottom: 46px;

                    @media (max-width: 1465px) {
                        font-size: 35px;
                    }

                    @media (max-width: 645px) {
                        font-size: 22px;
                        margin-bottom: 10px;
                    }
                }

                .value-description {
                    font-size: 35px;
                    font-weight: 400;
                    color: $color-text;

                    @media (max-width: 1465px) {
                        font-size: 25px;
                    }

                    @media (max-width: 645px) {
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media (max-width: 1465px) {
        width: 80%;
        margin-right: 0;
    }

    @media (max-width: 645px) {
        width: 100%;
        margin-bottom: 130px;
    }
}
</style>