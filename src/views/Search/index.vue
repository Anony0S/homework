<template>
    <div>
        <van-search
            shape="round"
            placeholder="请输入搜索关键词"
            v-model="searchValue"
            @input="showSearchList"
            class="serch"
        />
        <!-- 搜索下容器 -->
        <div class="search_wrap" v-if="searchList.length === 0">
            <!-- 标题 -->
            <p class="hot_title">热门搜索</p>
            <!-- 热搜关键词容器 -->
            <div class="hot_name_wrap">
                <!-- 每个搜索关键词 -->
                <span
                    class="hot_item"
                    v-for="(item, index) in keyWords"
                    :key="index"
                    @click="clickVal(item.first)"
                >
                    {{ item.first }}
                </span>
            </div>
        </div>

        <div class="search_list" v-else>
            <p class="hot_title">歌曲列表</p>
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-cell
                    :title="item.name"
                    :label="item.ar[0].name + '-' + item.name"
                    v-for="item in searchList"
                    :key="item.id"
                >
                    <template #right-icon>
                        <van-icon :name="'play-circle-o'" size="0.6rem" @click="play(item.id)"/>
                    </template>
                </van-cell>
            </van-list>
        </div>
    </div>
</template>
<script>
import { hotKeyAPI, searchListAPI } from "@/api";
export default {
    data() {
        return {
            keyWords: [],
            searchList: [],
            searchValue: "",
            loading: false,
            finished: false,
            page: 1, //当前搜索页码
            timer: null, //输入框防抖定时器
        };
    },
    methods: {
        // 搜索列表数据
        async getSearchList() {
            const res = await searchListAPI({
                keywords: this.searchValue,
                limit: 20,
                offset: (this.page - 1) * 20,
            });
            // 如果请求生成功但是没有数据
            if (!res.data.result || !res.data.result.songs) return [];
            return res.data.result.songs;
        },
        // 获取搜索热词
        async getKeyWords() {
            const res = await hotKeyAPI();
            // console.log(res);
            this.keyWords = res.data.result.hots;
        },
        // 获取搜索列表
        async showSearchList() {
            if (this.timer) clearTimeout(this.timer);
            this.timer = setTimeout(async () => {
                const res = await this.getSearchList();
                this.searchList = res;
            }, 500);
        },
        // 点击热词填充输入框
        clickVal(val) {
            this.searchValue = val;
            this.showSearchList();
        },
        async onLoad() {
            this.page++;
            const res = await this.getSearchList();
            // 解决搜索重复问题
            if (!res) {
                this.finished = true;
                this.loading = false;
                return;
            }
            // 将新数据追加到列表中，使用新语法 或者 concat()：拼接两个数组，不改变原数组
            this.searchList = [...this.searchList, ...res];
            // 将 loading 改为 false 才能在下次继续触发
            this.loading = false;
        },
        // 点击播放
        play(id) {
          this.$router.push({
            path: "/play",
            query: {
              id,
            }
          })
        }
    },
    mounted() {
        this.getKeyWords();
    },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
    padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
    font-size: 0.32rem;
    color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
    margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
    display: inline-block;
    height: 0.853333rem;
    margin-right: 0.213333rem;
    margin-bottom: 0.213333rem;
    padding: 0 0.373333rem;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
    color: #333;
    border-color: #d3d4da;
    border-radius: 0.853333rem;
    border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
    border-bottom: 1px solid lightgray;
}

/* 搜索列表样式 */
.search_list {
    padding: 10px;
    margin-bottom: 40px;
}
.serch{
  margin-top: 50px;
}
</style>
