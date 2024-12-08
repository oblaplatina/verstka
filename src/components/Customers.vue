<template>
    <section class="customers">
        <div class="customers-container">
            <div class="customers-inner">
                <h2 class="customers-title">Happy Customers</h2>
                <p class="customers-subtitle">
                    Unde fugit minus qui quisquam commodi sint repudiandae. Blanditiis consequuntur occaecati dolor qui
                    reprehenderit dolore.
                </p>
            </div>
        </div>
    </section>
    <section class="customers-card-slider">
        <div class="card-slider-wrapper">
            <div ref="slider" class="card-slider" @mousedown="startDraggingCard" @mouseleave="stopDraggingCard"
                @mouseup="stopDraggingCard" @mousemove="dragCard">
                <div v-for="(card, index) in cards" :key="index" class="card">
                    <img :src="card.image" alt="" class="avatar" />
                    <div class="card-title-ava">
                        <h3 class="card-title">{{ card.name }}</h3>
                        <p class="card-location">{{ card.location }}</p>
                    </div>
                    <p class="card-text">{{ card.text }}</p>
                </div>
            </div>
            <div ref="scrollbar" class="custom-scrollbar" @mousedown="clickScrollbar">
                <div ref="thumb" class="custom-scrollbar-thumb" @mousedown="startDraggingThumb"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isDraggingCard: false,
            isDraggingThumb: false,
            startX: 0,
            scrollLeft: 0,
            cards: [
                {
                    image: require("@/assets/images/julia-walls-ava.jpg"),
                    name: "Julia Walls",
                    location: "Warsaw, Poland",
                    text: "Labore recusandae illo sit quisquam. Sequi velit deserunt tempore delectus et. Odio impedit incidunt ratione debitis pariatur consequatur.",
                },
                {
                    image: require("@/assets/images/nie-chan-ava.jpg"),
                    name: "Nie Chan",
                    location: "Shanxi, China",
                    text: "Labore recusandae illo sit quisquam. Sequi velit deserunt tempore delectus et. Odio impedit incidunt ratione debitis pariatur consequatur.",
                },
                {
                    image: require("@/assets/images/alex-young-ava.jpg"),
                    name: "Alex Young",
                    location: "Seoul, South Korea",
                    text: "Labore recusandae illo sit quisquam. Sequi velit deserunt tempore delectus et. Odio impedit incidunt ratione debitis pariatur consequatur.",
                },
                {
                    image: require("@/assets/images/nina-torns-ava.jpg"),
                    name: "Niha Torns",
                    location: "Russia",
                    text: "Labore recusandae illo sit quisquam. Sequi velit deserunt tempore delectus et. Odio impedit incidunt ratione debitis pariatur consequatur.",
                },
            ],
        };
    },
    methods: {
        updateThumbPosition() {
            const slider = this.$refs.slider;
            const thumb = this.$refs.thumb;
            const scrollbar = this.$refs.scrollbar;

            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
            const scrollPercentage = slider.scrollLeft / maxScrollLeft;
            const thumbMaxPosition = scrollbar.offsetWidth - thumb.offsetWidth;
            thumb.style.left = `${scrollPercentage * thumbMaxPosition}px`;
        },
        startDraggingCard(e) {
            this.isDraggingCard = true;
            this.startX = e.pageX - this.$refs.slider.offsetLeft;
            this.scrollLeft = this.$refs.slider.scrollLeft;
        },
        stopDraggingCard() {
            this.isDraggingCard = false;
        },
        dragCard(e) {
            if (!this.isDraggingCard || this.isDraggingThumb) return;
            const x = e.pageX - this.$refs.slider.offsetLeft;
            const walk = (x - this.startX) * 1.5;
            this.$refs.slider.scrollLeft = this.scrollLeft - walk;
            this.updateThumbPosition();
        },
        startDraggingThumb(e) {
            this.isDraggingThumb = true;
            this.startX = e.pageX;
            this.scrollLeft = this.$refs.slider.scrollLeft;
            document.addEventListener("mousemove", this.dragThumb);
            document.addEventListener("mouseup", this.stopDraggingThumb);
        },
        dragThumb(e) {
            if (!this.isDraggingThumb) return;
            const thumb = this.$refs.thumb;
            const scrollbar = this.$refs.scrollbar;
            const slider = this.$refs.slider;

            const thumbMaxPosition = scrollbar.offsetWidth - thumb.offsetWidth;
            const delta = e.pageX - this.startX;
            const thumbMovePercentage = delta / thumbMaxPosition;
            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

            let newScrollLeft = this.scrollLeft + thumbMovePercentage * maxScrollLeft;
            newScrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft));

            slider.scrollLeft = newScrollLeft;

            const scrollPercentage = slider.scrollLeft / maxScrollLeft;
            thumb.style.left = `${scrollPercentage * thumbMaxPosition}px`;
        },
        stopDraggingThumb() {
            this.isDraggingThumb = false;
            document.removeEventListener("mousemove", this.dragThumb);
            document.removeEventListener("mouseup", this.stopDraggingThumb);
        },
        clickScrollbar(e) {
            if (e.target === this.$refs.thumb) return;
            const scrollbar = this.$refs.scrollbar;
            const thumb = this.$refs.thumb;
            const slider = this.$refs.slider;

            const thumbMaxPosition = scrollbar.offsetWidth - thumb.offsetWidth;
            let clickPosition = e.pageX - scrollbar.offsetLeft - thumb.offsetWidth / 2;
            clickPosition = Math.max(0, Math.min(thumbMaxPosition, clickPosition));

            thumb.style.left = `${clickPosition}px`;

            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
            const scrollPercentage = clickPosition / thumbMaxPosition;
            slider.scrollLeft = scrollPercentage * maxScrollLeft;
        },
    },
};
</script>
<style>
.customers {
    display: flex;
}

.customers-container {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 48px;
}

.customers-inner {
    text-align: center;
}

.customers-title {
    font-size: 35px;
    font-weight: 500;
    line-height: 1.4;
    color: #0B132A;
    margin-bottom: 24px;
}

.customers-subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: #4F5665;
    margin-bottom: 48px;
    max-width: 550px;
}

.customers-card-slider {
    text-align: center;
    margin: 0 auto;
    width: 90vw;
    transform: translateX(-10%);
}

.card-slider {
    display: flex;
    position: relative;
    width: auto;
    overflow-x: hidden;
    scroll-behavior: auto;
    margin-bottom: 186px;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.card-slider,
.card {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.card-slider::-webkit-scrollbar {
    display: none;
}

.card {
    border-radius: 10px;
    border: 2px solid rgba(140, 197, 249, 1);
    padding: 30px;
    max-width: 400px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-left: 50px;
    margin-right: 50px;
    flex-shrink: 0;
    scroll-snap-align: start;
    box-sizing: content-box;
}

.avatar {
    max-width: 50px;
    max-height: 50px;
    object-fit: cover;
    margin-right: 20px;
}

.card-title-ava {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.card-title {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.6;
    color: #0B132A;
}

.card-location {
    font-size: 14px;
    font-weight: 400;
    line-height: 2.1;
    color: #4F5665;
}

.card-text {
    font-size: 16px;
    font-weight: 400;
    color: #0B132A;
    line-height: 1.8;
    margin-top: 8px;
}

.card-slider-wrapper {
    position: relative;
    margin-bottom: 72px;
}

.custom-scrollbar {
    position: absolute;
    bottom: -72px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 11px;
    background-color: rgba(245, 250, 254, 1);
    border-radius: 45px;
    overflow: hidden;
}

.custom-scrollbar-thumb {
    height: 100%;
    width: 45px;
    background-color: rgba(140, 197, 249, 1);
    border-radius: 45px;
    position: relative;
}

@media (max-width: 1186px) {
    .customers-title {
        font-size: 25px;
    }

    .customers-subtitle {
        font-size: 14px;
        margin-bottom: 0;
    }
}

@media (max-width: 780px) {
    .customers-subtitle {
        margin-left: 0;
    }

    .custom-scrollbar {
        bottom: -55px;
    }
}

@media (max-width: 575px) {
    .avatar {
        width: 35px;
        height: 35px;
    }

    .card-title {
        font-size: 16px;
    }

    .card-location {
        font-size: 12px;
    }

    .card-text {
        font-size: 14px;
    }

    .card {
        max-width: 200px;
        padding: 15px;
    }
}
</style>