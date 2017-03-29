/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-27 08:54:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `theatredetail`
-- ----------------------------
DROP TABLE IF EXISTS `theatredetail`;
CREATE TABLE `theatredetail` (
  `uid` int(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `gid` varchar(250) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of theatredetail
-- ----------------------------
INSERT INTO `theatredetail` VALUES ('1', '中数华昇巨幕影城（萝岗店）', '飞晟二街6号301房', 'movielist1');
