<script setup>
import { ref, inject, watch } from 'vue'

const MONTHS = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December"
}
const store = inject('store');
const state = store.state
const [_, month, __, year] = state.value.date.dateString.split(' ') // extracting month & year from dateString
const current = ref({
    month: MONTHS[month], // getting month fullname from MONTHS object using monts first 3 initials
    year
})
console.log(_);
console.log(__);

// watching date so that we can update current 👇🏻
watch(() => state.value.date, (updatedDate) => {
    const [_, month, __, year] = updatedDate.dateString.split(' ') // extracting updated month and year
    console.log(_);
    console.log(__);
    current.value = {
        month: MONTHS[month],
        year
    }
})
const handleClick = (direction) => {
    store.dispatch({
        type: 'updateDate',
        payload: { direction: direction }
    });
};


</script>


<template>
    <div class="header">
        <div class="info">
            <div class="year">
                <p>{{ current.year }}</p> <!-- Using year from current state above -->
            </div>
        </div>
        <div class="wrapper">
            <div class="left-chev chev" @click="() => handleClick('prev-month')">
                <img :src="chev" alt="left-chevron">
            </div>
            <div class="month">
                <h2>{{ current.month }}</h2> <!-- Using month from current state above -->
            </div>
            <div class="right-chev chev" @click="() => handleClick('next-month')">
                <img :src="chev" alt="right-chevron">
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.header {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: antiquewhite;
    border-radius: 5px 5px 0 0;

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;

        .month {
            h2 {
                font-size: 32px;
                font-weight: bolder;
                letter-spacing: 5.5px;
            }
        }

        .chev {
            user-select: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background-color .5s;

            &:hover {
                background-color: rgb(243, 206, 158);
            }

            img {
                width: 100%;
                height: auto;
                transform: translateX(2px);
            }
        }

        .left-chev {
            transform: rotate(180deg);
        }
    }
}
</style>
