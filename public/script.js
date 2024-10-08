// 地图初始化
var map = new AMap.Map('map', {
    zoom: 16,  // 缩放级别
    center: [103.6, 30.89],  // 成都东软学院的经纬度
});

// 模拟几个建筑的标记点
var locations = [
    { name: "d1男生宿舍", position: [103.599634, 30.889569] },
    { name: "d2男生宿舍", position: [103.599634, 30.889569] },
    { name: "北2门小吃区", position: [103.600806, 30.890135] },
    { name: "e1", position: [103.600463, 30.889379] },
    { name: "d5女生宿舍", position: [103.598299, 30.887151] },
    { name: "d9女生宿舍", position: [103.597913, 30.886679] },
    { name: "d3", position: [103.599787, 30.887689] },
    { name: "e3", position: [103.599463, 30.887308] },
    { name: "成都东软学院体育场", position: [103.599222, 30.886632] },
    { name: "体质测试教室", position: [103.598786, 30.886485] },
    { name: "菜鸟驿站", position: [103.597541, 30.887269] },
    { name: "a8", position: [103.598434, 30.887918] },
    { name: "测试", position: [103.602, 30.892] },
    { name: "测试", position: [103.602, 30.892] },
    { name: "测试", position: [103.603, 30.893] }
];

// 为每个地点创建标记
locations.forEach(location => {
    var marker = new AMap.Marker({
        position: location.position,
        map: map,
        title: location.name
    });

    // 监听标记点击事件
    marker.on('click', function () {
        // 更新评论标题为当前地点的名字
        document.getElementById('current-location').textContent = location.name;

        // 更新 Valine 评论系统的挂载，展示该地点的评论
        new Valine({
            el: '#vcomment',
            appId: 'Ws1wUdZsjYj6ZRIKPJfgxtTX-gzGzoHsz',    // 你的Valine appId
            appKey: 'FanUseMEr9H6O9NU4UhutAld',  // 你的Valine appKey
            path: location.name     // 用地点名字作为评论的标识路径
        });
    });
});
