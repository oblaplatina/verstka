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

<style lang="scss" scoped>
.stat {
    .stat-container {
        position: relative;
        margin-bottom: 137.5px;

        .stat-content {
            height: 200px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            justify-content: space-between;
            margin-left: 71px;
            background-color: $color-white;
            box-shadow: $color-shadow 0px 5px 5px -5px;
            border-radius: $radius-base;
            z-index: 1;

            &::before {
                content: "";
                position: absolute;
                width: 90%;
                height: 50px;
                bottom: -25px;
                left: 90px;
                background-color: $color-secondary;
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

                &:not(:last-child)::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: -15px;
                    transform: translateY(-50%);
                    width: 2px;
                    height: 160%;
                    background-color: $color-bg-light;
                }

                p {
                    color: $color-secondary;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 1.4;
                }

                span {
                    color: $color-text;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 1.5;
                }
            }
        }
    }

    @media (max-width: $bp-1240) {
        .stat-container {
            .stat-content {
                margin: 0;

                &::before {
                    left: 40px;
                }

                .stat-item {
                    margin-left: 50px;
                }
            }
        }
    }

    @media (max-width: $bp-840) {
        .stat-container {
            margin-bottom: 95px;

            .stat-content {
                height: 130px;

                &::before {
                    left: 20px;
                }

                .stat-item {
                    gap: 15px;
                    margin-right: 0;

                    &:not(:last-child)::after {
                        height: 150%;
                    }

                    p {
                        font-size: 16px;
                    }

                    span {
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media (max-width: $bp-630) {
        .stat-container {
            .stat-content {
                .stat-item {
                    margin: 0 auto;

                    img {
                        width: 35px;
                        height: 36px;
                    }
                }
            }
        }
    }

    @media (max-width: $bp-470) {
        .stat-container {
            .stat-content {
                .stat-item {
                    flex-direction: column;
                    align-items: flex-start;

                    &:not(:last-child)::after {
                        height: 70%;
                        right: -20%;
                    }
                }
            }
        }
    }
}
</style>