//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        // 图片轮播器
        imgUrls: [{
            img: "../../images/scroll/IMG_01.jpg"
        }, {
            img: "../../images/scroll/IMG_02.jpg"
        }, {
            img: "../../images/scroll/IMG_03.jpg"
        }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        // 音乐播放器
        poster: "http://d.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=abfe5f62f3f2b211f0238d1cabe90e5d/fd039245d688d43f3c52a8e3751ed21b0ef43b23.jpg",
        musicSrc: "http://qqma.tingge123.com:83/123/2016/10/周杰伦%20-%20告白气球.mp3",
        name: '告白气球',
        author: '周杰伦',
        sliderValue: 0,
        minTime: 0,
        maxTime: 100,
        minMin: '00:00',
        maxMin: '00:00',
    },
    audioPlay: function () {
        this.setData({
            action: {
                method: 'play'
            }
        });
    },
    audioPause: function () {
        this.setData({
            action: {
                method: 'pause'
            }
        });
    },
    audioPlaybackRateSpeedUp: function () {
        this.setData({
            action: {
                method: 'setPlaybackRate',
                data: 2
            }
        });
    },
    audioPlaybackRateNormal: function () {
        this.setData({
            action: {
                method: 'setPlaybackRate',
                data: 1
            }
        });
    },
    audioPlaybackRateSlowDown: function () {
        this.setData({
            action: {
                method: 'setPlaybackRate',
                data: 0.5
            }
        });
    },
        audioNext: function () {
        this.setData({
            action: {
                method: 'pause'
            }
        });
    },
    audio14: function (time) {
        this.setData({
            action: {
                method: 'setCurrentTime',
                data: time
            }
        });
    },
    audioStart: function () {
        this.setData({
            action: {
                method: 'setCurrentTime',
                data: 0
            }
        });
    },
    //slider
    sliderChange: function (slider) {
        this.audio14(slider.detail.value);
    },
    bindTimeUpdate: function (audio) {
        // 通过audio的属性秒数计算当前分钟和秒数
        let currentMin = Math.floor(audio.detail.currentTime / 60);
        var currentSec = Math.floor(audio.detail.currentTime % 60);
        // 异常处理
        if (currentSec < 10) {
            currentSec = "0" + currentSec;
        }
        if (currentMin < 10) {
            currentMin = "0" + currentMin;
        }
        // 拼接
        var currentTime = currentMin + ":" + currentSec;

        let maxMin = Math.floor(audio.detail.duration / 60);
        var maxSec = Math.floor(audio.detail.duration % 60);

        if (maxSec < 10) {
            maxSec = "0" + maxSec;
        }
        if (maxMin < 10) {
            maxMin = "0" + maxMin;
        }

        var maxTime = maxMin + ":" + maxSec;
        // 重新赋值data，然后小程序就会根据data读取数据，自动更新UI
        this.setData({
            minMin: currentTime,
            maxMin: maxTime,
            sliderValue: audio.detail.currentTime,
            maxTime: audio.detail.duration
        })
    },

    onLoad: function () {
        console.log('页面加载 --- onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            console.log(userInfo);
            that.setData({
                userInfo: userInfo
            })
            that.update()
        })
    }
    ,
    onReady: function () {
        //生命周期函数--监听页面渲染完成
        console.log('页面准备显示了 onReady');
    }
    ,
    onShow: function () {
        //生命周期函数--监听页面显示
        console.log('生命周期函数--监听页面显示');
    }
    ,
    onHide: function () {
        //生命周期函数--监听页面隐藏
        console.log('生命周期函数--监听页面隐藏');
    }
    ,
//生命周期函数--监听页面卸载
    onUnload: function () {
        console.log('生命周期函数--监听页面卸载');
    }
    ,
    viewTap: function () {
        console.log('啊啊·有人点我');
    }
})
