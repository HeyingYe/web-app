/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-29 21:27:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `indexspecial`
-- ----------------------------
DROP TABLE IF EXISTS `indexspecial`;
CREATE TABLE `indexspecial` (
  `specialId` int(11) NOT NULL AUTO_INCREMENT,
  `specialName` varchar(255) DEFAULT NULL,
  `specialNewprice` varchar(255) DEFAULT NULL,
  `specialOldprice` varchar(255) DEFAULT NULL,
  `specialImg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`specialId`)
) ENGINE=InnoDB AUTO_INCREMENT=20004 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexspecial
-- ----------------------------
INSERT INTO `indexspecial` VALUES ('20001', '魅美映画甜品馆', '1', '20', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/tianpinguan.jpg');
INSERT INTO `indexspecial` VALUES ('20002', '意达比萨', '1', '15', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/pizza.jpg');
INSERT INTO `indexspecial` VALUES ('20003', '恒大清远鸡', '1', '88', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/chicken.jpg');
