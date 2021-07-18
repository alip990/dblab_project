-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: restaurant
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adonis_schema` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adonis_schema`
--

LOCK TABLES `adonis_schema` WRITE;
/*!40000 ALTER TABLE `adonis_schema` DISABLE KEYS */;
INSERT INTO `adonis_schema` VALUES (1,'1503248427885_user',1,'2021-05-26 08:53:39'),(2,'1503248427886_token',1,'2021-05-26 08:53:40'),(3,'1620758036278_food_schema',1,'2021-05-26 08:53:40'),(4,'1620758049533_food_image_schema',1,'2021-05-26 08:53:40'),(5,'1622105538404_order_schema',2,'2021-05-31 10:12:06'),(7,'1622452619312_order_details_schema',3,'2021-06-01 10:24:07');
/*!40000 ALTER TABLE `adonis_schema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_images`
--

DROP TABLE IF EXISTS `food_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_images` (
  `imageId` int unsigned NOT NULL AUTO_INCREMENT,
  `foodId` int NOT NULL,
  `path` varchar(600) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`imageId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_images`
--

LOCK TABLES `food_images` WRITE;
/*!40000 ALTER TABLE `food_images` DISABLE KEYS */;
INSERT INTO `food_images` VALUES (1,1,'1622019275847.png','2021-05-26 13:24:35','2021-05-26 13:24:35'),(2,2,'1622019355543.png','2021-05-26 13:25:55','2021-05-26 13:25:55'),(3,3,'1622019719825.png','2021-05-26 13:31:59','2021-05-26 13:31:59'),(4,4,'1622019766793.png','2021-05-26 13:32:46','2021-05-26 13:32:46'),(5,5,'1622019815483.png','2021-05-26 13:33:35','2021-05-26 13:33:35'),(6,6,'1622019857617.png','2021-05-26 13:34:17','2021-05-26 13:34:17'),(7,8,'1622051331680.png','2021-05-26 22:18:51','2021-05-26 22:18:51'),(8,9,'1622051563242.png','2021-05-26 22:22:43','2021-05-26 22:22:43'),(9,10,'1622051579053.png','2021-05-26 22:22:59','2021-05-26 22:22:59'),(10,11,'1622051608953.png','2021-05-26 22:23:28','2021-05-26 22:23:28'),(11,12,'1622051738768.png','2021-05-26 22:25:38','2021-05-26 22:25:38'),(12,30,'1623419627717.png','2021-06-11 18:23:47','2021-06-11 18:23:47'),(13,31,'1623473246164.png','2021-06-12 09:17:26','2021-06-12 09:17:26'),(14,32,'1623474312309.png','2021-06-12 09:35:12','2021-06-12 09:35:12'),(15,33,'1623759906241.png','2021-06-15 16:55:06','2021-06-15 16:55:06'),(16,34,'1623760303118.png','2021-06-15 17:01:43','2021-06-15 17:01:43');
/*!40000 ALTER TABLE `food_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foods`
--

DROP TABLE IF EXISTS `foods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foods` (
  `foodId` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `categoryName` varchar(255) NOT NULL,
  `description` text,
  `price` float(8,2) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`foodId`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foods`
--

LOCK TABLES `foods` WRITE;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;
INSERT INTO `foods` VALUES (1,' پیتزا ایتالیایی دو نفره ','پیتزا',' پیتزا دو نفره با شعاع ۵۰ سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی پیتزا دو نفره با شعاع ۵۰ سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی ',65000.00,'2021-05-26 13:24:35','2021-05-26 13:24:35'),(2,' پیتزا ایتالیایی دو نفره ','پیتزا',' پیتزا دو نفره با شعاع ۵۰ سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی ',550000.00,'2021-05-26 13:25:55','2021-05-26 13:25:55'),(3,' کباب بناب ساطوری ','کباب و جوجه',' پیتزا دو نفره با شعاع ۵۰ سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی پیتزا دو نفره با شعاع ۵۰ سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی ',320000.00,'2021-05-26 13:31:59','2021-05-26 13:31:59'),(4,' جوجه کباب ۲۵ گرمی ','کباب و جوجه',' پیتزا دو نفره با شعاع ۵۰ سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی پیتزا دو نفره با شعاع ۵۰ سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی ',450000.00,'2021-05-26 13:32:46','2021-05-26 13:32:46'),(5,' جوجه کباب ۱۸ گرمی ','کباب و جوجه',' پیتزا دو نفره با شعاع ۵۰  جوجه کباب ۱۸ گرمی  متر ۸ تیکه به همراه قارچ و لوازم جانبی پیتزا دو نفره با شعاع ۵۰ سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی ',890000.00,'2021-05-26 13:33:35','2021-05-26 13:33:35'),(6,' چلو کباب کوبیده ','کباب و جوجه',' پیتزا دو نفره با شعاع ۵۰  چلو کباب کوبیده  چلو کباب کوبیده سانتی متر ۸ تیکه به همراه قارچ و لوازم جانبی ',90000.00,'2021-05-26 13:34:17','2021-05-26 13:34:17'),(7,'sdsaf','asdf','asdf',123123.00,'2021-05-26 22:08:38','2021-05-26 22:08:38'),(8,'dsf','a','sdfdsf',123.00,'2021-05-26 22:18:51','2021-05-26 22:18:51'),(9,'asd','a','asdasd',123.00,'2021-05-26 22:22:43','2021-05-26 22:22:43'),(10,'asd','a','asdasd',123.00,'2021-05-26 22:22:58','2021-05-26 22:22:58'),(11,'asd','a','asdasd',123.00,'2021-05-26 22:23:28','2021-05-26 22:23:28'),(12,'asdas','asdas','asdasd',123123.00,'2021-05-26 22:25:38','2021-05-26 22:25:38'),(13,'ali','sasd','asdasd',123123.00,NULL,NULL),(14,'ali','sasd','asdasd',123123.00,NULL,NULL),(15,'ali','sasd','asdasd',123123.00,NULL,NULL),(16,'testsql','test','asdasd',123123.00,NULL,NULL),(17,'قرمه سبزی ','خورشت ','adlkflsksdlkj',12.00,NULL,NULL),(18,'aslkasd','sldkfns','asdasdasdasdasdasdasd',123123.00,'2021-06-11 16:25:59','2021-06-11 16:25:59'),(19,'sadfsdmf;adl','پیتزا','dsfsdmlfs dflsd fsd lf sdkf sdlkf ',123.00,'2021-06-11 16:26:59','2021-06-11 16:26:59'),(20,'sadfsdmf;adl','پیتزا','dsfsdmlfs dflsd fsd lf sdkf sdlkf ',123.00,'2021-06-11 16:29:02','2021-06-11 16:29:02'),(21,'سالاد','asdasd','asdasdasdasdasdasdasd',2.00,'2021-06-11 16:31:50','2021-06-11 16:31:50'),(22,'asdasd','asd','asdasdasdasdasdadsasdasdasd',123.00,'2021-06-11 18:09:51','2021-06-11 18:09:51'),(23,'asdasd','asd','asdasdasdasdasdadsasdasdasd',123.00,'2021-06-11 18:10:37','2021-06-11 18:10:37'),(24,'asdasd','asd','asdasdasdasdasdadsasdasdasd',123.00,'2021-06-11 18:12:00','2021-06-11 18:12:00'),(25,'asdasd','asd','asdasdasdasdasdadsasdasdasd',123.00,'2021-06-11 18:12:18','2021-06-11 18:12:18'),(26,'asdasd','asdasd','asdasdasdasd',123.00,'2021-06-11 18:12:41','2021-06-11 18:12:41'),(27,'asdasd','asdasd','asdasdasdasd',123.00,'2021-06-11 18:13:16','2021-06-11 18:13:16'),(28,'asdasd','asdasd','asdasdasdasd',123.00,'2021-06-11 18:14:00','2021-06-11 18:14:00'),(29,'ddddddddddddd','asdasdasd','asdasdasdasdasd',123.00,'2021-06-11 18:19:16','2021-06-11 18:19:16'),(30,'asdsd','asdas','asdasd',120.00,'2021-06-11 18:23:47','2021-06-11 18:23:47'),(31,'خورشت قیمنه','خورشت ','خورشت قیمه بادمجان ',12000.00,'2021-06-12 09:17:26','2021-06-12 09:17:26'),(32,'پیتزا ایرانی ','پیتزا','پیتزا خیلی خوشمزه با قارچ و پنیر ',120000.00,'2021-06-12 09:35:12','2021-06-12 09:35:12'),(33,'سالاد سزار','سالاد','مرغ گریل شده، پنیر پارمزان، زیتون ، کاهو، نان تست، سس سزار',50000.00,'2021-06-15 16:55:06','2021-06-15 16:55:06'),(34,'سالاد کلم','سالاد','سالاد کلم یک نفره ',200000.00,'2021-06-15 17:01:43','2021-06-15 17:01:43');
/*!40000 ALTER TABLE `foods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `food_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (40,5,30,2,1780000),(41,2,31,3,1650000),(42,32,31,5,600000),(43,32,32,1,120000),(44,2,32,1,550000),(45,2,33,1,550000),(46,1,33,1,65000),(47,3,33,1,320000),(48,32,34,1,120000),(49,2,34,1,550000),(50,32,35,3,360000),(52,32,36,4,480000),(53,4,36,3,1350000),(54,33,36,1,50000),(55,6,37,4,360000),(56,4,37,2,900000);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `OrderId` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `time_ordered` time DEFAULT NULL,
  `time_deliverd` time DEFAULT NULL,
  `status` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`OrderId`),
  KEY `orders_user_id_foreign` (`user_id`),
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (30,7,NULL,NULL,3,2460000,'2021-06-12 09:08:47','2021-06-12 09:08:47'),(31,7,NULL,NULL,1,2250000,'2021-06-12 09:20:35','2021-06-12 09:20:35'),(32,9,NULL,NULL,2,670000,'2021-06-12 22:01:02','2021-06-12 22:01:02'),(33,9,NULL,NULL,3,935000,'2021-06-12 22:01:15','2021-06-12 22:01:15'),(34,9,NULL,NULL,2,670000,'2021-06-12 22:01:30','2021-06-12 22:01:30'),(35,11,NULL,NULL,3,3920000,'2021-06-15 17:24:55','2021-06-15 17:24:55'),(36,11,NULL,NULL,2,1880000,'2021-07-18 21:08:57','2021-07-18 21:08:57'),(37,11,NULL,NULL,2,1260000,'2021-07-18 21:11:27','2021-07-18 21:11:27');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  KEY `tokens_token_index` (`token`),
  CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(60) NOT NULL,
  `address` varchar(400) DEFAULT NULL,
  `phone` varchar(13) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `isSuperAdmin` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ali','alirezaalami2949@gmail.com','$2a$10$DmD6jQ5mNv9G..bdUNu0SeFtdUqrMD44SlBR.jBt5FIju8rW4jPAO','aasdasd','09101123123',NULL,NULL,'2021-05-27 21:50:15','2021-05-27 21:50:15'),(2,'ads','a@a.com','$2a$10$9vBITUORPDAVWxseCbMe6eLAhN58h4ut5IGa0S2eZYJ9./51CwcC.','asdasd','091011123213',NULL,NULL,'2021-05-29 23:17:35','2021-05-29 23:17:35'),(4,'a1','a@b.com','$2a$10$sAfgix2UnDxKuPuMAg0ElepzugI5z4m5hmBNcHuakMDY7g3YvBFh.','asd','123123',NULL,NULL,'2021-06-01 12:03:28','2021-06-01 12:03:28'),(5,'alireza alami','sd@gmail.com','$2a$10$jwsk662GLCxXEKqvS21tJe7JrhhAb2i9xpwp0tvMtSSSSPO4ypbkO','ادرشسی شسیکبسنیمبنسیمبنش','23423432',NULL,NULL,'2021-06-02 12:02:55','2021-06-02 12:02:55'),(6,'aaadf','aaaa@a.vom','$2a$10$Kt4i5djmINQ1gpvu9RQz.OAJcAHH7ljYSz3eDrGMoXwYD5oWlaQiq','نسیبتستیبنتشیسب','009091230',NULL,NULL,'2021-06-02 15:03:46','2021-06-02 15:03:46'),(7,'alirezaalami','mohandes111190@yahoo.com','$2a$10$u8WqGyQDNU2SL69Z54OMYOUEcTssiXtR.JHqjbxw88tlVqtdgnpUW','asfdskfalsdf','09018122949',NULL,NULL,'2021-06-06 13:14:22','2021-06-06 13:14:22'),(8,'aadfsdf','asd@asd.com','$2a$10$s4xT01xlbrRUiSIrE1zlGOnnlHrWRxCJyM9z59xy5Ck.oZtEE.Fw6','dgfdsgersgergerg','0901123435345',NULL,NULL,'2021-06-06 14:40:13','2021-06-06 14:40:13'),(9,'mohamad','a@aaa.ir','$2a$10$6ujggEXCB9ZfKBJ6pbGJte5QnXjV5KdLj62yU9nKd.cA8mtbK6wjy','asdklflasndvjkasndvjkasndvjn','0901111111',NULL,NULL,'2021-06-10 10:32:19','2021-06-10 10:32:19'),(11,'علیرضا عالمی ','aa@aa.com','$2a$10$Pm46LSyYepQsx8kDMX/JjubnqxCkqgrWUYsob0Wb/sEWFfX99Uyre','کاشان ','09011212233',NULL,NULL,'2021-06-15 17:24:50','2021-06-15 17:24:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-19  1:12:51
