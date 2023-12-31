CREATE DATABASE  IF NOT EXISTS `sistema_ventas_dsw` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sistema_ventas_dsw`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sistema_ventas_dsw
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id_categoria` int unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Minorista'),(2,'Mayorista');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id_cliente` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `cuit` varchar(255) NOT NULL,
  `categoria_id_categoria` int unsigned NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `cliente_cuit_unique` (`cuit`),
  KEY `cliente_categoria_id_categoria_index` (`categoria_id_categoria`),
  CONSTRAINT `cliente_categoria_id_categoria_foreign` FOREIGN KEY (`categoria_id_categoria`) REFERENCES `categoria` (`id_categoria`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (7,'John','Doe','341 1111111','johndoe@gmail.com','Salta 1500','111',1),(8,'Armando','Banquitos','341 2222222','armandobanquitos@gmail.com','Mitre 3000','222',2),(9,'Armando','Paredes','341 3333333','armandoparedes@gmail.com','Tucuman 2000','333',1),(10,'Aquiles','Bailo','341 4444444','aquilesbailo@gmail.com','Urquiza 1750','444',2),(11,'Aquiles','Canto','341 5555555','aquilescanto@gmail.com','Rioja 3000','555',1),(12,'Benito','Camela','341 6666666','benitocamela@gmail.com','Moreno 750','666',2);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `id_empleado` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `dni` varchar(255) NOT NULL,
  `rol_id_rol` int unsigned NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id_empleado`),
  UNIQUE KEY `empleado_dni_unique` (`dni`),
  KEY `empleado_rol_id_rol_index` (`rol_id_rol`),
  CONSTRAINT `empleado_rol_id_rol_foreign` FOREIGN KEY (`rol_id_rol`) REFERENCES `rol` (`id_rol`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'Juan Bautista','Grau','3329630374','graujb@gmail.com','Mendoza 3456','44555666',1,'123456'),(3,'Feliciano','Mozzi','3329405244','felicianomozzi02@gmail.com','Moreno 1358','44114394',1,'123456'),(4,'Ayelen','Aimar','3401531527','ayeaimar@gmail.com','Rioja 1234','43214321',1,'123456'),(5,'Claudio','Mozzi','3329581427','claudiomozzi@gmail.com','Saavedra 473','16301960',2,'123456'),(6,'Sergio Rubén','Rochetti','3329151515','sergiorochetti@gmail.com','Castro 1145','16444185',2,'123456');
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linea_de_venta`
--

DROP TABLE IF EXISTS `linea_de_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linea_de_venta` (
  `id_linea_venta` int unsigned NOT NULL AUTO_INCREMENT,
  `cantidad` int unsigned NOT NULL,
  `producto_id_producto` int unsigned NOT NULL,
  `venta_id_venta` int unsigned NOT NULL,
  PRIMARY KEY (`id_linea_venta`),
  KEY `linea_de_venta_producto_id_producto_index` (`producto_id_producto`),
  KEY `linea_de_venta_venta_id_venta_index` (`venta_id_venta`),
  CONSTRAINT `linea_de_venta_producto_id_producto_foreign` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto` (`id_producto`) ON UPDATE CASCADE,
  CONSTRAINT `linea_de_venta_venta_id_venta_foreign` FOREIGN KEY (`venta_id_venta`) REFERENCES `venta` (`id_venta`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linea_de_venta`
--

LOCK TABLES `linea_de_venta` WRITE;
/*!40000 ALTER TABLE `linea_de_venta` DISABLE KEYS */;
INSERT INTO `linea_de_venta` VALUES (1,2,6,1),(2,4,6,2),(3,1,6,3),(4,1,4,2),(5,5,4,3),(6,7,2,1),(7,1,1,4),(8,1,2,4),(9,1,5,4),(10,1,8,4),(11,1,1,5),(12,1,2,5),(13,1,3,5),(14,1,3,6),(15,4,5,6),(16,2,1,7),(17,1,1,8);
/*!40000 ALTER TABLE `linea_de_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id_pedido` int unsigned NOT NULL AUTO_INCREMENT,
  `fecha_pedido` datetime NOT NULL,
  `cantidad` int unsigned NOT NULL,
  `proveedor_id_proveedor` int unsigned NOT NULL,
  `empleado_id_empleado` int unsigned NOT NULL,
  `producto_id_producto` int unsigned NOT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `pedido_proveedor_id_proveedor_index` (`proveedor_id_proveedor`),
  KEY `pedido_empleado_id_empleado_index` (`empleado_id_empleado`),
  KEY `pedido_producto_id_producto_index` (`producto_id_producto`),
  CONSTRAINT `pedido_empleado_id_empleado_foreign` FOREIGN KEY (`empleado_id_empleado`) REFERENCES `empleado` (`id_empleado`) ON UPDATE CASCADE,
  CONSTRAINT `pedido_producto_id_producto_foreign` FOREIGN KEY (`producto_id_producto`) REFERENCES `producto` (`id_producto`) ON UPDATE CASCADE,
  CONSTRAINT `pedido_proveedor_id_proveedor_foreign` FOREIGN KEY (`proveedor_id_proveedor`) REFERENCES `proveedor` (`id_proveedor`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (6,'2023-04-11 00:00:00',1,1,1,1),(7,'2023-04-15 00:00:00',4,1,3,2),(8,'2023-06-12 00:00:00',3,5,4,3),(9,'2023-06-15 00:00:00',3,4,1,4),(10,'2023-07-18 00:00:00',6,2,3,5),(11,'2023-12-06 23:55:41',8,3,3,7);
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id_producto` int unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `precio` int unsigned NOT NULL,
  `tipo_producto_id_tipo` int unsigned NOT NULL,
  `stock` int unsigned NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `producto_tipo_producto_id_tipo_index` (`tipo_producto_id_tipo`),
  CONSTRAINT `producto_tipo_producto_id_tipo_foreign` FOREIGN KEY (`tipo_producto_id_tipo`) REFERENCES `tipo_producto` (`id_tipo`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Campera Carmela Jean',49250,1,10,'https://acdn.mitiendanube.com/stores/002/038/548/products/ac73e644-c71e-4ded-8645-3a604bf31071-587174e9e6b529f7ff16474526427284-640-0.jpeg'),(2,'Campera Malaika',35000,1,10,'https://acdn.mitiendanube.com/stores/002/038/548/products/53ccce25-6f41-4b1e-ba75-7a11b190c264-f7d1cd94eff3c038db16449445677288-320-0.jpeg'),(3,'Gorrito Dublin Negro',6200,2,10,'https://acdn.mitiendanube.com/stores/002/038/548/products/b57316f7-af4d-403f-b433-2c907d3f7bbb-60c8f6bdc4a20d358f16538532292346-320-0.jpeg'),(4,'Gorrito Dublin Blanco',6200,2,10,'https://acdn.mitiendanube.com/stores/002/038/548/products/img_96931-90afe093f30536b4b216814962024518-320-0.webp'),(5,'Texanas Not Joseph',39000,3,10,'https://acdn.mitiendanube.com/stores/002/038/548/products/img_50251-465fae6e300387be9016819211074570-320-0.webp'),(6,'Texanas Valentina Mazzi',41500,3,10,'https://acdn.mitiendanube.com/stores/002/038/548/products/img_51351-30c7555ef0e561592a16927413544056-320-0.webp'),(7,'Mom Zaira',25500,4,10,'https://acdn.mitiendanube.com/stores/002/038/548/products/img_1046_jpg1-05ece270132c022f3416886063761656-320-0.webp'),(8,'Mom Canario Desplumado Negro',21900,4,9,'https://acdn.mitiendanube.com/stores/002/038/548/products/005e64c9-cf0e-4c84-82da-b3f75dcbbf141-7ace1c3c73276103e916776099711641-320-0.webp');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedor` (
  `id_proveedor` int unsigned NOT NULL AUTO_INCREMENT,
  `cuit` varchar(255) NOT NULL,
  `razon_social` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id_proveedor`),
  UNIQUE KEY `proveedor_cuit_unique` (`cuit`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES (1,'111','Tráigame Eso','341 1212121','traigameeso@gmail.com'),(2,'222','Buenos Amigos','341 2323232','buenosamigos@gmail.com'),(3,'333','Zara','341 3434343','zara@gmail.com'),(4,'444','Cardon','341 4545454','cardon@gmail.com'),(5,'555','Kingston','341 5656565','Kingston@gmail.com'),(6,'666','A todo moda','341 6767676','atodomoda@gmail.com');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id_rol` int unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Administrador'),(2,'Empleado');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_producto`
--

DROP TABLE IF EXISTS `tipo_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_producto` (
  `id_tipo` int unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_producto`
--

LOCK TABLES `tipo_producto` WRITE;
/*!40000 ALTER TABLE `tipo_producto` DISABLE KEYS */;
INSERT INTO `tipo_producto` VALUES (1,'Camperas'),(2,'Gorros'),(3,'Calzados'),(4,'Pantalones');
/*!40000 ALTER TABLE `tipo_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `id_venta` int unsigned NOT NULL AUTO_INCREMENT,
  `fecha_venta` datetime NOT NULL,
  `cliente_id_cliente` int unsigned NOT NULL,
  `empleado_id_empleado` int unsigned NOT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `venta_cliente_id_cliente_index` (`cliente_id_cliente`),
  KEY `venta_empleado_id_empleado_index` (`empleado_id_empleado`),
  CONSTRAINT `venta_cliente_id_cliente_foreign` FOREIGN KEY (`cliente_id_cliente`) REFERENCES `cliente` (`id_cliente`) ON UPDATE CASCADE,
  CONSTRAINT `venta_empleado_id_empleado_foreign` FOREIGN KEY (`empleado_id_empleado`) REFERENCES `empleado` (`id_empleado`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES (1,'2023-05-15 00:00:00',7,1),(2,'2023-05-15 00:00:00',8,1),(3,'2023-05-17 00:00:00',8,5),(4,'2023-12-06 16:51:40',7,3),(5,'2023-12-06 17:06:45',7,6),(6,'2023-12-06 17:07:21',7,3),(7,'2023-12-06 23:40:05',7,3),(8,'2023-12-07 16:16:37',11,4);
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'sistema_ventas_dsw'
--

--
-- Dumping routines for database 'sistema_ventas_dsw'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-07 16:56:55
