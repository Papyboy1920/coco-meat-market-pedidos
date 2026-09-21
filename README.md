# 🥩 Coco Meat Market — Pedidos (demo)

Sistema de pedidos para **Coco Meat Market** (@coco_meat_market),
carnicería en Miami — hoy toma pedidos por teléfono/IG
(786-371-3966).

- App de clientes (`/`) — tema carnicería premium: rojo fuego/negro,
  dorado, logo real de Coco Meat Market, español, US$.
  **Recoger** (Kendall: 4251 SW 122 Ave · Eureka: 13650 SW 200th St)
  o **Delivery +$15** en todo Miami-Dade.
- Pantalla de tienda (`/tienda`) — fondo oscuro, protegida con `STORE_KEY`:
  pipeline pendiente_pago → nuevo → preparando → listo → entregado,
  sonido de pedido nuevo, editor de catálogo/precios, pestaña Historial
  (filtros por fecha y estado, conteo de pedidos, total de ingresos),
  Zelle configurable de la tienda.
- Interruptor del dueño (`/admin`) — protegido con `ADMIN_KEY`
  (clave privada de Portal, nunca se comparte).

## Flujo de pago (EE.UU.)

- **Efectivo** — el cliente paga al recibir/recoger. El pedido entra como `nuevo`.
- **Zelle** — pantalla de pre-pago con el handle de la tienda y botón
  "Ya envié el pago". El pedido entra como `pendiente_pago`; la tienda
  lo confirma con "Pago recibido" y solo entonces la cocina arranca.

## Precios por confirmar

Los ítems sin precio confirmado por el dueño (cortes premium, camarones,
colas de langosta, carbón) muestran **"Precio por confirmar"** — nunca
$0.00 — y se venden como artículos a confirmar por teléfono: no entran
al total del pedido.

## Desarrollo local

```bash
npm install
node server.js   # http://localhost:3000 (SQLite local: coco-meat-market.db)
```

## Despliegue

1. Repo en GitHub: `coco-meat-market-pedidos`.
2. En Render: New → Blueprint → conecta el repo (usa `render.yaml`).
   El Blueprint genera `STORE_KEY`; `ADMIN_KEY` se configura aparte en
   el dashboard (Environment) con el valor privado del dueño.
3. El health check es `/api/catalog`.
