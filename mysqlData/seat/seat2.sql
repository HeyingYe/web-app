/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-28 20:06:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `seat2`
-- ----------------------------
DROP TABLE IF EXISTS `seat2`;
CREATE TABLE `seat2` (
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
-- Records of seat2
-- ----------------------------
INSERT INTO `seat2` VALUES ('1', '横店电影城', '金刚：骷髅岛', '英语/3D', '20:40', '8号厅银幕', '38');
