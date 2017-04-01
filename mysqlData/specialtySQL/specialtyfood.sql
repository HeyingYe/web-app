/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-04-01 18:00:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `specialtyfood`
-- ----------------------------
DROP TABLE IF EXISTS `specialtyfood`;
CREATE TABLE `specialtyfood` (
  `foodId` int(11) NOT NULL,
  `foodShop` varchar(255) DEFAULT NULL,
  `foodName` varchar(255) DEFAULT NULL,
  `foodDiscount` varchar(255) DEFAULT NULL,
  `foodSale` varchar(255) DEFAULT NULL,
  `foodPrice` varchar(255) DEFAULT NULL,
  `foodImg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`foodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of specialtyfood
-- ----------------------------
INSERT INTO `specialtyfood` VALUES ('10001', '味食猫便当（同和总店）', '沙拉脆皮鸡+烤肉饭', '3.6折', '月售1355份', '￥11', './img/food1.jpg');
INSERT INTO `specialtyfood` VALUES ('10002', '关二哥（京溪店）', '桃园三结义', '3.5折', '月售1225份', '￥9.99', './img/food2.jpg');
INSERT INTO `specialtyfood` VALUES ('10003', '饭戒(京溪店)', '炫辣鸡排拼卤肉饭', '4.5折', '月售393份', '￥15.6', './img/food3.jpg');
INSERT INTO `specialtyfood` VALUES ('10004', '饭戒(京溪店)', '铁三角套餐', '4.0折', '月售18份', '￥42.6', './img/food4.jpg');
INSERT INTO `specialtyfood` VALUES ('10005', '饭戒(京溪店)', '高老庄秘制小炒肉饭', '4.5折', '月售75份', '￥15.9', './img/food5.jpg');
INSERT INTO `specialtyfood` VALUES ('10006', '大师兄外卖（长湴店）', '可口可乐B套餐', '4.7折', '月售101份', '￥17.2', './img/food6.jpg');
INSERT INTO `specialtyfood` VALUES ('10007', '大师兄外卖（长湴店）', '可口可乐D套餐', '4.7折', '月售98份', '￥17.2', './img/food7.jpg');
INSERT INTO `specialtyfood` VALUES ('10008', '鲜汁道龙虾盖饭', '鱼羊双鲜饭套餐（海鲜味）', '5.0折', '月售189份', '￥16', './img/food8.jpg');
INSERT INTO `specialtyfood` VALUES ('10009', '蒙自源（广州金元岗美食城店）', '傣味酸汤米线', '5.0折', '月售95份', '￥10.5', './img/food9.jpg');
INSERT INTO `specialtyfood` VALUES ('10010', '蒙自源（广州金元岗美食城店）', '鲜蔬肉丝米线', '5.0折', '月售63份', '￥8.5', './img/food10.jpg');
INSERT INTO `specialtyfood` VALUES ('10011', '台湾炒饭大王', '沙茶酱蟹柳炒饭+热狗+培根+菊花凉茶（盒装）', '4.2折', '月售737份', '￥13.5', './img/food11.jpg');
INSERT INTO `specialtyfood` VALUES ('10012', '大师兄外卖（长湴店）', '可口可乐A套餐', '5.0折', '月售25份', '￥20.9', './img/food12.jpg');
INSERT INTO `specialtyfood` VALUES ('10013', '华莱士(白云家家旺店)', '华士单人餐一', '6.5折', '月售798份', '￥15', './img/food13.jpg');
INSERT INTO `specialtyfood` VALUES ('10014', '鲜汁道龙虾盖饭', '丸美蟹肉饭套餐（香辣）', '5.6折', '月售267份', '￥19.9', './img/food14.jpg');
INSERT INTO `specialtyfood` VALUES ('10015', '开饭啦（同和店）', '金牌烧鸭+肉卷+时蔬饭', '3.3折', '月售23份', '￥9.9', './img/food15.jpg');
INSERT INTO `specialtyfood` VALUES ('10016', '呦儿园', '益力多（5瓶排装）', '3.5折', '月售1份', '￥12.5', './img/food16.jpg');
INSERT INTO `specialtyfood` VALUES ('10017', '关二哥（京溪店）', '二哥咖喱胡须鸡扒+张飞猪蹄肉饭+加多宝', '3.6折', '月售51份', '￥13.88', './img/food17.jpg');
INSERT INTO `specialtyfood` VALUES ('10018', '开饭啦（同和店）', '招牌牛腩+肉卷+小菜+时蔬+蒸饭', '3.6折', '月售41份', '￥10.9', './img/food18.jpg');
INSERT INTO `specialtyfood` VALUES ('10019', '开饭啦（同和店）', '农家焖鸭+任选一肉饭', '3.6折', '月售3份', '￥10.9', './img/food19.jpg');
INSERT INTO `specialtyfood` VALUES ('10020', '回家吃饭啦', '厚切鸡排+任拼一肉+时蔬饭', '4.1折', '月售273份', '￥11.9', './img/food20.jpg');
