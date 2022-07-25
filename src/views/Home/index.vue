<template>
    <div>
        <p class="title">推荐歌单</p>
        <van-row gutter="5">
            <van-col span="8" v-for="item in reList" :key="item.id">
                <van-image width="100" height="100" :src="item.picUrl" />
                <p class="song_name">{{ item.name }}</p>
            </van-col>
        </van-row>
        <p class="title">最新音乐</p>
        <div class="newMusic">
            <van-cell
                :title="item.name"
                :label="item.song.artists[0].name + '-' + item.name"
                v-for="item in songList"
                :key="item.id"
            >
                <template #right-icon>
                    <van-icon
                        :name="playName ? 'play-circle-o' : 'pause-circle-o'"
                        size="0.6rem"
                        @click="playName = !playName"
                    />
                    <!-- <audio
                        :src="
                            'https://music.163.com/song/media/outer/url?id=' +
                            item.id +
                            '.mp3'
                        "
                        controls
                        style="dispaly: none"
                    ></audio> -->
                </template>
            </van-cell>
        </div>
    </div>
</template>

<script>
// 推荐歌单
import { recommendMusicAPI, newMusicAPI } from "@/api";
export default {
    name: "MusicDemoIndex",
    data() {
        return {
            // 推荐歌单数据
            reList: [],
            // 最新音乐数据
            songList: [],
            playName: true,
        };
    },
    async mounted() {
        // 获取推荐歌单数据
        const res = await recommendMusicAPI({ limit: 6 });
        // console.log(res);
        this.reList = res.data.result;
        // 获取最新音乐数据
        const res2 = await newMusicAPI({ limit: 20 });
        this.songList = res2.data.result;
        // console.log(res2);
    },
};
</script>

<style scoped>
/* 标题 */
.title {
    padding: 0.266667rem 0.24rem;
    margin: 0 0 0.24rem 0;
    background-color: #eee;
    color: #333;
    font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
    font-size: 0.346667rem;
    padding: 0 0.08rem;
    margin-bottom: 0.266667rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden; /** 隐藏超出的内容 **/
}
.van-col {
    text-align: center;
}
.newMusic {
    margin-bottom: 50px;
}
</style>
