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
-- 表的结构 `movie`
--

CREATE TABLE IF NOT EXISTS `movie` (
  `movieId` int(11) NOT NULL,
  `movieName` varchar(255) COLLATE utf8_bin NOT NULL,
  `movieScore` varchar(11) COLLATE utf8_bin NOT NULL,
  `movieDuration` varchar(255) COLLATE utf8_bin NOT NULL,
  `movieShowTime` varchar(255) COLLATE utf8_bin NOT NULL,
  `movieType` varchar(255) COLLATE utf8_bin NOT NULL,
  `movieArea` varchar(255) COLLATE utf8_bin NOT NULL,
  `src` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`movieId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `movie`
--

INSERT INTO `movie` (`movieId`, `movieName`, `movieScore`, `movieDuration`, `movieShowTime`, `movieType`, `movieArea`, `src`) VALUES
(1, '金刚·骷髅岛', '8.3', '时长：119分钟', '上映时间：2017-03-24', '类型：剧情,动作,冒险', '地区：美国,中国大陆', '../../moveDetail/img/pic_14.jpg,../../moveDetail/img/pic_10.jpg,../../moveDetail/img/pic_11.jpg,../../moveDetail/img/pic_12.jpg,../../moveDetail/img/pic_14.jpg'),
(2, '美女与野兽', '8.5', '时长：130分钟', '上映时间：2017-03-17', '类型：爱情,奇幻,歌舞', '地区：美国', '../../moveDetail/img/pic_51.jpg,../../moveDetail/img/pic_52.jpg,../../moveDetail/img/pic_53.jpg,../../moveDetail/img/pic_54.jpg,../../moveDetail/img/pic_55.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
