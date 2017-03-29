/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-27 08:54:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `food1`
-- ----------------------------
DROP TABLE IF EXISTS `food1`;
CREATE TABLE `food1` (
  `uid` int(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `imgsrc` varchar(250) NOT NULL,
  `price` varchar(250) NOT NULL,
  `oprice` varchar(250) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of food1
-- ----------------------------
INSERT INTO `food1` VALUES ('1', '湘村故事/花湘粤语', 'img/food/1.jpg', '86.8', '¥100');
INSERT INTO `food1` VALUES ('2', '尊宝披萨', 'img/food/2.jpg', '59', '¥98');
INSERT INTO `food1` VALUES ('3', '必胜客', 'img/food/3.jpg', '57', '¥100');
INSERT INTO `food1` VALUES ('4', '尊宝比萨', 'img/food/4.jpg', '72', '¥198');
