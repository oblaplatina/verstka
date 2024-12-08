<template>
    <section class="team-container">
        <h2 class="team-title">Meet the team</h2>
        <div class="team-inner">
            <div class="team-nav">
                <nav class="team-nav-title">
                    <ul class="team-nav-list">
                        <li v-for="tab in tabs" :key="tab" :class="['team-nav-item', { active: activeTab === tab }]"
                            @click="selectTeam(tab)">
                            {{ tab }}
                        </li>
                    </ul>
                </nav>
            </div>
            <div :id="'team-cards-' + activeTab.toLowerCase()" class="team-cards">
                <div v-for="member in visibleMembers" :key="member.id" class="profile-card">
                    <div class="profile-card-content profile-card-front">
                        <img :src="member.image" alt="" class="profile-card-ava" />
                        <h3 class="profile-card-title">{{ member.name }}</h3>
                        <p class="profile-card-subtitle">{{ member.title }}</p>
                        <p class="profile-card-view" @click="openModal(member)">View profile</p>
                    </div>
                    <div v-if="member.backImage" class="profile-card-content profile-card-back">
                        <img :src="member.backImage" alt="" class="profile-card-ava-back" />
                        <h3 class="profile-card-title-back">{{ member.name }}</h3>
                        <p class="profile-card-view-back" @click="openModal(member)">View profile</p>
                    </div>
                </div>
            </div>
            <p v-show="true" id="load-more-btn" class="load-more" @click="loadMoreCards">Load more</p>
            <div v-if="modalVisible" id="profile-modal" class="modal" @click.self="closeModal">
                <div class="modal-content">
                    <div class="modal-close">
                        <img src="@/assets/images/close-icon-modal.svg" alt="Close" class="close-btn"
                            @click="closeModal" />
                    </div>
                    <div class="modal-body">
                        <div class="modal-image">
                            <img :src="selectedMember.fullImage || selectedMember.image" loading="lazy"
                                alt="Profile Image" />
                        </div>
                        <div class="modal-info">
                            <h3 class="modal-title">{{ selectedMember.name }}</h3>
                            <p v-if="selectedMember.description1" class="modal-description">
                                {{ selectedMember.description1 }}
                            </p>
                            <p v-if="selectedMember.description2" class="modal-description">
                                {{ selectedMember.description2 }}
                            </p>
                            <div class="modal-socials">
                                <a v-for="(url, platform) in selectedMember.social" :key="platform" :href="url"
                                    class="social-icon" target="_blank">
                                    <img :src="socialIcons[platform]" :alt="platform" />
                                </a>
                            </div>
                            <blockquote v-if="selectedMember.quote" class="modal-quote">{{ selectedMember.quote }}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            tabs: ["Management", "Product", "Marketing", "Design", "Development"],
            activeTab: "Management",
            modalVisible: false,
            selectedMember: null,
            membersPerPage: 8,
            currentPage: 1,
            teamMembers: {
                Management: [
                    {
                        id: 1,
                        name: "Vicky Russ",
                        title: "CTO FOR APPLICATION DEVELOPMENT",
                        image: require("@/assets/images/vicky-russ.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/vicky-russ",
                            instagram: "https://instagram.com/vicky.russ",
                            linkedin: "https://linkedin.com/in/vicky-russ",
                        },
                    },
                    {
                        id: 2,
                        name: "Rot Mitt",
                        title: "CTO FOR COMMUNICATIONS NETWORKS",
                        image: require("@/assets/images/rot-mitt.jpg"),
                        backImage: require("@/assets/images/rot-mitt-back.jpg"),
                        fullImage: require("@/assets/images/rot-mitt-full-size.webp"),
                        description1: "Consequuntur est accusantium et nemo. Similique quo atque ut eligendi aspernatur modi ut nemo dolorem.",
                        description2: "Quod suscipit et sapiente et explicabo itaque molestiae laudantium architecto.",
                        quote: "“Similique quo atque ut eligendi aspernatur modi.”",
                        social: {
                            medium: "https://medium.com/rot-mitt",
                            instagram: "https://instagram.com/rot.mitt",
                            linkedin: "https://linkedin.com/in/rot-mitt",
                        },
                    },
                    {
                        id: 3,
                        name: "Laura Hanz",
                        title: "CEO",
                        image: require("@/assets/images/laura-hanz.jpg"),
                        backImage: require("@/assets/images/laura-hanz-back.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/laura-hanz",
                            instagram: "https://instagram.com/laura.hanz",
                            linkedin: "https://linkedin.com/in/laura-hanz",
                        },
                    },
                    {
                        id: 4,
                        name: "Elena Wood",
                        title: "DEPUTY CHIEF EXECUTIVE OFFICER",
                        image: require("@/assets/images/elena-wood.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/elena-wood",
                            instagram: "https://instagram.com/elena.wood",
                            linkedin: "https://linkedin.com/in/elena-wood",
                        },
                    },
                    {
                        id: 5,
                        name: "Aman Nais",
                        title: "CTO FOR APPLICATION DEVELOPMENT",
                        image: require("@/assets/images/aman-nais.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/aman-nais",
                            instagram: "https://instagram.com/aman.nais",
                            linkedin: "https://linkedin.com/in/aman-nais",
                        },
                    },
                    {
                        id: 6,
                        name: "Francisca Lemon",
                        title: "MANAGING DIRECTOR",
                        image: require("@/assets/images/francisca-lemon.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/francisca-lemon",
                            instagram: "https://instagram.com/francisca.lemon",
                            linkedin: "https://linkedin.com/in/francisca-lemon",
                        },
                    },
                    {
                        id: 7,
                        name: "Reine Tais",
                        title: "MANAGING DIRECTOR",
                        image: require("@/assets/images/reine-tais.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/reine-tais",
                            instagram: "https://instagram.com/reine.tais",
                            linkedin: "https://linkedin.com/in/reine-tais",
                        },
                    },
                    {
                        id: 8,
                        name: "Olgur Monz",
                        title: "PRODUCT DESIGNER",
                        image: require("@/assets/images/olgur-monz.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/olgur-monz",
                            instagram: "https://instagram.com/olgur.monz",
                            linkedin: "https://linkedin.com/in/olgur-monz",
                        },
                    },
                    {
                        id: 9,
                        name: "Reine Tais",
                        title: "MANAGING DIRECTOR",
                        image: require("@/assets/images/reine-tais.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/reine-tais",
                            instagram: "https://instagram.com/reine.tais",
                            linkedin: "https://linkedin.com/in/reine-tais",
                        },
                    },
                    {
                        id: 10,
                        name: "Olgur Monz",
                        title: "PRODUCT DESIGNER",
                        image: require("@/assets/images/olgur-monz.jpg"),
                        description1: "",
                        description2: "",
                        quote: "",
                        social: {
                            medium: "https://medium.com/olgur-monz",
                            instagram: "https://instagram.com/olgur.monz",
                            linkedin: "https://linkedin.com/in/olgur-monz",
                        },
                    },
                ],
                Product: [

                ],
                Marketing: [

                ],
                Design: [

                ],
                Development: [

                ],
            },
            socialIcons: {
                medium: require("@/assets/images/medium-modal-icon.svg"),
                instagram: require("@/assets/images/instagram-modal-icon.svg"),
                linkedin: require("@/assets/images/linkedin-modal-icon.png"),
            },
        };
    },
    computed: {
        visibleMembers() {
            return this.teamMembers[this.activeTab].slice(0, this.membersPerPage * this.currentPage);
        },
        hasMoreMembers() {
            return this.visibleMembers.length < this.teamMembers[this.activeTab].length;
        }
    },
    methods: {
        selectTeam(tab) {
            this.activeTab = tab;
            this.currentPage = 1;
        },
        openModal(member) {
            this.selectedMember = member;
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false;
            this.selectedMember = null;
        },
        loadMoreCards() {
            this.currentPage++;
        },
    },
    mounted() {
        Object.values(this.teamMembers).flat().forEach(member => {
            const img = new Image();
            img.src = member.image;
            if (member.backImage) {
                const backImg = new Image();
                backImg.src = member.backImage;
            }
            Object.values(member.social).forEach(url => {
                const socialImg = new Image();
                socialImg.src = this.socialIcons[Object.keys(member.social).find(key => member.social[key] === url)];
            });
        });
    },
};
</script>

<style scoped>
.team-container {
    margin-bottom: 102px;
}

.team-title {
    text-align: center;
    margin-bottom: 58px;
    font-size: 35px;
    font-weight: 500;
    line-height: 1.4;
    color: #0b132a;
}

.team-nav-title {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 81px;
}

.team-nav-list {
    display: flex;
    gap: 0 43px;
}

.team-nav-item {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    color: #4f4f4f;
    position: relative;
    cursor: pointer;
}

.team-nav-item.active {
    color: #8cc5f9;
}

.team-nav-item.active::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #8cc5f9;
}

.team-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 58px;
    justify-content: center;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
}

.profile-card {
    border: 1px solid #8cc5f9;
    border-radius: 8px;
    text-align: center;
    width: 261px;
    height: 309px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: transform 0.3s ease;
}

.profile-card-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
}

.profile-card-title-back {
    position: absolute;
    bottom: 51px;
    left: 0;
    width: 100%;
    font-size: 22px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    color: #f5fafe;
}

.profile-card-view-back {
    position: absolute;
    bottom: 24px;
    left: 0;
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
    color: #bdbdbd;
    cursor: pointer;
}

.profile-card-front {
    z-index: 2;
}

.profile-card-back {
    opacity: 0;
    z-index: 1;
}

.profile-card:hover .profile-card-front {
    opacity: 0;
}

.profile-card:hover .profile-card-back {
    opacity: 1;
}

.profile-card-ava {
    border-radius: 50%;
    margin-top: 26px;
    margin-bottom: 19px;
}

.profile-card-title {
    font-size: 22px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.2;
    color: #8cc5f9;
    margin-bottom: 12px;
}

.profile-card-subtitle {
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.2;
    color: #bdbdbd;
    margin-bottom: 32px;
    overflow-wrap: break-word;
    margin-left: 29px;
    margin-right: 30px;
}

.profile-card-view {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    color: #bdbdbd;
    margin-bottom: 24px;
    margin-left: 73px;
    margin-right: 73px;
    cursor: pointer;
}

.load-more {
    font-size: 22px;
    font-weight: 400;
    line-height: 2.2;
    text-align: center;
    color: #828282;
}

.modal {
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 50px;
    border-radius: 44px;
    border: 4px solid #8cc5f9;
    display: flex;
    flex-direction: column;
    max-width: 70vw;
    width: 100%;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}

.modal-body {
    display: flex;
    flex-direction: row;
    gap: 58px;
    align-items: flex-start;
    flex-wrap: wrap;
}

.modal-image img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    flex-shrink: 0;
}

.modal-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 100px;
}

.modal-title {
    font-size: 44px;
    font-style: italic;
    font-weight: 700;
    text-align: left;
    color: #8cc5f9;
    margin-bottom: 24px;
}

.modal-description {
    font-size: 32px;
    font-weight: 400;
    text-align: left;
    color: #000000;
    margin-bottom: 75px;
}

.modal-socials {
    display: flex;
    gap: 12px;
    margin-top: 21px;
}

.social-icon img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-bottom: 60px;
}

.modal-quote {
    font-size: 32px;
    font-style: italic;
    font-weight: 300;
    line-height: 37.92px;
    text-align: left;
    color: #878abc;
}

@media (max-width: 1658px) {
    .modal-title {
        font-size: 35px;
    }

    .modal-description {
        font-size: 25px;
        margin-bottom: 35px;
    }

    .modal-socials {
        margin-top: 0;
    }

    .modal-socials img {
        margin-bottom: 30px;
    }

    .modal-quote {
        font-size: 25px;
        line-height: 1.2;
    }

    .modal-image {
        width: 40%;
    }

    .modal-info {
        margin-right: 50px;
    }

    .close-btn {
        width: 70%;
    }
}

@media (max-width: 1100px) {
    .modal-body {
        flex-direction: column;
        align-items: center;
    }

    .modal-image {
        width: 60%;
    }
}

@media (max-width: 660px) {
    .modal-body {
        gap: 10px;
    }
    
    .team-title {
        font-size: 25px;
    }

    .modal-body {
        align-items: flex-start;
    }

    .modal-image {
        width: 100%;
    }

    .team-nav-list {
        gap: 15px 25px;
        flex-wrap: wrap;
    }
    
    .modal-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .modal-description {
        font-size: 14px;
        margin-bottom: 15px;
    }

    .modal-socials img {
        margin-bottom: 15px;
        width: 80%;
        height: auto;
    }

    .modal-quote {
        font-size: 14px;
    }

    .modal-close {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .close-btn {
        height: auto;
        width: 7%;
    }

    .modal-content {
        padding: 30px;
    }
}
</style>
