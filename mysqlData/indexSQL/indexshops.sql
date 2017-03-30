/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-29 21:27:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `indexshops`
-- ----------------------------
DROP TABLE IF EXISTS `indexshops`;
CREATE TABLE `indexshops` (
  `goodsId` int(11) NOT NULL,
  `goodsName` varchar(255) DEFAULT NULL,
  `goodsDesciption` varchar(255) DEFAULT NULL,
  `goodsNewprice` varchar(255) DEFAULT NULL,
  `goodsOldprice` varchar(255) DEFAULT NULL,
  `goodsSale` varchar(255) DEFAULT NULL,
  `goodsFeature` varchar(255) DEFAULT NULL,
  `goodsImg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexshops
-- ----------------------------
INSERT INTO `indexshops` VALUES ('10001', '悦榕庄', '[3店通用] 8人超值套餐，提供免费WiFi', '448', '613', '已售15831', '广州食蛇圣地', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/yuerongzhuang.jpg');
INSERT INTO `indexshops` VALUES ('10002', '空中一号', '[珠江新城] 8人龙虾海鲜餐，提供免费WiFi', '888', '1721', '已售2049', '革命家邓小平题的字', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/kongzhongyihao.jpg');
INSERT INTO `indexshops` VALUES ('10003', '广州W酒店-稻菊日本餐厅', '[珠江新城] 套餐2选1', '198', '437', '已售1318', '广州年度十大奢华餐厅', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/guangzhouWhotel.jpg');
INSERT INTO `indexshops` VALUES ('10004', '蜀九香', '[2店通用] 皇家一号肥牛1份', '10', '48', '已售87', '范冰冰、邓超曾光顾', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/shujiuxiang.jpg');
INSERT INTO `indexshops` VALUES ('10005', '金兴港式海鲜火锅店', '[小北/淘金] 精选特惠套餐，建议2-3人使用', '28', '226', '已售177', '至爽海鲜', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/jinxing.jpg');
INSERT INTO `indexshops` VALUES ('10006', '活力无限KTV', '[中山二三路/东山口] 单人周一至周五11:00-19:00任选3小时欢唱套餐', '12', '158', '已售1232', '唱出你天地', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/huoliwuxianKTV.jpg');
INSERT INTO `indexshops` VALUES ('10007', '探鱼', '[来又来/大润发] 凌波/海鲈鱼套餐，建议1-2人使用', '178', '204', '已售302', '挑战你的味觉', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/tanyu.jpg');
INSERT INTO `indexshops` VALUES ('10008', '弓夫射箭馆', '[2店通用] 工作日双人射箭“弓囍”套餐（共四组箭 适合双人使用 反曲弓）', '65', '90', '已售1069', '射射射！', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/gongfushejianguan.jpg');
INSERT INTO `indexshops` VALUES ('10009', '风帆西餐厅', '[环市东] 家庭3人特惠套餐', '188', '609.5', '已售493', '广州口碑超赞的人气美食', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/fengfan.jpg');
INSERT INTO `indexshops` VALUES ('10010', '广饮讲食鸽子皇', '[江南大道] 红烧乳鸽1份，提供免费WiFi', '9.9', '19.9', '已售9620', '回味', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/gezihuang.jpg');
INSERT INTO `indexshops` VALUES ('10011', '漫咖啡', '[天河北] 拿铁松饼套餐，建议单人使用', '45', '57', '已售2055', '演员钱莹粉丝见面会在此举办', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/mancoffe.jpg');
