// ============================================================
// Coco Meat Market — catálogo semilla (US$)
// Versión 1 — build inicial, 21-sep-2026.
// Precios REAL = confirmados por el dueño. Los ítems "pending"
// muestran "Precio por confirmar" (nunca $0.00) y se venden
// como artículos a confirmar por teléfono.
// ============================================================

const CATALOG_VERSION = 1;

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
              price: 0,
              unit: "lb",
              image: "mar-y-tierra.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Camarones frescos — paquete de 2 lb. Precio a confirmar con la tienda.",
              active: true
            },
            {
              id: "colas-langosta",
              name: "Colas de langosta",
              price: 0,
              unit: "paquete",
              image: "mar-y-tierra.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Colas de langosta — 18 colas de 2–3 oz. Precio a confirmar con la tienda.",
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
              price: 0,
              unit: "pieza",
              image: "ribeye.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Ribeye premium sellado al vacío. Precio a confirmar con la tienda.",
              active: true
            },
            {
              id: "new-york",
              name: "New York",
              price: 0,
              unit: "pieza",
              image: "newyork.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "New York strip premium sellado al vacío. Precio a confirmar con la tienda.",
              active: true
            },
            {
              id: "punta-filete",
              name: "Punta de filete",
              price: 0,
              unit: "pieza",
              image: "punta-filete.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Punta de filete premium sellada al vacío. Precio a confirmar con la tienda.",
              active: true
            },
            {
              id: "chuck-steak",
              name: "Chuck steak",
              price: 0,
              unit: "pieza",
              image: "chuck.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Chuck steak premium sellado al vacío. Precio a confirmar con la tienda.",
              active: true
            },
            {
              id: "cowboy",
              name: "Cowboy",
              price: 0,
              unit: "pieza",
              image: "cowboy.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Cowboy steak con hueso, sellado al vacío. Precio a confirmar con la tienda.",
              active: true
            },
            {
              id: "tomahawk",
              name: "Tomahawk",
              price: 0,
              unit: "pieza",
              image: "tomahawk.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Tomahawk de hueso largo, sellado al vacío. Precio a confirmar con la tienda.",
              active: true
            },
            {
              id: "picanha",
              name: "Picanha",
              price: 0,
              unit: "pieza",
              image: "picanha.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Picanha premium sellada al vacío. Precio a confirmar con la tienda.",
              active: true
            }
          ]
        }
      ]
    },
    {
      id: "especiales-miercoles",
      name: "Especiales del Miércoles",
      icon: "📅",
      categories: [
        {
          id: "miercoles-todos",
          name: "Todo",
          items: [
            {
              id: "oferta-miercoles",
              name: "Ofertas de los miércoles — vuelven cada semana 🔥",
              price: 0,
              unit: "oferta",
              image: "",
              pending: true,
              note: "Sugerido",
              tag: "Sugerido",
              desc: "Cada miércoles, ofertas nuevas en la tienda. La oferta de esta semana se publica aquí — o llámanos al 786-371-3966.",
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
              price: 0,
              unit: "bolsa",
              image: "carbon-marabu.jpg",
              pending: true,
              note: "Precio por confirmar",
              desc: "Bolsa de 20 lb — white quebracho, 100% natural. “The World's Best Grilling Charcoal”. Precio a confirmar con la tienda.",
              active: true
            }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
