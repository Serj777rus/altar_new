<template>
  <div class="footer">
    <div class="footer_main">
      <div class="links_footer">
        <img src="@/assets/images/Wedding_Rings_Gold_PNG_Clip_Art-2499%201.png" alt="logo" />
        <div class="links_block">
          <h6>Quick Links</h6>
          <div class="links">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Support Center</p>
            <p>Blog Posts</p>
            <p>FAQs</p>
          </div>
        </div>
        <div class="links_block">
          <h6>Follow Us</h6>
          <div class="links">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>YouTube</p>
          </div>
        </div>
        <div class="links_block">
          <h6>Stay Updated</h6>
          <div class="links">
            <p>Email Alerts</p>
            <p>New Features</p>
            <p>Special Offers</p>
            <p>Monthly News</p>
            <p>Exclusive Content</p>
          </div>
        </div>
      </div>
      <div class="news_seller_footer">
        <h6>Join</h6>
        <p>Join our newsletter to receive the latest updates and exclusive offers.</p>
        <form @submit.prevent="">
          <input type="email" id="email" name="email" placeholder="Your Email Here">
          <WhiteButton><slot>Join</slot></WhiteButton>
        </form>
        <p>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
      </div>
    </div>
    <div class="privacy_socials">
      <div class="terms">
        <p>© 2024 ALTAR. All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookie Settings</p>
      </div>
      <div class="socials">
        <img src="@/assets/images/Facebook.png" alt="logo" />
        <img src="@/assets/images/Instagram.png" alt="logo" />
        <img src="@/assets/images/X.png" alt="logo" />
        <img src="@/assets/images/Linkedin.png" alt="logo" />
        <img src="@/assets/images/Youtube.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
import WhiteButton from "@/components/ui_components/WhiteButton.vue";

export default {
  components: {WhiteButton}

}
</script>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
}
.footer_main {
  width: 1280px;
  display: flex;
  flex-direction: row;
  gap: 128px;
  box-sizing: border-box;
  padding: 48px;
  background: var(--shape-color);
}
.links_footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: start;
}
.links_footer img {
  object-fit: contain;
  width: 100%;
  margin-right: 40px;
}
.links_block {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  white-space: nowrap;
}
.links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.links_block h6 {
  font-weight: 500;
}
.links p {
  box-sizing: border-box;
  padding: 8px 0;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.links p:hover {
  text-decoration: underline;
}
.news_seller_footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.news_seller_footer h6 {
  font-weight: 500;
}
.news_seller_footer form {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
.news_seller_footer form input {
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid var(--text-color);
  border-radius: 32px;
  background: transparent;
  width: 100%;
}
.news_seller_footer p {
  font-size: 12px;
}
.privacy_socials {
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.terms {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
}
.socials {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-self: end;
}
.terms p {
  text-decoration: underline;
  cursor: pointer;
}
.socials img {
  cursor: pointer;
}
@media all and (max-width: 550px) {
  .footer {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 40px 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
  }
  .footer_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    box-sizing: border-box;
    padding: 16px;
    background: var(--shape-color);
  }
  .links_footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: start;
  }
  .links_footer img {
    object-fit: contain;
    width: 100%;
    margin-right: 40px;
    display: none;
  }
  .links_block {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
    white-space: nowrap;
  }
  .links {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .links_block h6 {
    font-weight: 500;
  }
  .links p {
    box-sizing: border-box;
    padding: 8px 0;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
  .links p:hover {
    text-decoration: underline;
  }
  .news_seller_footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .news_seller_footer h6 {
    font-weight: 500;
  }
  .news_seller_footer form {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }
  .news_seller_footer form input {
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid var(--text-color);
    border-radius: 32px;
    background: transparent;
    width: 100%;
  }
  .news_seller_footer p {
    font-size: 12px;
  }
  .privacy_socials {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .terms {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
  }
  .socials {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: start;
    justify-self: end;
  }
  .terms p {
    text-decoration: underline;
    cursor: pointer;
  }
  .socials img {
    cursor: pointer;
  }
}
</style>