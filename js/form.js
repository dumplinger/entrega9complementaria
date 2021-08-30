const recetas = [
    { id: 1,  nombre: "Guacamole", ingredientes: ["palta", "cebolla", "tomate", "limon"], ingredientesOpcionales: ["merken", "pimienta"], vegano: true, tiempo: 5, tipoDeComida: "snack" },
    { id: 2,  nombre: "Pasta Caprese", ingredientes: ["fideos", "tomate", "albahaca", "queso", "aceite"], vegano: true, tiempo: 30, tipoDeComida: "almuerzo/cena"},
    { id: 3,  nombre: "Wrap de verduras", ingredientes: ["tortilla", "queso", "cebolla", "tomate"], ingredientesOpcionales: ["morron", "berenjena", "garbanzos"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena"},
    { id: 4,  nombre: "Sandwich Margarita", ingredientes: ["pan", "queso", "salsa de tomate", "albahaca", "manteca"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena"},
    { id: 5,  nombre: "Omelette Rapidito", ingredientes: ["huevo", "queso", "leche", "aceite"], ingredientesOpcionales: ["arvejas", "jamon veg", "albahaca", "tomate"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena"},
    { id: 6,  nombre: "Garbanzos Crunchy", ingredientes: ["garbanzos", "aceite"], ingredientesOpcionales: ["pimenton", "ajíl", "curry"], vegano: true, tiempo: 30, tipoDeComida: "snack"},
    { id: 7,  nombre: "Chop Suey", ingredientes: ["fideos", "cebolla", "morron", "salsa de soja"], ingredientesOpcionales: ["berenjena", "ajo", "albahaca"], vegano: true, tiempo: 30, tipoDeComida:  "almuerzo/cena"},
    { id: 8,  nombre: "Huevitos Revueltos", ingredientes: ["huevo", "aceite", "pan"], ingredientesOpcionales: ["queso", "cibulette", "albahaca", "pimienta"], vegano: false, tiempo: 5, tipoDeComida: "desayuno/merienda"},
    { id: 9,  nombre: "Panqueques de Banana Fast and Furious", ingredientes: ["banana", "avena"], ingredientesOpcionales: ["miel", "mermelada"], vegano: true, tiempo: 5, tipoDeComida: "desayuno/merienda"},
    { id: 10,  nombre: "Panqueques Domingueros", ingredientes: ["banana", "avena", "huevo", "leche", "harina", "azucar", "polvo de hornear"], ingredientesOpcionales: ["miel", "mermelada", "canela", "maple syrup"], vegano: false, tiempo: 30, tipoDeComida: "desayuno/merienda"},
    { id: 11,  nombre: "Overnight Oats", ingredientes: ["avena", "leche", "miel", "vainilla"], ingredientesOpcionales: ["miel", "mermelada", "canela", "maple syrup"], vegano: true, tiempo: 30, tipoDeComida: "desayuno/merienda"},
    { id: 12,  nombre: "Barritas de avena", ingredientes: ["avena", "miel", "manteca de mani", "canela"], ingredientesOpcionales: ["chocolate"], vegano: true, tiempo: 30, tipoDeComida: "desayuno/merienda"},
]

  let result = recetas.map(a => a.nombre);
  console.log(result)

    
    for (let element of result) {
        document.body.onload = addElement;
        function addElement () {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(element);
        newDiv.appendChild(newContent); //añade texto al div creado.
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
      }

      result.forEach(element => addElement(element));
    
  

  }

