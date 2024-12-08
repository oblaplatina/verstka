<template>
    <section class="best-products">
        <div class="products-shadow"></div>
        <div class="best-products-inner">
            <h2 class="section-best-products-title">Our best products</h2>
            <p class="section-best-product-subtitle">Ea voluptatem nobis nihil perspiciatis animi repellendus qui
                qui
                esse. Recusandae molestias praesentium hic odit quisquam quae ullam. At fugiat voluptatum voluptas
                saepe
                cupiditate iusto quisquam. Nobis incidunt voluptatem.</p>
            <div class="product-container">
                <div class="product-card">
                    <img src="@/assets/images/product-card-icon.svg" alt="" class="product-card-icon">
                    <h3 class="product-card-title">Odit sed accusantium</h3>
                    <p class="product-card-text">Omnis molestias animi magnam et unde nihil id. Architecto aut omnis
                        placeat. Blanditiis sapiente et et.</p>
                    <a href="#" class="product-card-button">More info</a>
                </div>
                <div class="product-card">
                    <img src="@/assets/images/product-card-icon.svg" alt="" class="product-card-icon">
                    <h3 class="product-card-title">Odit sed accusantium</h3>
                    <p class="product-card-text">Omnis molestias animi magnam et unde nihil id. Architecto aut omnis
                        placeat. Blanditiis sapiente et et.</p>
                    <a href="#" class="product-card-button">More info</a>
                </div>
                <div class="product-card">
                    <img src="@/assets/images/product-card-icon.svg" alt="" class="product-card-icon">
                    <h3 class="product-card-title">Odit sed accusantium</h3>
                    <p class="product-card-text">Omnis molestias animi magnam et unde nihil id. Architecto aut omnis
                        placeat. Blanditiis sapiente et et.</p>
                    <a href="#" class="product-card-button">More info</a>
                </div>
                <div class="product-card">
                    <img src="@/assets/images/product-card-icon.svg" alt="" class="product-card-icon">
                    <h3 class="product-card-title">Odit sed accusantium</h3>
                    <p class="product-card-text">Omnis molestias animi magnam et unde nihil id. Architecto aut omnis
                        placeat. Blanditiis sapiente et et.</p>
                    <a href="#" class="product-card-button">More info</a>
                </div>
                <div class="product-card">
                    <img src="@/assets/images/product-card-icon.svg" alt="" class="product-card-icon">
                    <h3 class="product-card-title">Odit sed accusantium</h3>
                    <p class="product-card-text">Omnis molestias animi magnam et unde nihil id. Architecto aut omnis
                        placeat. Blanditiis sapiente et et.</p>
                    <a href="#" class="product-card-button">More info</a>
                </div>
                <div class="product-card">
                    <img src="@/assets/images/product-card-icon.svg" alt="" class="product-card-icon">
                    <h3 class="product-card-title">Odit sed accusantium</h3>
                    <p class="product-card-text">Omnis molestias animi magnam et unde nihil id. Architecto aut omnis
                        placeat. Blanditiis sapiente et et.</p>
                    <a href="#" class="product-card-button">More info</a>
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
.best-products {
    display: flex;
    text-align: center;
    margin-bottom: 154px;
}

.products-shadow {
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0;
}

.best-products-inner {
    max-width: 1140px;
}

.products-shadow::before {
    content: '';
    position: absolute;
    top: -81px;
    left: 0;
    width: 100%;
    height: 70vh;
    z-index: -1;
    background: linear-gradient(180deg, #F8F8F8 -45.04%, rgba(248, 248, 248, 0) 88.56%);
}

.section-best-products-title {
    font-size: 35px;
    font-weight: 500;
    line-height: 1.4;
    color: #0B132A;
    margin-bottom: 20px;
}

.section-best-product-subtitle {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    color: #4F5665;
    margin-bottom: 80px;
    margin-left: 182px;
    margin-right: 182px;
}

.product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.product-card {
    background: #FFFFFF;
    padding: 20px 27px 37px 36px;
    border-radius: 24px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    max-width: 360px;
    text-align: left;
}

.product-card-icon {
    margin-bottom: 20px;
}

.product-card-title {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.7;
    color: #08090A;
    margin-bottom: 16px;
}

.product-card-text {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    color: #08090A;
    margin-bottom: 46.3px;
}

.product-card-button {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    color: #8CC5F9;
    border: 2px solid rgba(140, 197, 249, 1);
    border-radius: 47px;
    padding: 10px 30px;

}

.product-card-button:hover {
    background: rgba(135, 138, 188, 1);
    border: rgba(135, 138, 188, 1);
    color: #FFFFFF;
}

@media (max-width: 1186px) {

    .section-best-products-title {
        font-size: 25px;
    }

    .best-products-inner {
        margin-top: -50px;
    }

    .section-best-product-subtitle {
        font-size: 14px;
        margin-bottom: 40px;
        margin-left: 0;
        margin-right: 0;
    }

    .product-card-title {
        font-size: 16px;
    }

    .product-card-text {
        font-size: 16px;
    }

    .product-card-button {
        font-size: 14px;
    }
}

@media (max-width: 790px) {
    .product-card {
        flex: 0 1 calc(50% - 15px);
        max-width: 100%; 
    }
    
    .product-container{
        gap: 15px;
    }

    .best-products {
        margin-bottom: 90px;
    }
}

@media (max-width: 630px) {
    .section-best-products-title {
        font-size: 20px;
    }

    .section-best-product-subtitle {
        font-size: 12px;
        margin-bottom: 30px;
    }

    .product-card-title {
        font-size: 12px;
    }

    .product-card-text {
        font-size: 12px;
    }

    .product-card-button {
        font-size: 10px;
    }
}

@media (max-width: 470px) {
    .section-best-products-title {
        font-size: 25px;
    }

    .section-best-product-subtitle {
        font-size: 14px;
        margin-bottom: 40px;
        margin-left: 0;
        margin-right: 0;
    }

    .product-card {
        flex: 0 1 100%;
        max-width: 360px;
    }

    .product-card-title {
        font-size: 16px;
    }

    .product-card-text {
        font-size: 16px;
    }

    .product-card-button {
        font-size: 14px;
    }
}
</style>