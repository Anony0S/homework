<template>
    <div>
        <van-search
            shape="round"
            placeholder="请输入搜索关键词"
            v-model="searchValue"
            @input="getSearchList"
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
            <van-cell
                :title="item.name"
                :label="item.ar[0].name + '-' + item.name"
                v-for="item in searchList"
                :key="item.id"
            >
                <template #right-icon>
                    <van-icon :name="'play-circle-o'" size="0.6rem" />
                </template>
            </van-cell>
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
        };
    },
    methods: {
        // 获取搜索热词
        async getKeyWords() {
            const res = await hotKeyAPI();
            // console.log(res);
            this.keyWords = res.data.result.hots;
        },
        // 获取搜索列表
        async getSearchList() {
            const res = await searchListAPI({ keywords: this.searchValue });
            console.log(res);
            this.searchList = res.data.code === 200 ? res.data.result.songs : [];
        },
        // 点击热词填充输入框
        clickVal(val) {
            this.searchValue = val;
            this.getSearchList();
        },
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
}
</style>
