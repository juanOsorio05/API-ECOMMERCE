    -- insertar categorias datos en la tabla id_categoria,
nombre_categoria

INSERT INTO
    categorias (nombre_categoria)
VALUES
    ('Electronicos'),
    ('Ropa'),
    ('Hogar'),
    ('Juguetes'),
    ('Deportes');

    -- Insertar datos en la tabla de Marcas
INSERT INTO Marcas (nombre_marca, descripcion)
VALUES
    ('Honda'),
    ('Suzuki'),
    ('Yamaha'),
    ('Ducati'),
    ('Bajaj');

-- Insertar datos en la tabla de estados
INSERT INTO id_estado (nombre_estado)
VALUES
    ('Disponible'),
    ('Agotado');


-- Insertar datos en la tabla de productos
INSERT INTO productos (nombre, precio, categoria_id, descripcion)
VALUES
    ('Smartphone Android', 599.99, 100, 1, 1),
    ('Zapatillas Deportivas', 89.99, 200, 2, 2),
    ('Televisor LED 4K', 799.99, 50, 3, 1),
    ('Libro de Ciencia Ficción', 19.99, 300, 5, NULL),
    ('Cafetera Automática', 49.99, 30, 4, NULL);

INSERT INTO productos (nombre, precio, categoria_id, descripcion) VALUES
('Teléfono Inteligente', 499.99, 1, 'Teléfono móvil con pantalla táctil y funciones avanzadas.'),
('Camisa de Algodón', 29.99, 2, 'Camisa elegante para ocasiones especiales.'),
('Lámpara de Mesa', 39.99, 3, 'Lámpara LED para iluminación de ambientes.'),
('Balón de Fútbol', 19.99, 4, 'Balón oficial para partidos de fútbol.'),
('Set de Construcción', 24.99, 5, 'Juego de construcción para estimular la creatividad de los niños.');