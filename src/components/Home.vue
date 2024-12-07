<template>
  <Header @open-pop="PopUpActive = true"></Header>
  <div class="hero">
    <div class="hero_main">
      <div class="hero_content">
        <div class="hero_left_side">
          <h1>Get legally married online in US</h1>
          <h6>We've helped thousands of couples all around the world get their legal US marriage certificate available in 50 states of us and 123 countries.</h6>
          <div class="hero_btns">
            <BlacButton @openContact="openModalCont"><slot>Get married</slot></BlacButton>
            <WhiteButton @click="PopUpActive = true"><slot>Contact Us</slot></WhiteButton>
          </div>
          <div class="google_reviews">
            <img src="@/assets/images/Google-Reviews-transparent-2%201.png" alt="Google Reviews transparent">
            <h4>Exellent 4.9 out of 5</h4>
          </div>
        </div>
        <div class="hero_right_side">
          <img src="@/assets/images/hero_image.png" alt="logo">
        </div>
      </div>
      <div class="hero_utp">
        <div class="utp">
          <p>2000+ couple</p>
        </div>
        <div class="utp">
          <p>from 37 countries</p>
        </div>
        <div class="utp">
          <p>100% online</p>
        </div>
<!--        <div class="utp">-->
<!--          <p>Easy and affordable</p>-->
<!--        </div>-->
      </div>
    </div>
  </div>
  <Video :videos="videoProps"></Video>
  <Services :services="servicesProps"></Services>
<!--  <Steps></Steps>-->
  <StepTwo></StepTwo>
<!--  <div class="second_block">-->
<!--    <div class="second_block_main">-->
<!--      <div class="second_block_left">-->
<!--        <div class="second_left_text">-->
<!--          <h3>Experience the Magic of Online Weddings, Anytime, Anywhere!</h3>-->
<!--          <h6>Celebrate your love story with our seamless online wedding ceremonies. Enjoy a personalized experience that connects you and your loved ones, no matter the distance.</h6>-->
<!--        </div>-->
<!--        <div class="second_left_shape">-->
<!--          <div class="shape">-->
<!--            <img src="@/assets/images/icon_why_.png" alt="icon">-->
<!--            <h5>Why Online?</h5>-->
<!--            <p>Convenience, flexibility, and a unique way to say 'I do' together.</p>-->
<!--          </div>-->
<!--          <div class="shape">-->
<!--            <img src="@/assets/images/icon_promise.png" alt="icon">-->
<!--            <h5>Our Promise</h5>-->
<!--            <p>Creating unforgettable moments with love and joy, wherever you are.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="second_block_right">-->
<!--        <img src="@/assets/images/photo_change.png" alt="photo">-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="third_block">-->
<!--    <div class="third_block_main">-->
<!--      <h3>Experience Unforgettable Online Wedding Ceremonies Tailored Just for You</h3>-->
<!--      <div class="third_block_shapes">-->
<!--        <div class="third_shape">-->
<!--          <img src="@/assets/images/icon_wedding.png" alt="icon">-->
<!--          <h4>Crafting Beautiful Moments with Our Unique Virtual Wedding Services</h4>-->
<!--          <p>Our services are designed to create a memorable and personalized online wedding experience.</p>-->
<!--          <div class="third_link"><p>Learn More</p><img src="@/assets/images/chevron-right.svg"></div>-->
<!--        </div>-->
<!--        <div class="third_shape">-->
<!--          <img src="@/assets/images/icon_docs.png" alt="icon">-->
<!--          <h4>Comprehensive Packages to Suit Every Couple's Unique Wedding Vision</h4>-->
<!--          <p>From intimate elopements to grand virtual celebrations, we have you covered.</p>-->
<!--          <div class="third_link"><p>Sign Up</p><img src="@/assets/images/chevron-right.svg"></div>-->
<!--        </div>-->
<!--        <div class="third_shape">-->
<!--          <img src="@/assets/images/icon_steps.png" alt="icon">-->
<!--          <h4>Step-by-Step Guidance for a Seamless Online Wedding Experience</h4>-->
<!--          <p>We walk you through every stage, ensuring your day is perfect.</p>-->
<!--          <div class="third_link"><p>Get Started</p><img src="@/assets/images/chevron-right.svg"></div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="exellence_block">
    <div class="exellence_main">
      <div class="left_side_exellence">
        <p>Excellence</p>
        <h3>Your Dream Wedding, Effortlessly Online</h3>
        <h6>Our online wedding ceremonies bring your vision to life, no matter where you are. Experience the joy of saying 'I do' in a modern, personalized way.</h6>
        <div class="left_side_exellence_utps">
          <div class="left_side_exellence_utps_utp">
            <img src="@/assets/images/Relume.png" alt="icon">
            <p>Convenience: Celebrate from anywhere, anytime with ease.</p>
          </div>
          <div class="left_side_exellence_utps_utp">
            <img src="@/assets/images/Relume.png" alt="icon">
            <p>Customization: Tailor your ceremony to reflect your love.</p>
          </div>
          <div class="left_side_exellence_utps_utp">
            <img src="@/assets/images/Relume.png" alt="icon">
            <p>Affordability: Enjoy a beautiful ceremony without breaking the bank.</p>
          </div>
        </div>
        <WhiteButton><slot>Sign Up</slot></WhiteButton>
      </div>
      <div class="right_side_exellence">
        <img src="@/assets/images/Placeholder%20Image.png" alt="icon">
      </div>
    </div>
  </div>
  <TableBlock></TableBlock>
  <Cases :casesData="casesProps"></Cases>
  <RewievsPage :reviews="reviewsProps"></RewievsPage>
  <div class="price">
    <div class="price_main">
      <div class="price_heead">
        <h3>Pricing Plans</h3>
        <h6>Choose the perfect plan for your wedding ceremony.</h6>
      </div>
      <div class="price_block">
        <div class="left_price_block">
          <div class="price_shape">
            <div class="general_price_head">
              <h5>The Base Package</h5>
              <h2>$500</h2>
            </div>
            <div class="price_line"></div>
            <div class="general_price_includes">
              <p>includes:</p>
              <ul>
                <li>100% Satisfaction Guarantee</li>
                <li>Unlimited consultation leading up to your day</li>
                <li>One Digital Copy of Marriage certificate</li>
                <li>Wedding Ceremony with Experienced Officiant</li>
                <li>One Hardcopy of Marriage Certificate</li>
                <li>Video Recording of Your Ceremony</li>
                <li>Cloud Storage of Your Video Recording</li>
                <li>Government Processing Fee is included</li>
                <li>2 Witnesses</li>
                <li>Get a Full Refund if You Change Your Mind</li>
              </ul>
            </div>
            <BlacButton><slot>Get Started</slot></BlacButton>
          </div>
        </div>
        <div class="right_price_block">
          <div class="price_shape">
            <div class="general_price_head">
              <h5>Add-Ons</h5>
              <h2>$50</h2>
            </div>
            <div class="price_line"></div>
            <div class="general_price_includes">
              <p>includes:</p>
              <ul>
                <li>100% Satisfaction Guarantee</li>
                <li>Unlimited consultation leading up to your day</li>
              </ul>
            </div>
          </div>
          <div class="price_shape">
            <div class="general_price_head">
              <h5>Add-Ons</h5>
              <h2>$50</h2>
            </div>
            <div class="price_line"></div>
            <div class="general_price_includes">
              <p>includes:</p>
              <ul>
                <li>100% Satisfaction Guarantee</li>
                <li>Unlimited consultation leading up to your day</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="faq">
    <div class="faq_main">
      <div class="faq_header">
        <img src="@/assets/images/faq.png" alt="icon">
        <h3>FAQs</h3>
        <h6>Find answers to your most pressing questions about our online wedding ceremonies.</h6>
      </div>
      <div class="quests_answers">
        <div class="quest_answ" v-for="quest in faq" :key="quest.id" @click="changeFaq(quest.id)">
          <div class="quest">
            <h6>{{ quest.question }}</h6>
            <h6 :class="{activePlus: faqItem === quest.id}">+</h6>
          </div>
          <div class="answer" :class="{activeFaq: faqItem === quest.id}">
            <p>{{ quest.answer }}</p>
          </div>
        </div>
      </div>
      <div class="text_btn">
        <h4>Still have questions?</h4>
        <h6>We're here to help!</h6>
        <WhiteButton @click="PopUpActive = true"><slot>Contact</slot></WhiteButton>
      </div>
    </div>
  </div>
  <ScrollText></ScrollText>
  <Footer></Footer>
  <PopUp :isActive="PopUpActive" @close-pop="closePop"></PopUp>
  <ModalContact :isActive="modalContact" @closePop="closeModalPop"></ModalContact>
  <CookieBanner @accept="acceptCookie" @decline="declineCookie" :isActive="cookies"></CookieBanner>
</template>

<script>
import Header from "@/components/ui_components/Header.vue";
import BlacButton from "@/components/ui_components/BlacButton.vue";
import WhiteButton from "@/components/ui_components/WhiteButton.vue";
import Video from "@/components/ui_components/Video.vue";
import Services from "@/components/ui_components/Services.vue";
import Steps from "@/components/ui_components/Steps.vue";
import TableBlock from "@/components/ui_components/TableBlock.vue";
import Cases from "@/components/ui_components/Cases.vue";
import ScrollText from "@/components/ui_components/ScrollText.vue";
import Footer from "@/components/ui_components/Footer.vue";
import PopUp from "@/components/ui_components/PopUp.vue";
import StepTwo  from "@/components/ui_components/StepTwo.vue"
import ModalContact from "@/components/ui_components/ModalContact.vue";
import CookieBanner from "@/components/ui_components/CookieBanner.vue";
import RewievsPage from "@/components/ui_components/RewievsPage.vue";
import axios from "axios";
export default {
  components: {Header, BlacButton, WhiteButton, Video, Services, Steps, TableBlock, Cases, ScrollText, Footer, PopUp, StepTwo, ModalContact, CookieBanner, RewievsPage},
  data() {
    return {
      faq: [
        {
          id: 1,
          question: "What is Altar?",
          answer: 'Altar is the pioneer in online marriage, making it possible for couples worldwide to get legally married anytime, 24/7. We are on a mission to disrupt the traditional wedding industry—bringing the aisle online for 21st-century couples, regardless of their nationality, sexuality, or physical location.'
        },
        {
          id: 2,
          question: 'What is online wedding?',
          answer: 'An online wedding actually means a wedding held virtually through online means. \n' +
              'The wedding couples will go through a web-conference wedding ceremony (such as Zoom), which will be officiated by a competent authority to ensure every requirement of the marriage has been met. \n' +
              'The marriage certificate will be signed digitally. Digital signatures are as legally binding as paper signatures. \n' +
              'After the online wedding ceremony, you will receive one digital and one hardcopy of the Marriage Certificate as your proof of the marriage. \n'
        },
        {
          id: 3,
          question: 'Is online marriage legal?',
          answer: 'Yes, it is! When the pandemic hit our lives in 2020, online marriage became fully legal in the US through the state of Utah.\n' +
              '\n' +
              'To ensure every online wedding is legally recognized, we follow three key steps to complete the registration process:\n' +
              '1. Obtain an official marriage license for the couple.\n' +
              '2. Conduct a valid wedding ceremony in accordance with legal requirements.\n' +
              '3. Register the marriage with the appropriate authorities for official documentation.\n',
        },
        {
          id: 4,
          question: 'What is requirements of an online marriage?',
          answer: 'The good news is that the requirements of an online virtual marriage are minimal. \n' +
              'Any consenting adult who meets the following criteria can get married online:\n' +
              '\n' +
              '  1.  18 years of age or older,\n' +
              '  2.  Single and not currently married, and\n' +
              '  3.  Has not been divorced in the past 60 days.\n' +
              '\n' +
              'All that’s required is a valid government ID, a webcam, and a reliable WIFI\n'
        },
        {
          id: 5,
          question: 'Do I need to be US citizen?',
          answer: 'Not at all! Couples of any nationality can legally get married in the United States.\n' +
              '\n' +
              'International couples may also want to obtain an apostille or authentication for their marriage certificate. An apostille is a special certification issued by the Secretary of State or the Office of the Lieutenant Governor, allowing a legal document issued in one country to be recognized in another.\n'
        },
        {
          id: 6,
          question: 'My partner and I are staying apart in different countries. Can we still get married online legally?',
          answer: 'Yes! We’ve successfully and legally married thousands of couples where one partner is in one country and the other is thousands of miles away!\n'
        },
        {
          id: 7,
          question: 'What’s your difference from others?',
          answer: 'We are online marriage portal is the only one of its kind in the world. We can provide 2 witnesses with no charge, government marriage license is included in the price, etc. Our couple loves us and you will too.'
        }
      ],
      faqItem: null,
      PopUpActive: false,
      modalContact: false,
      cookies: false,
      cookiesStatus: null,
      videoProps: [],
      casesProps: [],
      reviewsProps: [],
      servicesProps: []
    }
  },
  methods: {
    changeFaq(id) {
      if (this.faqItem === id) {
        this.faqItem = null
      } else {
        this.faqItem = id
      }
    },
    async getData() {
      try {
        const response = await axios.get('api/getData')
        this.videoProps = response.data.video.data;
        this.casesProps = response.data.cases.data;
        this.reviewsProps = response.data.reviews.data;
        this.servicesProps = response.data.servises.data;
      } catch (error) {
        console.log(error)
      }
    },
    closePop(value) {
      this.PopUpActive = value
    },
    openModalCont() {
      this.modalContact = true
    },
    closeModalPop() {
      this.modalContact = false
    },
    acceptCookie() {
      this.cookies = false;
      this.cookiesStatus = 'Accept'
      console.log('Собираем куки')
    },
    declineCookie() {
      this.cookies = false;
      this.cookiesStatus = 'Decline'
      console.log('Не собираем куки')
    },
    launchGoogleAnalitics() {
      if (this.cookies === 'Accept') {
        console.log('Тут будет код Гугла')
      } else if (this.cookies === 'Decline') {
        return console.log('Куки не собираем');
      }
    },
    cookiesData() {
      setTimeout(() => {
        this.cookies = true;
      }, 2000)
    }
  },
  async mounted() {
    this.cookiesData();
    await this.getData();
  },
  watch: {
    cookiesStatus(newValue) {
      if (newValue) {
        this.launchGoogleAnalitics();
      }
    }
  }
}
</script>

<style scoped>
.hero {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 0;
}
.hero_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.hero_content {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
}
.hero_left_side {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.hero_btns {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.google_reviews {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}
.google_reviews img {
  height: 66px;
  object-fit: contain;
}
.google_reviews h4 {
  font-weight: 300;
}
.hero_right_side {
  width: 100%;
}
.hero_right_side img {
  width: 100%;
}
.hero_utp {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
}
.utp {
  box-sizing: border-box;
  padding: 8px 18px;
  background: var(--shape-color);
  border-radius: 16px;
}
.second_block {
  width: 100%;
  display: flex;
  padding: 40px 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}
.second_block_main {
  width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;
}
.second_block_left {
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: column;
}
.second_left_text {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.second_left_shape {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
}
.shape {
  box-sizing: border-box;
  padding: 12px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: var(--shape-color);
  border: 2px solid #fff;
  width: 100%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
}
.shape img {
  width: 64px;
}
.second_block_right {
  width: 100%;
  display: flex;
}
.second_block_right img {
  width: 100%;
  object-fit: contain;
}
.third_block {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
}
.third_block_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
}
.third_block_main h3 {
  text-align: center;
  width:70%;
}
.third_block_shapes {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 48px;
}
.third_shape {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background: var(--shape-color);
  border: 2px solid #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  gap: 24px;
}
.third_shape img {
  width: 64px;
}
.third_link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0;
  transition: gap 300ms ease-in-out;
  box-sizing: border-box;
  padding: 4px 4px 4px 12px;
  border: 1px solid #333;
  border-radius: 50px;
  cursor: pointer;
}
.third_link img {
  width: 24px;
}
.third_link:hover {
  gap: 24px;
}
.exellence_block {
  width: 100%;
  box-sizing: border-box;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.exellence_main {
  width: 1280px;
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: center;
}
.left_side_exellence {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: start;
}
.left_side_exellence_utps {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
}
.left_side_exellence_utps_utp {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.left_side_exellence_utps_utp img {
  width: 16px;
  object-fit: contain;
}
.right_side_exellence {
  width: 100%;
}
.right_side_exellence img {
  width: 100%;
  object-fit: contain;
}
.price {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
}
.price_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
.price_heead {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}
.price_block {
  width: 1024px;
  display: flex;
  flex-direction: row;
  gap: 48px;
}
.left_price_block {
  width: 100%;
  display: flex;
}
.price_shape {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
  padding: 32px;
  border: 2px solid #fff;
  border-radius: 32px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  background: var(--shape-color);
}
.general_price_head {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.price_line {
  width: 100%;
  height: 1px;
  background: var(--text-color);
}
.general_price_includes {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.general_price_includes ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style-type: none;
  padding-left: 12px;
}
.general_price_includes ul li {
  background-image: url("@/assets/images/Check.png");
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: 24px 24px;
  padding-left: 32px;
}
.right_price_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.faq {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
}
.faq_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
.faq_header {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}
.quests_answers {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.quest_answ {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid #333333;
  overflow: hidden;
}
.quest {
  box-sizing: border-box;
  padding: 20px 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
}
.quest h6:nth-child(1) {
  font-weight: 700;
}
.quest h6:nth-child(2) {
  transform: rotate(0deg);
  transition: 300ms ease;
}
.answer {
  box-sizing: border-box;
  padding: 0 24px 0 24px;
  display: flex;
  max-height: 1px;
  transition: all 300ms ease-in-out;
}
.activeFaq {
  max-height: 1000px;
  padding: 0 24px 20px 24px;
}
.activePlus {
  transform: rotate(-45deg) !important;
}
.text_btn {
  width: 100%;
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media all and (max-width: 550px) {
  .hero {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 40px 10px;
  }
  .hero_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .hero_main h1 {
    text-align: center;
  }
  .hero_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .hero_left_side {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .hero_btns {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  .google_reviews {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
  .google_reviews img {
    height: 66px;
    object-fit: contain;
  }
  .google_reviews h4 {
    font-weight: 300;
  }
  .hero_right_side {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero_right_side img {
    width: 80%;
  }
  .hero_utp {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .utp {
    box-sizing: border-box;
    padding: 8px 18px;
    background: var(--shape-color);
    border-radius: 16px;
  }
  .second_block {
    width: 100%;
    display: flex;
    padding: 40px 10px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }
  .second_block_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .second_block_left {
    width: 100%;
    gap: 24px;
    display: flex;
    flex-direction: column;
  }
  .second_left_text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .second_left_shape {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  .shape {
    box-sizing: border-box;
    padding: 12px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: var(--shape-color);
    border: 2px solid #fff;
    width: 100%;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .shape img {
    width: 64px;
  }
  .second_block_right {
    width: 100%;
    display: flex;
  }
  .second_block_right img {
    width: 100%;
    object-fit: contain;
  }
  .third_block {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding:40px 10px;
    justify-content: center;
    align-items: center;
  }
  .third_block_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .third_block_main h3 {
    text-align: center;
    width:100%;
  }
  .third_block_shapes {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .third_shape {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    background: var(--shape-color);
    border: 2px solid #fff;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
    gap: 24px;
  }
  .third_shape img {
    width: 64px;
  }
  .third_link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
    transition: gap 300ms ease-in-out;
    box-sizing: border-box;
    padding: 4px 4px 4px 12px;
    border: 1px solid #333;
    border-radius: 50px;
    cursor: pointer;
  }
  .third_link img {
    width: 24px;
  }
  .third_link:hover {
    gap: 24px;
  }
  .exellence_block {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .exellence_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .left_side_exellence {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: start;
  }
  .left_side_exellence_utps {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
  }
  .left_side_exellence_utps_utp {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  .left_side_exellence_utps_utp img {
    width: 16px;
    object-fit: contain;
  }
  .right_side_exellence {
    width: 100%;
  }
  .right_side_exellence img {
    width: 100%;
    object-fit: contain;
  }
  .price {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 40px 10px;
    justify-content: center;
    align-items: center;
  }
  .price_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .price_heead {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .price_block {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .left_price_block {
    width: 100%;
    display: flex;
  }
  .price_shape {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    box-sizing: border-box;
    padding: 32px;
    border: 2px solid #fff;
    border-radius: 32px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    background: var(--shape-color);
  }
  .general_price_head {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .price_line {
    width: 100%;
    height: 1px;
    background: var(--text-color);
  }
  .general_price_includes {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .general_price_includes ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style-type: none;
    padding-left: 12px;
  }
  .general_price_includes ul li {
    background-image: url("@/assets/images/Check.png");
    background-repeat: no-repeat;
    background-position: 0 center;
    background-size: 24px 24px;
    padding-left: 32px;
  }
  .right_price_block {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .faq {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 40px 10px;
    justify-content: center;
    align-items: center;
  }
  .faq_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .faq_header {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .quests_answers {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .quest_answ {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid #333333;
    overflow: hidden;
  }
  .quest {
    box-sizing: border-box;
    padding: 20px 24px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
  }
  .quest h6:nth-child(1) {
    font-weight: 700;
  }
  .quest h6:nth-child(2) {
    transform: rotate(0deg);
    transition: 300ms ease;
  }
  .answer {
    box-sizing: border-box;
    padding: 0 24px 0 24px;
    display: flex;
    max-height: 1px;
    transition: all 300ms ease-in-out;
  }
  .activeFaq {
    max-height: 1000px;
    padding: 0 24px 20px 24px;
  }
  .activePlus {
    transform: rotate(-45deg) !important;
  }
  .text_btn {
    width: 100%;
    align-items: start;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>