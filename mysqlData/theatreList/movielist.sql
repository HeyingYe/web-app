/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-29 20:53:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `movielist`
-- ----------------------------
DROP TABLE IF EXISTS `movielist`;
CREATE TABLE `movielist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `images` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tittle` varchar(255) CHARACTER SET utf8 NOT NULL,
  `score` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of movielist
-- ----------------------------
INSERT INTO `movielist` VALUES ('1', 'img/movie1.jpg', '金刚：骷髅岛', '8.3');
INSERT INTO `movielist` VALUES ('2', 'img/movie2.png', '欢乐喜剧人', '4.1');
INSERT INTO `movielist` VALUES ('3', 'img/movie3.jpg', '美女与野兽', '8.2');
INSERT INTO `movielist` VALUES ('4', 'img/movie4.jpg', '绑架者', '暂无评分');
INSERT INTO `movielist` VALUES ('5', 'img/movie5.png', '嫌疑人x的献身', '9.3');
INSERT INTO `movielist` VALUES ('6', 'img/movie6.jpg', '一条狗的使命', '9.0');
INSERT INTO `movielist` VALUES ('7', 'img/movie7.jpg', '麦兜响当当', '6.4');
INSERT INTO `movielist` VALUES ('8', 'img/movie8.jpg', '非凡任务', '8.7');
INSERT INTO `movielist` VALUES ('9', 'img/movie9.png', '八月', '7.5');
INSERT INTO `movielist` VALUES ('10', 'img/movie10.jpg', '有玩没玩', '暂无评分');
INSERT INTO `movielist` VALUES ('11', 'img/movie11.jpg', '冰雪大作战', '暂无评分');
INSERT INTO `movielist` VALUES ('12', 'img/movie12.png', '领袖', '暂无评分');
INSERT INTO `movielist` VALUES ('13', 'img/movie13.jpeg', '极限特工：终极回归', '8.7');
INSERT INTO `movielist` VALUES ('14', 'img/movie14.png', '乐高蝙蝠侠大电影', '8.5');
