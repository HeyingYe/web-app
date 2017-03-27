/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-27 08:55:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tomorrow1`
-- ----------------------------
DROP TABLE IF EXISTS `tomorrow1`;
CREATE TABLE `tomorrow1` (
  `uid` int(250) NOT NULL,
  `starttime` varchar(250) DEFAULT NULL,
  `endtime` varchar(250) DEFAULT NULL,
  `language` varchar(250) DEFAULT NULL,
  `price` varchar(250) DEFAULT NULL,
  `hall` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tomorrow1
-- ----------------------------
INSERT INTO `tomorrow1` VALUES ('1', '12:00', '13:46', '英语/2D', '¥24', '5号厅');
INSERT INTO `tomorrow1` VALUES ('2', '14:00', '15:46', '英语/2D', '¥24', '4号厅');
INSERT INTO `tomorrow1` VALUES ('3', '15:05', '16:46', '英语/2D', '¥24', '6号厅');
INSERT INTO `tomorrow1` VALUES ('4', '19:00', '20:41', '英语/2D', '¥24', '6号厅');
INSERT INTO `tomorrow1` VALUES ('5', '21:00', '22:41', '英语/2D', '¥24', '6号厅');
INSERT INTO `tomorrow1` VALUES ('6', '22:56', '00:36', '英语/2D', '¥24', '6号厅');
