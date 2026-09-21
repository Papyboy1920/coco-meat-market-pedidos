// ============================================================
// Coco Meat Market — catálogo semilla (US$)
// Versión 3 — Portal 21-sep-2026: 4 combos BBQ, desc destacada en modal.
//  - Todas las fotos: premium generadas estilo carnicería red/black.
//  - Sin "Precio por confirmar": todo tiene precio REAL o 💡 Sugerido.
//  - Nuevo: Combo Asado Clásico ($99 sugerido).
//  - Miércoles de Parrilla: 7 cortes con $10 OFF (sugerido).
// Precios REAL = confirmados por el dueño.
// ============================================================

const CATALOG_VERSION = 3;
const SUGERIDO = "💡 Sugerido";
const NOTA_SUGERIDO = "Precio sugerido — el dueño confirma";

const SEED_CATALOG = {
  departments: [
    {
      id: "combos-bbq",
      name: "Combos BBQ",
      icon: "🥩",
      categories: [
        {
          id: "combos-todos",
          name: "Todo",
          items: [
            {
              id: "super-combo-coco",
              name: "Súper Combo Coco",
              price: 180,
              unit: "combo",
              image: "super-combo.jpg",
              tag: "REAL",
              desc: "18–19 lb de carne premium: 2 churrascos, 2 ribeyes, 2 New York, 1 punta de filete, 2 chuck steaks y 1 cowboy. Recoger $180 · Delivery $195 (incluye $15 de cargo por delivery).",
              active: true
            },
            {
              id: "combo-asado-clasico",
              name: "Combo Asado Clásico",
              price: 99,
              unit: "combo",
              image: "combo-asado-clasico.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "1 picanha entera, 2 ribeyes, 2 New York y 1 pack de chorizo argentino. ~8–10 lb de pura parrilla. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "combo-parrilla-familiar",
              name: "Combo Parrilla Familiar",
              price: 139,
              unit: "combo",
              image: "combo-parrilla-familiar.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "2 churrascos, 2 cowboys, 1 punta de filete y 2 chuck steaks. ~12–14 lb para la familia completa. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "combo-asado-express",
              name: "Combo Asado Express",
              price: 69.99,
              unit: "combo",
              image: "combo-asado-express.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "1 churrasco, 1 picanha, 2 New York y 1 pack de chorizo argentino. ~6–7 lb — el asado rápido sin perder la calidad. Precio sugerido — el dueño confirma.",
              active: true
            }
          ]
        }
      ]
    },
    {
      id: "mar-y-tierra",
      name: "Mar y Tierra",
      icon: "🦐",
      categories: [
        {
          id: "myt-todos",
          name: "Todo",
          items: [
            {
              id: "combo-mar-y-tierra",
              name: "Combo Mar y Tierra",
              price: 165,
              unit: "combo",
              image: "mar-y-tierra.jpg",
              tag: "REAL",
              desc: "2 lb de camarones, 18 colas de langosta (2–3 oz c/u) y 2 chuck steaks. Lo mejor del mar y la parrilla en un solo combo.",
              active: true
            },
            {
              id: "camarones",
              name: "Camarones",
              price: 34.99,
              unit: "paquete 2 lb",
              image: "camarones.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Camarones frescos — paquete de 2 lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "colas-langosta",
              name: "Colas de langosta",
              price: 8.99,
              unit: "cola",
              image: "langosta.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Colas de langosta de 2–3 oz c/u — $8.99 por cola. Precio sugerido — el dueño confirma.",
              active: true
            }
          ]
        }
      ]
    },
    {
      id: "cortes-premium",
      name: "Cortes Premium",
      icon: "🔪",
      categories: [
        {
          id: "cortes-todos",
          name: "Todo",
          items: [
            {
              id: "churrasco",
              name: "Churrasco",
              price: 60,
              unit: "pieza",
              image: "churrasco.jpg",
              tag: "REAL",
              desc: "Churrasco premium — el corte insignia de la casa, sellado al vacío.",
              active: true
            },
            {
              id: "ribeye",
              name: "Ribeye",
              price: 26.99,
              unit: "lb",
              image: "ribeye.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Ribeye premium sellado al vacío — $26.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "new-york",
              name: "New York",
              price: 24.99,
              unit: "lb",
              image: "newyork.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "New York strip premium sellado al vacío — $24.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "punta-filete",
              name: "Punta de filete",
              price: 22.99,
              unit: "lb",
              image: "punta-filete.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Punta de filete premium sellada al vacío — $22.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "chuck-steak",
              name: "Chuck steak",
              price: 14.99,
              unit: "lb",
              image: "chuck.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Chuck steak premium sellado al vacío — $14.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "cowboy",
              name: "Cowboy",
              price: 29.99,
              unit: "lb",
              image: "cowboy.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Cowboy steak con hueso, sellado al vacío — $29.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "tomahawk",
              name: "Tomahawk",
              price: 32.99,
              unit: "lb",
              image: "tomahawk.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Tomahawk de hueso largo, sellado al vacío — $32.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "picanha",
              name: "Picanha",
              price: 21.99,
              unit: "lb",
              image: "picanha.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Picanha premium sellada al vacío — $21.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            }
          ]
        }
      ]
    },
    {
      id: "especiales-miercoles",
      name: "Miércoles de Parrilla — $10 OFF",
      icon: "📅",
      categories: [
        {
          id: "miercoles-todos",
          name: "Todo",
          items: [
            {
              id: "mier-churrasco",
              name: "Churrasco — Miércoles",
              price: 50,
              unit: "pieza",
              image: "churrasco.jpg",
              tag: "🔥 Miércoles: −$10",
              note: NOTA_SUGERIDO,
              desc: "💡 Sugerido. Regular $60 — miércoles $50. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "mier-ribeye",
              name: "Ribeye — Miércoles",
              price: 16.99,
              unit: "lb",
              image: "ribeye.jpg",
              tag: "🔥 Miércoles: −$10",
              note: NOTA_SUGERIDO,
              desc: "💡 Sugerido. Regular $26.99/lb — miércoles $16.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "mier-new-york",
              name: "New York — Miércoles",
              price: 14.99,
              unit: "lb",
              image: "newyork.jpg",
              tag: "🔥 Miércoles: −$10",
              note: NOTA_SUGERIDO,
              desc: "💡 Sugerido. Regular $24.99/lb — miércoles $14.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "mier-cowboy",
              name: "Cowboy — Miércoles",
              price: 19.99,
              unit: "lb",
              image: "cowboy.jpg",
              tag: "🔥 Miércoles: −$10",
              note: NOTA_SUGERIDO,
              desc: "💡 Sugerido. Regular $29.99/lb — miércoles $19.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "mier-tomahawk",
              name: "Tomahawk — Miércoles",
              price: 22.99,
              unit: "lb",
              image: "tomahawk.jpg",
              tag: "🔥 Miércoles: −$10",
              note: NOTA_SUGERIDO,
              desc: "💡 Sugerido. Regular $32.99/lb — miércoles $22.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "mier-picanha",
              name: "Picanha — Miércoles",
              price: 11.99,
              unit: "lb",
              image: "picanha.jpg",
              tag: "🔥 Miércoles: −$10",
              note: NOTA_SUGERIDO,
              desc: "💡 Sugerido. Regular $21.99/lb — miércoles $11.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            },
            {
              id: "mier-chuck",
              name: "Chuck steak — Miércoles",
              price: 4.99,
              unit: "lb",
              image: "chuck.jpg",
              tag: "🔥 Miércoles: −$10",
              note: NOTA_SUGERIDO,
              desc: "💡 Sugerido. Regular $14.99/lb — miércoles $4.99/lb. Precio sugerido — el dueño confirma.",
              active: true
            }
          ]
        }
      ]
    },
    {
      id: "accesorios-parrilla",
      name: "Accesorios de la Parrilla",
      icon: "🔥",
      categories: [
        {
          id: "accesorios-todos",
          name: "Todo",
          items: [
            {
              id: "carbon-marabu",
              name: "Carbón Marabú",
              price: 24.99,
              unit: "bolsa",
              image: "carbon-marabu.jpg",
              tag: SUGERIDO,
              note: NOTA_SUGERIDO,
              desc: "Bolsa de 20 lb — white quebracho, 100% natural. “The World's Best Grilling Charcoal”. Precio sugerido — el dueño confirma.",
              active: true
            }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
