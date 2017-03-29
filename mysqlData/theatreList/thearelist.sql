/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-29 20:54:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `thearelist`
-- ----------------------------
DROP TABLE IF EXISTS `thearelist`;
CREATE TABLE `thearelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `theatreName` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` float(11,1) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 NOT NULL,
  `gid` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of thearelist
-- ----------------------------
INSERT INTO `thearelist` VALUES ('1', '金逸影城(太阳城IMAX店)', '38.5', '广州大道北1811号嘉裕太阳城广场3楼', 'movielist');
INSERT INTO `thearelist` VALUES ('2', '华影梅花园影城', '38.5', '广州大道北28号梅花园商业广场5楼', 'movielist');
INSERT INTO `thearelist` VALUES ('3', '横店电影城(高德汇店)', '40.0', '长兴路13号优托邦购物中心3楼', 'movielist');
INSERT INTO `thearelist` VALUES ('4', '中数华昇巨幕影城(萝岗店)', '23.0', '飞晟二街6号301房', 'movielist');
INSERT INTO `thearelist` VALUES ('5', '星美国际影城(钟村店', '24.0', '105国道钟村市场对面', 'movielist');
INSERT INTO `thearelist` VALUES ('6', '星美国际影城(新都荟店)', '24.0', '东晓南路新都荟广场四楼', 'movielist');
INSERT INTO `thearelist` VALUES ('7', '万达影城(海珠店)', '35.0', '江南大道南689-709号枫瀛汇广场二楼', 'movielist');
INSERT INTO `thearelist` VALUES ('8', '大地影院(东汇城店)', '25.0', '荔城街府佑路98号东汇城4楼', 'movielist');
INSERT INTO `thearelist` VALUES ('9', '大地影院(东区商业城店)', '34.0', '荔联街宏明路263号东区商业城4楼', 'movielist');
INSERT INTO `thearelist` VALUES ('10', '大地数字影院(大旺城店)', '29.5', '新塘镇东坑三横路东部义乌广场4楼', 'movielist');
INSERT INTO `thearelist` VALUES ('11', '横店电影城(庆丰店)', '29.0', '庆丰广场路财智广场3楼', 'movielist');
INSERT INTO `thearelist` VALUES ('12', '横店电影城(高德汇店)', '29.0', '长兴路13号优托邦购物中心3楼', 'movielist');
INSERT INTO `thearelist` VALUES ('13', '耀莱成龙国际影城(增城新塘店)', '38.0', '新塘镇港口大道北332号金海岸城市广场4楼', 'movielist');
INSERT INTO `thearelist` VALUES ('14', '哈艺时尚影城(海珠赤岗店)', '35.0', '石榴岗路10号', 'movielist');
INSERT INTO `thearelist` VALUES ('15', '喜洋时代影城(花都星光汇店）', '29.8', '建设北路72号星光汇商厦8楼', 'movielist');
INSERT INTO `thearelist` VALUES ('16', '喜洋时代影城(花都星光汇店)', '27.9', '建设北路72号星光汇商厦8楼', 'movielist');
INSERT INTO `thearelist` VALUES ('17', '永汉电影院', '23.0', '北京路186号3楼', 'movielist');
INSERT INTO `thearelist` VALUES ('18', '金逸国际影城(海珠城IMAX店)', '39.0', '江南大道中180号富力海珠商业广场B区七层703室', 'movielist');
INSERT INTO `thearelist` VALUES ('19', '万达影城(海珠店)', '34.0', '江南大道南689-709号枫瀛汇广场二楼', 'movielist');
INSERT INTO `thearelist` VALUES ('20', '中影佰纳国际影城(新塘店)', '29.0', '新塘镇荔新大道汇创国贸大厦三栋三楼', 'movielist');
INSERT INTO `thearelist` VALUES ('21', '中影火山湖电影城(番禺店)', '28.0', '桥南街桥南路108号三层', 'movielist');
INSERT INTO `thearelist` VALUES ('22', '哈艺时尚影城(白云东平店)', '30.0', '永平街东平中路5号时代都荟3楼', 'movielist');
INSERT INTO `thearelist` VALUES ('23', '中影峰华国际影城', '25.0', '太和中路86-96号来利大厦三楼', 'movielist');
