
DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `key` varchar(255) NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Dumping data for table `ordered_stones`
--

/*!40000 ALTER TABLE `ordered_stones` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'page-stock','SEARCH')
,(2,'stock-alert','Please login to access search feature on this site.'),(3,'stock-desc','Here are the products we offer');
/*!40000 ALTER TABLE `ordered_stones` ENABLE KEYS */;

