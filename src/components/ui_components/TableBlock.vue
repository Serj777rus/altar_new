<template>
  <div class="table">
    <div class="table_main">
      <div class="table_zglvk">
        <h3>Our Mission</h3>
        <h6>We are challenging the traditional weddings</h6>
      </div>
      <div class="table_block">
        <div class="question_column">
          <div class="quest" v-for="quest in question" :key="quest.id">
            <h5>{{ quest.quest }}</h5>
          </div>
        </div>
        <div class="altar_column">
          <div class="altar_answ" v-for="altars in altar" :key="altars">
            <h5>{{ altars.answ }}</h5>
          </div>
        </div>
        <div class="question_column">
          <div class="quest" v-for="traditionals in traditional" :key="traditionals.id">
            <h5>{{ traditionals.answ }}</h5>
          </div>
        </div>
        <div class="question_column">
          <div class="quest" v-for="others in other" :key="others.id">
            <h5>{{ others.answ }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: [
        {
          id: 0,
          quest: ''
        },
        {
          id: 1,
          quest: 'Cost per couple'
        },
        {
          id: 2,
          quest: 'Time to get married'
        },
        {
          id: 3,
          quest: 'Stress'
        },
        {
          id: 4,
          quest: 'Convenience'
        },
        {
          id: 5,
          quest: 'Legal in 148 countries'
        },
        {
          id: 6,
          quest: 'Rush Support'
        }
      ],
      altar: [
        {
          id: 0,
          answ: 'ALTAR'
        },
        {
          id: 1,
          answ: '$497'
        },
        {
          id: 2,
          answ: '1 day'
        },
        {
          id: 3,
          answ: 'No'
        },
        {
          id: 4,
          answ: '✔'
        },
        {
          id: 5,
          answ: 'Yes'
        },
        {
          id: 6,
          answ: 'Yes'
        },
      ],
      traditional: [
        {
          id: 0,
          answ: 'Traditional Wedding'
        },
        {
          id: 1,
          answ: '$30 000 - $35 000'
        },
        {
          id: 2,
          answ: 'Month'
        },
        {
          id: 3,
          answ: 'High'
        },
        {
          id: 4,
          answ: '❌'
        },
        {
          id: 5,
          answ: 'Yes'
        },
        {
          id: 6,
          answ: 'No'
        }
      ],
      other: [
        {
          id: 0,
          answ: 'Others online'
        },
        {
          id: 1,
          answ: '$650'
        },
        {
          id: 2,
          answ: 'Varies'
        },
        {
          id: 3,
          answ: 'Low'
        },
        {
          id: 4,
          answ: '✔'
        },
        {
          id: 5,
          answ: 'Yes'
        },
        {
          id: 6,
          answ: 'Sometimes'
        }
      ]
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
}
.table_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.table_zglvk {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}
.table_block {
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-top: 24px;
}
.question_column {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.quest {
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px;
  border-bottom: 1px solid #a5a5a5;
}
.quest h5 {
  font-weight: 400;
}
.quest:nth-child(7) {
  border-bottom: none;
}
.altar_column {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--shape-color);
  border-radius: 20px;
  box-sizing: border-box;
  background: rgba(255, 230, 145, 0.4);
  transform: translateY(-2px);
}
.altar_answ {
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 32px;
  border-bottom: 1px solid #a5a5a5;
}
.altar_answ h5 {
  font-weight: 400;
}
.altar_answ:nth-child(7) {
  border-bottom: none;
}
.altar_answ:nth-child(5) h5 {
  color: green;
}
@media all and (max-width: 550px) {
  .table {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 40px 10px;
    justify-content: center;
    align-items: center;
  }
  .table_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .table_zglvk {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
  .table_block {
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin-top: 24px;
  }
  .question_column {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .quest {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px;
    border-bottom: 1px solid #a5a5a5;
  }
  .quest h5 {
    font-weight: 400;
    font-size: 14px;
  }
  .quest:nth-child(7) {
    border-bottom: none;
  }
  .altar_column {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--shape-color);
    border-radius: 12px;
    box-sizing: border-box;
    background: rgba(255, 230, 145, 0.4);
    transform: translateY(-2px);
  }
  .altar_answ {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
    border-bottom: 1px solid #a5a5a5;
  }
  .altar_answ h5 {
    font-weight: 400;
    font-size: 14px;
  }
  .altar_answ:nth-child(7) {
    border-bottom: none;
  }
  .altar_answ:nth-child(5) h5 {
    color: green;
  }
}
</style>