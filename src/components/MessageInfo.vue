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
<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.message-info {
    margin-bottom: -100px;
    z-index: 2;
    position: relative;

    .message-info-container {
        display: flex;
        position: relative;
        background-color: $color-white;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        box-shadow: $color-shadow 5px 5px 5px -5px;
        border-radius: 10px;
        max-width: 1140px;

        &::before {
            content: "";
            position: absolute;
            top: 16px;
            left: 31px;
            right: 31px;
            bottom: -33px;
            background-color: $color-secondary;
            filter: blur(50px);
            border-radius: 10px;
            z-index: -1;
            opacity: 0.1;
            pointer-events: none;
        }

        .message-info-img {
            margin-left: 67px;
            margin-right: 62px;
        }

        .message-info-inner {
            display: flex;
            flex-direction: column;
            flex: 1;

            .message-info-title {
                font-size: 35px;
                font-weight: 500;
                line-height: 1.3;
                color: $color-secondary;
                margin-bottom: 20px;
                margin-top: 47px;
                margin-right: 148px;
            }

            .message-info-subtitle {
                font-size: 16px;
                font-weight: 400;
                line-height: 1.8;
                color: $color-text;
                margin-bottom: 47px;
            }
        }
    }

    @media (max-width: 1186px) {
        .message-info-container {
            .message-info-inner {
                flex: -1;

                .message-info-title {
                    font-size: 25px;
                    margin-right: 0;
                    max-width: 400px;
                }

                .message-info-subtitle {
                    font-size: 14px;
                }
            }
        }
    }

    @media (max-width: 900px) {
        .message-info-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            text-align: center;

            .message-info-img {
                flex: 0 0 auto;
                margin-right: 20px;
                margin-left: 0;
            }

            .message-info-inner {
                flex: 0 0 auto;
                text-align: left;
                max-width: 250px;

                .message-info-title {
                    font-size: 20px;
                }

                .message-info-subtitle {
                    font-size: 12px;
                    margin-bottom: 25px;
                }
            }
        }
    }

    @media (max-width: 438px) {
        .message-info-container {
            .message-info-inner {
                text-align: center;

                .message-info-title {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                .message-info-img {
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>