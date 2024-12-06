<template>
  <div class="rewievsPage">
    <div class="reviews_container">
      <h3>Couples are Talking...</h3>
      <div class="review_container_two">
        <div class="sticky">
          <div class="left_side_reviews">
            <div class="count_reviews">
              <div class="counter_review_text">
                <h4>Customers<br>Reviews</h4>
                <h2>{{ count }}/5</h2>
              </div>
              <video src="@/assets/images/reviws_video.mp4" autoplay muted playsinline loop></video>
            </div>
          </div>
        </div>
        <div class="right_side_reviews">
          <div class="review" v-for="review in reviewsForOut" :key="review.id">
            <div class="stars">{{ review.stars }}</div>
            <div class="name_avatar">
              <img :src="review.avatar.url" :alt="review" v-if="review.avatar">
              <div class="avatar_customer" v-else></div>
              <p>{{ review.customer_name }}</p>
            </div>
            <p>{{ review.review }}</p>
          </div>
          <BlacButton @click="countAllReviews = countAllReviews + 5"><slot>More reviews</slot></BlacButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BlacButton from "@/components/ui_components/BlacButton.vue";
export default {
  components: {BlacButton},
  data() {
    return {
      reviews: [],
      starOne: '⭐',
      starTwo: '⭐⭐',
      starThree: '⭐⭐⭐',
      starFour: '⭐⭐⭐⭐',
      starFive: '⭐⭐⭐⭐⭐',
      arrLength: null,
      reviewsForOut: [],
      countAllReviews: 5,
      count: null
    }
  },
  methods: {
    async getReviews() {
      try {
        const response = await axios.get('http://154.12.254.79/api/reviews')
        let cifr = 0
        response.data.data.forEach(review => {
          cifr = cifr + review.count
          if (review.count === 1) {
            review.stars = this.starOne;
          }
          if (review.count === 2) {
            review.stars = this.starTwo;
          }
          if (review.count === 3) {
            review.stars = this.starThree;
          }
          if (review.count === 4) {
            review.stars = this.starFour;
          }
          if (review.count === 5) {
            review.stars = this.starFive;
          }
        })
        this.count = cifr / response.data.data.length;
        this.reviews = response.data.data;
        this.arrLength = response.data.data.length;
        this.addReview();
        console.log(this.reviews);
      } catch (error) {
        console.log(error)
      }
    },
    addReview() {
      if (this.countAllReviews > this.arrLength) {
        this.countAllReviews = this.arrLength;
      }
      this.reviewsForOut = []
      for (let i = 0; i < this.countAllReviews; i++) {
        this.reviewsForOut.push(this.reviews[i]);
      }
    }
  },
  watch: {
    countAllReviews(newValue) {
      this.addReview();
    }
  },
  mounted() {
    this.getReviews();
  }
}
</script>

<style scoped>
.rewievsPage {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 0;
}
.reviews_container {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.review_container_two {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 80px;
}
.left_side_reviews {
  width: 100%;
  display: flex;
  position: sticky;
  top: 40px;
}
.sticky {
  width: 100%;
}
.count_reviews video {
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
}
.count_reviews {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.counter_review_text {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
.right_side_reviews {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}
.review {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.review p {
  font-weight: 400;
}
.stars {
  font-size: 24px;
}
.name_avatar {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}
.name_avatar p {
  font-weight: 300;
}
.avatar_customer {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #535353;
}
@media all and (max-width: 550px) {

  .reviews_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .rewievsPage {
    padding: 40px 10px;
  }
  .review_container_two {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .right_side_reviews {
    gap: 24px;
  }
}
</style>