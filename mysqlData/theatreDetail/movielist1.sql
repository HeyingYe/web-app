/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-27 08:54:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `movielist1`
-- ----------------------------
DROP TABLE IF EXISTS `movielist1`;
CREATE TABLE `movielist1` (
  `uid` int(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `imgsrc` varchar(250) NOT NULL,
  `text` varchar(250) DEFAULT NULL,
  `todaytime` varchar(250) NOT NULL,
  `score` varchar(250) NOT NULL,
  `time` int(250) NOT NULL,
  `tomorrowtime` varchar(250) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of movielist1
-- ----------------------------
INSERT INTO `movielist1` VALUES ('1', '金刚：骷髅岛', 'img/movie/2.jpg', null, 'todaytime1', '8.3', '119', 'tomorrow1');
INSERT INTO `movielist1` VALUES ('2', '美女与野兽', 'img/movie/1.jpg', null, 'todaytime2', '8.2', '130', 'tomorrow2');
INSERT INTO `movielist1` VALUES ('3', '欢乐喜剧人', 'img/movie/6.png', null, 'todaytime3', '3.9', '87', 'tomorrow3');
INSERT INTO `movielist1` VALUES ('4', '一条狗的使命', 'img/movie/4.jpg', null, 'todaytime4', '9', '101', 'tomorrow3');
INSERT INTO `movielist1` VALUES ('5', '金刚狼3：殊死一战', 'img/movie/5.jpg', null, 'todaytime5', '8.7', '123', 'tomorrow4');
INSERT INTO `movielist1` VALUES ('6', '麦兜响当当', 'img/movie/3.jpg', null, 'todaytime6', '6.5', '79', 'tomorrow5');
