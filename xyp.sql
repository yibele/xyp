/*
 Navicat Premium Data Transfer

 Source Server         : blog
 Source Server Type    : MySQL
 Source Server Version : 50505
 Source Host           : localhost
 Source Database       : xyp

 Target Server Type    : MySQL
 Target Server Version : 50505
 File Encoding         : utf-8

 Date: 06/19/2017 09:18:36 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `act_type`
-- ----------------------------
DROP TABLE IF EXISTS `act_type`;
CREATE TABLE `act_type` (
  `id` int(11) NOT NULL,
  `act_id` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `act_id` (`act_id`),
  KEY `type_id` (`type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `act_type`
-- ----------------------------
BEGIN;
INSERT INTO `act_type` VALUES ('1', '1', '1', null), ('2', '2', '1', null), ('3', '3', '1', null), ('4', '4', '2', null), ('5', '5', '2', null);
COMMIT;

-- ----------------------------
--  Table structure for `act_user`
-- ----------------------------
DROP TABLE IF EXISTS `act_user`;
CREATE TABLE `act_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `act_id` int(11) DEFAULT NULL,
  `nickName` varchar(64) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `act_id` (`act_id`) USING BTREE,
  KEY `user_id` (`nickName`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `act_user`
-- ----------------------------
BEGIN;
INSERT INTO `act_user` VALUES ('13', '2', 'yibele', null), ('14', '1', 'yibele', null), ('16', '1', 'naheya', null);
COMMIT;

-- ----------------------------
--  Table structure for `activity`
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `act_user` varchar(32) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `act_new_img` varchar(64) DEFAULT NULL,
  `act_title` varchar(64) DEFAULT NULL,
  `act_content` text,
  `act_location` varchar(64) DEFAULT NULL,
  `act_time` datetime DEFAULT NULL,
  `act_user_need` int(10) DEFAULT NULL,
  `act_wechat` varchar(64) DEFAULT NULL,
  `act_type` varchar(10) DEFAULT NULL,
  `act_review` int(11) DEFAULT '0',
  `act_have_done` int(11) DEFAULT '0',
  `act_enough_user` int(11) DEFAULT '0',
  `act_rule` varchar(256) DEFAULT NULL,
  `act_img` varchar(128) DEFAULT 'http://172.19.208.253/huwaihuodong.jpg',
  `act_title_logo` varchar(128) DEFAULT NULL,
  `act_title_hengfu` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `activity`
-- ----------------------------
BEGIN;
INSERT INTO `activity` VALUES ('1', '伊布格勒', '2017-06-11 00:00:00', null, '798广场狂欢', '798广场狂欢', '798广场', '2017-06-17 19:00:00', '12', 'yibele', '2', '0', '0', '7', '请参加的同学们准时到达！男生报名费20元互动经费，女生不需要', 'http://172.19.208.253/act_1.jpg', null, 'http://172.19.208.253/huodong1.jpg'), ('2', '娜荷芽', '2017-06-20 00:00:00', null, '798广场狂欢', '798广场狂欢', '798广场', '2017-06-17 19:00:00', '12', 'yibele', '2', '0', '0', '8', '请参加的同学们准时到达！男生需要带20元互动经费，女生不需要--id=2', 'http://172.19.208.253/act_2.jpg', null, 'http://172.19.208.253/huodong2.jpg'), ('3', '齐格勒', '2017-06-19 00:00:00', null, '798广场狂欢', '798广场狂欢', '798广场', '2017-06-17 19:00:00', '12', 'yibele', '2', '0', '0', '9', '请参加的同学们准时到达！男生需要带20元互动经费，女生不需要  id=3', 'http://172.19.208.253/act_3.jpg', null, 'http://172.19.208.253/huodong3.jpg'), ('4', '伊布格勒', '2017-06-17 00:00:00', null, '798广场狂欢', '798广场狂欢', '798广场', '2017-06-17 19:00:00', '12', 'yibele', '2', '0', '0', '1', '请参加的同学们准时到达！男生需要带20元互动经费，女生不需要 id=4', 'http://172.19.208.253/act_3.jpg', null, 'http://172.19.208.253/huodong3.jpg');
COMMIT;

-- ----------------------------
--  Table structure for `activity_type`
-- ----------------------------
DROP TABLE IF EXISTS `activity_type`;
CREATE TABLE `activity_type` (
  `id` int(10) NOT NULL,
  `act_id` int(10) DEFAULT NULL,
  `type` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='这里是查看首页现实的\n轮播需要的活动是 1\n热门活动是 2\n最新活动是 3\n即将完成是 4';

-- ----------------------------
--  Records of `activity_type`
-- ----------------------------
BEGIN;
INSERT INTO `activity_type` VALUES ('1', '1', '1'), ('2', '2', '1'), ('3', '3', '1'), ('4', '4', '2'), ('5', '5', '2');
COMMIT;

-- ----------------------------
--  Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `hot_act`
-- ----------------------------
DROP TABLE IF EXISTS `hot_act`;
CREATE TABLE `hot_act` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `act_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `hot_img` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `act_id` (`act_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `hot_act`
-- ----------------------------
BEGIN;
INSERT INTO `hot_act` VALUES ('1', '1', null, 'http://172.19.208.253/huodong1.jpg'), ('2', '2', null, 'http://172.19.208.253/huodong2.jpg'), ('3', '3', null, 'http://172.19.208.253/huodong3.jpg');
COMMIT;

-- ----------------------------
--  Table structure for `new_act`
-- ----------------------------
DROP TABLE IF EXISTS `new_act`;
CREATE TABLE `new_act` (
  `id` int(10) DEFAULT NULL,
  `act_id` int(10) DEFAULT NULL,
  `new_img` varchar(64) DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `new_act`
-- ----------------------------
BEGIN;
INSERT INTO `new_act` VALUES ('1', '4', 'http://172.19.208.253/paidui1.jpg', null), ('2', '3', 'http://172.19.208.253/paidui2.jpg', null);
COMMIT;

-- ----------------------------
--  Table structure for `type`
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `type`
-- ----------------------------
BEGIN;
INSERT INTO `type` VALUES ('1', '热门活动'), ('2', '即将完成'), ('3', '最新活动');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nickName` varchar(128) DEFAULT NULL,
  `openId` varchar(64) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `avatarUrl` varchar(128) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `country` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `language` varchar(16) DEFAULT NULL,
  `province` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `nickName` (`nickName`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('10', 'yibele', 'oLTUM0YACn2SR-fO0W1esjS5pix8', null, 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqcXWBAsibvRl9pcLGiabibQfA7aq3Q6Dic3f0OPZyONqxgZFznHUrTOo3iccDDcuybwJphrj6Qaq8URJg/0', 'Changping', 'CN', '1', null, 'Beijing');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
