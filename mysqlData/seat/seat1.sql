/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-28 20:06:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `seat1`
-- ----------------------------
DROP TABLE IF EXISTS `seat1`;
CREATE TABLE `seat1` (
  `gid` int(250) NOT NULL,
  `cinemaName` varchar(250) NOT NULL,
  `movieName` varchar(250) NOT NULL,
  `language` varchar(250) NOT NULL,
  `time` varchar(250) NOT NULL,
  `hall` varchar(250) NOT NULL,
  `price` int(250) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of seat1
-- ----------------------------
INSERT INTO `seat1` VALUES ('1', '中数华昇巨幕影城', '一条狗的使命', '英语/2D', '17:40', '6号厅银幕', '28');
