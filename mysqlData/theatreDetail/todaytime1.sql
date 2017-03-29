/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-27 08:54:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `todaytime1`
-- ----------------------------
DROP TABLE IF EXISTS `todaytime1`;
CREATE TABLE `todaytime1` (
  `uid` varchar(250) NOT NULL,
  `starttime` varchar(250) NOT NULL,
  `endtime` varchar(250) NOT NULL,
  `language` varchar(250) NOT NULL,
  `price` varchar(250) NOT NULL,
  `hall` varchar(250) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todaytime1
-- ----------------------------
INSERT INTO `todaytime1` VALUES ('1', '14:45', '16:44', '英语/3D', '¥29', '5号厅');
INSERT INTO `todaytime1` VALUES ('2', '15:25', '17:24', '英语/3D', '¥29', '1号厅');
INSERT INTO `todaytime1` VALUES ('3', '16:10', '18:09', '英语/3D', '¥29', '6号厅');
INSERT INTO `todaytime1` VALUES ('4', '17:05', '19:04', '英语/3D', '¥29', '2号厅');
INSERT INTO `todaytime1` VALUES ('5', '17:55', '19:55', '英语/3D', '¥29', '7号厅');
INSERT INTO `todaytime1` VALUES ('6', '19:15', '21:14', '英语/3D', '¥29', '3号厅');
INSERT INTO `todaytime1` VALUES ('7', '21:45', '23:44', '英语/3D', '¥29', '4号厅');
