<template>
    <el-row>
        <el-col :span="12" style="margin-top:20px">
            <el-card class="box-card" style="margin-left : 80px">
                <div slot="header" class="clearfix">
                    <span>设备连接</span>
                    <el-button style="float: right; padding: 5px 0" type="text">{{ Math.floor((a) * 100 / (g)) }}%
                    </el-button>
                </div>
                <div class="demo1-video">
                    <Video id="demo-video" class="video-js" controls="contrlos" preload="auto">
                        <source id="demo" src="../../src/assets/images/1.设备连接.mp4" type="video/mp4">
                    </Video>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12" style="margin-top:20px">
            <el-card class="box-card" style="margin-left : 30px">
                <div slot="header" class="clearfix">
                    <span>离散扫描数据采集</span>
                    <el-button style="float: right; padding: 5px 0" type="text">{{ Math.floor((b) * 100 / (h)) }}%
                    </el-button>
                </div>
                <div class="demo1-video">
                    <Video id="demo-video1" class="video-js" controls="contrlos" preload="auto">
                        <source id="demo1" src="../../src/assets/images/2.离散扫描数据采集.mp4" type="video/mp4">
                    </Video>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12" style="margin-top:20px">
            <el-card class="box-card" style="margin-left : 80px">
                <div slot="header" class="clearfix">
                    <span>单频测量数据采集</span>
                    <el-button style="float: right; padding: 5px 0" type="text">{{ Math.floor((c) * 100 / (i)) }}%
                    </el-button>
                </div>
                <div class="demo1-video">
                    <Video id="demo-video2" class="video-js" controls="contrlos" preload="auto">
                        <source id="demo2" src="../../src/assets/images/3.单频测量数据采集.mp4" type="video/mp4">
                    </Video>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12" style="margin-top:20px">
            <el-card class="box-card" style="margin-left : 30px">
                <div slot="header" class="clearfix">
                    <span>全景扫描数据采集</span>
                    <el-button style="float: right; padding: 5px 0" type="text">{{ Math.floor((d) * 100 / (j)) }}%
                    </el-button>
                </div>
                <div class="demo1-video">
                    <Video id="demo-video3" class="video-js" controls="contrlos" preload="auto">
                        <source id="demo3" src="../../src/assets/images/4.全景扫描数据采集.mp4" type="video/mp4">
                    </Video>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12" style="margin-top:20px">
            <el-card class="box-card" style="margin-left : 80px">
                <div slot="header" class="clearfix">
                    <span>频率扫描数据采集</span>
                    <el-button style="float: right; padding: 5px 0" type="text">{{ Math.floor((e) * 100 / (k)) }}%
                    </el-button>
                </div>
                <div class="demo1-video">
                    <Video id="demo-video4" class="video-js" controls="contrlos" preload="auto">
                        <source id="demo4" src="../../src/assets/images/5.频率扫描数据采集.mp4" type="video/mp4">
                    </Video>
                </div>
            </el-card>
        </el-col>
        <el-col :span="12" style="margin-top:20px">
            <el-card class="box-card" style="margin-left : 30px">
                <div slot="header" class="clearfix">
                    <span>全景扫描题目练习</span>
                    <el-button style="float: right; padding: 5px 0" type="text">{{ Math.floor((f) * 100 / (l)) }}%
                    </el-button>
                </div>
                <div class="demo1-video">
                    <Video id="demo-video5" class="video-js" controls="contrlos" preload="auto">
                        <source id="demo5" src="../../src/assets/images/6.全景扫描题目练习.mp4" type="video/mp4">
                    </Video>
                </div>
            </el-card>
        </el-col>
        <div>
            <el-button style="margin-left:80px;margin-top:50px " type="primary" @click="aaa">结束学习</el-button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前学习总时长：{{ Math.floor(a + b + c + d + e + f)
            }}s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            当前学习总进度：{{ Math.floor((a + b + c + d + e + f) * 100 / (g + h + i + j + k + l)) }}%
        </div>
    </el-row>
</template>
<script>
import videojs from "video.js"
export default {
    data() {
        return {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            k: 0,
            l: 0,
            p: 0,
            q: 0,
            r: 0,
            s: 0,
            t: 0,
            u: 0,
            p1: 0,
            q1: 0,
            r1: 0,
            s1: 0,
            t1: 0,
            u1: 0,
            id: '',
            id1: 0,
        };
    },
    mounted() {
        var mythat = this;
        var options = {
        };
        var player = videojs('demo-video', options, function onPlayerReady() {
            var time1;
            let t1 = 0;
            function aa() {
                t1 += 0.1;
                mythat.a = t1;
                console.log(t1)
                console.log('cc-' + t1);
                console.log('当前播放时间' + currentTime);
            }
            this.on('playing', function () {
                console.log('开始播放');
                time1 = setInterval(function () {
                    aa();
                }, 100);
            });
            //结束和暂时时清除定时器，并向后台发送数据
            this.on('ended', function () {
                console.log('结束播放');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            });
            this.on('pause', function () {
                console.log('暂停播放');
                window.clearInterval(time1);
                countTime();  //向后台发数据
            });
            this.on('ended', function () {//播放结束
                console.log("播放结束");
                window.clearInterval(time1);
            });
            this.on('waiting', function () {
                console.log('等待加载');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            })
            //开始播放视频时，设置一个定时器，每100毫秒调用一次aa(),观看时长加1秒
        });
        var player1 = videojs('demo-video1', options, function onPlayerReady() {
            var time1;
            var t1 = 0;
            function aa() {
                t1 += 0.1;
                mythat.b = t1;
                console.log('dd-' + t1);
                // var currentTime = document.getElementById("demo-video1").firstChild.currentTime;
                //document.getElementById('dd').value = currentTime;
                console.log('当前播放时间' + currentTime);
            }
            //结束和暂时时清除定时器，并向后台发送数据
            this.on('ended', function () {
                console.log('结束播放');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            });
            this.on('pause', function () {
                console.log('暂停播放');
                window.clearInterval(time1);
                countTime();  //向后台发数据
            });
            this.on('ended', function () {//播放结束
                console.log("播放结束");
                window.clearInterval(time1);
            });
            this.on('waiting', function () {
                console.log('等待加载');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            })
            //开始播放视频时，设置一个定时器，每100毫秒调用一次aa(),观看时长加1秒
            this.on('playing', function () {
                console.log('开始播放');
                time1 = setInterval(function () {
                    aa();
                }, 100);
            });
        });
        var player2 = videojs('demo-video2', options, function onPlayerReady() {
            var time1;
            var t1 = 0;
            function aa() {
                t1 += 0.1;
                mythat.c = t1;
                console.log('ee-' + t1);
                //var currentTime = document.getElementById("demo-video2").firstChild.currentTime;
                //document.getElementById('dd').value = currentTime;
                console.log('当前播放时间' + currentTime);
            }
            //结束和暂时时清除定时器，并向后台发送数据
            this.on('ended', function () {
                console.log('结束播放');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            });
            this.on('pause', function () {
                console.log('暂停播放');
                window.clearInterval(time1);
                countTime();  //向后台发数据
            });
            this.on('ended', function () {//播放结束
                console.log("播放结束");
                window.clearInterval(time1);
            });
            this.on('waiting', function () {
                console.log('等待加载');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            })
            //开始播放视频时，设置一个定时器，每100毫秒调用一次aa(),观看时长加1秒
            this.on('playing', function () {
                console.log('开始播放');
                time1 = setInterval(function () {
                    aa();
                }, 100);
            });
        });
        var player3 = videojs('demo-video3', options, function onPlayerReady() {
            var time1;
            var t1 = 0;
            function aa() {
                t1 += 0.1;
                mythat.d = t1;
                console.log('ff-' + t1);
                var currentTime = document.getElementById("demo-video3").firstChild.currentTime;
                //document.getElementById('dd').value = currentTime;
                console.log('当前播放时间' + currentTime);
            }
            //结束和暂时时清除定时器，并向后台发送数据
            this.on('ended', function () {
                console.log('结束播放');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            });
            this.on('pause', function () {
                console.log('暂停播放');
                window.clearInterval(time1);
                countTime();  //向后台发数据
            });
            this.on('ended', function () {//播放结束
                console.log("播放结束");
                window.clearInterval(time1);
            });
            this.on('waiting', function () {
                console.log('等待加载');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            })
            //开始播放视频时，设置一个定时器，每100毫秒调用一次aa(),观看时长加1秒
            this.on('playing', function () {
                console.log('开始播放');
                time1 = setInterval(function () {
                    aa();
                }, 100);
            });
        });
        var player4 = videojs('demo-video4', options, function onPlayerReady() {
            var time1;
            var t1 = 0;
            function aa() {
                t1 += 0.1;
                mythat.e = t1;
                console.log('gg-' + t1);
                var currentTime = document.getElementById("demo-video4").firstChild.currentTime;
                // document.getElementById('dd').value = currentTime;
                console.log('当前播放时间' + currentTime);
            }
            //结束和暂时时清除定时器，并向后台发送数据
            this.on('ended', function () {
                console.log('结束播放');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            });
            this.on('pause', function () {
                console.log('暂停播放');
                window.clearInterval(time1);
                countTime();  //向后台发数据
            });
            this.on('ended', function () {//播放结束
                console.log("播放结束");
                window.clearInterval(time1);
            });
            this.on('waiting', function () {
                console.log('等待加载');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            })
            //开始播放视频时，设置一个定时器，每100毫秒调用一次aa(),观看时长加1秒
            this.on('playing', function () {
                console.log('开始播放');
                time1 = setInterval(function () {
                    aa();
                }, 100);
            });
        });
        var player5 = videojs('demo-video5', options, function onPlayerReady() {
            var time1;
            var t1 = 0;
            function aa() {
                t1 += 0.1;
                mythat.f = t1;
                console.log('hh-' + t1);
                var currentTime = document.getElementById("demo-video5").firstChild.currentTime;
                // document.getElementById('dd').value = currentTime;
                console.log('当前播放时间' + currentTime);
            }
            //结束和暂时时清除定时器，并向后台发送数据
            this.on('ended', function () {
                console.log('结束播放');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            });
            this.on('pause', function () {
                console.log('暂停播放');
                window.clearInterval(time1);
                countTime();  //向后台发数据
            });
            this.on('ended', function () {//播放结束
                console.log("播放结束");
                window.clearInterval(time1);
            });
            this.on('waiting', function () {
                console.log('等待加载');
                window.clearInterval(time1);
                countTime();   //向后台发数据
            })
            //开始播放视频时，设置一个定时器，每100毫秒调用一次aa(),观看时长加1秒
            this.on('playing', function () {
                console.log('开始播放');
                time1 = setInterval(function () {
                    aa();
                }, 100);
            });
        });

        player.on('loadedmetadata', function () {
            var videoLength = player.duration();
            var totalTime = videoLength;
            console.log("视频1总时长:" + totalTime);
            mythat.g = totalTime;
        });

        player1.on('loadedmetadata', function () {
            var videoLength = player1.duration();
            var totalTime = videoLength;
            console.log("视频2总时长:" + totalTime);
            mythat.h = totalTime;

        });

        player2.on('loadedmetadata', function () {
            var videoLength = player2.duration();
            var totalTime = videoLength;
            console.log("视频3总时长:" + totalTime);
            mythat.i = totalTime;
        });

        player3.on('loadedmetadata', function () {
            var videoLength = player3.duration();
            var totalTime = videoLength;
            console.log("视频4总时长:" + totalTime);
            mythat.j = totalTime;
        });

        player4.on('loadedmetadata', function () {
            var videoLength = player4.duration();
            var totalTime = videoLength;
            console.log("视频5总时长:" + totalTime);
            mythat.k = totalTime;
        });

        player5.on('loadedmetadata', function () {
            var videoLength = player5.duration();
            var totalTime = videoLength;
            console.log("视频6总时长:" + totalTime);
            mythat.l = totalTime;
        });

        //直接关闭页面，并向后台发送数据
        if (window.addEventListener) {
            window.addEventListener("beforeunload", countTime, false);
        } else {
            window.attachEvent("onbeforeunload", countTime);
        }
    },
    methods: {
        aaa() {
            if (Math.floor((this.a) * 100 / (this.g)) < 80) {
                this.p = 0
            } else {
                this.p = 1
            }
            localStorage.setItem('video1', this.p)

            if (Math.floor((this.b) * 100 / (this.h)) < 80) {
                this.q = 0
            } else {
                this.q = 1
            }
            localStorage.setItem('video2', this.q)

            if (Math.floor((this.c) * 100 / (this.i)) < 80) {
                this.r = 0
            } else {
                this.r = 1
            }
            localStorage.setItem('video3', this.r)
            if (Math.floor((this.d) * 100 / (this.j)) < 80) {
                this.s = 0
            } else {
                this.s = 1
            }
            localStorage.setItem('video4', this.s)
            if (Math.floor((this.e) * 100 / (this.k)) < 80) {
                this.t = 0
            } else {
                this.t = 1
            }
            localStorage.setItem('video5', this.t)
            if (Math.floor((this.f) * 100 / (this.l)) < 80) {
                this.u = 0
            } else {
                this.u = 1
            }
            localStorage.setItem('video6', this.u)

            this.id = localStorage.getItem('userid')
            this.id1 = this.id - 0,
                this.p1 = localStorage.getItem('video1') - 0
            this.q1 = localStorage.getItem('video2') - 0
            this.r1 = localStorage.getItem('video3') - 0
            this.s1 = localStorage.getItem('video4') - 0
            this.t1 = localStorage.getItem('video5') - 0
            this.u1 = localStorage.getItem('video6') - 0
            this.$axios.post('/ ', id1, p1, q1, r1, s1, t1, u1)
                .then(res => {
                    console.log('res=>', res);
                })
                .catch((error) => {
                    console.error(error)
                }) //显示当前学生进度的后端接口

        }
    }

}
</script>
<style>
.video-js {
    width: 500px;
    height: 300px;
    text-align: center;
}

F .box-card {
    width: 550px;
}
</style>