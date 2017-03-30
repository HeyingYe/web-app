/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : webapp

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-03-29 21:27:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `indexremark`
-- ----------------------------
DROP TABLE IF EXISTS `indexremark`;
CREATE TABLE `indexremark` (
  `remarkId` int(11) NOT NULL,
  `remarkContent` varchar(255) DEFAULT NULL,
  `remarkImg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`remarkId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexremark
-- ----------------------------
INSERT INTO `indexremark` VALUES ('50001', '这8家被“食神”蔡澜翻过牌子的店都火了！最便宜那家人均竟然才18块！', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/remark1.jpg');
INSERT INTO `indexremark` VALUES ('50002', '市二宫小巷内36年的糖水店，再也找不到同样4蚊一碗的足料糖水了！', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/remark2.jpg');
INSERT INTO `indexremark` VALUES ('50003', '我们找了60个牌子100多瓶水，最潮的竟然是这20瓶', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/remark3.jpg');
INSERT INTO `indexremark` VALUES ('50004', '太全了！广州那些藏在巷子中便宜又好吃的美食，你吃过几家？', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/remark4.jpg');
INSERT INTO `indexremark` VALUES ('50005', '文德路美食攻略，带你挖掘那些深藏不露的美食小店！', 'http://10.3.135.74/webAPP/day05/web-app/client/index/img/remark5.jpg');
