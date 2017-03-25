/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-25 14:58:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `theatredetail`
-- ----------------------------
DROP TABLE IF EXISTS `theatredetail`;
CREATE TABLE `theatredetail` (
  `movielist` varchar(250) DEFAULT NULL,
  `tomorrowmovie` varchar(250) DEFAULT NULL,
  `todaymovie` varchar(250) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `gid` int(250) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of theatredetail
-- ----------------------------
INSERT INTO `theatredetail` VALUES ('[{\"imgsrc\":\"img/movie/2.jpg\",\"name\":\"金刚：骷髅岛\",\"time\":\"119分钟\",\"score\":8.3},{\"imgsrc\":\"img/movie/6.png\",\"name\":\"欢乐喜剧人\",\"time\":\"87分钟\",\"score\":3.9}{\"imgsrc\":\"img/movie/1.jpg\",\"name\":\"美女与野兽\",\"time\":\"130分钟\",\"score\":8.2}{\"imgsrc\":\"img/movie/3.jpg\",\"name\":\"麦兜', '[{\"starttime\":\"15:25\",\"endtime\":\"17:24\",\"language\":\"英语/3D\",\"hall\":\"7号厅\",\"price\":\"¥28\"},{\"starttime\":\"15:25\",\"endtime\":\"17:24\",\"language\":\"英语/3D\",\"hall\":\"7号厅\",\"price\":\"¥28\"},{\"starttime\":\"15:25\",\"endtime\":\"17:24\",\"language\":\"英语/3D\",\"hall\":\"7号厅\",\"price', '[{\"starttime\":\"15:25\",\"endtime\":\"17:24\",\"language\":\"英语/3D\",\"hall\":\"7号厅\",\"price\":\"¥28\"},{\"starttime\":\"15:25\",\"endtime\":\"17:24\",\"language\":\"英语/3D\",\"hall\":\"7号厅\",\"price\":\"¥28\"},{\"starttime\":\"15:25\",\"endtime\":\"17:24\",\"language\":\"英语/3D\",\"hall\":\"7号厅\",\"price', '105国道钟村市场对面', '星美国际影城（钟村店）', '1');
