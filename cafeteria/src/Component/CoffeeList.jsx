import React from 'react';

const cafesDisponiveis = [
  { id: 1, nome: 'Espresso Tradicional', descricao: 'Um shot intenso de puro café.' },
  { id: 2, nome: 'Cappuccino Italiano', descricao: 'Espresso, leite vaporizado e uma generosa camada de espuma.' },
  { id: 3, nome: 'Café Latte', descricao: 'Uma dose de espresso com mais leite vaporizado e uma leve espuma.' },
  { id: 4, nome: 'Mocha', descricao: 'Uma deliciosa mistura de espresso, chocolate e leite vaporizado.' },
  { id: 5, nome: 'Café Filtrado (V60)', descricao: 'Um café suave e limpo, destacando as notas do grão selecionado.' }
];

export default function ListProd() {
  return (
    <section className="coffee-list-container">
      <h2>Nosso Cardápio Artesanal</h2>
      <ul className="coffee-list">
        {cafesDisponiveis.map((cafe) => (
          <li key={cafe.id} className="coffee-item">
            <strong>{cafe.nome}</strong>
            <p>{cafe.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}