/**
 * react配置文件
 */
const host = "vvshow.site";

const hostUrl = 'https://vvshow.site';  //线上服务器
const staticHostUrl = 'https://static.vvshow.site';
var config = {

    // 下面的地址配合云端 Server 工作
    host,
    
    hostUrl: `https://${host}`,

    // 服务器图片目录
    imgDirUrl: `${staticHostUrl}/images/micapp`,
};

module.exports = config




