/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-29 21:27:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `indexreduce`
-- ----------------------------
DROP TABLE IF EXISTS `indexreduce`;
CREATE TABLE `indexreduce` (
  `reduceId` int(11) NOT NULL AUTO_INCREMENT,
  `reduceName` varchar(255) DEFAULT NULL,
  `reduceNewprice` varchar(255) DEFAULT NULL,
  `reducePrice` varchar(255) DEFAULT NULL,
  `reduceImg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`reduceId`)
) ENGINE=InnoDB AUTO_INCREMENT=30004 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexreduce
-- ----------------------------
INSERT INTO `indexreduce` VALUES ('30001', '魅美映画甜品馆', '168', '立减30元', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/blackbutterfly.jpg');
INSERT INTO `indexreduce` VALUES ('30002', '意达比萨', '128', '立减5元', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/turelovecake.jpg');
INSERT INTO `indexreduce` VALUES ('30003', '恒大清远鸡', '88', '立减9元', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/shangmeicake.jpg');
