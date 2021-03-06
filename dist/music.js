const ap = new APlayer({
    container: document.getElementById('aplayer'),
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    preload: 'auto',
    order: 'random',
    loop: 'all',
    volume: 0.7,
    
    audio: [
        {
            name: '晚安',
            artist: '颜人中',
            url: 'http://music.163.com/song/media/outer/url?id=1359356908.mp3',
            cover: 'http://i1.bvimg.com/688891/c0d448a8efd796ba.jpg'
        },
        {
            name: '后来的我们',
            artist: '五月天',
            url: 'http://music.163.com/song/media/outer/url?id=553310243.mp3',
            cover: 'http://i2.bvimg.com/688891/ff987b776517b875.jpg',
            lrc: "[by:Sampson劉小言][00:00.000] 作曲 : Lana Del Rey/Justin Parker[00:01.000] 作词 : Lana Del Rey/Justin Parker[00:22.91]Feet don’t fail me now[00:28.35]Take me to the finish line[00:32.63]Oh my heart, it breaks every step that I take[00:37.56]But I’m hoping at the gates[00:40.18]They’ll tell me that you’re mine[00:45.29]Walking through the city streets[00:50.79]Is it by mistake or design?[00:54.96]I feel so alone on a Friday night[00:59.74]Can you make it feel like home, if I tell you you’re mine?[01:05.93]It's like I told you, honey[01:08.34]Don’t make me sad, don’t make me cry[01:13.60]Sometimes love is not enough and the road gets tough[01:17.37]I don’t know why[01:19.46]Keep making me laugh[01:21.90]Let’s go get high[01:24.70]The road is long, we carry on[01:27.56]Try to have fun in the meantime[01:30.52]Come and take a walk on the wild side[01:33.17]Let me kiss you hard in the pouring rain[01:37.3]You like your girls insane[01:41.66]Choose your last words, this is the last time[01:48.45]Cause you and I, we were born to die[01:55.6]Lost but now I am found[02:00.47]I can see but once I was blind[02:04.39]I was so confused as a little child[02:09.63]Tried to take what I could get[02:12.32]Scared that I couldn't find[02:15.62]All the answers, honey[02:18.2]Don’t make me sad, don’t make me cry[02:23.49]Sometimes love is not enough and the road gets tough[02:27.38]I don’t know why[02:29.21]Keep making me laugh[02:31.92]Let’s go get high[02:34.46]The road is long, we carry on[02:37.30]Try to have fun in the meantime[02:40.44]Come and take a walk on the wild side[02:43.0]Let me kiss you hard in the pouring rain[02:46.92]You like your girls insane[02:51.62]So, choose your last words, this is the last time[02:58.15]Cause you and I, we were born to die[03:06.55]We were born to die[03:12.28]We were born to die[03:16.54]Come and take a walk on the wild side[03:19.17]Let me kiss you hard in the pouring rain[03:23.23]You like your girls insane[03:25.94]So[03:27.77]Don’t make me sad, don’t make me cry[03:33.4]Sometimes love is not enough and the road gets tough[03:36.41]I don’t know why[03:38.86]Keep making me laugh[03:41.41]Let’s go get high[03:44.32]The road is long, we carry on[03:47.0]Try to have fun in the meantime[03:50.11]Come and take a walk on the wild side[03:52.70]Let me kiss you hard in the pouring rain[03:56.65]You like your girls insane[04:00.20]So,choose your last words, this is the last time[04:07.77]Cause you and I, we were born to die[04:16.36]We were born to die[04:21.92]We were born to die"

        },
        {
            name: '盗将行',
            artist: '花粥',
            url: 'http://music.163.com/song/media/outer/url?id=574566207.mp3',
            cover: 'http://i2.bvimg.com/688891/be7d315eabaa77b3.jpg'
        }        
    ]
});
const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index.index);
});