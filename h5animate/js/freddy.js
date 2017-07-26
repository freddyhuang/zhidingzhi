window.onload=function(){
	//背景音乐start
	var bgAudio = new Audio();
    bgAudio.loadStatus = 'unload';
    bgAudio.loop = true;
    function loadAudio(audio, url, callback) {
        audio.src = url;
        audio.load();
        audio.addEventListener('canplay', function () {
            bgAudio.loadStatus = 'loaded';
            callback();
        });
        audio.addEventListener('loadstart', function () {
            bgAudio.loadStatus = 'loading';
        });
    }
    function playAudio(){
        if (bgAudio.loadStatus === 'unload') {
            loadAudio(bgAudio, 'media/bg.mp3', function () {
                playAudio();
            });
            return 1;
        }

        bgAudio.play();
    }
    function stopAudio() {
        bgAudio.pause();
    }
    bgAudio.addEventListener('playing' ,function (e) {
        $('#music .music-btn').addClass('play');
    });
    bgAudio.addEventListener('pause' ,function (e) {
        $('#music .music-btn').removeClass('play');
    });

    $('body').one('touchstart', function () {
        playAudio();
        $('#music').on('touchstart', function (e) {
            if (bgAudio.paused) {
                playAudio();
                return 0;
            }
            stopAudio();
            return 1;
        });
    });
    window.onload = function() {
        if (bgAudio.loadStatus !== 'unload') {return;}
        playAudio();
    };
    //背景音乐end
    //文字动画start
	var forEach = [].forEach;
    document.getElementsByClassName('wp-inner')[0].fullpage({
        change: function (e) {
            // 移除动画属性
            forEach.call(document.querySelectorAll('.page')[e.cur].querySelectorAll('.js-animate'), function (v) {
                v.classList.remove(v.dataset['animate']);
                v.classList.add('hide');
            });
        },
        afterChange: function (e) {
            // 添加动画属性
            forEach.call(document.querySelectorAll('.page')[e.cur].querySelectorAll('.js-animate'), function(v) {
                v.classList.add(v.dataset['animate']);
                v.classList.remove('hide');
            });
        }
    });
    //文字动画end
    

}