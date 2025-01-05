CREATE TABLE `Product` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50),
  `price` DECIMAL(12,2),
  PRIMARY KEY (`id`)
);
INSERT INTO `Product` (`name`, `price`) VALUES ('Camiseta', 100);
INSERT INTO `Product` (`name`, `price`) VALUES ('Moletom', 300);
INSERT INTO `Product` (`name`, `price`) VALUES ('Jaqueta', 500);