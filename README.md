# TP-DSW
Gestion de Stock para tienda de indumentaria


## INTEGRANTES: 

* 47857 - Mozzi Feliciano

* 47858 - Grau Juan Bautista

* 48022 - Ayelen Aimar

## Repositorios
* [Frontend app](https://github.com/Mozzi02/Frontend)
* [Backend app](https://github.com/Mozzi02/Backend)

## TEMA: 

  Un negocio de indumentaria nos pidió que realicemos una página web para su gestión. Esta le permitirá a un empleado dar de alta, baja o modificar productos, gestionar su stock, registrar un cliente y registrar ventas.
  Además, un usuario administrador podrá dar de alta, baja o modificar empleados, dar de alta, baja o modificar proveedores, realizar pedidos a proveedores y también podrá realizar las funciones que puede realizar un empleado.
  El sistema deberá poder listar todos los componentes del negocio, permitir a los usuarios con acceso editarlos, añadir otros, o borrarlos.


## IMAGEN DEL MODELO:

![image](https://github.com/Mozzi02/TrabajoPractico-DSW-Grau-Mozzi-Aimar/assets/128518865/8d062f17-546a-40cc-b0c5-6ca3bd05aeb9)


https://drive.google.com/file/d/1m_fRjhLe9l6uyDgpRPfrgdzHzN00MFXC/view?usp=sharing 

## ALCANCE FUNCIONAL

### Alcance mínimo
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Proveedor<br>2. CRUD Rol<br>3. CRUD Tipo Producto |
|CRUD dependiente|1. CRUD Cliente {depende de} CRUD Categoría<br>2. CRUD Empleado {depende de} CRUD Rol|
|Listado<br>+<br>detalle| 1. Listado de los productos por descripcion.<br> 2. Listado de los proveedores por razon Social. <br>|
|CUU/Epic|1. Registrar una venta<br>2. Realizar un pedido / Gráfico de las ventas en el año corriente|

### Adicionales para aprobación directa

|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Empleados<br>2. CRUD Pedidos<br>3. CRUD Cliente<br>4. CRUD Venta<br>5. CRUD Productos<br>6. CRUD Proveedor<br>7. CRUD Linea de venta<br>8. CRUD Tipo producto<br>9. CRUD Rol|
|CUU/Epic|1. Registrar una venta<br>2. Realizar un pedido<br>3. Gráficos sobre las ventas en un período de tiempo|
