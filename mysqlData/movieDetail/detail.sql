-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 03 月 29 日 09:44
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `webapp`
--

-- --------------------------------------------------------

--
-- 表的结构 `detail`
--

CREATE TABLE IF NOT EXISTS `detail` (
  `movieId` varchar(255) COLLATE utf8_bin NOT NULL,
  `director` varchar(255) COLLATE utf8_bin NOT NULL,
  `actor` varchar(255) COLLATE utf8_bin NOT NULL,
  `story` varchar(255) COLLATE utf8_bin NOT NULL,
  `morestory` text COLLATE utf8_bin NOT NULL,
  `src` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`movieId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `detail`
--

INSERT INTO `detail` (`movieId`, `director`, `actor`, `story`, `morestory`, `src`) VALUES
('1', '乔丹·沃格特-罗伯茨', '汤姆·希德勒斯顿,塞缪尔·杰克逊,约翰·古德曼,布丽·拉尔森,景甜,约翰·奥提兹,约翰·C·赖利,柯里·霍金斯,托比·凯贝尔,泰瑞·诺塔里,杰森·米切尔,希亚·温汉,托马斯·曼,尤金·科德罗,威尔·布里泰因,Marc Evan Jackson,Beth Kennedy,Raj K. Bose,凯文·肯特,Toshiko Onizawa,安东尼·J·桑科,埃德·莫伊,Dat Phan,托马斯·米德蒂奇,Brian Sacca,Richard Jenkins,Paul Riley Fox,Salvatore ', '上世纪70年代，一支集结了科考队员、探险家、战地摄影记者、军人的探险队，冒险前往南太平洋上的神秘岛屿——骷髅岛。他们的到来惊扰了...', '上世纪70年代，一支集结了科考队员、探险家、战地摄影记者、军人的探险队，冒险前往南太平洋上的神秘岛屿——骷髅岛。他们的到来惊扰了岛上之神——史上最大金刚。经过一番惨烈的激战之后，探险队员散落在了岛屿各处。此时，队员们才意识到这次探险并不是一次单纯的科考任务，而是去探索怪兽存在的证明。在这片与世隔绝、危险密布的丛林，无数怪异的史前生物暗藏其中，时刻威胁着他们的生命。队员们还遇到了神秘的原始部落，金刚的身世和其守护岛屿的原因也被逐渐揭开，原来，恐怖阴森的骷髅岛上还蛰伏着更凶狠残暴的怪兽……', '../../moveDetail/img/per_1.jpg,../../moveDetail/img/per_2.jpg,../../moveDetail/img/per_3.jpg,../../moveDetail/img/per_4.jpg,../../moveDetail/img/per_5.jpg'),
('2', '比尔·康顿', '艾玛·沃森,丹·史蒂文斯,卢克·伊万斯,乔什·盖德,伊恩·麦克莱恩,伊万·麦克格雷格,艾玛·汤普森,古古·玛芭塔劳,斯坦利·图齐,凯文·克莱恩,奥德拉·麦当娜,哈蒂·莫拉汉,Nathan Mack,阿德里安·席勒,Chris Andrew Mellon,水野索诺娅,Nicole O''Neill,亨利·加内特,迈克尔·吉布森,哈丽特·琼斯,Lynne Wilmot,Daniel Ioannou,Sophia Brown,Rudi Goodman,Jane Fowler,诺玛·阿塔拉,Jimmy Johnst', '一位高傲的王子（丹·史蒂文斯 饰）在宏伟古堡独居，因拒绝一名貌丑老婆婆借宿，被施咒变成了野兽，连这位王子的仆人都变成各样家具，要...', '一位高傲的王子（丹·史蒂文斯 饰）在宏伟古堡独居，因拒绝一名貌丑老婆婆借宿，被施咒变成了野兽，连这位王子的仆人都变成各样家具，要解除魔咒就要这位变成野兽的王子学会真心待人。漂亮善良的姑娘贝儿（艾玛·沃森 饰）为救父亲被逼与野兽同居古堡。几个回合之后，他们产生了难以想像的感情。加斯顿（卢克·伊万斯 饰）是一个长相英俊、身体强壮的男人，镇上每个女人都爱恋他，他一直追求贝儿，但贝儿始终看不上他，为了要挟贝儿和他结婚，他甚至串通疯人院的院长要把贝儿的父亲送进疯人院。然而大坏蛋加斯顿突然到城堡袭击野兽，令其身受重伤，贝儿没有伺机逃跑，与野兽一同打倒了加斯顿......', '../../moveDetail/img/per_56.jpg,../../moveDetail/img/per_57.jpg,../../moveDetail/img/per_58.jpg,../../moveDetail/img/per_59.jpg,../../moveDetail/img/per_60.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
