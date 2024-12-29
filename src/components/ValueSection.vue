<template>
    <section class="values-section">
        <h2 class="values-title">{{$t ('about.valueSection.title')}}</h2>

        <div class="value-item">
            <div class="value-inner">
                <div class="value-number">
                    <img src="@/assets/images/one-vector.svg" alt="Number 1" class="value-number-img">
                </div>
                <div class="value-content">
                    <h3 class="value-heading">{{$t ('about.valueSection.items.heading1')}}</h3>
                    <p class="value-description">{{$t ('about.valueSection.items.description1')}}</p>
                </div>
            </div>
        </div>

        <div class="value-item">
            <div class="value-inner">
                <div class="value-number">
                    <img src="@/assets/images/two-vector.svg" alt="Number 2" class="value-number-img">
                </div>
                <div class="value-content">
                    <h3 class="value-heading">{{$t ('about.valueSection.items.heading2')}}</h3>
                    <p class="value-description">{{$t ('about.valueSection.items.description2')}}</p>
                </div>
            </div>
        </div>

        <div class="value-item">
            <div class="value-inner">
                <div class="value-number">
                    <img src="@/assets/images/three-vector.svg" alt="Number 3" class="value-number-img">
                </div>
                <div class="value-content">
                    <h3 class="value-heading">{{$t ('about.valueSection.items.heading3')}}</h3>
                    <p class="value-description">{{$t ('about.valueSection.items.description3')}}</p>
                </div>
            </div>
        </div>

        <div class="value-item">
            <div class="value-inner">
                <div class="value-number">
                    <img src="@/assets/images/four-vector.svg" alt="Number 4" class="value-number-img">
                </div>
                <div class="value-content">
                    <h3 class="value-heading">{{$t ('about.valueSection.items.heading4')}}</h3>
                    <p class="value-description">{{$t ('about.valueSection.items.description4')}}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
    .values-section {
    background-color: #fff;
    margin: 0 auto;
    max-width: 1170px;
    margin-bottom: 211px;
}

.values-title {
    font-size: 35px;
    font-weight: 500;
    text-align: center;
    color: #4F4F4F;
    margin-bottom: 121px;
}

.value-item {
    display: flex;
    margin-bottom: 144px;
}

.value-inner {
    display: flex;
    gap: 60px;
    align-items: flex-start;
    width: 100%;
}

.value-number {
    display: flex;
    justify-content: flex-end;
    min-width: 100px;
    text-align: right;
}


.value-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    text-align: left;
}

.value-heading {
    font-size: 55px;
    font-weight: 500;
    color: #8CC5F9;
    margin-bottom: 46px;
}

.value-description {
    font-size: 35px;
    font-weight: 400;
    color: #4F4F4F;
}

@media (max-width: 1465px) {
    .values-section {
        width: 80%;
    }
}

@media (max-width: 1465px) {
    .value-heading {
        font-size: 35px;
    }

    .value-description {
        font-size: 25px;
    }

    .values-section {
        margin-right: 0;
    }

}

@media (max-width: 1005px) {
    .values-title {
        font-size: 30px;
    }
}

@media (max-width: 645px) {
    .values-title {
        font-size: 24px;
        margin-bottom: 55px;
    }
    
    .value-heading {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .values-section {
        width: 100%;
    }

    .value-item {
        margin-bottom: 25px;
        margin-left: -50px;
    }

    .value-description {
        font-size: 12px;

    }

    .value-number img {
        max-width: 40px;
    }

    .value-inner {
        gap: 30px;
    }

    .values-section {
        margin-bottom: 130px;
    }
}
</style>