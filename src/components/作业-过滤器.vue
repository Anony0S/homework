<template>
  <div>
    国内网站：粉丝数量：{{ num | getNum("万") }}
    <br />
    <br />
    国内网站：粉丝数量：{{ num | getNum("千") }}
    <br />
    <br />
    <br />
    时间：{{ time | getTime('-') }} 
    <br>
    时间：{{ time | getTime('/') }}
  </div>
</template>

<script>
import moment from "moment"
export default {
  data() {
    return {
      num: 1876986,
      time: 1636450540055,
    }
  },
  filters: {
    getNum(num, units) {
      if (units == "万") return`${String(num).slice(0, -4)}.${String(num).slice(-4)}万`
      if (units == "千") return`${String(num).slice(0, -3)}.${String(num).slice(-3)}千`
    },
    getTime(time, count) {
      if(count == '-') return moment(time).format('YYYY-MM-DD')
      if(count == '/') return moment(time).format('YYYY/MM/DD')
    }
  },
}
</script>

<style></style>
