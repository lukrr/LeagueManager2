import React, { useEffect, useState } from "react";
import { General } from "../general/General";
import "./ranking.css";

export const Ranking = () => {
  const [datos, setDatos] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [sortedAsc, setSortedAsc] = useState(true);

  useEffect(() => {
    const userLoader = async () => {
      try {
        let respuestas = await fetch("../../src/assets/data/users.txt");
        let datos = await respuestas.json();
        // Ordenar los datos por ranking al cargar
        datos.sort((a, b) => a.ranking - b.ranking);

        // Calcular winrate para cada usuario
        datos.forEach(user => {
          const winrate = (user.victorias / (user.victorias + user.derrotas)) * 100;
          user.winrate = winrate;
        });

        setTotalUsers(datos.length);
        setDatos(datos);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    userLoader();
  }, []);

  useEffect(() => {
    setSortedData([...datos]); // Actualizar sortedData cada vez que cambien los datos
  }, [datos]);

  const OrdenarPorNombre = () => {
    const sorted = [...sortedData].sort((a, b) => a.nick.localeCompare(b.nick));
    setSortedData(sortedAsc ? sorted : sorted.reverse());
    setSortedAsc(!sortedAsc);
  };

  const OrdenarPorElo = () => {
    const sorted = [...sortedData].sort((a, b) => sortedAsc ? a.elo - b.elo : b.elo - a.elo);
    setSortedData(sorted);
    setSortedAsc(!sortedAsc);
  };

  const OrdenarPorPuesto = () => {
    const sorted = [...sortedData].sort((a, b) => sortedAsc ? a.ranking - b.ranking : b.ranking - a.ranking);
    setSortedData(sorted);
    setSortedAsc(!sortedAsc);
  };

  const OrdenarPorRacha = () => {
    const sorted = [...sortedData].sort((a, b) => sortedAsc ? a.racha - b.racha : b.racha - a.racha);
    setSortedData(sorted);
    setSortedAsc(!sortedAsc);
  };

  const OrdenarPorVictorias = () => {
    const sorted = [...sortedData].sort((a, b) => sortedAsc ? a.victorias - b.victorias : b.victorias - a.victorias);
    setSortedData(sorted);
    setSortedAsc(!sortedAsc);
  };

  const OrdenarPorDerrotas = () => {
    const sorted = [...sortedData].sort((a, b) => sortedAsc ? a.derrotas - b.derrotas : b.derrotas - a.derrotas);
    setSortedData(sorted);
    setSortedAsc(!sortedAsc);
  };

  const OrdenarPorWinrate = () => {
    const sorted = [...sortedData].sort((a, b) => {
      // Obtener la cantidad de partidas de a y b
      const aTotalGames = a.victorias + a.derrotas;
      const bTotalGames = b.victorias + b.derrotas;

      // Si a tiene menos de 10 partidas, asignar un valor especial bajo
      const aWinrate = aTotalGames < 10 ? -1 : a.winrate;
      // Si b tiene menos de 10 partidas, asignar un valor especial bajo
      const bWinrate = bTotalGames < 10 ? -1 : b.winrate;

      // Si ambos tienen menos de 10 partidas, ordenar por cantidad de partidas
      if (aTotalGames < 10 && bTotalGames < 10) {
        return sortedAsc ? aTotalGames - bTotalGames : bTotalGames - aTotalGames;
      }

      // Ordenar por winrate
      return sortedAsc ? aWinrate - bWinrate : bWinrate - aWinrate;
    });

    setSortedData(sorted);
    setSortedAsc(!sortedAsc);
  };


  return (
    <>
      <General />
      <div className="ranking-containers">
        <section className="ranking-container-unique">
          <article className="ranking-container-nick-unique article-unique" onClick={OrdenarPorNombre}>
            <h3 className="ranking-h3-unique">Nombre</h3>
          </article>
          <article className="ranking-container-elo-unique article-unique" onClick={OrdenarPorElo}>
            <h3 className="ranking-h3-unique">Elo</h3>
          </article>
          <article className="ranking-container-puesto-unique article-unique" onClick={OrdenarPorPuesto}>
            <h3 className="ranking-h3-unique">Puesto</h3>
          </article>
          <article className="ranking-container-racha-unique article-unique" onClick={OrdenarPorRacha}>
            <h3 className="ranking-h3-unique">Racha</h3>
          </article>
          <article className="ranking-container-victorias-unique article-unique" onClick={OrdenarPorVictorias}>
            <h3 className="ranking-h3-unique">Victorias</h3>
          </article>
          <article className="ranking-container-derrotas-unique article-unique" onClick={OrdenarPorDerrotas}>
            <h3 className="ranking-h3-unique">Derrotas</h3>
          </article>
          <article className="ranking-container-winrate-unique article-unique" onClick={OrdenarPorWinrate}>
            <h3 className="ranking-h3-unique">Winrate</h3>
          </article>
        </section>

        {loading ? <div className="ranking-loading"></div> : null}

        {sortedData.map((user, index) => {
          const totalGames = user.victorias + user.derrotas;

          return (
            <section className="ranking-container" key={index}>
              <article className="ranking-container-nick article">
                <h3 className="ranking-h3">
                  {user.ranking === 1 && <img className="ranking-img-puesto1" src="../../src/assets/img/08-puesto1.png" alt="Puesto1" />}
                  {user.ranking === 2 && <img className="ranking-img-puesto2" src="../../src/assets/img/09-puesto2.png" alt="Puesto2" />}
                  {user.ranking === 3 && <img className="ranking-img-puesto3" src="../../src/assets/img/10-puesto3.png" alt="Puesto3" />}
                  {user.nick.split('#')[0]}
                </h3>
              </article>
              <article className="ranking-container-elo article">
                <h3 className="ranking-h3">{user.elo}</h3>
              </article>
              <article className="ranking-container-puesto article">
                <h3 className="ranking-h3">{user.ranking}/{totalUsers}</h3>
              </article>
              <article className="ranking-container-racha article">
                <h3 className="ranking-h3" style={{ color: user.racha <= -3 ? '#e4595a' : user.racha >= 3 ? '#69d765' : '#ddd' }}>
                  {user.racha}
                </h3>
              </article>
              <article className="ranking-container-victorias article">
                <h3 className="ranking-h3 ranking-h3-victorias">{user.victorias}</h3>
              </article>
              <article className="ranking-container-derrotas article">
                <h3 className="ranking-h3 ranking-h3-derrotas">{user.derrotas}</h3>
              </article>
              <article className="ranking-container-winrate article">
                {totalGames <= 9 ? <h3 className="ranking-h3-pocosgames">{totalGames}/10 games</h3> :
                  <h3 className="ranking-h3" style={{ color: user.winrate <= 49 ? '#e4595a' : user.winrate === 50 ? '#e3f15b' : '#69d765' }}>
                    {user.winrate.toFixed(2) + "%"}
                  </h3>}
              </article>
            </section>
          );
        })}
      </div>
    </>
  );
};
