-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 03 月 27 日 13:12
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
-- 表的结构 `seat`
--

CREATE TABLE IF NOT EXISTS `seat` (
  `gid` int(250) NOT NULL,
  `cinemaName` varchar(250) NOT NULL,
  `movieName` varchar(250) NOT NULL,
  `language` varchar(250) NOT NULL,
  `date` varchar(250) NOT NULL,
  `time` varchar(250) NOT NULL,
  `hall` varchar(250) NOT NULL,
  `price` int(250) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `seat`
--

INSERT INTO `seat` (`gid`, `cinemaName`, `movieName`, `language`, `date`, `time`, `hall`, `price`) VALUES
(1, '横店电影城', '美女与野兽', '中文/2D', '3月30日', '17:00', '2号厅银幕', 39),
(2, '横店电影城', '美女与野兽', '中文/2D', '3月29日', '12:00', '8号厅银幕', 28),
(3, '横店电影城', '美女与野兽', '英语/3D', '3月28日', '19:00', '6号厅银幕', 35),
(4, '横店电影城', '美女与野兽', '英语/3D', '3月31日', '22:00', '3号厅银幕', 25);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
